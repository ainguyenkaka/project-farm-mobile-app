import { Component } from '@angular/core';

/**
 * Generated class for the CustomerInfoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'customer-info',
  templateUrl: 'customer-info.html'
})
export class CustomerInfoComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
