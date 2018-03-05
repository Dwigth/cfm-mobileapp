import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { TeacherService } from './teachers.services';
import { Observable } from 'rxjs/Observable';
import { TeacherStudent } from './TeacherStudent';

@Component({
    selector: 'GroupForm',
    templateUrl: 'groupForm.component.html'
})

export class GroupFormComponent implements OnInit {
    groupForm:FormGroup; 
    students:Observable<any[]>;
    membersuid:any[] = [];
    members:any[] = [];

    constructor(
        public formBuilder:FormBuilder,
        public viewCtl:ViewController,
        public tchSrv:TeacherService,
    ) { 
        this.students = tchSrv.listStudets();
        this.groupForm =  formBuilder.group({
            name: ['',Validators.required],
            course: ['',Validators.required]
          })
         
    }

    ngOnInit() { }

    dismiss(){
        this.viewCtl.dismiss();
    }

    createGroup(){
        if(this.groupForm.valid){
            this.tchSrv.saveGroup(this.groupForm.value.name,this.groupForm.value.course,this.membersuid);
            this.viewCtl.dismiss();
        }
    }

    getValueEachMember(uid,imageurl,name){
        let memberItem = (<HTMLInputElement>document.getElementById(uid));
        let currentMember = new TeacherStudent();
        currentMember.uid = uid;
        currentMember.name = name;
        currentMember.imageURL = imageurl;

        if(memberItem.checked){
            this.membersuid.push(uid)
            this.members.push(currentMember);
        }else{
            this.deleteMembers(uid);
        }
        this.displayMembers();
        
    }
    displayMembers(){
        console.log(this.membersuid);        
    }

    deleteMembers(id){
        for (let index = 0; index < this.membersuid.length; index++) {
                if (this.membersuid[index] == id ) {
                    this.membersuid.splice(index,1);
                }
                if (this.members[index].uid == id) {
                    this.members.splice(index,1);
                }
        }
    }
    getItems(ev:any){
        this.students = this.tchSrv.listStudets();
        let item = ev.target.value;
        if (item && item.trim() != '') {
          return this.students = this.tchSrv.searchStudents(item);
        }
    }
}