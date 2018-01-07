import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { MyApp } from './app.component';


import { OrderPage } from '../pages/order/order';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { NotificationPage } from '../pages/notification/notification';
import { NotificationDetailPage } from '../pages/notification-detail/notification-detail';
import { HomePage } from '../pages/home/home';
import { PersonalPage } from "../pages/personal/personal";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomerInfoComponent } from '../components/customer-info/customer-info';
import { DeliveryInfoComponent } from '../components/delivery-info/delivery-info';
import { AppToolbarComponent } from '../components/app-toolbar/app-toolbar';
import { ServiceRegistryComponent } from '../components/service-registry/service-registry';
import { ServiceInfoComponent } from '../components/service-info/service-info';
import { ServiceVerificationComponent } from '../components/service-verification/service-verification';
import { ProductListComponent } from '../components/product-list/product-list';
import { OrderListComponent } from '../components/order-list/order-list';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { OrderServiceProvider } from '../providers/order-service/order-service';
import { PackageServiceProvider } from '../providers/package-service/package-service';
import { CustominfoServiceProvider } from '../providers/custominfo-service/custominfo-service';
import { NotificationServiceProvider } from '../providers/notification-service/notification-service';
import { ConverterServiceProvider } from '../providers/converter-service/converter-service';
import { LocationServiceProvider } from '../providers/location-service/location-service';
import { FarmServiceProvider } from '../providers/farm-service/farm-service';
import { AppConstantsProvider } from '../providers/app-constants/app-constants';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';

@NgModule({
  declarations: [
    MyApp,
    OrderPage,
    NotificationPage,
    HomePage,
    PersonalPage,
    TabsPage,
    NotificationDetailPage,
    OrderDetailPage,
    CustomerInfoComponent,
    DeliveryInfoComponent,
    AppToolbarComponent,
    ServiceRegistryComponent,
    ServiceInfoComponent,
    ServiceVerificationComponent,
    ProductListComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    TabsPage,
    NotificationDetailPage,
    OrderDetailPage,
    ServiceRegistryComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductServiceProvider,
    OrderServiceProvider,
    PackageServiceProvider,
    CustominfoServiceProvider,
    NotificationServiceProvider,
    ConverterServiceProvider,
    LocationServiceProvider,
    FarmServiceProvider,
    AppConstantsProvider,
    UserServiceProvider,
    HttpServiceProvider,
    StorageServiceProvider
  ]
})
export class AppModule {}
