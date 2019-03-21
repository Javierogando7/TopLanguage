import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  count =  1;
  quizTitle = "Quiz: question ";
  str = "";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quizWordsArray.push('Manzana');
    this.quizWordsArray.push('Piña');
    this.quizWordsArray.push('Pera');
    this.quizWordsArray.push('Durazno');
    this.quizWordsArray.push('Banana');
    this.quizWordsArray.push('Arroz');
    this.quizWordsArray.push('Naranja');
    this.quizWordsArray.push('Flor');
    this.quizWordsArray.push('Mariposa');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

  questionCount(){
    this.str = this.quizTitle + this.count + " of 20";
    return this.str;
  }

  countUpdate(){
    if(this.count < 20) {
      this.count = this.count + 1;
    }
    else if(this.count == 20){
      this.count = 1;
    }
  }

  quizGeneral(){
    this.buttonUpdate
    this.questionCount
    
  }

  buttonUpdate(){
    this.wordForButton1 = this.quizWordsArray[Math.floor(Math.random() * this.quizWordsArray.length)];
    this.wordForButton2 = this.quizWordsArray[Math.floor(Math.random() * this.quizWordsArray.length)];
    this.wordForButton3 = this.quizWordsArray[Math.floor(Math.random() * this.quizWordsArray.length)];
    this.wordForButton4 = this.quizWordsArray[Math.floor(Math.random() * this.quizWordsArray.length)];
  }

  update(){
    
  

  

}
