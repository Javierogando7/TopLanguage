import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
//public navCtrl: NavController, public navParams: NavParams
@IonicPage()
@Component({
  selector: 'page-vocabularydetail',
  templateUrl: 'vocabularydetail.html',
})
export class VocabularydetailPage {

  constructor(public smartAudio : SmartAudioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocabularydetailPage');
  }

StartApple(){
  this.smartAudio.play('apple');
}

StartPear(){
  this.smartAudio.play('pear');
}

StartPeach(){
  this.smartAudio.play('peach');
}

StartFruit(){
  this.smartAudio.play('fruit');
}





}
