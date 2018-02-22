import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ActivitiesComponent } from "./activities.component";

@Component({
    selector:"activities-button",
    template: `
    <button type="button" ion-button outline block (click)="OpenNav()" color="danger"> Registro de actividad </button>
    `
})

export class ActivitiesButtonComponent implements OnInit {
    constructor(
        public navCtrl:NavController,
    ) { }

    ngOnInit() { }

    OpenNav(){
        this.navCtrl.push(ActivitiesComponent);
      }
}