import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWordPage } from './addword';

@NgModule({
  declarations: [
    AddWordPage,
  ],
  imports: [
    IonicPageModule.forChild(AddWordPage),
  ],
})
export class AddwordPageModule {}
