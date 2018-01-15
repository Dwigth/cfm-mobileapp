import { Component, OnInit, group } from '@angular/core';
import { ViewController,NavController } from 'ionic-angular';
import { GroupDetailsComponent } from '../teachers/groupsDetails.component';
import { GroupFormComponent } from '../teachers/groupForm.component';
import { TeacherService } from './teachers.services';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { MemberComponent } from '../teachers/members.component';

@Component({
    selector: 'gp-admin',
    templateUrl: 'groupAdmin.component.html'
})

export class GroupAdminComponent implements OnInit {

    groups:Observable<any[]>;



    constructor(
        public viewCtl:ViewController,
        public nav:NavController,
        public tchSrv:TeacherService,
        public authSrv:AngularFireAuth
    ) {
        this.groups =  tchSrv.retrieveGroupData(authSrv.auth.currentUser.uid);
     }

    ngOnInit() { }

    dismiss(){
        this.viewCtl.dismiss();
    }
    OpenDetails(groupkey){
        this.nav.push(GroupDetailsComponent,{groupkey:groupkey});
    }
    OpenCreateGroupForm(){
        this.nav.push(GroupFormComponent);
    }

    openMembers(id,name,groupName){
        this.nav.push(MemberComponent,{id:id,name:name,groupName:groupName});
    }
}