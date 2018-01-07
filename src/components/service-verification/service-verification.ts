import { Component, Input } from '@angular/core';
import { ConverterServiceProvider } from "../../providers/converter-service/converter-service";
import { LocationServiceProvider } from "../../providers/location-service/location-service";

@Component({
  selector: 'service-verification',
  templateUrl: 'service-verification.html'
})
export class ServiceVerificationComponent {

  @Input() customInfo: any;
  @Input() serviceInfo: any;

  price: number;
  advancedLocationPrice: number;
  advancedProductPrice: number;
  advancedDeliveryPrice: number;

  constructor(private convertService: ConverterServiceProvider, private locationService: LocationServiceProvider) {
    this.price = 20000;
    this.advancedLocationPrice = 25000;
    this.advancedProductPrice = 0.2;
    this.advancedDeliveryPrice = 0.1;
  }

  caculateTotalKilogram() {
    var totalKilogram = this.customInfo.members * this.serviceInfo.beforeMonth * (100 / 12) / 2;
    totalKilogram = this.convertService.roundHalf(totalKilogram);
    this.serviceInfo.totalKilogram = totalKilogram;
    return totalKilogram;
  }

  caculateTotalPrice() {
    var total = 0;
    if (this.serviceInfo.category == 'basic')
      total = this.priceOfBasic();
    else
      total = this.priceOfAdvance();

    this.serviceInfo.totalPrice = total;
    return total;
  }

  caculateKilogramPerTime() {
    var totalKilogram = this.caculateTotalKilogram();
    var times = this.calculateTotalTimes();
    var kilogramPerTime = totalKilogram / times;
    kilogramPerTime = this.convertService.roundHalf(kilogramPerTime);
    this.serviceInfo.kilogramPerTime = kilogramPerTime;
    return kilogramPerTime;
  }

  calculateTotalTimes(){
    return this.serviceInfo.days.length * 4 * this.serviceInfo.beforeMonth;
  }

  priceOfBasic() {
    var kilogramPerTime = this.caculateKilogramPerTime();
    return kilogramPerTime * 4 * this.price;
  }

  priceOfAdvance() {
    var totalKilogram = this.caculateTotalKilogram();
    let basicPrice = totalKilogram * this.price;
    let deliveryPrice = (basicPrice * this.advancedDeliveryPrice) * (this.serviceInfo.days.length - 1);
    var productPrice = 0;
    if(this.serviceInfo.orderType == 'custom')
    productPrice = (basicPrice * this.advancedProductPrice);
    // reduce price per month (3 month = 5%)
    let reducingMonthPrice = basicPrice * (this.serviceInfo.beforeMonth / 3 * 5 / 100);
    // free for basic location
    var locationPrice = 0;
    if (!this.locationService.isFreeLocation(this.customInfo.street))
      locationPrice = this.advancedLocationPrice * this.calculateTotalTimes();
    return basicPrice + deliveryPrice + locationPrice + productPrice - reducingMonthPrice;
  }

}
