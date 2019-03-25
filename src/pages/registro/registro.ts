import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  name : string;
  email : string;
  password : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sql: DatabaseProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  ionViewWillEnter() {
    this.sql.createTableregister();}
  
  SaveUser(){
  
  this.sql.insertuser(this.name, this.email, this.password);
  console.log ('Sus datos han sido guardados satisfactoriamente! ')
  this.navCtrl.pop();
  
  }
  
}
