import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamilyPage } from './family';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
@NgModule({

  declarations: [
    FamilyPage,
    AngularFireDatabase
  ],
  imports: [
    IonicPageModule.forChild(FamilyPage),
    
  ],
})
export class FamilyPageModule {}
