import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { TeacherService } from './teachers.services';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'GroupForm',
    templateUrl: 'groupForm.component.html'
})

export class GroupFormComponent implements OnInit {
    groupForm:FormGroup; 
    students:Observable<any[]>;
    members: any[] = [];
    membersuid:any[] = [];

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
            this.tchSrv.saveGroup(this.groupForm.value.name,this.groupForm.value.course,this.members,this.membersuid);
            this.viewCtl.dismiss();
        }
    }

    getValueEachMember(id,uid){
        let memberItem = (<HTMLInputElement>document.getElementById(id));

        if(memberItem.checked){
            this.members.push(id);
            this.membersuid.push(uid)
        }else{
            this.deleteMembers(id);
        }
        this.displayMembers();
        
    }
    displayMembers(){
        console.log(this.members);  
        console.log(this.membersuid);        
    }

    deleteMembers(id){
        for (let index = 0; index < this.members.length; index++) {
                if (this.members[index] == id ) {
                    this.membersuid.splice(index,1)
                    this.members.splice(index,1)
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