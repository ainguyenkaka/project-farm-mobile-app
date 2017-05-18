import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderDetailPage } from "../../pages/order-detail/order-detail";
@Component({
  selector: 'order-list',
  templateUrl: 'order-list.html'
})
export class OrderListComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    this.text = 'Hello World';
  }

  clickItem(item) {
    this.navCtrl.push(OrderDetailPage, {
      item: item
    });
  }
}
