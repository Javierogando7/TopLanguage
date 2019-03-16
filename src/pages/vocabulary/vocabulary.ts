import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { VocabularydetailPage } from '../vocabularydetail/vocabularydetail';
import { VocabularyDetailSportPage} from '../vocabulary-detail-sport/vocabulary-detail-sport';
import {VocabularyDetailGreetingsPage} from '../vocabulary-detail-greetings/vocabulary-detail-greetings';
@IonicPage()
@Component({
  selector: 'page-vocabulary',
  templateUrl: 'vocabulary.html',
})
export class VocabularyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocabularyPage');
  }

  loadDetails() {
    this.app.getRootNav().push(VocabularydetailPage);
  }

  loadDetailsSport(){
    this.app.getRootNav().push(VocabularyDetailSportPage);
  }

  loadDetailsGreeting(){
    this.app.getRootNav().push(VocabularyDetailGreetingsPage);
  }

}
