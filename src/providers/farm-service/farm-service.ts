import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstantsProvider } from "../app-constants/app-constants";

@Injectable()
export class FarmServiceProvider {

  farm: any;

  constructor(public http: Http) {
     this.loadDefaultData();
    //  this.loadData();
  }


  getFarm() {
    if (this.farm)
      return this.farm;
  }

  loadDefaultData() {
    let des = "\n Tăng 10% giá trị đơn hàng/1 lần giao hàng thêm."
      + "\n Cộng thêm 25.000/1 lần giao hàng tại nhà."
      + "\n Tăng 10% giá trị đơn hàng."
      + "\n Giảm 5% giá trị tổng đơn hàng nếu thanh toán trước 3 tháng."
      + "\n Giảm 10% giá trị tổng đơn hàng nếu thanh toán trước 6 tháng."
      + "\n Giảm 20% giá trị tổng đơn hàng nếu thanh toán trước 12 tháng.";
    this.farm = {
      "id": "29102013121",
      "title": "Rau sạch hoà lạc",
      "acreage": 2500,
      "description": des,
      "contact": "Phạm Thị Lương - Trung Tâm CNTT Viettel 3",
      "email": "luongpt4@viettel.com.vn",
      "phone": "0978.999.999",
      "imageUrl": "assets/img/home.jpg",
      "methods": [
        "Thổ canh",
        "Thuỷ canh"
      ]
    };
  }

  loadData() {
    this.http.get(AppConstantsProvider.API_ENDPOINT + '/farms/top')
      .toPromise()
      .then(res => {
        let body = res.json();
        this.farm = body;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
