import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceVerificationComponent } from './service-verification';

@NgModule({
  declarations: [
    ServiceVerificationComponent,
  ],
  imports: [
    IonicPageModule.forChild(ServiceVerificationComponent),
  ],
  exports: [
    ServiceVerificationComponent
  ]
})
export class ServiceVerificationComponentModule {}
