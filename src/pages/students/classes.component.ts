import { Component, OnInit } from '@angular/core';
import { ViewController,NavController } from 'ionic-angular';
import { CourseDetailComponent } from './CourseDetail.component'; 
import { Observable } from 'rxjs/Observable';
import { StudentService } from './students.services';
import { NavParams } from 'ionic-angular/navigation/nav-params';
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
    
    DisplayDetails(key){
        console.log(key);
        this.Nav.push(CourseDetailComponent,{lessonkey:key});
    }

    dismiss(){
        this.viewCtl.dismiss();
    }
}