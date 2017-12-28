import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { AnnouncementService } from "./announcements.service";
import { Observable } from "rxjs/Observable";
import { Announcement } from "./announcement";


@Component({
  selector: 'announcement-crud',
  templateUrl: 'announcement-crud.html',
})
export class AnnouncementCrudComponent implements OnInit {
isEditing:boolean = false;
item:Announcement;
  constructor(public modalCtrl:ModalController,
  public nav:NavController,
  public params:NavParams,
  public viewCtrl:ViewController,
  public annserv:AnnouncementService) {

    this.isEditing = this.params.get("isEditing");
    this.item = this.params.get("item");
  }

  ngOnInit() {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  announcement = {
    title:'',
    body:'',
  }
  CreateAnnouncement(){
     let annoucement = new Announcement();
     annoucement.title = this.announcement.title;
     annoucement.body = this.announcement.body;
     this.annserv.createAnnouncements(annoucement);
  }

editAnnouncement(){
this.annserv.editAnnouncement(this.item);
}

}

@Component({
  selector: 'announcement-button',
  template: `
<button type="button" ion-button large block color="primary" outline (click)="OpenModal ()">Administrar avisos</button>
  `
})
export class AnnouncementButton{
constructor(public modalCtrl:ModalController,
public nav:NavController){

}
OpenModal ():void{
  let modal = this.modalCtrl.create(AnnouncementModalCRUD);
  modal.present();
}
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


  <ion-item-group>

    <ion-item-divider color="light">Crear avisos</ion-item-divider>
    <button ion-button large block color="secondary" (click)="CreateNewAnnouncementPage()" >Aviso nuevo</button>

  </ion-item-group>

  <ion-item-group>
  <ion-list>
      <ion-item-divider color="light">Avisos</ion-item-divider>
    <ion-item-sliding *ngFor="let item of announcements | async">
        <ion-item >
        <h2>{{item.title}}</h2>
        <p text-wrap>{{item.body}}</p>

        <ion-item>
        <ion-icon name="calendar" item-start></ion-icon>
        FECHA:
        <ion-badge item-end>{{item.createdAt}}</ion-badge>
        </ion-item>
        </ion-item>

      <ion-item-options side="right">
        <button ion-button (click)="editItem(item)" color="secondary">
          <ion-icon name="open"></ion-icon>
          Editar
        </button>
        <button ion-button (click)="this.announSvc.deleteAnnouncement(item)" color="danger">
          <ion-icon name="trash"></ion-icon>
          Eliminar
        </button>
      </ion-item-options>
    </ion-item-sliding>

  </ion-list>
    </ion-item-group>

  </ion-content>
`
})
export class AnnouncementModalCRUD {

  announcements:Observable<any[]>;
  isEditing:boolean = false;

    constructor(
      public navCtrl: NavController,
      public params: NavParams,
      public afDB: AngularFireDatabase,
      public announSvc:AnnouncementService,
      public modalCtrl: ModalController,
      public nav:NavController,
      public viewCtrl:ViewController,

    ) {
      this.announcements = afDB.list('announcements').valueChanges();
    }

    CreateNewAnnouncementPage(){
      this.isEditing = false;
      this.nav.push(AnnouncementCrudComponent,{isEditing:this.isEditing});
    }

editItem(item:Announcement){
  this.isEditing = true;
  this.nav.push(AnnouncementCrudComponent,{isEditing:this.isEditing,item:item});

}

  dismiss() {
    this.viewCtrl.dismiss();

  }


}
