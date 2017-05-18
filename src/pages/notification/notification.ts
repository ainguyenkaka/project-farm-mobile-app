import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationDetailPage } from '../notification-detail/notification-detail';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {
  
  constructor(public navCtrl: NavController) {
    
  }

  clickItem(item) {
    this.navCtrl.push(NotificationDetailPage, {
      item: item
    });
  }
}
