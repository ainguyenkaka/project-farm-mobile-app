import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationDetailPage } from '../../pages/notification-detail/notification-detail';
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
  choices: Array<string>;
  choice: string;

  constructor(public navCtrl: NavController) {
    this.title = 'Hello World';
    this.choices = ["customInfo", "serviceInfo", "verification"];
    this.choice = this.choices[0];
  }

  clickNext(index) {
    this.choice = this.choices[index + 1];
  }

  saveOrder(item) {
    
    this.navCtrl.push(NotificationDetailPage, {
      item: item
    });
  }
}
