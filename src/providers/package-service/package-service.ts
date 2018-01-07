import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConverterServiceProvider } from "../../providers/converter-service/converter-service";
import { UserServiceProvider } from "../user-service/user-service";
import { AppConstantsProvider } from "../app-constants/app-constants";

@Injectable()
export class PackageServiceProvider {

  currentPackage: any;
  packages: any;

  constructor(public http: Http, private convertService: ConverterServiceProvider, private userService: UserServiceProvider) {
    this.loadDefaultData();
    // this.loadData();
  }


  getMaxKilogram() {
    return this.getCurrentPackage().kilogramPerTime;
  }

  getCurrentPackage() {
    return this.currentPackage;
  }

  getServicePackageById(id) {

  }

  isBasic() {
    return this.currentPackage.category == 'basic';
  }

  isOrderRandom() {
    return this.currentPackage.orderType == 'random';
  }

  setCurrentPackage(item) {
    this.currentPackage = item;
  }

  addServicePackage(serviceInfo) {
    serviceInfo['id'] = "591a595bc393b90496aa331f";
    this.currentPackage = serviceInfo;
    this.packages.push(serviceInfo);
    return serviceInfo;
  }

  updateServicePackage(serviceInfo) {
    this.currentPackage = serviceInfo;
  }

  loadDefaultData() {
    this.packages = [{
      "beforeMonth": 1,
      "category": "basic",
      "days": [
        2
      ],
      "deliveryPerWeek": 1,
      "endDate": this.convertService.caculateEndDate(1, new Date()),
      "payType": "string",
      "orderType": "random",
      "startDate": new Date().toISOString().substring(0, 10),
      "totalKilogram": 2.0,
      "totalPrice": 0,
      "userId": "user-02",
      "userNumber": 1
    }]
    this.currentPackage = this.packages[0];
  }

  loadData() {
    this.http.get(AppConstantsProvider.API_ENDPOINT + '/service-packages/top' + '?userId=' + this.userService.getUserId())
      .toPromise()
      .then(res => {
        let body = res.json().data;
        this.currentPackage = body;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
