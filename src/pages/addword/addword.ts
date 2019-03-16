import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addword',
  templateUrl: 'addword.html',
})
export class AddWordPage {
  
  spanishWord: string;
  englishWord: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sql: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddwordPage');
  }

  addWord(){
    this.sql.insertWord(this.spanishWord, this.englishWord, this.description);
    this.navCtrl.pop();
  }

}
