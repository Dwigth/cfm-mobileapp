import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

//
import { User } from '../../pages/components/users/user';
import { AuthService } from "../../app/auth.service";
//
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
//import * as firebase from 'firebase/app';

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
    public authServ: AuthService ) {  }

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
<ion-list no-lines>

<p *ngIf="submitAttempt" style="color: #ea6153;">Por favor rellene todo los campos correctamente.</p>

<form  [formGroup]="registerForm">

<ion-item>
  <ion-label floating>Nombre</ion-label>
  <ion-input type="text"  formControlName="name"  ></ion-input>
</ion-item>
<ion-item>
  <ion-label floating>Apellido paterno</ion-label>
  <ion-input type="text"  formControlName="lastName" ></ion-input>
</ion-item>
<ion-item>
  <ion-label floating>Apellido materno</ion-label>
  <ion-input type="text"  formControlName="lastName2" ></ion-input>
</ion-item>
<ion-item>
  <ion-label floating>Correo</ion-label>
  <ion-input type="email"  formControlName="email" ></ion-input>
</ion-item>

<ion-item>
  <ion-label floating>Contraseña</ion-label>
  <ion-input type="password"  formControlName="password" ></ion-input>
</ion-item>

<ion-item>
  <button type="button" (click)="logForm()" ion-button block>Registrar</button>
</ion-item>
</form>

</ion-list>
</ion-content>
`
})
export class ModalRegister {
  //new;

  registerForm:FormGroup;
  submitAttempt:boolean;
  
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public authServ: AuthService,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public formBuilder: FormBuilder){ 
      this.registerForm = formBuilder.group({
        name: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        lastName:['',Validators.compose([Validators.required])],
        lastName2:['',Validators.compose([Validators.required])],
        email: ['',Validators.required],
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
    this.authServ.signup(user.email,user.password);
    const itemRef = this.db.list('users');
    itemRef.push({
        name:user.name,
        lastName:user.lastName,
        lastName2:user.lastName2,
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
      const updateQuery = this.db.object('users/' + value.key);
      updateQuery.update({
        key:value.key
      });
    });
    this.viewCtrl.dismiss();
  }
}


}
