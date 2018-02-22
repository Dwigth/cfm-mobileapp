import { Injectable }   from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';
import { Announcement } from './announcement';

import { Observable } from 'rxjs/Observable';
import { AlertController } from "ionic-angular";
import { ActivitiesService } from '../activitiesRecorder/services/activities.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AnnouncementService {

announcements:Observable<any[]>;
day:string;
constructor(
  public db:AngularFireDatabase,
  public alertCtrl:AlertController,
  public actSrv:ActivitiesService,
  public firebaseAuth:AngularFireAuth,){
moment.locale('es');
}

private refLis(){
  return  this.db.list('announcements');
}
private refObj(itemkey){
  return this.db.object('announcements/' + itemkey);
}

public getAnnouncementsByDate(){
this.day = moment().format("DDD");
let itemRef = this.db.list("/announcements",val => val.orderByChild("day").equalTo(this.day)).valueChanges();
return this.announcements =  itemRef;
}

getNotify(){
  let itemRef = this.refLis().valueChanges();
  return this.announcements =  itemRef;;
}

public  editAnnouncement(Announcement:Announcement):void{
this.refObj( Announcement.key).update({
  title:Announcement.title,
  body:Announcement.body,
  destacado:Announcement.destacado,
  createdAt:Announcement.createdAt,
  day:Announcement.day
}). then(val => {
  let alert =   this.alertCtrl.create({
    title: '¡Exito!',
    subTitle: 'Ya has editado el aviso: ' + val,
    buttons: ['OK']
    });
    alert.present();
    this.actSrv.recordActivity(
      this.firebaseAuth.auth.currentUser.uid,
      this.firebaseAuth.auth.currentUser.email,
      "Editado un anuncio ",
      moment().format("L"),
      moment().format('LT')
    );
}). catch(err =>{
  let alert =   this.alertCtrl.create({
    title: '¡Error!',
    subTitle: 'Error tipo: ' + err,
    buttons: ['OK']
    });
    alert.present();
});
}

public createAnnouncements(Announcement:Announcement):void{
  this.refLis().push({
    title:Announcement.title,
    body:Announcement.body,
    destacado:Announcement.destacado,
    createdAt:Announcement.createdAt,
    day:Announcement.day
  }).then(value =>{
  this.db.object(value).update({key:value.key});
  let alert =   this.alertCtrl.create({
    title: '¡Exito!',
    subTitle: 'Ya has creado el aviso: ' + value,
    buttons: ['OK']
    });
    alert.present();
    this.actSrv.recordActivity(
      this.firebaseAuth.auth.currentUser.uid,
      this.firebaseAuth.auth.currentUser.email,
      "Creado un anuncio ",
      moment().format("L"),
      moment().format('LT')
    );
  });
}

public deleteAnnouncement(item:Announcement){
this.refObj( item.key).remove()
  .then(value =>{
    let alert =   this.alertCtrl.create({
      title: '¡Exito!',
      subTitle: 'Has eliminado el aviso : ' + value,
      buttons: ['OK']
      });
      alert.present();
      this.actSrv.recordActivity(
        this.firebaseAuth.auth.currentUser.uid,
        this.firebaseAuth.auth.currentUser.email,
        "Borrado un anuncio :" + item.key,
        moment().format("L"),
        moment().format('LT')
      );
  }).catch(err =>{
    let alert =   this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Error : ' + err,
      buttons: ['OK']
      });
      alert.present();
  });
}

}
