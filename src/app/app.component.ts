import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ParamPage } from '../pages/param/param';
import { AdmistratifPage } from '../pages/admistratif/admistratif';
import { PartenairePage } from '../pages/partenaire/partenaire';
import { VisibilitePage } from '../pages/visibilite/visibilite';
import { StatsPage } from '../pages/stats/stats';
// import { SideMenuPage } from '../pages/side-menu/side-menu';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
	  this.initializeApp();
      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', component: HomePage },
		{ title: 'Login', component: LoginPage },
		{ title: 'Paramètres', component: ParamPage },
		{ title: 'Administratif', component: AdmistratifPage },
		{ title: 'Partenaire', component: PartenairePage },
		{ title: 'Visibilite', component: VisibilitePage },
		{ title: 'Statistique', component: StatsPage },
		// { title: 'Statistique', component: SideMenuPage },
      ];
    }

// -------------  Declaration function ----------------
    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }
}
