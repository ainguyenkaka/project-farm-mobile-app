import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliveryInfoComponent } from './delivery-info';

@NgModule({
  declarations: [
    DeliveryInfoComponent,
  ],
  imports: [
    IonicPageModule.forChild(DeliveryInfoComponent),
  ],
  exports: [
    DeliveryInfoComponent
  ]
})
export class DeliveryInfoComponentModule {}
