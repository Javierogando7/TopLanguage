import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject} from "@ionic-native/sqlite";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private sqlite: SQLite) {

  }

  getDatabase(){
    this.sqlite.create({name: '', location: ''})
        .then(() => {

        })
        .catch(() => {
          
        });
  }
}
