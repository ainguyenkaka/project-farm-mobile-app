import { Component, Input } from '@angular/core';
import { LocationServiceProvider } from "../../providers/location-service/location-service";
@Component({
  selector: 'delivery-info',
  templateUrl: 'delivery-info.html'
})
export class DeliveryInfoComponent {

  @Input() customInfo: any;
  @Input() serviceInfo: any;

  basicAddresses: Array<string>;

  constructor(private locationService: LocationServiceProvider) {
    this.loadData();
  }

  loadData() {
    this.basicAddresses = this.locationService.getBasicLocations();
  }

  isFreeLocation() {
    return this.locationService.isFreeLocation(this.customInfo.street);
  }
  isBasic() {
    return this.serviceInfo.category == 'basic';
  }

}
