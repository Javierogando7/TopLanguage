import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AddWordPage } from '../addword/addword';

/**
 * Generated class for the FavwordsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favwords',
  templateUrl: 'favwords.html',
})
export class FavwordsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavwordsPage');
  }

  goAddWord() {
    this.app.getRootNav().push(AddWordPage);
  }

}
