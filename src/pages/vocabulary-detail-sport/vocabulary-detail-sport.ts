import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';


/**
 * Generated class for the VocabularyDetailSportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vocabulary-detail-sport',
  templateUrl: 'vocabulary-detail-sport.html',
})
export class VocabularyDetailSportPage {

  constructor(public navCtrl: NavController,public platform : Platform, public navParams: NavParams, public nativeAudio : NativeAudio, public smartAudio: SmartAudioProvider){
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad VocabularyDetailSportPage');
  }
 
  StartBalls(){ 
   
  this.smartAudio.play('balls');   
  }

  StartStadium(){ 
   
    this.smartAudio.play('stadium');   
    }

  StartBasketballHoop(){
    this.smartAudio.play('basketballhoop');
  }

  StartBat(){
    this.smartAudio.play('bat');
  }

  StartFootball(){
    this.smartAudio.play('football');
  }

  StartHockey(){
    this.smartAudio.play('hockey');
  }
   
  StartTennis(){
    this.smartAudio.play('tennis');
  }

  StartTrainingShoes(){
    this.smartAudio.play('trainingshoes');
  }


  /*StartAudio (){
let Options: StreamingAudioOptions = {
successCallback: () => {console.log()},
errorCallback: () => {console.log()},
initFullscreen: false,
}
this.streamingMedia.playAudio('http://vozme.com/speech/en-fm/31/3136a9f696493782b8b07c895377f81f.mp3',Options);

  }*/
}
