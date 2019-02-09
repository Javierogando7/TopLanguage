import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VocabularydetailPage } from '../vocabularydetail/vocabularydetail';

@IonicPage()
@Component({
  selector: 'page-vocabulary',
  templateUrl: 'vocabulary.html',
})
export class VocabularyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocabularyPage');
  }

  loadDetails() {
    this.navCtrl.push(VocabularydetailPage);
  }

}
