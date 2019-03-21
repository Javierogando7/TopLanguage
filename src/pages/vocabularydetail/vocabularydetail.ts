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

StartUva(){
  this.smartAudio.play('Uva');
}

StartPina(){
  this.smartAudio.play('Pina');
}

StartMango(){
  this.smartAudio.play('Mango');
}

StartCereza(){
  this.smartAudio.play('Cereza');
}

StartLimon(){
  this.smartAudio.play('Limon');
}

StartFresa(){
  this.smartAudio.play('Fresa');
}



}
