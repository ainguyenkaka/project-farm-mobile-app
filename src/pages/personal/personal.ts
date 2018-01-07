import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { CustominfoServiceProvider } from "../../providers/custominfo-service/custominfo-service";
import { PackageServiceProvider } from "../../providers/package-service/package-service";


@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  customInfo: any;
  serviceInfo: any;

  constructor(public navCtrl: NavController,private toastCtrl: ToastController, public navParams: NavParams, private customInfoService: CustominfoServiceProvider, private packageService: PackageServiceProvider) {
    this.loadData();
  }

 
  loadData() {
    this.customInfo = this.customInfoService.getCurrentCustomInfo();
    this.serviceInfo = this.packageService.getCurrentPackage();
  }

  saveCustomInfo() {
    this.customInfoService.updateCustomInfo(this.customInfo);
    this.showToast('Bạn đã thay đổi thành công!');
  }

  saveServiceInfo() {
    this.packageService.updateServicePackage(this.serviceInfo);
  }

  calculateTotalTimes(){
    return this.serviceInfo.days.length * 4 * this.serviceInfo.beforeMonth;
  }

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
