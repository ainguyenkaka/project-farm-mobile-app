import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceRegistryComponent } from '../../components/service-registry/service-registry';
import { FarmServiceProvider } from "../../providers/farm-service/farm-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  farm: any;

  constructor(public navCtrl: NavController, private farmService: FarmServiceProvider) {
    this.loadData();
  }

  loadData() {
    this.farm = this.farmService.getFarm();
  }

  registerService(event) {
    this.navCtrl.push(ServiceRegistryComponent);
  }
}
