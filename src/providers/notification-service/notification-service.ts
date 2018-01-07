import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserServiceProvider } from "../user-service/user-service";
import { AppConstantsProvider } from "../app-constants/app-constants";

@Injectable()
export class NotificationServiceProvider {

  list: any;

  constructor(public http: Http, private userService: UserServiceProvider) {
    this.loadDefaultData();
    // this.loadData();
  }

  getNotifications() {
    return this.list;
  }

  addNotification(item) {
    this.list.push(item);
  }

  loadDefaultData() {
    this.list = [
      {
        "createdDate": "2017-05-19T10:42:10.845Z",
        "id": "2b72sac12sav11",
        "message": "Yêu cầu đặt rau của bạn đã được nhận. Cảm ơn đã đăng ký dịch vụ",
        "sentUsers": [
          "user-02"
        ],
        "title": "Xác nhận thành công"
      }
    ];
  }

  loadData() {
    this.http.get(AppConstantsProvider.API_ENDPOINT + '/notifications' + '?userId=' + + this.userService.getUserId())
      .toPromise()
      .then(res => {
        let body = res.json().data;
        this.list = body;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
