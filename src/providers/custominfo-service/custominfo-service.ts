import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserServiceProvider } from "../user-service/user-service";
import { AppConstantsProvider } from "../app-constants/app-constants";

@Injectable()
export class CustominfoServiceProvider {

  list: any;
  currentCustomInfo: any;

  constructor(public http: Http, private userService: UserServiceProvider) {
    this.loadDefaultData();
    // this.loadData();
  }

  setCurrentCustomInfo(info) {
    this.currentCustomInfo = info;
  }

  getCurrentCustomInfo() {
    return this.currentCustomInfo;
  }

  addCustomInfo(info) {
    info['id'] = '988a502bc393b55596aa331f';
    this.currentCustomInfo = info;
    return info;
  }

  updateCustomInfo(info) {
    this.currentCustomInfo = info;
    this.update(info);
  }

  loadDefaultData() {
    this.list = [
      {
        "id": "string",
        "members": 0,
        "name": "string",
        "houseNumber": 0,
        "organization": "string",
        "phone": "string",
        "street": "string",
        "town": "string",
        "userId": "string",
        "ward": "string"
      }
    ];

    this.currentCustomInfo = this.list[0];
  }

  loadData() {
    this.http.get(AppConstantsProvider.API_ENDPOINT + '/customer-infos/top' + '?userId=' + this.userService.getUserId())
      .toPromise()
      .then(res => {
        let body = res.json();
        this.currentCustomInfo = body;
      })
      .catch(this.handleError);

  }

  update(info) {
    var body = info;
    this.http.put(AppConstantsProvider.API_ENDPOINT + '/customer-infos' + '?userId=' + this.userService.getUserId(), body)
      .toPromise()
      .then(res => {
        let body = res.json();
        console.log(body);
      })
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
