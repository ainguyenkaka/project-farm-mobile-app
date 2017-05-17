import { Component } from '@angular/core';

/**
 * Generated class for the ServiceRegistryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'service-registry',
  templateUrl: 'service-registry.html'
})
export class ServiceRegistryComponent {

  title: string;

  constructor() {
    this.title = 'Hello World';
  }

}
