import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
//
import { News } from './news';

//
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsService {
  news: Observable<News[]>;
  newsRef:AngularFireList<News>;

  constructor(public db:AngularFireDatabase,
    public alertCtrl:AlertController,
    public lclPushNot:LocalNotifications) {

  }

  createNews(news: News):void{
    const  itemRef = this.db.list('news');
    const addNews = itemRef.push({
      title: news.title,
      imageURL: news.imageURL,
      textBody: news.textBody,
      createdAt: news.createdAt,
      uploadFor: news.uploadFor,
      creatorPhotoURL:news.creatorPhotoURL
    }).then(value =>{
      const s = this.db.object('news/' + value.key);
      s.update({key:value.key});
      this.showAlert("Excelente","¡Haz subido una noticia al servidor!");
    });
  }

readNews(){
const itemRef = this.db.list("news/").valueChanges();
return itemRef;
}

  updateNews(news: News):void{
    const itemRef = this.db.object('news/' + news.key );
    const updateNews =
    itemRef.update({
      title: news.title,
      imageURL: news.imageURL,
      textBody: news.textBody,
      uploadFor: news.uploadFor
    }).then(val =>{
        this.showAlert("Presione 'OK' para continuar.","Exito al actualizar elemento: " + val);
    }).catch(err =>{
        this.showAlert("Erro tipo: " + err,"Error al actualizar");
    });
  }

deleteNews(news:News):void{

const itemRef = this.db.object('news/' + news.key);

const deleteNew = itemRef.remove().then(value => {
    this.showAlert("Presione 'OK' para continuar.","Exito al eliminar elemento: " + value);
}).catch(err => {
  this.showAlert("Erro tipo: " + err,"Error al eliminar");
});

}

onChildAdded(){
  const itemRef = this.db.list('news');
  itemRef.snapshotChanges(['child_added'])
    .subscribe(actions => {
      actions.forEach(actions=>{
        return actions;
      })
    })
}

  showAlert(message,title){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  confirmAlert(message,title,remove,news:News){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Confirmar',
              handler: () => {
                console.log('Buy clicked');
                remove(news);
              }
            }
          ]
    });
    alert.present();
  }


}
