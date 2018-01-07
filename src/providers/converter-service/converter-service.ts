import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConverterServiceProvider {

  constructor(public http: Http) {
  }

  caculateEndDate(beforeMonth: number, startDate: Date) {
    var days = beforeMonth * 28;
    var endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + days);
    return endDate;
  }

  roundHalf(num) {
    return Math.round(num*2)/2;
  }
}
