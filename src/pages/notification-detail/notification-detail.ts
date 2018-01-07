import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderPage } from "../order/order";

@IonicPage()
@Component({
  selector: 'page-notification-detail',
  templateUrl: 'notification-detail.html',
})
export class NotificationDetailPage {

  notification: any;
  orderTab: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadParams(navParams);
  }

  ionViewDidLoad() {

  }

  goToOrderPage() {
    this.navCtrl.push(OrderPage,{
      tab : this.orderTab
    });
  }

  loadParams(params) {
    let item = params.get('item');
    if (item != null)
      this.notification = item;

    let tab = params.get('tab');
    if (tab != null)
      this.orderTab = tab;
  }



}
