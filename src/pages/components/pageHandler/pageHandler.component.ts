import { Component } from '@angular/core';
//
import { LoginComponent } from '../../login/login';
import { HomePage } from '../../home/home';
//
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-pageHandler',
  templateUrl: 'pageHandler.component.html',
})
export class PageHandlerComponent {

pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public afAuth: AngularFireAuth) {
    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'apps' },
      { title: 'Login', component: LoginComponent, icon: 'log-in' }
    ];
   }

}
