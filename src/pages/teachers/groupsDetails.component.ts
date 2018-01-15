import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { LessonFormComponent } from '../teachers/lessonForm.component';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Observable } from 'rxjs/Observable';
import { TeacherService } from './teachers.services';

@Component({
    selector: 'group-details',
    templateUrl: 'groupsDetails.component.html'
})

export class GroupDetailsComponent implements OnInit {
    groupkey:string;
    lessons:Observable<any[]>;
    edit:boolean = false;

    constructor(
        public viewCtl:ViewController,
        public Nav:NavController,
        public params:NavParams,
        public tchSrv:TeacherService,
    ) { 
        this.groupkey = params.get("groupkey");
        this.lessons = tchSrv.retrieveLesson(this.groupkey);
     }

    ngOnInit() { }

    dismiss(){
        this.viewCtl.dismiss();
    }
    OpenLessonCreator(groupkey){
        this.Nav.push(LessonFormComponent,{groupkey:groupkey});
    }
    Edit(lessonkey){
        this.edit = true;
        this.Nav.push(LessonFormComponent,{lessonkey:lessonkey,edit:this.edit,groupkey:this.groupkey});
    }
}