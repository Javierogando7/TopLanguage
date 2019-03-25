import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {
  words = [];
  items = []; 
  searchTerm = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public sql: DatabaseProvider) {
    
  }

  ionViewDidLoad() {
    this.items = this.sql.getWords();
    this.setFilteredItems();
  }

  filterItems(searchTerm){
    return this.items.filter((item) => {
        return item.englishWord.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });     
  }

  setFilteredItems() {

    this.words = this.filterItems(this.searchTerm);

  }
}
