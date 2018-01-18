import { Component, OnInit } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { StudentCRMService } from './student.services';
import { StudentCrudComponent } from './student.crud';

@Component({
    templateUrl: 'studentCRM.component.html'
})

export class StudentCRMComponent implements OnInit {

    private advSrch:boolean;
    private students:Observable<any[]>;
    
    properties ={
        property:'',
        textProperty:''
    }



    constructor(
        public viewCtl:ViewController,
        public studnSrv:StudentCRMService,
        public nav:NavController,
        ) { 
            this.students = studnSrv.getStudents();
            
         }

    ngOnInit() { }
    
    public dismiss(){
        this.viewCtl.dismiss(); 
    }

    private searchByProperty(property,node){
        this.students = this.studnSrv.searchByProperty(property,node);
    }

    private getItems(ev:any){
        this.students = this.studnSrv.getStudents();
        let item = ev.target.value;
        if (item && item.trim() != '') {
            return this.students = this.studnSrv.searchByName(item);
        }
    }

    private editStudent(uid,student){
        this.nav.push(StudentCrudComponent,{uid:uid,student:student});
    }
    private eraseStudent(uid,key){
        this.studnSrv.eraseStudent(uid,key);
    }
}