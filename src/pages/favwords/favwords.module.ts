import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavwordsPage } from './favwords';

@NgModule({
  declarations: [
    FavwordsPage,
  ],
  imports: [
    IonicPageModule.forChild(FavwordsPage),
  ],
})
export class FavwordsPageModule {}
