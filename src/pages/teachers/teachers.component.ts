import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular'; 
import { GroupAdminComponent } from '../teachers/groupAdmin.component';

@Component({
    selector: 'teachers-module',
    templateUrl: 'teachers.component.html'
})

export class TeachersComponent implements OnInit {

    ButtonComponents;

    constructor(
        public NavCtl:NavController,
        public ModalCtl:ModalController,
    ) {
       this.ButtonComponents = [
            {title: "Administrar grupos", component: GroupAdminComponent, icon: 'briefcase', color: "orange"}
       ]
     }

    ngOnInit() { }

    SetNav( item ){
        let modal = this.ModalCtl.create(item.component);
        modal.present();
    }
}