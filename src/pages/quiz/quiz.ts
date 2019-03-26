import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizResultPage } from '../quiz-result/quiz-result';


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
  quizWordsArray = ['Manzana','Piña','Pera','Durazno','Fresa','Cereza','Uvas','Bolas','Estadio','bate'];
  srcImgArray = ["/assets/imgs/apple.jpeg","/assets/imgs/Pina.jpg","/assets/imgs/pear.jpeg","/assets/imgs/peach.jpeg",
                  "/assets/imgs/Fresa.jpg","/assets/imgs/Cereza.jpg","/assets/imgs/Uvas.jpg","/assets/imgs/Balls.jpg",
                  "/assets/imgs/Stadium.jpg","/assets/imgs/Bat.jpg"];
  wordForButton1 = "";
  wordForButton2 = "";
  wordForButton3 = "";
  wordForButton4 = "";
  imageForQuiz: string;
  content: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

  getQuestionCount(){
    this.str = this.quizTitle + this.count + " of 10";
    this.buttonUpdate();
    return this.str
  }

  getImage(){
    this.imageUpdate();
    return this.imageForQuiz;
  }

  

  countUpdate(){
    if(this.count < 10) {
      this.count = this.count + 1;
    }
    else if(this.count == 10){
      this.count = 1;
      this.navCtrl.push(QuizResultPage);

    }
  }

  quizGeneral(){
    this.buttonUpdate();
    this.countUpdate();
    this.imageUpdate();
    this.update();
    
  }

  imageUpdate(){
    this.imageForQuiz = this.srcImgArray[Math.floor(Math.random()* this.srcImgArray.length)]
  }

  buttonUpdate(){
    this.wordForButton1 = this.quizWordsArray[Math.floor(Math.random() * this.quizWordsArray.length)];
    this.wordForButton2 = this.quizWordsArray[Math.floor(Math.random() * this.quizWordsArray.length)];
    this.wordForButton3 = this.quizWordsArray[Math.floor(Math.random() * this.quizWordsArray.length)];
    this.wordForButton4 = this.quizWordsArray[Math.floor(Math.random() * this.quizWordsArray.length)];
    
  }

  update(){
    this.content.resize();
}



  

}
