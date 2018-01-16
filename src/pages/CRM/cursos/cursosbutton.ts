import { Component, OnInit } from '@angular/core';
import { ModalController } from "ionic-angular";
import { CursosComponent } from "./cursos.component";


@Component({
  selector: 'cursos-button',
  template:`
<button type="button" ion-button large block color="primary" (click)="openModalCursos()" outline>Administrar cursos</button>
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
