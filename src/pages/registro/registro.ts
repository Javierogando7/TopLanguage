import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  name = '';
  email = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public sql: DatabaseProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  ionViewWillEnter() {
    this.sql.createTableregister();
  }
  
  SaveUser(){
    if(this.name != '' && this.password != ''){
      this.sql.insertuser(this.name, this.email, this.password);
      console.log(this.name + this.password + this.email);
      console.log ('Sus datos han sido guardados satisfactoriamente! ');
      this.navCtrl.pop();
    }
  }
  
}
