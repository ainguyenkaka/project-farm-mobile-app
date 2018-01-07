import { Component, Input } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ProductServiceProvider } from "../../providers/product-service/product-service";
import { PackageServiceProvider } from "../../providers/package-service/package-service";
import { CustominfoServiceProvider } from "../../providers/custominfo-service/custominfo-service";
import { OrderServiceProvider } from "../../providers/order-service/order-service";
import { OrderPage } from "../../pages/order/order";

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListComponent {

  products: any;
  totalKilogram: number;
  maxKilogram: number;
  isSaved: boolean;
  chosenType: any;
  @Input() choice;

  constructor(public navCtrl: NavController, private productService: ProductServiceProvider, private packageService: PackageServiceProvider, private customInfoService: CustominfoServiceProvider, private orderService: OrderServiceProvider, private toastCtrl: ToastController) {
    this.loadData();
  }

  loadData() {
    this.chosenType = 'custom';
    this.totalKilogram = 0;
    this.isSaved = false;
    this.maxKilogram = this.packageService.getMaxKilogram();
    this.products = this.productService.getAllProducts();
    this.products.forEach(item => {
      item['kilogram'] = 0.5;
      item['chosen'] = false;
    });
  }

  getMaxKilogram() {
    this.maxKilogram = this.packageService.getMaxKilogram();
    return this.maxKilogram;
  }

  increaseKilogram(item) {
    if (!item.chosen) {
      this.showToast('Bạn cần chọn rau trước khi tăng!');
      return;
    }

    if (this.totalKilogram < this.maxKilogram)
      item['kilogram'] += 0.5;
    else
      this.showToast('Bạn đã chọn đủ số kg!');

    this.checkTotalKilogram();
  }

  decreaseKilogram(item) {
    if (item['kilogram'] >= 1)
      item['kilogram'] -= 0.5;
        
    this.checkTotalKilogram();
  }

  chooseProduct(item) {
    this.checkTotalKilogram();
  }

  checkTotalKilogram() {
    this.totalKilogram = 0;
    this.products.forEach(item => {
      if (item.chosen)
        this.totalKilogram += item.kilogram;
    });

    if (this.totalKilogram == this.maxKilogram)
      this.isSaved = true;
    else
      this.isSaved = false;
  }

  chooseRandom() {
    this.isSaved = true;
  }

  chooseCustom() {
    this.isSaved = false;
  }

  saveProducts() {
    if (this.chosenType == 'custom')
      this.saveCustomProducts();
    else
      this.saveRandomProducts();
  }

  saveRandomProducts() {
    var chosenProducts = this.productService.getRandomChosenProducts();
    let balancedKilogram = this.packageService.getCurrentPackage().totalKilogram / chosenProducts.length;
    chosenProducts.forEach(item => {
      item['kilogram'] = balancedKilogram;
    });
    this.createOrder(chosenProducts);
  }

  saveCustomProducts() {
    var chosenProducts = [];
    this.products.forEach(item => {
      var chosenProduct = new Object();
      chosenProduct['productId'] = item.id;
      chosenProduct['kilogram'] = Math.round(item.kilogram * 100) / 100;
      chosenProducts.push(chosenProduct);
    });
    this.createOrder(chosenProducts);
  }

  createOrder(chosenProducts) {
    let order = {
      "customerInfoId": this.packageService.getCurrentPackage().id,
      "servicePackageId": this.customInfoService.getCurrentCustomInfo().id,
      "status": 0,
      "userId": "user-02",
      "paid": false,
      "createdDate": new Date(),
      "chosenProducts": chosenProducts
    };
    this.orderService.addOrder(order);

    this.navCtrl.push(OrderPage, {
      tab: 'orderList'
    });
  }

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
