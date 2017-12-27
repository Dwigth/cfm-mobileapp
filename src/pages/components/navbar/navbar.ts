import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from '../../../app/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {
user;
  constructor(public navCtrl: NavController,public afAuth: AngularFireAuth, public authService: AuthService) {
    this.user  = afAuth.auth.currentUser;
    let message = (this.user != null) ? "Usted ha iniciado sesión con: " + this.user.email : "Falló el inicio de sesion";
        console.log(message);
  }


}
