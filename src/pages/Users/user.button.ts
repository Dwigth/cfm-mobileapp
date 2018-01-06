import { Component, OnInit } from '@angular/core';
import { ModalController } from "ionic-angular";
import { UserModal } from "./user.modal.component";

@Component({
    selector: 'user-button',
    template: `
    <button type="button" ion-button large block color="primary" (click)="openModalUser()" outline>Administrar usuarios</button>
    `
})

export class UserButton implements OnInit {
    constructor(public modalCtrl:ModalController) { }

    ngOnInit() { }

    openModalUser(){
        let modal = this.modalCtrl.create(UserModal);
        modal.present();
      }
}