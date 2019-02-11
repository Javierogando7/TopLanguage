import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FavwordsPage } from '../pages/favwords/favwords';
import { QuizPage } from '../pages/quiz/quiz';
import { VocabularyPage } from '../pages/vocabulary/vocabulary';
import { LoginPage } from '../pages/login/login';
import { InicioPage } from '../pages/Inicio/Inicio';
import { RegistroPage } from '../pages/Registro/Registro';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VocabularydetailPage } from '../pages/vocabularydetail/vocabularydetail';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FavwordsPage,
    VocabularyPage,
    QuizPage,
    VocabularydetailPage,
    TabsPage,
    LoginPage,
    InicioPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FavwordsPage,
    VocabularyPage,
    QuizPage,
    VocabularydetailPage,
    TabsPage,
    LoginPage,
    InicioPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
