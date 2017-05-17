import { Component } from '@angular/core';

/**
 * Generated class for the DeliveryInfoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'delivery-info',
  templateUrl: 'delivery-info.html'
})
export class DeliveryInfoComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
