import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { OrderServiceProvider } from "../../providers/order-service/order-service";

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

  order: any;
  orderProducts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dialogs: Dialogs, private orderService: OrderServiceProvider) {

    this.loadParams(navParams);
  }

  ionViewDidLoad() {

  }

  loadParams(params) {
    let item = params.get('item');
    if (item != null)
      this.order = item;

    let products = params.get('products');
    if (products != null)
      this.orderProducts = products;
  }

  cancelOrder() {
    // this.dialogs.confirm("Bạn có chắc muốn huỷ yêu cầu này ?", "Huỷ yêu cầu", ["Bỏ qua", "Đồng ý"])
    //   .then((result) => {
    //     this.hanldeResult(result);
    //   });
  }

  hanldeResult(result) {
    switch (result) {
      case 0:

        break;
      case 1:
        this.orderService.deleteOrder(this.order.id);
        break;
      default:
        break;
    }
  }
}
