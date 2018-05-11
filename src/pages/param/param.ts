import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-param',
  templateUrl: 'param.html',
})
export class ParamPage {
	isDisabled = true;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}

  	ionViewDidLoad() {
    console.log('ionViewDidLoad ParamPage');
  	}
}
