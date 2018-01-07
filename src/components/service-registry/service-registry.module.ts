import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceRegistryComponent } from './service-registry';

@NgModule({
  declarations: [
    ServiceRegistryComponent,
  ],
  imports: [
    IonicPageModule.forChild(ServiceRegistryComponent),
  ],
  exports: [
    ServiceRegistryComponent
  ]
})
export class ServiceRegistryComponentModule {}
