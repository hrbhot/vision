import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {VisionServiceProvider} from '../providers/vision-service/vision-service';
import {ResultPage} from "../pages/result/result";
import {Screenshot} from "@ionic-native/screenshot";
import {ResultPageModule} from "../pages/result/result.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Camera} from "@ionic-native/camera";
import {VirtualPageModule} from "../pages/virtual/virtual.module";
import {CameraPreview} from "@ionic-native/camera-preview";
import {HTTP} from "@ionic-native/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ResultPageModule,
    HttpClientModule,
    VirtualPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VisionServiceProvider,
    Screenshot,
    HttpClient,
    Camera,
    CameraPreview,
    HTTP
  ],
})
export class AppModule {
}
