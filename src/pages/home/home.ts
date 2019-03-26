import { Component } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main'
import { SettingPage } from '../setting/setting';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  words = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public sql: DatabaseProvider) {

  }

  ionViewDidEnter(){
    this.words = this.sql.getWords();
  }

  loadSetting(){
    console.log(this.sql.id);
    this.app.getRootNav().push(SettingPage);
  }

  loadSignOut(){
    this.app.getRootNav().setRoot(MainPage);
  }
}
