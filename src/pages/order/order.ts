import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  choice: string;

  constructor(public navCtrl: NavController) {
      this.choice = 'productList';
  }

}
