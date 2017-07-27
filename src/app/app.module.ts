import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { HttpModule } from '@angular/http';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//PAGES
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ClosetPage } from '../pages/closet/closet';
import { HatsPage } from '../pages/hats/hats';
import { PantsPage } from '../pages/pants/pants';
import { ShirtPage } from '../pages/shirt/shirt';
import { ShoesPage } from '../pages/shoes/shoes';
import { DirtypPage } from '../pages/dirtyp/dirtyp';
import { DirtysPage } from '../pages/dirtys/dirtys';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppSettingsProvider } from '../providers/app-settings/app-settings';
import { TodoServiceProvider } from '../providers/todo-service/todo-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SigninPage,
    SignupPage,
    ClosetPage,
    HatsPage,
    PantsPage,
    ShirtPage,
    ShoesPage,
    DirtypPage,
    DirtysPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SigninPage,
    SignupPage,
    ClosetPage,
    HatsPage,
    PantsPage,
    ShirtPage,
    ShoesPage,
    DirtypPage,
    DirtysPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSettingsProvider,
    TodoServiceProvider
  ]
})
export class AppModule {}
