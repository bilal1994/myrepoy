import { Component } from '@angular/core';
import{NavController} from 'ionic-angular';
import{AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { HomePage } from '../home/home';
// import { error } from 'selenium-webdriver';
// import { NgModule } from '@angular/core';

/**
 * Generated class for the FamilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-family',
  templateUrl: 'family.html',
})
export class FamilyPage {
name:string;
peopleList:FirebaseListObservable<any>
  constructor(public navCtrl: NavController, public db:AngularFireDatabase) {
    this.peopleList=db.list('/people')
    
  }

  creataperson (name,stage,phone, phonefather,Adders,paasword){
    console.log(this.name)

    this.peopleList.push({
      name:name,
      stage:stage,
      phone:phone,
      phonefather:phonefather,
      Adders:Adders,
      paasword:paasword
    }).then(newperson=>{
    this.navCtrl.name
      this.navCtrl.push(HomePage);
    } ,error=>{console.log(error);});


}

}