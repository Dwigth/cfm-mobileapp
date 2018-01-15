import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular'; 
import { QualificationComponent } from './qualification.component';
import { ClassesComponent } from './classes.component';

@Component({
    selector: 'students-module',
    templateUrl: 'students.component.html'
})

export class StudentsComponent implements OnInit {

    ButtonComponents;

    constructor(
        public NavCtl:NavController,
        public ModalCtl:ModalController,
    ) {
        this.ButtonComponents = [
            {title: "Calificaciones", component: QualificationComponent, icon: 'book', color: "danger"},
            {title: "Clases", component: ClassesComponent, icon:'bookmark', color: "orange"}
        ]
     }

    ngOnInit() { }

    SetNav( item ){
        let modal = this.ModalCtl.create(item.component);
        modal.present();
    }
}