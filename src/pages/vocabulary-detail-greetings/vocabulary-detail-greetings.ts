import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';

/**
 * Generated class for the VocabularyDetailGreetingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vocabulary-detail-greetings',
  templateUrl: 'vocabulary-detail-greetings.html',
})
export class VocabularyDetailGreetingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public smartAudio : SmartAudioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocabularyDetailGreetingsPage');
  }

  StartHello(){
    this.smartAudio.play('hello');
  }

  StartHowAreYou(){
    this.smartAudio.play('howareyou');
  }

  StartWhatsUp(){
    this.smartAudio.play('whatsup');
  }
}
