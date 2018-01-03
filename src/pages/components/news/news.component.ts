import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

//
import { News } from './news';
import { PushService } from '../../../app/push.service'
//
import { NewsService } from './news.service';
import { UpdateNewsModal } from './news-list.component';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-news',
  templateUrl: 'news.component.html',
})
export class NewsComponent implements OnInit {

  constructor(
    public modalCtrl:ModalController,
    public newSvc:NewsService,
    public nav:NavController
    ) {

      }

  OpenModal ():void{
    let modal = this.modalCtrl.create(NewsFormPage);
    modal.present();
 }

Op():void{
  this.nav.push(UpdateNewsModal);
}
  ngOnInit() {}
}
@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Noticia
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
<form >
<ion-item *ngFor="let users of user | async">
<input type="hidden" id="name" value="{{users.name  +  users.lastName}}">
<input type="hidden" id="photoURL" value="{{users.imageURL}}">
</ion-item>
<ion-item>
  <ion-label floating>Titulo</ion-label>
  <ion-input type="text" required [(ngModel)]="news.title" name="title"></ion-input>
</ion-item>

<ion-item>
  <textarea rows='5' data-min-rows='3' [(ngModel)]="news.textBody" name="textBody" placeholder='Cuerpo de noticia' required></textarea>
</ion-item>

<ion-item>
  <upload-form></upload-form>
</ion-item>

<ion-item>
  <button type="submit" ion-button color="danger" block (click)="uploadNew()">Registrar</button>
</ion-item>
</form>
</ion-content>
`
})
export class NewsFormPage {

user:Observable<any[]>;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public db: AngularFireDatabase,
    public newSvc:NewsService,
    public authServ: AngularFireAuth,
    public push:PushService){

this.user = db.list('users', value => value.orderByChild('email').equalTo(this.authServ.auth.currentUser.email)).valueChanges();

  }

news = {
  title: '',
  imageURL: '',
  textBody: '',
  createdAt:'',
  creatorPhotoURL:'',
  uploadFor:''
}

uploadNew(){
  this.news.imageURL = (<HTMLInputElement>document.getElementById('url')).value;
  this.news.createdAt = (<HTMLInputElement>document.getElementById('date')).value;
  this.news.uploadFor = (<HTMLInputElement>document.getElementById('name')).value;
  this.news.creatorPhotoURL = (<HTMLInputElement>document.getElementById('photoURL')).value;
  let currentNew = new News();
  currentNew.imageURL = this.news.imageURL;
  currentNew.textBody = this.news.textBody;
  currentNew.title = this.news.title;
  currentNew.createdAt = this.news.createdAt;
  currentNew.uploadFor = this.news.uploadFor;
  currentNew.creatorPhotoURL = this.news.creatorPhotoURL;


  console.log(currentNew)
  this.newSvc.createNews(currentNew);
}

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
