import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceRegistryComponent } from '../../components/service-registry/service-registry';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  registerService(event) {
     this.navCtrl.push(ServiceRegistryComponent);
  }
}
