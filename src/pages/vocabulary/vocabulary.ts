import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { VocabularydetailPage } from '../vocabularydetail/vocabularydetail';

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

}
