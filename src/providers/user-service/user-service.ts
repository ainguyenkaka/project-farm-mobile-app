import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpServiceProvider } from "../http-service/http-service";
import { StorageServiceProvider } from "../storage-service/storage-service";
import { AppConstantsProvider } from "../app-constants/app-constants";

@Injectable()
export class UserServiceProvider {

  userId: string;

  constructor(public http: Http, private httpService: HttpServiceProvider, private storageService: StorageServiceProvider) {
    // this.loadData();
  }

  loadData() {
    let token = this.storageService.getValue(AppConstantsProvider.API_TOKEN_KEY);
    this.loginWithToken(token);
  }

  getUserId() {
    return this.userId;
  }

  createUser(email, phone) {
    var body = {
      "authorities": [
        "ROLE_USER"
      ],
      "email": email,
      "login": email,
      "password": "default-password",
      "phone": phone
    };
    this.http.post(AppConstantsProvider.API_ENDPOINT + '/register', body)
      .toPromise()
      .then(res => {
        let body = res.json().data;
        this.storageService.addStorage(AppConstantsProvider.API_TOKEN_KEY, body);
        this.httpService.setToken(body);
      })
      .catch(this.handleError);
  }

  loginWithToken(token) {
    var body = {
      headers: this.httpService.getHeaders()
    };
    this.http.post(AppConstantsProvider.API_ENDPOINT + '/authenticate', body)
      .toPromise()
      .then(res => {
        let body = res.json().data;
        this.userId = body;
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
