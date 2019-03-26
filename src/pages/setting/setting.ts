import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  name = '';
  email = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public sql: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  goHomePage() {
    if(this.name != '' && this.email != '' && this.password != ''){
      this.sql.updateUser(this.name, this.email, this.password, this.sql.id);
      this.navCtrl.push(TabsPage);
    }
  }

}
