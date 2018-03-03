import { Component, OnInit } from '@angular/core';
import { ModalController } from "ionic-angular";
import { ProspectModalComponent } from "./prospect.component";


@Component({
  selector: 'prospect-button',
  template:`
<button type="button"  (click)="openModalProspects()" class="button_round">Administrar prospectos</button>
  `,
})
export class ProspectButtonComponent implements OnInit {


  constructor(public modalCtrl:ModalController) {  }

  ngOnInit() {

  }

  openModalProspects(){
    let modal = this.modalCtrl.create(ProspectModalComponent);
    modal.present();
  }


}
