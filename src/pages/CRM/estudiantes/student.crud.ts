import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { StudentCRMService } from './student.services';

@Component({
    templateUrl: 'student.crud.html'
})

export class StudentCrudComponent implements OnInit {
    currentUID:string;
    student;
    private teachers;

    constructor(
        public params:NavParams,
        public viewCtl:ViewController,
        public studnSrv:StudentCRMService,
    ) {
        this.currentUID = params.get('uid');
        this.student = params.get('student');
        this.teachers = studnSrv.listTeachers();
     }

    ngOnInit() { }
    
    dismiss(){
        this.viewCtl.dismiss();
    }

    editStudent(student){
        this.studnSrv.editStudent(student);
    }
}