import { Component } from '@angular/core';

/**
 * Generated class for the RegistryToolbarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'registry-toolbar',
  templateUrl: 'registry-toolbar.html'
})
export class RegistryToolbarComponent {

  text: string;
  choice: string;

  constructor() {
    console.log('Hello RegistryToolbarComponent Component');
    this.text = 'Hello World';
    this.choice = 'customInfo'
  }

}
