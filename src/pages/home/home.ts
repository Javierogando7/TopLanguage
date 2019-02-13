import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { MainPage } from '../main/main'
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
    this.app.getRootNav().setRoot(MainPage);
  }
}
