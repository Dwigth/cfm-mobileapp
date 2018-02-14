import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class InvitationService {
    currentUser:string;

    constructor(
        private db:AngularFireDatabase,) { 
        
     }

        saveInvitation(uid,date,code){
            this.db.object("users/"+uid +"/invitations").update({
                date:date,
                code:code,
            })
            this.db.object("users/"+uid).update({
                invitation:true
            })
        }

        searchByUID(uid){
           return this.db.list('invitations',val => val.orderByChild('uid').equalTo(uid)).valueChanges();
        } 
        searchInfo(){
            return this.db.list('info');
        }

        searchByInvitationStat(uid){
            return this.db.list('users', val => val.orderByChild('uid').equalTo(uid)).valueChanges();
        }

        deleteInvitation(uid,date,code){
            this.db.object("users/"+uid +"/invitations").update({
                date:date,
                code:"",
            })
            this.db.object("users/"+uid).update({
                invitation:false
            })
        }

}