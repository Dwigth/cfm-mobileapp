import { Component, OnInit } from '@angular/core';
import { ModalController } from "ionic-angular";
import { UserModal } from "./user.modal.component";

@Component({
    selector: 'user-button',
    template: `
    <button type="button" class="button_round" (click)="OMU()" >Administrar usuarios</button>
    `
})

export class UserButton implements OnInit {
    constructor(public MC:ModalController) { }

    ngOnInit() { }

    OMU(){
        let modal = this.MC.create(UserModal);
        modal.present();
      }
}