import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ParamPage } from '../pages/param/param';
import { AdmistratifPage } from '../pages/admistratif/admistratif';
import { PartenairePage } from '../pages/partenaire/partenaire';
import { VisibilitePage } from '../pages/visibilite/visibilite';
import { StatsPage } from '../pages/stats/stats';
// import { SideMenuPage } from '../pages/side-menu/side-menu';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
	LoginPage,
	ParamPage,
	AdmistratifPage,
	PartenairePage,
	VisibilitePage,
	StatsPage,
	// SideMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	HomePage,
	LoginPage,
	ParamPage,
	AdmistratifPage,
	PartenairePage,
	VisibilitePage,
	StatsPage,
	// SideMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
