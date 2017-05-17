import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { OrderPage } from '../pages/order/order';
import { NotificationPage } from '../pages/notification/notification';
import { HomePage } from '../pages/home/home';
import { PersonalPage } from "../pages/personal/personal";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomerInfoComponent } from '../components/customer-info/customer-info';
import { DeliveryInfoComponent } from '../components/delivery-info/delivery-info';
import { AppToolbarComponent } from '../components/app-toolbar/app-toolbar';
import { RegistryToolbarComponent } from '../components/registry-toolbar/registry-toolbar';
import { ServiceRegistryComponent } from '../components/service-registry/service-registry';
import { ServiceInfoComponent } from '../components/service-info/service-info';

@NgModule({
  declarations: [
    MyApp,
    OrderPage,
    NotificationPage,
    HomePage,
    PersonalPage,
    TabsPage,
    CustomerInfoComponent,
    DeliveryInfoComponent,
    AppToolbarComponent,
    RegistryToolbarComponent,
    ServiceRegistryComponent,
    ServiceInfoComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrderPage,
    NotificationPage,
    HomePage,
    PersonalPage,
    CustomerInfoComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
