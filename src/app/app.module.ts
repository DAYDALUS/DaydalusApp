import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { HttpModule } from '@angular/http';
import { FileTransfer } from '@ionic-native/file-transfer';
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
import { ResultsforpPage } from '../pages/resultsforp/resultsforp';
import { ResultsforshoesPage } from '../pages/resultsforshoes/resultsforshoes';
import { BrownjoggersPage } from '../pages/brownjoggers/brownjoggers';
import { BlackpantsPage } from '../pages/blackpants/blackpants';
import { CargopantPage } from '../pages/cargopant/cargopant';
import { GraysweatPage } from '../pages/graysweat/graysweat';
import { BlackvanshoePage } from '../pages/blackvanshoe/blackvanshoe';
import { BrownshoePage } from '../pages/brownshoe/brownshoe';
import { GrayshoePage } from '../pages/grayshoe/grayshoe';
import { RosheshoePage } from '../pages/rosheshoe/rosheshoe';
import { VanshoePage } from '../pages/vanshoe/vanshoe';
import { NikeshoePage } from '../pages/nikeshoe/nikeshoe';
import { BarneyPage } from '../pages/barney/barney';
import { BlackbuttonPage } from '../pages/blackbutton/blackbutton';
import { BlueshirtPage } from '../pages/blueshirt/blueshirt';



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
    DirtysPage,
    ResultsforpPage,
    ResultsforshoesPage,
    BrownjoggersPage,
    BlackpantsPage,
    CargopantPage,
    GraysweatPage,
    BlackvanshoePage,
    BrownshoePage,
    GrayshoePage,
    RosheshoePage,
    VanshoePage,
    NikeshoePage,
    BarneyPage,
    BlackbuttonPage,
    BlueshirtPage



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
    DirtysPage,
    ResultsforpPage,
    ResultsforshoesPage,
    BrownjoggersPage,
    BlackpantsPage,
    CargopantPage,
    GraysweatPage,
    BlackvanshoePage,
    BrownshoePage,
    GrayshoePage,
    RosheshoePage,
    VanshoePage,
    NikeshoePage,
    BarneyPage,
    BlackbuttonPage,
    BlueshirtPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSettingsProvider,
    TodoServiceProvider
  ]
})
export class AppModule {}
