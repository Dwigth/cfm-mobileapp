import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.html',
})
export class dashboardPage implements OnInit {
  user:Observable<any[]>;
  constructor(
    public db:AngularFireDatabase,
    public afAuth:AngularFireAuth) {
      let user = afAuth.auth.currentUser;
      this.user = db.list('users', value => value.orderByChild('email').equalTo(user.email)).valueChanges();
    }


  ngOnInit() {}
}
