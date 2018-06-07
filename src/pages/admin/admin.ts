import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNewPage } from '../add-new/add-new';
import { ShowPage } from '../show/show';
import { DeletePage } from '../delete/delete';


@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  add(){
    this.navCtrl.push("AddNewPage")
    console.log("Added")
  }

  show(){
    this.navCtrl.push("ShowPage")
    console.log("Showed")
  }

  del(){
    this.navCtrl.push("DeletePage")
    console.log("Deleted")
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

}
