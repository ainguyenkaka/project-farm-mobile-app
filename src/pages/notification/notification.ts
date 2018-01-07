import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationDetailPage } from '../notification-detail/notification-detail';
import { NotificationServiceProvider } from "../../providers/notification-service/notification-service";

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {
  
  notifications: any;

  constructor(public navCtrl: NavController, private notificationService: NotificationServiceProvider) {
    this.loadData();
  }

  loadData() {
    this.notifications = this.notificationService.getNotifications();
  }

  clickItem(item) {
    this.navCtrl.push(NotificationDetailPage, {
      item: item
    });
  }
}
