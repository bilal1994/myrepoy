import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { KidServicesProvider } from '../../providers/kid-services/kid-services';
import { KidsConfig } from '../../model/kidsDB';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AdminPage } from '../admin/admin';


@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
  
  kidList : AngularFireObject<any>
  editKid : KidsConfig ={
    FirstName : '',
    LastName : '',
    Phone : '',
    Address : '',
    Email : ''
  };

  itemArray =[];
  myObject = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public alertCtrl: AlertController, 
    public edit: KidServicesProvider, public db: AngularFireDatabase) {

      this.kidList = db.object("kidsdb");
      this.kidList.snapshotChanges().subscribe(fun => {
        let k = fun.payload.toJSON()
        k ['key'] = fun.key
        this.itemArray.push(fun.payload.val() as KidsConfig)
        console.log(this.itemArray)
        this.myObject = Object.entries(this.itemArray[0])
        console.log(this.myObject)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
  }

  update(kid){
    this.edit.updatekid(kid)
    console.log("updated")
    this.navCtrl.setRoot(AdminPage)
  }

  Delete(kid){
    this.edit.deletekid(kid)
    console.log("Deleted")
  }

  showPrompt(key, FirstName, LastName, Phone, Address, Email) {
    let prompt = this.alertCtrl.create({
      title: 'Edit',
      message: "Edit on Data of kids",
      inputs: [
        {
          name: 'FirstName',
          placeholder: 'FirstName'
        },
        {
          name: 'LastName',
          placeholder: 'LastName'
        },
        {
          name: 'Phone',
          placeholder: 'Phone'
        },
        {
          name: 'Address',
          placeholder: 'Address'
        },
        {
          name: 'Email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.editKid.FirstName = data.FirstName;
            this.editKid.LastName = data.LastName;
            this.editKid.Phone = data.Phone;
            this.editKid.Address = data.Address;
            this.editKid.Email = data.Email;
            this.editKid.key = key;
            console.log(this.editKid)
            this.update(this.editKid)
          }
        }
      ]
    });
    prompt.present();
  }

}
