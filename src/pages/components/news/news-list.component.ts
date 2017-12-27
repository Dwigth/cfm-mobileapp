import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { News } from './news';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { NewsService } from './news.service';
import { UploadFormComponent } from '../uploads/shared/upload-form/upload-form.component'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-news-list',
  templateUrl: 'news-list.component.html',
})

export class NewsListComponent implements OnInit {

  /*OpenModalUpdate ():void{
    let modal = this.modalCtrl.create(UpdateNewsModal);
    modal.present();
 }*/
 user:Observable<any[]>;
 item:News;

   constructor(
     public platform: Platform,
     public params: NavParams,
     public viewCtrl: ViewController,
     public db: AngularFireDatabase,
     public newSvc:NewsService,
     public authServ: AngularFireAuth){
 this.user = db.list('users', value => value.orderByChild('email').equalTo(this.authServ.auth.currentUser.email)).valueChanges();
 this.item = params.data.item;
   }



 news = {
   title: '',
   imageURL: '',
   textBody: '',
   createdAt:'',
   creatorPhotoURL:'',
   uploadFor:'',
   key:''
 }

 ngOnInit(){
   this.news.title = this.item.title;
   this.news.textBody = this.item.textBody;
   this.news.imageURL = this.item.imageURL;
   this.news.key = this.item.key;
 }

 updateNew(){



   this.news.imageURL = this.item.imageURL;
   this.news.createdAt = this.item.createdAt;
   this.news.uploadFor = (<HTMLInputElement>document.getElementById('name')).value;
   this.news.creatorPhotoURL = (<HTMLInputElement>document.getElementById('photoURL')).value;
   //si sube una nueva foto
   let newPhoto = (<HTMLInputElement>document.getElementById('url'));

   let currentNew = new News();
   currentNew.key = this.item.key;
   currentNew.textBody = this.news.textBody;
   currentNew.title = this.news.title;
   currentNew.createdAt = this.news.createdAt;
   currentNew.uploadFor = this.news.uploadFor;
   let photoURL = ( newPhoto != null) ? newPhoto.value : this.news.imageURL;
    currentNew.imageURL = photoURL;
   currentNew.creatorPhotoURL = this.item.creatorPhotoURL;
   this.newSvc.updateNews(currentNew);
 }
}

@Component({
  template: `

  <ion-content>
  <div id="container">
  </div>
  <ion-list>
    <ion-item *ngFor="let item of news | async">
      <ion-thumbnail item-start>
        <img src="{{item.imageURL}}">
      </ion-thumbnail>
      <h2>{{item.title}}</h2>
      <p>{{item.createdAt}}</p>
      <button ion-button (click)="openNavDetailsPage(item)" clear item-end>Editar</button>
      <button ion-button (click)="this.newSvc.deleteNews(item)" clear item-end>Eliminar</button>
    </ion-item>
  </ion-list>
  </ion-content>
`
})
export class UpdateNewsModal {

  news:Observable<any[]>;

    constructor(
      public navCtrl: NavController,
      public params: NavParams,
      public afDB: AngularFireDatabase,
      public newSvc:NewsService,
      public modalCtrl: ModalController,
      public nav:NavController,
      public viewCtrl:ViewController
    ) {
      this.news = afDB.list('news').valueChanges();
    }

    openNavDetailsPage(news:News) {
        this.nav.push(NewsListComponent, { item: news });
    }


  dismiss() {
    this.viewCtrl.dismiss();
  }


}
