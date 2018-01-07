import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstantsProvider } from "../app-constants/app-constants";

@Injectable()
export class LocationServiceProvider {

  basicLocations: Array<string>

  constructor(public http: Http) {
    this.loadDefaultData();
    // this.loadData();  
  }

  getBasicLocations() {
    return this.basicLocations;
  }

  isFreeLocation(location) {
    return this.basicLocations.indexOf(location) >= 0;
  }

  loadDefaultData() {
    this.basicLocations = ["Keangnam", "Crowne", "CT2", "01 Giang Van Minh", "Viettel Hòa Lạc"];
  }

  loadData() {
    this.http.get(AppConstantsProvider.API_ENDPOINT + '/locations/top')
      .toPromise()
      .then(res => {
        let body = res.json().data;
        this.basicLocations = body.basicLocations;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
