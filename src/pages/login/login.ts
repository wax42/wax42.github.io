import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	public connection_email: string;
	public connection_pwd: string;
  constructor(public navCtrl: NavController, public navParams: NavParams){}

// -------------  Declaration function ----------------
	doConnection()
	{
		let var_email = this.connection_email;
		let var_pwd = this.connection_pwd;
		if (var_email == undefined || var_email == "")
		{
			alert("Please mention the email address");
			return ;
		}
		if (this.validateEmail(var_email) == false)
		{
			alert("Invalid email address");
			this.connection_email = "";
			return ;
		}
		if (var_pwd == undefined)
			var_pwd = '';
		if (this.Autentication_get_sessionId(var_email, var_pwd))
		{
			//change page with param
			// this.navCtrl.push(PagePersonnellePage, {
			// 	firstPassed: var_email, secondPassed: var_pwd
		  	// });
		  	this.connection_email = '';
		  	this.connection_pwd = '';
			alert("connected /fake/")
	  	} //if (this.Autentication_get_sessionId())
	} //doConnection
	MDPOublie()
	{
		alert("ok");
	} //MDPOublie
	Autentication_get_sessionId(param_email, param_pwd)
	{
		//Serveur ?
		return (true);
	} //Autentication_get_sessionId //export class HomePage
	validateEmail(email)
	{
  		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		return re.test(email);
	}
}
