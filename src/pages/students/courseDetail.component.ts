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
    key:string;
    lessons:Observable<any[]>;

    constructor(
        public viewCtl:ViewController,
        public params:NavParams,
        public stdSrv:StudentService,
    ) {
        this.key = this.params.get('lessonkey');
        this.lessons = stdSrv.getLessons(this.key);
    }

    ngOnInit() { }
    
    dismiss(){
        this.viewCtl.dismiss();
    }

    
}