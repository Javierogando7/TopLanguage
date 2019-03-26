import { DatabaseProvider } from './../providers/database/database';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MainPage } from '../pages/main/main'
import { NativeAudio } from '@ionic-native/native-audio';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, nativeAudio : NativeAudio, smartaudio : SmartAudioProvider, database: DatabaseProvider) {
    platform.ready().then(() => {

      //database.deleteDatabase();
      database.createTable();
      database.createTableregister();

      smartaudio.preload('balls','assets/Audio/Balls.mp3');
      smartaudio.preload('stadium','assets/Audio/Stadium.mp3');    
      smartaudio.preload('basketballhoop','assets/Audio/BasketballHoop.mp3');
      smartaudio.preload('bat','assets/Audio/Bat.mp3');   
      smartaudio.preload('football','assets/Audio/Football.mp3');
      smartaudio.preload('hockey','assets/Audio/Hockey.mp3'); 
      smartaudio.preload('tennis','assets/Audio/Tennis.mp3'); 
      smartaudio.preload('trainingshoes','assets/Audio/Training shoes.mp3');    
      smartaudio.preload('hello','assets/Audio/Hello.mp3');  
      smartaudio.preload('howareyou','assets/Audio/HowAreYou.mp3');      
      smartaudio.preload('whatsup','assets/Audio/WhatsUp.mp3'); 
      smartaudio.preload('BuenosDias','assets/Audio/BuenosDias.mp3');
      smartaudio.preload('BuenasTardes','assets/Audio/BuenasTardes.mp3');
      smartaudio.preload('BuenasNoches','assets/Audio/BuenasNoches.mp3');
      smartaudio.preload('apple','assets/Audio/Apple.mp3'); 
      smartaudio.preload('pear','assets/Audio/Pear.mp3'); 
      smartaudio.preload('peach','assets/Audio/Peach.mp3'); 
      smartaudio.preload('Uva','assets/Audio/Uva.mp3'); 
      smartaudio.preload('Pina','assets/Audio/Pina.mp3'); 
      smartaudio.preload('Mango','assets/Audio/Mango.mp3'); 
      smartaudio.preload('Cereza','assets/Audio/Cereza.mp3'); 
      smartaudio.preload('Limon','assets/Audio/Limon.mp3'); 
      smartaudio.preload('Fresa','assets/Audio/Fresa.mp3'); 
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

