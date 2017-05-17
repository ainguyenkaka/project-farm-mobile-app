import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistryToolbarComponent } from './registry-toolbar';

@NgModule({
  declarations: [
    RegistryToolbarComponent,
  ],
  imports: [
    IonicPageModule.forChild(RegistryToolbarComponent),
  ],
  exports: [
    RegistryToolbarComponent
  ]
})
export class RegistryToolbarComponentModule {}
