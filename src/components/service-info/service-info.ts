import { Component, Input } from '@angular/core';
import { ConverterServiceProvider } from "../../providers/converter-service/converter-service";

@Component({
  selector: 'service-info',
  templateUrl: 'service-info.html'
})
export class ServiceInfoComponent {

  @Input() serviceInfo: any;
  choice: string;
  beforeMonth: number;

  constructor(private convertService: ConverterServiceProvider) {

  }
 
  chooseDay(day) {
    var index = this.getDayIndex(day);
    if (index >= 0)
      this.serviceInfo.days.splice(index, 1);
    else
      this.serviceInfo.days.push(day);
  }

  chooseOneDay(day){
      this.serviceInfo.days = [];
      this.serviceInfo.days.push(day);
  }
  
  dayExisted(day) {
    return this.getDayIndex(day) >= 0;
  }

  getDayIndex(day) {
    return this.serviceInfo.days.indexOf(day);
  }

  getCurrentDate() {
    return new Date().toISOString().substring(0, 10);
  }

  caculateEndDate(beforeMonth: number, startDate: Date) {
    var endDate = this.convertService.caculateEndDate(beforeMonth,startDate);
    this.serviceInfo.endDate = endDate;
    return endDate;
  }
  

  chooseBasic() {
    this.serviceInfo.beforeMonth = 1;
    this.chooseOneDay(2);
  }
}
