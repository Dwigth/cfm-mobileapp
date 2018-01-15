import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { StudentService } from './students.services';

@Component({
    selector: 'courseDetail-name',
    templateUrl: 'courseDetail.component.html'
})

export class CourseDetailComponent implements OnInit {
    groupkey:string;
    lessons:Observable<any[]>;

    constructor( 
        public viewCtl:ViewController,
        public params:NavParams,
        public stdSrv:StudentService,
    ) { 
        this.groupkey = params.get('groupkey');
        this.lessons = stdSrv.getLessons(this.groupkey);
        console.log(this.groupkey);
        
    }

    ngOnInit() { }
    
    dismiss(){
        this.viewCtl.dismiss();
    }
}