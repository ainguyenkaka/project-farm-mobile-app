import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PackageServiceProvider } from "../../providers/package-service/package-service";

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  choice: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private packageService: PackageServiceProvider) {
    this.loadData();
  }

  ionViewDidLoad() {
    this.loadParams();
  }

  isOrderRandom() {
    return this.packageService.isOrderRandom();
  }

  loadData() {
    this.choice = 'productList';
  }

  loadParams() {
    let tab = this.navParams.get('tab');
    if (tab)
      this.choice = tab;
  }


}
