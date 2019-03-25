import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { MainPage } from '../main/main'
import { SettingPage } from '../setting/setting';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  words = [];
  countWord = 0;

  constructor(public navCtrl: NavController, public app: App, public sql: DatabaseProvider) {

  }

  ionViewDidEnter(){
    this.words = this.sql.getWords();
  }

  loadSetting(){
    this.app.getRootNav().push(SettingPage);
  }

  loadSignOut(){
    this.app.getRootNav().setRoot(MainPage);
  }
}
