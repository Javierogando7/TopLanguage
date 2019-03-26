import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, ItemSliding } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DatabaseProvider } from '../../providers/database/database';

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

  }

  ionViewDidEnter() {
    this.items = this.sql.getUsers();
  }
  

  filterUsers(username){
    return this.items.filter((item) => {
        return item.name.toLowerCase().indexOf(username.toLowerCase()) > -1;
    });     
  }

    setFilteredItems() {
      this.usuarios = this.filterUsers(this.username);
    }


  GoHome(){
    if(this.username != '' && this.password != ''){
      this.setFilteredItems();
      if (this.username === this.usuarios[0].name && this.password === this.usuarios[0].password){
        this.sql.id = this.usuarios[0].id;
        this.navCtrl.push(TabsPage); 
      }
    }
  } 

}

    
    
