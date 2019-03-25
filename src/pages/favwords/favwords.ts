import { DatabaseProvider } from './../../providers/database/database';
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
  words = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public sql: DatabaseProvider) {
  }

  ionViewDidEnter() {
    //this.sql.createTable();
    this.words = this.sql.getWords();
    
  }

  deleteWord(word){
    try {
      this.sql.deleteWord(word.id);
      this.words = this.sql.getWords();
    } catch (error) {
      console.log(error);
    }
    
  }

  goAddWord() {
    this.navCtrl.push(AddWordPage);
  }

  goSearchPage() {
    this.app.getRootNav().push(SearchPage);
  }

}
