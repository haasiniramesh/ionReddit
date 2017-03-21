import { Component } from '@angular/core';
//import {RedditService} from '../../app/services/reddit.services';
import { NavController } from 'ionic-angular';
import { RedditsPage } from '../reddits/reddits';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: any;
  limit:any;
  constructor(public navCtrl: NavController) {
      this.getDefaults();
  }

  getDefaults() {
    this.category = localStorage.getItem('category') || "sports";
    this.limit = localStorage.getItem('limit') || 10;
  }

  setDefault() {
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);

    this.navCtrl.push(RedditsPage);
  }
}
