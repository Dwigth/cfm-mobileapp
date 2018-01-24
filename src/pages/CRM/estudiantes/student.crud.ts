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
    newImageURL:string;
    img:boolean = false;
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

    editImage(student){
        if (this.img) {
            this.newImageURL = (<HTMLInputElement>document.getElementById('url')).value;
            this.studnSrv.setImageUrl(this.newImageURL,student);
            console.log();
        }
    }

    editStudent(student){
        this.studnSrv.editStudent(student);
        
    }
}