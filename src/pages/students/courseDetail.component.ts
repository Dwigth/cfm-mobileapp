import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'courseDetail-name',
    templateUrl: 'courseDetail.component.html'
})

export class CourseDetailComponent implements OnInit {
    constructor( public viewCtl:ViewController) { }

    ngOnInit() { }
    
    dismiss(){
        this.viewCtl.dismiss();
    }

}