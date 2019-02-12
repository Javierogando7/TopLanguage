import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../signin/signin';
import { RegistroPage } from '../registro/registro'


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  GoSignIn(){
    this.navCtrl.push(SignInPage)
  }
  GoRegistro(){
    this.navCtrl.push(RegistroPage)
  }
}
