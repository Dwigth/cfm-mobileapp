import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: 'tutorRequest.html'
})      

export class TutorRequestComponent implements OnInit {
    requests: Observable<any[]>;
    currentUser;

    constructor(
        public db: AngularFireDatabase,
        public afAuth:AngularFireAuth,
    ) { 
        this.requests = db.list('users/'+afAuth.auth.currentUser.uid + "/requests",
        val => val
        .orderByChild('accepted')
        .equalTo(false)
        ).valueChanges();
        this.currentUser = afAuth.auth.currentUser;
     }

    ngOnInit() { }

     acceptRequest(uid){
        this.db.object("users/" + this.currentUser.uid + "/requests/" + uid + "/" ).update({
            accepted:true
        });

        this.db.object( uid + "/students/").update({

        });
     }

     declineRequest(uid){

     }
}
