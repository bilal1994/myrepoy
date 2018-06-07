import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { KidServicesProvider } from '../../providers/kid-services/kid-services';
import { KidsConfig } from '../../model/kidsDB';
import { AdminPage } from '../admin/admin';




@IonicPage()
@Component({
  selector: 'page-add-new',
  templateUrl: 'add-new.html',
})
export class AddNewPage {

  addkid : KidsConfig ={
    FirstName : '',
    LastName : '',
    Phone : '',
    Address : '',
    Email : ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public add : KidServicesProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPage');
  }

  addnew(addkid){
    this.add.addkid(addkid).then(done => this.showAlert())
    this.navCtrl.setRoot(AdminPage)
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Kid',
      subTitle: 'New kid was added',
      buttons: ['OK']
    });
    alert.present();
  }

}
