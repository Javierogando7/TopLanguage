import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, ItemSliding } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { convertDataToISO } from 'ionic-angular/umd/util/datetime-util';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SignInPage {

items = [];


  username = '';
  password = '';
  usuarios =  [];
  passwords = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public sql: DatabaseProvider) {
  }

  ionViewWillEnter() {
    this.sql.createTableregister();
   
  }
  ionViewDidEnter() {
  
    this.setFilteredItems();
 

 
    
  }
  

  filterUsers(username){
     return this.items.filter((item) => {
        return item.name.toLowerCase().indexOf(username.toLowerCase()) > -1;
        
    });     
  }

filterPassword(password){
    return this.items.filter((item) => {
   return item.password.toLowerCase().indexOf(password.toLowerCase()) > -1;
   
    }); }


    setFilteredItems() {
  this.usuarios = this.filterUsers(this.username);
  this.passwords = this.filterPassword(this.password);
  
    }


 // Validacion de datos, aun no funcional..

  GoHome(){
   if (this.username === this.usuarios.toString() || this.password === this.passwords.toString()){
   this.navCtrl.push(TabsPage); 
   }
  } }

   /* if ( this.username === usuarios; //|| this.password == this.sql.getPassword(this.password).toString()
    )
      this.navCtrl.push(TabsPage);
   }*/
    
    
