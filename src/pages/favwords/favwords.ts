import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AddWordPage } from '../addword/addword';
import { SearchPage } from '../search/search';



@IonicPage()
@Component({
  selector: 'page-favwords',
  templateUrl: 'favwords.html',
})
export class FavwordsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavwordsPage');
  }

  goAddWord() {
    this.app.getRootNav().push(AddWordPage);
  }

  goSearchPage() {
    this.app.getRootNav().push(SearchPage);
  }

}
