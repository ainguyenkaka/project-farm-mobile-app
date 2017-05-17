import { Component } from '@angular/core';

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

  constructor() {

  }
}
