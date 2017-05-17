import { Component } from '@angular/core';

/**
 * Generated class for the ServiceInfoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'service-info',
  templateUrl: 'service-info.html'
})
export class ServiceInfoComponent {

  title: string;
  choice: string;

  constructor() {
    this.title = 'Hello World';
    this.choice = 'basic';
  }

}
