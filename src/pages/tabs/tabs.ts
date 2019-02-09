import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FavwordsPage } from '../favwords/favwords'
import { QuizPage } from '../quiz/quiz'
import { VocabularyPage } from '../vocabulary/vocabulary'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Home = HomePage;
  tab2Vocabulary = VocabularyPage;
  tab3FavWords = FavwordsPage;
  tab4Quiz = QuizPage;

  constructor() {

  }
}
