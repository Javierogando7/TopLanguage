import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../signin/signin';
import { RegistroPage } from '../registro/registro'
import { DatabaseProvider } from '../../providers/database/database';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  usuarios = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public sql: DatabaseProvider) {
  }

  ionViewDidEnter() {
    //this.sql.createTable();
    this.usuarios = this.sql.getUsers();
    
  }
  
  GoSignIn(){
    this.navCtrl.push(SignInPage)
  }
  GoRegistro(){
    this.navCtrl.push(RegistroPage)
  }

  
}
