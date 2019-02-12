import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { MainPage } from '../main/main'
import { SignInPage } from '../signin/signin';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  loadSetting(){
    this.app.getRootNav().push(SettingPage);
  }

  loadSignOut(){
<<<<<<< HEAD
    this.app.getRootNav().setRoot(MainPage);
=======
    this.app.getRootNav().setRoot(SignInPage);
>>>>>>> 8ac9cbbf7240aecc01d98f1beda32605dc9a0dcf
  }
}
