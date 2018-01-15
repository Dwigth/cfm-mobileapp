import { Component, OnInit } from '@angular/core';
import { ViewController,NavController,NavParams } from 'ionic-angular';
import { CourseDetailComponent } from './CourseDetail.component'; 
import { Observable } from 'rxjs/Observable';
import { StudentService } from './students.services';
@Component({
    selector: 'classes-name',
    templateUrl: 'classes.component.html'
})

export class ClassesComponent implements OnInit {

    groups:Observable<any[]>;

    constructor( 
        public viewCtl:ViewController,
        public Nav:NavController,
        public params:NavParams,
        public stdSrv:StudentService) { 
            this.groups = stdSrv.getStudentGroups();
         }

    ngOnInit() { 

    }
    
    DisplayDetails(lessonkey){
        this.Nav.push(CourseDetailComponent,{lessonkey:lessonkey})
    }

    dismiss(){
        this.viewCtl.dismiss();
    }
}