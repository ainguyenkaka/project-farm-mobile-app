import { Component } from '@angular/core';

/**
 * Generated class for the ProductListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
