import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the VisibilitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visibilite',
  templateUrl: 'visibilite.html',
})
export class VisibilitePage {
	openMenu = false;
	data = [
  {
	id: 'youtube',
	name: 'Youtube',
	symbol: 'youtube',
	rank: '1',
	price_usd: '13208.8',
	percent_change_1h: '1.54'
  },
  {
	id: 'twitter',
	name: 'Twitter',
	symbol: 'twitter',
	rank: '2',
	price_usd: '658.926',
	percent_change_1h: '2.42'
  }
 ];
  constructor(public navCtrl: NavController) {
  }


	precision(n,m) {
	  return parseFloat(n).toFixed(m);
	}

	evolution(n) {
	  return n > 0
		? '<span>' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-up"></i></span>'
		: '<span class="red">' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-down"></i></span>';
	}
    togglePopupMenu() {
      return this.openMenu = !this.openMenu;
  	}

    goToAccount() {
      alert('Account clicked.');
      this.togglePopupMenu();
    }

    goToHome() {
      alert('Home clicked.');
      this.togglePopupMenu();
    }

    goToCups() {
      alert('Cups clicked.');
      this.togglePopupMenu();
    }

    goToLeaderboard() {
      alert('Leaderboard clicked.');
      this.togglePopupMenu();
    }

    goToHelp() {
      alert('Help clicked.');
      this.togglePopupMenu();
    }

    goToShop() {
      alert('Shop clicked.');
      this.togglePopupMenu();
    }
}
