import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SQLite } from "@ionic-native/sqlite";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/main/main';
import { FavwordsPage } from '../pages/favwords/favwords';
import { AddWordPage } from '../pages/addword/addword';
import { QuizPage } from '../pages/quiz/quiz';
import { VocabularyPage } from '../pages/vocabulary/vocabulary';
import { SignInPage } from '../pages/signin/signin';
import { RegistroPage } from '../pages/registro/registro';
import { SettingPage } from '../pages/setting/setting';
import { SearchPage } from '../pages/search/search';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VocabularydetailPage } from '../pages/vocabularydetail/vocabularydetail';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SettingPage,
    SearchPage,
    MainPage,
    FavwordsPage,
    AddWordPage,
    VocabularyPage,
    QuizPage,
    VocabularydetailPage,
    TabsPage,
    SignInPage,
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
    SettingPage,
    MainPage,
    SearchPage,
    FavwordsPage,
    AddWordPage,
    VocabularyPage,
    QuizPage,
    VocabularydetailPage,
    TabsPage,
    SignInPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
