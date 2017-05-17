import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppToolbarComponent } from './app-toolbar';

@NgModule({
  declarations: [
    AppToolbarComponent,
  ],
  imports: [
    IonicPageModule.forChild(AppToolbarComponent),
  ],
  exports: [
    AppToolbarComponent
  ]
})
export class AppToolbarComponentModule {}
