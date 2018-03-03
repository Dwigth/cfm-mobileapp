import { Component, OnInit } from '@angular/core';
import { AsistenceComponent } from '../frontview/assistence.component';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'button-assitence',
    template:`
<button type="button" class="button_round" (click)="openModalAssitences()" >Administrar asistencias</button>
  `,
})


export class ButtonAssitenceComponent implements OnInit {
    constructor(
        public navCtrl:NavController,
        ) {

    }

    ngOnInit() { }

    openModalAssitences(){
        this.navCtrl.push(AsistenceComponent);
      }
      
}
