import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationDetailPage } from '../../pages/notification-detail/notification-detail';
import { OrderServiceProvider } from "../../providers/order-service/order-service";
import { CustominfoServiceProvider } from "../../providers/custominfo-service/custominfo-service";
import { PackageServiceProvider } from "../../providers/package-service/package-service";
import { NotificationServiceProvider } from "../../providers/notification-service/notification-service";
import { ConverterServiceProvider } from "../../providers/converter-service/converter-service";
import { ProductServiceProvider } from "../../providers/product-service/product-service";

@Component({
  selector: 'service-registry',
  templateUrl: 'service-registry.html'
})
export class ServiceRegistryComponent {
  
  title: string;
  choices: Array<string>;
  choice: string;
  customInfo: any;
  serviceInfo: any;

  constructor(public navCtrl: NavController, private orderService: OrderServiceProvider, private custominfoService: CustominfoServiceProvider, private packageService: PackageServiceProvider, private notificationService: NotificationServiceProvider, private convertService: ConverterServiceProvider, private productService: ProductServiceProvider) {
    this.loadData();
  }

  loadData() {
    this.title = 'Hello World';
    this.choices = ["serviceInfo","customInfo", "verification"];
    this.choice = this.choices[0];
    this.loadDefaultData();
  }

  clickNext(index) {
    this.choice = this.choices[index + 1];
  }

  saveServiceVerification() {
    var tab = 'productList';
    this.custominfoService.addCustomInfo(this.customInfo);
    this.packageService.addServicePackage(this.serviceInfo);

    // if basic add order
    if(this.packageService.isOrderRandom()){
      this.createOrder(this.customInfo,this.serviceInfo);
      tab = 'orderList';
    }

    // push notification
    let newNotification = this.createNotification();
    this.notificationService.addNotification(newNotification);
    this.navCtrl.push(NotificationDetailPage, {
      item: newNotification,
      tab: tab
    });
    
    // this.loadDefaultData();
  }

  createNotification() {
    let item = {
        "message": "Yêu cầu đặt rau của bạn đã được nhận. Cảm ơn đã đăng ký dịch vụ",
        "sentUsers": [
          "user-02"
        ],
        "title": "Xác nhận thành công"
      }
    return item;
  }

  createOrder(customInfo,serviceInfo) {
    var chosenProducts = this.productService.getRandomChosenProducts();
    let balancedKilogram = serviceInfo.totalKilogram / chosenProducts.length;
    chosenProducts.forEach(item => {
      item['kilogram'] = balancedKilogram;
    });
    let order = {
        "customerInfoId": customInfo.id,
        "servicePackageId": serviceInfo.id,
        "status": 0,
        "userId": "user-02",
        "paid": false,
        "createdDate": new Date(),
        "chosenProducts": chosenProducts
      };
    this.orderService.addOrder(order);
  }

  loadDefaultData() {
    this.customInfo = {
      "members": 1,
      "name": "string",
      "email@local.com": "string",
      "houseNumber": "00",
      "organization": "string",
      "phone": "string",
      "street": "Keangnam",
      "ward": "string",
      "town": "string",
      "userId": "string"
    };
    this.serviceInfo =  {
      "beforeMonth": 1,
      "category": "basic",
      "days": [
        2
      ],
      "deliveryPerWeek": 1,
      "endDate": this.convertService.caculateEndDate(1,new Date()),
      "payType": "string",
      "orderType": "random",
      "startDate": new Date().toISOString().substring(0, 10),
      "totalKilogram": 2.0,
      "kilogramPerTime": 0,
      "totalPrice": 0,
      "userId": "user-02",
      "userNumber": 1
    };
  }
}
