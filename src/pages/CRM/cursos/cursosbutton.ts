import { Component, OnInit } from '@angular/core';
import { ModalController } from "ionic-angular";
import { CursosComponent } from "./cursos.component";


@Component({
  selector: 'cursos-button',
  template:`
<button type="button" class="button_round" (click)="openModalCursos()" >Administrar cursos</button>
  `,
})
export class CursosButtonComponent implements OnInit {


  constructor(public modalCtrl:ModalController) {  }

  ngOnInit() {

  }

  openModalCursos(){
    let modal = this.modalCtrl.create( CursosComponent );
    modal.present();
  }


}
