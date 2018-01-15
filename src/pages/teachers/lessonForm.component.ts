import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from './teachers.services';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
    selector: 'lesson-form',
    templateUrl: 'lessonForm.component.html'
})

export class LessonFormComponent implements OnInit {
    lessonForm:FormGroup;
    groupkey:string;
    lessonkey:string;
    edit:boolean;

    constructor(
        public viewCtl:ViewController,
        public formGroup:FormBuilder,
        public tchSrv:TeacherService,
        public params:NavParams

    ) {
        this.groupkey = params.get("groupkey");
       this.lessonkey = params.get("lessonkey");
       this.edit = params.get("edit");
        this.lessonForm = this.formGroup.group({
            name: ['',Validators.required],
            body: ['',Validators.required]
          })
       
     }

    ngOnInit() { }

    dismiss(){
        this.viewCtl.dismiss();
    }

    saveLesson(){
          let url = (<HTMLInputElement>document.getElementById('url')).value;
          let date = (<HTMLInputElement>document.getElementById('date')).value;
          this.tchSrv.saveLesson(this.groupkey,this.lessonForm.value.name,this.lessonForm.value.body,url,date);
          this.viewCtl.dismiss();
    }
    editLesson(key){
        
        let url = (<HTMLInputElement>document.getElementById('url')).value;
        let date = (<HTMLInputElement>document.getElementById('date')).value;
        this.tchSrv.editLesson(key,this.groupkey,this.lessonForm.value.name,this.lessonForm.value.body,url,date);
        this.viewCtl.dismiss();
    }
}