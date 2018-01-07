import { Component, ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';

import { OrderPage } from '../order/order';
import { NotificationPage } from '../notification/notification';
import { HomePage } from '../home/home';
import { PersonalPage } from "../personal/personal";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  orderTab = OrderPage;
  notificationTab = NotificationPage;
  personalTab = PersonalPage;

  @ViewChild('myTabs') tabRef: Tabs;

  constructor() {

  }

  ionViewDidEnter() {
    // this.tabRef.select(1);
  }
  
  
  public navigateNotification() {
    this.tabRef.select(2);
  }
}
