import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstantsProvider } from "../app-constants/app-constants";
import { UserServiceProvider } from "../user-service/user-service";

@Injectable()
export class OrderServiceProvider {

  orders: any;
  map: any;

  constructor(public http: Http, private userService: UserServiceProvider) {
    this.getDefaultData();
    // this.loadData();
  }


  readloadData() {

  }

  getAllOrders() {
    return this.orders;
  }

  addOrder(order) {
    order['id'] = '6655b3c1c393b93ab4ff6ae9';
    this.orders.push(order);
    // this.add(order);
    return order;
  }

  deleteOrder(id) {

  }


  getDefaultData() {
    this.orders = [
      {
        "id": "591c5ec1c393b93ab4ff6ae9",
        "customerInfoId": "591c5eb2c393b93ab4ff6ae7",
        "servicePackageId": "591c5eb5c393b93ab4ff6ae8",
        "createdDate": "2017-05-17T21:37:39.461Z",
        "status": 0,
        "userId": "user-02",
        "paid": true,
        "chosenProducts": [
          {
            "productId": "591a595bc393b90496aa331f",
            "kilogram": 0.9
          },
          {
            "productId": "591a595bc393b90496aab21f",
            "kilogram": 0.3
          }
        ]
      },
      {
        "id": "221bc6c9c393b93ab4ff6aee",
        "customerInfoId": "591cf9b4c393b93ab4ff6aec",
        "servicePackageId": "591cf9b9c393b93ab4ff6aed",
        "createdDate": "2017-05-18T08:39:09.423Z",
        "status": 1,
        "userId": "user-02",
        "paid": false,
        "chosenProducts": [
          {
            "productId": "591a595bc393b90496aa331f",
            "kilogram": 0.9
          },
          {
            "productId": "591a595bc393b90496aab21f",
            "kilogram": 0.6
          }
        ]
      }
    ];

  }

  loadData() {
    this.http.get(AppConstantsProvider.API_ENDPOINT + '/orders' + '?userId=' + + this.userService.getUserId())
      .toPromise()
      .then(res => {
        let body = res.json().data;
        this.orders = body;
      })
      .catch(this.handleError);

  }

  add(order) {
    var body = order;
    this.http.post(AppConstantsProvider.API_ENDPOINT + '/orders' + '?userId=' + + this.userService.getUserId(), body)
      .toPromise()
      .then(res => {
        let body = res.json().data;
        console.log(body);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
