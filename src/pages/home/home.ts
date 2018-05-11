import { Component } from '@angular/core';
import { MenuController, Nav } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	EtatUser: string;
  	constructor(public menu: MenuController, public nav: Nav) {
		this.EtatUser = 'log';
  	}

// -------------  Declaration function ----------------

  	SignIn()
	{
  		this.EtatUser = 'log';
		this.nav.push(LoginPage);
  		this.menu.enable(true, 'menu1');
  		this.menu.enable(false, 'menu2');
	}
	SignUp()
	{
		this.EtatUser = 'nop';
  		this.menu.enable(false, 'menu1');
  		this.menu.enable(true, 'menu2');
	}
}
