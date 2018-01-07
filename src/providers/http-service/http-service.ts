import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceProvider {

  authorizedHeaders: Headers;

  constructor(public http: Http) {

  }

  loadData() {
    var headers = new Headers();
    this.authorizedHeaders =  headers;
  }

  setToken(token) {
    return this.authorizedHeaders.append('Authorization', 'Bearer ' + token);
  }

  getHeaders() {
    return this.authorizedHeaders;
  }

}
