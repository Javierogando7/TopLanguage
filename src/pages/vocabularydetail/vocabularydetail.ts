import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
//public navCtrl: NavController, public navParams: NavParams
@IonicPage()
@Component({
  selector: 'page-vocabularydetail',
  templateUrl: 'vocabularydetail.html',
})
export class VocabularydetailPage {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocabularydetailPage');
  }

}
