import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'
=======
import { NavController, App } from 'ionic-angular';

>>>>>>> 426c107ee41d747156e507d2c1592aecf01d61d2
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }
<<<<<<< HEAD
  GoLogin(){
    this.navCtrl.push(LoginPage);
=======

  loadSetting(){
    //this.app.getRootNav().push(SettingPage);
  }

  loadSignOut(){
    //this.app.getRootNav().setRoot(LoginPage);
>>>>>>> 426c107ee41d747156e507d2c1592aecf01d61d2
  }
}
