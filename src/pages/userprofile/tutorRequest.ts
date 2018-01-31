import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'tutorRequest.html'
})      

export class TutorRequestComponent implements OnInit {
    requests: Observable<any[]>;
    currentUser;

    constructor(
        public db: AngularFireDatabase,
        public afAuth:AngularFireAuth,
        public alertCtrl: AlertController,
    ) { 
        this.requests = db.list('users/'+afAuth.auth.currentUser.uid + "/requests",
        val => val
        .orderByChild('accepted')
        .equalTo(false)
        ).valueChanges();
        this.currentUser = afAuth.auth.currentUser;
        
     }

    ngOnInit() {  }

     acceptRequest(uid){
        let confirm = this.alertCtrl.create({
            title: 'Solicitudes',
            message: '¿Está de acuerdo con aceptar esta solicitud?',
            buttons: [
              {
                text: 'No',
                handler: () => {
                  this.declineRequest(uid);
                }
              },
              {
                text: 'Si',
                handler: () => {
                    this.db.object("users/" + this.currentUser.uid + "/requests/" + uid + "/" ).update({
                        accepted:true
                    });
            
                    this.db.object( "users/" + uid + "/students/").update({
                        requestAcepted:uid
                    });
                    this.db.object( "tutorRequest/" + uid + "/" + this.currentUser.uid + "/").update({
                        accepted:true
                    });
                }
              }
            ]
          });
          confirm.present();
     }

     declineRequest(uid){

     }
}
