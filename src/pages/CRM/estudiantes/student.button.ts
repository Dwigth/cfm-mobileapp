import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { StudentCRMComponent } from './studentCRM.component';

@Component({
    selector:'student-button',
    template: `
    <button type="button" class="button_round" (click)="OpenStudents()" >Administrar estudiantes</button>

    `
})

export class StudentButtonComponent implements OnInit {
    constructor(public modlCtl:ModalController) { 

     }

    ngOnInit() { }

    OpenStudents(){
        let modal = this.modlCtl.create(StudentCRMComponent);
        modal.present();
    }
}