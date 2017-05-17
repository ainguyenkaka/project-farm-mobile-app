import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceInfoComponent } from './service-info';

@NgModule({
  declarations: [
    ServiceInfoComponent,
  ],
  imports: [
    IonicPageModule.forChild(ServiceInfoComponent),
  ],
  exports: [
    ServiceInfoComponent
  ]
})
export class ServiceInfoComponentModule {}
