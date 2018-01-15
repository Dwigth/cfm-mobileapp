import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { TeacherService } from './teachers.services';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'member-name',
    templateUrl: 'member.component.html'
})

export class MemberComponent implements OnInit {
    id:string;
    name:string;
    groupMembers:Observable<any[]>
    search:boolean = false;
    members:Observable<any[]>;

    constructor(
        public viewCtl:ViewController,
        public params:NavParams,
        public tchSrv:TeacherService,
    ) { 
        this.id = params.get('id');
        this.name = params.get('name');
        this.groupMembers = this.tchSrv.retriveGroupMembers(this.id,this.name);
     }

    ngOnInit() { }

    dismiss(){
        this.viewCtl.dismiss();
    }

    getItems(ev:any){
        this.members = this.tchSrv.listStudets();
        let item = ev.target.value;
        if (item && item.trim() != '') {
          return this.members = this.tchSrv.searchStudents(item);
        }
    }

    openSearch(){
        this.search = !this.search;
        console.log(this.search);
        
    }

    deleteMember(groupkey,studentkey){
        console.log(groupkey + " " + studentkey);
        this.tchSrv.deleteMember(groupkey,studentkey);
        
    }
    addMember(groupkey,studentuid,studentkey){
        this.tchSrv.addMember(groupkey,studentuid,studentkey);   
    }
}