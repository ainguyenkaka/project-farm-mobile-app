import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderDetailPage } from "../../pages/order-detail/order-detail";
import { OrderServiceProvider } from "../../providers/order-service/order-service";
import { PackageServiceProvider } from "../../providers/package-service/package-service";
import { ProductServiceProvider } from "../../providers/product-service/product-service";

@Component({
  selector: 'order-list',
  templateUrl: 'order-list.html'
})
export class OrderListComponent {

  orders: any;

  constructor(public navCtrl: NavController, private orderService: OrderServiceProvider, private productService: ProductServiceProvider, private packageService: PackageServiceProvider) {
    this.loadData();
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData() {
    this.orders = this.orderService.getAllOrders();
    var count = 0;
    this.orders.forEach(item => {
      count++;
      item['totalProducts'] = this.caculateTotalProducts(item.chosenProducts);
      item['code'] = 'MSG-' + count; 
    });
  }

  caculateTotalProducts(products) {
    var total = products.length +  " loại";
    var kilogram = 0;
    products.forEach(item => {
       kilogram += item.kilogram;
    });
    total += " - " + kilogram + " kg";
    return total;
  }

  clickItem(item) {
    let products = this.productService.getAllProductsByOrder(item);

    this.navCtrl.push(OrderDetailPage, {
      item: item,
      products: products
    });
  }
}
