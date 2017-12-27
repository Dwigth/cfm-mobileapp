import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { PushService } from '../../app/push.service'
import { ReversePipe } from "../components/sort_reverse";

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    items: Observable<any[]>;
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public afDB: AngularFireDatabase,
    public modalCtrl: ModalController,
    public push:PushService) {
      this.items = afDB.list('news').valueChanges();
  }


   OpenModal (key):void{
     let modal = this.modalCtrl.create(ModalContentPage, {key:key});
     console.log(key)
     modal.present();
  }

}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Descripción
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
<ion-card *ngFor="let item of items | async">
<ion-item>
    <ion-avatar item-start>
      <img src="{{item.creatorPhotoURL}}">
    </ion-avatar>
    <ion-card-title text-wrap id="ti">
      {{item.title}}
      </ion-card-title>
</ion-item>

  <img src="{{item.imageURL}}">

  <ion-card-content id="cardcontent">
  <p>{{item.textBody}}</p>
  </ion-card-content>

        <ion-row>
           <ion-col>
             <button ion-button icon-left color="danger" clear small>
               <ion-icon name="md-calendar"></ion-icon>
               <div>{{item.createdAt}}</div>
             </button>
           </ion-col>
           <ion-col>
             <button ion-button icon-left color="danger" clear small>
               <ion-icon name="person"></ion-icon>
               <div>{{item.uploadFor}}</div>
             </button>
           </ion-col>
         </ion-row>
</ion-card>
</ion-content>
`
})
export class ModalContentPage {
  items: Observable<any[]>;
  //new;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    afDB: AngularFireDatabase){
      let k = this.params.get('key');
      this.items =  afDB.list('news', value => value.orderByChild('key').equalTo(k)).valueChanges();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
