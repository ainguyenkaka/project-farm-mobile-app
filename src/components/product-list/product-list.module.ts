import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductListComponent } from './product-list';

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
    IonicPageModule.forChild(ProductListComponent),
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductListComponentModule {}
