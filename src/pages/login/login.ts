import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

//
import { User } from '../../pages/components/users/user';
import { AuthService } from "../../app/auth.service";
//
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
})
export class LoginComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public modalCtrl: ModalController,
    public afAuth: AngularFireAuth,
    public authServ: AuthService ) {
      var user = this.afAuth.auth.currentUser;
     }

    Open (){
      let modal = this.modalCtrl.create(ModalRegister);
      modal.present();
   }

  ngOnInit() {
  }
  user = {
    email: '',
    password: '',
  };

  //user:User;
  submitForm(){
    let user = new User();
    user.email = this.user.email;
    user.password = this.user.password;
  this.authServ.login(user.email,user.password);
console.log(this.user)
  }

}
@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Registro
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
<ion-list>
<form (ngSubmit)="logForm()">
<ion-item>
  <ion-label floating>Nombre</ion-label>
  <ion-input type="text" required [(ngModel)]="user.name" name="name"></ion-input>
</ion-item>
<ion-item>
  <ion-label floating>Apellido</ion-label>
  <ion-input type="text" required [(ngModel)]="user.lastName" name="lastName"></ion-input>
</ion-item>
<ion-item>
  <ion-label floating>Correo</ion-label>
  <ion-input type="email" required [(ngModel)]="user.email" name="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label floating>Contraseña</ion-label>
  <ion-input type="password" required [(ngModel)]="user.password" name="password"></ion-input>
</ion-item>

<ion-item>
  <button type="submit" ion-button block>Registrar</button>
</ion-item>
</form>
</ion-list>
</ion-content>
`
})
export class ModalRegister {
  //new;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public authServ: AuthService,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth){
      let user = this.afAuth.auth.currentUser;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  user = {
    name: '',
    lastName:'',
    email: '',
    password: '',
  };
  //user:User;
  logForm(){
    let user = new User();
    user.name = this.user.name;
    user.lastName = this.user.lastName;
    user.email = this.user.email;
    user.password = this.user.password;
    this.authServ.signup(user.email,user.password);
    const itemRef = this.db.list('users');
    const promise =
    itemRef.push({
        name:user.name,
        lastName:user.lastName,
        age:'N/A',
        email:user.email,
        password:user.password,
        accessLevel:'user',
        advertising: 'N/A',
        status:'active',
        ocupation: 'N/A',
        phone:'N/A',
        course:'N/A',
        observation:'N/A',
        grade:'N/A',
        tutor:'N/A',
        relationship:'N/A',
        tutorAge:'N/A',
        tutorEmail:'N/A',
        imageURL:'https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2Findice.png?alt=media&token=8080adfa-8bb4-4d4c-8a2b-ddac12c08a2a'
    }).then(value =>{
      console.log(value.key);
      const s = this.db.object('users/' + value.key);
      s.update({key:value.key});
    });

  }


}
