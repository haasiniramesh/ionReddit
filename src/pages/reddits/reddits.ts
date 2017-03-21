import { Component } from '@angular/core';
import {RedditService} from '../../app/services/reddit.services';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-reddit',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items:any;
  category: any;
  limit:any;
  constructor(public navCtrl: NavController,
              private redditService:RedditService) {
      this.getDefaults();
  }

  ngOnInit() {
    console.log('init...');
    this.getPosts(this.category, this.limit);
  }

  getDefaults() {
    this.category = localStorage.getItem('category') || "sports";
    this.limit = localStorage.getItem('limit') || 10;
  }

   getPosts(category: String, limit: number) {
     this.redditService.getPosts(category, limit).subscribe(response => {
       console.log(response);

       this.items = response.data.children;
     });
   }

   viewItem(item) {
     this.navCtrl.push(DetailsPage, {item:item});
   }

   changeCategory() {
     this.getPosts(this.category, this.limit);
   }

}
