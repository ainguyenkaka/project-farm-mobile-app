import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StorageServiceProvider {

  constructor(public http: Http) {

  }

  addStorage(key, value) {
    localStorage.setItem(key, value);
  }

  getValue(key) {
    return localStorage.getItem(key);
  }
}
