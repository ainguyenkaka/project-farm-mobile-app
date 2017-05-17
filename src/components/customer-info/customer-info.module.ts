import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerInfoComponent } from './customer-info';

@NgModule({
  declarations: [
    CustomerInfoComponent,
  ],
  imports: [
    IonicPageModule.forChild(CustomerInfoComponent),
  ],
  exports: [
    CustomerInfoComponent
  ]
})
export class CustomerInfoComponentModule {}
