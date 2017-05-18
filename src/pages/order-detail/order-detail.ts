import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dialogs: Dialogs) {
  }

  ionViewDidLoad() {

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

        break;
      default:
        break;
    }
  }
}
