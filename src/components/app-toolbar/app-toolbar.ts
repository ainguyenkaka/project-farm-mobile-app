import { Component ,Input} from '@angular/core';

/**
 * Generated class for the AppToolbarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'app-toolbar.html'
})
export class AppToolbarComponent {

  @Input() title: string;

  constructor() {
    this.title = 'Hello World';
  }

}
