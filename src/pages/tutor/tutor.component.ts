import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../Users/user.service';
import { Tutor } from './tutor'; 
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
    selector: 'tutor',
    templateUrl: 'tutor.component.html'
})

export class TutorComponent implements OnInit {
    students:Observable<any[]>;
    email:string;
    members:any[] = [];
    membersuid:any[] = [];

    constructor(
        private db:AngularFireDatabase,
        private afauth:AngularFireAuth,
        private usrSrv:UserService,
        public loadingCtrl: LoadingController,
        public alertCtl:AlertController,
    ) { 
        this.students = this.db.list("users/"+this.afauth.auth.currentUser.uid + "/students").valueChanges();
        
    }

    ngOnInit() {  }


    getValueEachMember(uid,imageURL,name){
        let memberItem = (<HTMLInputElement>document.getElementById(uid));
        let currentMembers = new Tutor();

        currentMembers.name = name;
        currentMembers.uid = uid;
        currentMembers.imageURL = imageURL;

        if(memberItem.checked){
            this.members.push(currentMembers)
            this.membersuid.push(uid);
        }else{
            this.deleteMembers(uid);
        }
        console.log(this.members);
        console.log(this.membersuid);
        
    }

    

    deleteMembers(id){
        for (let index = 0; index < this.members.length; index++) {
                if (this.membersuid[index] == id ) {
                    this.membersuid.splice(index,1);
                }
                if (this.members[index].uid == id) {
                    this.members.splice(index,1);
                }
        }
    }

    getItems(ev:any){
        let email = ev.target.value;
        if (email && email.trim() != '') {
          return this.students = this.usrSrv.searchUserByEmail(email);
        }
    }

    sendInvitation(){
        let currentuid = this.afauth.auth.currentUser.uid;
        let email = this.afauth.auth.currentUser.email;
        this.usrSrv.sendInvitation(this.membersuid,currentuid,email);
        
        let loader = this.loadingCtrl.create({
            content: "Espere un momento porfavor...",
            duration: 3000
          });
          loader.present();
    }

}