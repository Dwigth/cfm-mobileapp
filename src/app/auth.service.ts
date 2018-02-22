import { Injectable } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { ActivitiesService } from '../pages/activitiesRecorder/services/activities.service';
@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

    constructor(
      private firebaseAuth: AngularFireAuth,
      public alertCtrl: AlertController,
      public actSrv:ActivitiesService) {
      this.user = firebaseAuth.authState;
    }

    signup(email: string, password: string) {
      this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Success!', value);
          this.showAlert("Muchas gracias por registrarte","Bienvenido");
          this.actSrv.recordActivity(
            this.firebaseAuth.auth.currentUser.uid,
            this.firebaseAuth.auth.currentUser.email,
            "Registrado en CFM",
            moment().format("L"),
            moment().format('LT')
          );
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
          this.showAlert(err.message,"Algo salió mal");
        });
    }


    login(email: string, password: string) {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
          this.showAlert(this.firebaseAuth.auth.currentUser.email,"Bienvenido: ");
          this.actSrv.recordActivity(
            this.firebaseAuth.auth.currentUser.uid,
            this.firebaseAuth.auth.currentUser.email,
            "Iniciado sesión",
            moment().format("L"),
            moment().format('LT')
          );
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
          this.showAlert(err.message,"Algo salió mal");
        });



    }

    logout() {
      this.actSrv.recordActivity(
        this.firebaseAuth.auth.currentUser.uid,
        this.firebaseAuth.auth.currentUser.email,
        "Cerrado sesión",
        moment().format("L"),
        moment().format('LT')
      );
      this.firebaseAuth
        .auth
        .signOut();
    }

    showAlert(message,title){
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['OK']
      });
      alert.present();
    }


}
