import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import * as moment from 'moment';
//
import { User } from '../../pages/components/users/user';
import { AuthService } from "../../app/auth.service";
//
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivitiesService } from '../activitiesRecorder/services/activities.service';

//import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  date;
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public modalCtrl: ModalController,
    public afAuth: AngularFireAuth,
    public authServ: AuthService,
    public loadingCtrl: LoadingController,
    public actSrv:ActivitiesService,
    public formBuilder: FormBuilder) { 

      this.loginForm = formBuilder.group({
        email: ['',Validators.required],
        password: ['',Validators.required],
      })
    }

    Open (action){
      let modal = this.modalCtrl.create(ModalRegister,{action:action});
      modal.present();
      console.log(action);
      
   }

  ngOnInit() {
  }

  //user:User;
  submitForm(){
    this.date = moment();
    let user = new User();
    user.email = this.loginForm.value.email;
    user.password = this.loginForm.value.password;
    //this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
    this.authServ.login(user.email,user.password);
    this.presentLoading();
    
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Espere porfavor...",
      duration: 1500
    });
    loader.present();
   
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
<ion-list no-lines *ngIf="action == 'registro' " >

<p text-center *ngIf="submitAttempt" style="color: #ea6153;">Por favor rellene todo los campos correctamente.</p>

<form  [formGroup]="registerForm">
<ion-row>

<ion-col col-12>

<ion-item>
  <input autocorrect="on" placeholder="Nombre" type="text"  formControlName="name"  >
</ion-item>

</ion-col>

<ion-col col-12>
<ion-item>
  <input autocorrect="on" placeholder="Apellido paterno" type="text"  formControlName="lastName" >
</ion-item>
</ion-col>

<ion-col col-12>
<ion-item>
  <input autocorrect="on" placeholder="Apellido materno" type="text"  formControlName="lastName2" >
</ion-item>
</ion-col>

<ion-col col-12>
<ion-item>
  <input autocorrect="on" placeholder="e-mail" type="text"  formControlName="email" >
</ion-item>
</ion-col>

<ion-col col-12>
<ion-item>
  <input autocorrect="on" placeholder="Contraseña" type="password"  formControlName="password" >
  <p text-wrap *ngIf="submitAttempt" style="color: #ea6153;">Recuerda que tu contraseña debe tener al menos 8 carácteres, números y carácteres especiales.</p>

</ion-item>
</ion-col>

</ion-row>

<ion-item>
  <button type="button" (click)="logForm()" ion-button block>Registrar</button>
</ion-item>
</form>

</ion-list>
<ion-list no-lines *ngIf="action == 'recuperacion' " >
<ion-row>

<ion-col col-12>

<ion-item>
  <input [(ngModel)]="correo" autocorrect="on" placeholder="ejemplo@ejemplo.com" type="text"   >
  <label text-center>Correo de recuperación</label>
  <button type="button" ion-button (click)="recuperar(correo)" block>Enviar </button>
</ion-item>

</ion-col>
</ion-row>

</ion-list>

</ion-content>
`
})
export class ModalRegister {
  //new;

  registerForm:FormGroup;
  submitAttempt:boolean;
  action:string;
  correo:string;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public authServ: AuthService,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public loadingCtrl: LoadingController,
    public actSrv:ActivitiesService,
    public formBuilder: FormBuilder){ 
      this.action = params.get('action');

      this.registerForm = formBuilder.group({
        name: ['',Validators.compose([Validators.required])],
        lastName:['',Validators.compose([Validators.required])],
        lastName2:['',Validators.compose([Validators.required])],
        email: ['',Validators.compose([Validators.required])],
        password: ['',Validators.required],
      })

    }

  dismiss() {
    this.viewCtrl.dismiss();
  };
  logForm(){
    //la variable está en el template del modal   
    this.submitAttempt = true;
    
    if(this.registerForm.valid){
    let user = new User();
    user.name = this.registerForm.value.name.trim();
    user.lastName = this.registerForm.value.lastName.trim();
    user.lastName2 = this.registerForm.value.lastName2.trim();
    user.email = this.registerForm.value.email.trim();
    user.password = this.registerForm.value.password.trim();
    //this.authServ.signup(user.email,user.password);
    this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then(val =>{
      const itemRef = this.db.object('users/'+ this.afAuth.auth.currentUser.uid);
      itemRef.update({
          name:user.name,
          lastName:user.lastName,
          lastName2:user.lastName2,
          age:'N/A',
          email:user.email.toLowerCase(),
          password:user.password,
          accessLevel:'user',
          advertising: 'N/A',
          invitation:false,
          isStudent:false,
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
          uid: this.afAuth.auth.currentUser.uid,
          imageURL:'https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2Findice.png?alt=media&token=8080adfa-8bb4-4d4c-8a2b-ddac12c08a2a'
      });
      this.presentLoading();
      this.viewCtrl.dismiss();
      
    })
    
  }
}

presentLoading() {
  let loader = this.loadingCtrl.create({
    content: "Espere porfavor...",
    duration: 1500
  });
  loader.present();
}

recuperar(correo){
  this.afAuth.auth.sendPasswordResetEmail(correo.toLowerCase()).then( val => {
      console.log(val);
      let alert = this.alertCtrl.create({
        title:'Exito',
        subTitle:'Se te ha enviado un correo de validación.',
        buttons:[{
          text:'Ok',
          handler: data =>{
            this.dismiss();
          }
        }]
      });
      alert.present();
    }
  ).catch(err => {
    console.log(err);
    let alert = this.alertCtrl.create({
      title:'Error',
      subTitle:'Se ha producido el siguiente evento con el código de error: ' + "'" +err.code + "'",
      buttons:['Ok']
    });
    alert.present();
  });
}

}
