import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class StudentService {

    constructor(
        public db:AngularFireDatabase,
        public afAuth:AngularFireAuth
    ) { }

    public getStudentGroups(){
      return  this.db.list("groups",val => val.orderByChild("members/"+this.afAuth.auth.currentUser.uid).equalTo(true)).valueChanges();
    }

    public getLessons(groupkey){
        return this.db.list("lessons/"+groupkey).valueChanges();
    }
}