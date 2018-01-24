import { Component, OnInit } from '@angular/core';

import { AlertController } from 'ionic-angular';
import {AuthService} from '../../app/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.html',
})
export class ProfileComponent implements OnInit {
  users: Observable<any[]>;
  student: Observable<any[]>;

  constructor(
    public autServ:AuthService,
    public db: AngularFireDatabase,
    public afAuth:AngularFireAuth,
    public alertCtrl: AlertController) {
    let user = afAuth.auth.currentUser;
    let name, email, photoUrl, uid, emailVerified;
    
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
    }

    this.users = db.list('users', value => value.orderByChild('email').equalTo(user.email)).valueChanges();
    this.student = db.list('students',value => value.orderByChild('uid').equalTo(user.uid)).valueChanges();
  }

  showAlert(message,title){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
  userUpdate = {
  imageURL:'',
  phone:'',
  ocupation:'',
  grade:'',
  age:'',
  advertising:'',
  key:''
  }

  UpdateInfo(){
    let confirm = this.alertCtrl.create({
      title: 'Editar perfil',
      message: '¿En realidad quiere editar su perfil?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {

    
    this.userUpdate.key = (<HTMLInputElement>document.getElementById('key')).value;

    let item = this.db.object('users/'+ this.userUpdate.key);

    let actPhone = (<HTMLInputElement>document.getElementById('actPhone')).value;
    let actGrade = (<HTMLInputElement>document.getElementById('actGrade')).value;
    let actAge = (<HTMLInputElement>document.getElementById('actAge')).value;
    let actOcupation = (<HTMLInputElement>document.getElementById('actOcupation')).value;

    let phone = (this.userUpdate.phone == '') ? actPhone : this.userUpdate.phone;
    let grade = (this.userUpdate.grade == '') ? actGrade : this.userUpdate.grade;
    let age = (this.userUpdate.age == '') ? actAge : this.userUpdate.age;
    let ocupation = (this.userUpdate.ocupation == '') ? actOcupation : this.userUpdate.ocupation;
    let imageURL = (<HTMLInputElement>document.getElementById('url'));
    let currentImage = (<HTMLInputElement>document.getElementById('urlcurrent')).value;
    this.userUpdate.phone = phone;
    this.userUpdate.grade = grade;
    this.userUpdate.age = age;
    this.userUpdate.ocupation = ocupation;
    this.userUpdate.imageURL = (imageURL != null) ? imageURL.value : currentImage ;


  item.update({
    imageURL:this.userUpdate.imageURL,
    phone:this.userUpdate.phone,
    ocupation:this.userUpdate.ocupation,
    grade:this.userUpdate.grade,
    age:this.userUpdate.age,
    advertising:this.userUpdate.advertising
  });
          }
        }
        ]
      });
      confirm.present();
  }

  ngOnInit() {
    console.log( this.afAuth.auth.currentUser.email);
  }
}
