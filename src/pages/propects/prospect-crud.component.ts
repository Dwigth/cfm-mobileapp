import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from "ionic-angular";
import { ProspectService } from "./prospect.service";
import { Prospect } from './prospect';

@Component({
  templateUrl: 'prospect-crud.component.html',
})

export class ProspectCrudComponent implements OnInit {

  item: Prospect;
  cursos = ["Bajo", "Bateria", "Canto", "Dibujo", "Guitarra Electrica/Acustica", "Piano", "Saxofon", "Ukulele", "Violin"];
  coordi;

  constructor(
    public nav: NavController,
    public params: NavParams,
    public viewCtrl: ViewController,
    public prosSrv: ProspectService) {
      console.log( this.params.get("item"));
      this.coordi = this.prosSrv.getCoordis();
    }

  ngOnInit() {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  currentProspect = {
    name:'',
    lastname:'',
    lastname2:'',
    age:'',
    state:'',
    attended:'',
    phone:'',
    status:'',
    course:'',
    source:'',
    coment:'',
    price:'',
  }

  createNewProspect(){
    let prospect = new Prospect();

    prospect.nombre = this.currentProspect.name;
    prospect.apellidoPaterno = this.currentProspect.lastname;
    prospect.apellioMaterno = this.currentProspect.lastname2;
    prospect.edad = this.currentProspect.age;
    prospect.estado = this.currentProspect.state;
    prospect.atendio = this.currentProspect.attended;
    prospect.telefono = this.currentProspect.phone;
    prospect.estatus = this.currentProspect.status;
    prospect.curso = this.currentProspect.course;
    prospect.fuente = this.currentProspect.source;
    prospect.comentario = this.currentProspect.coment;
    prospect.precio = this.currentProspect.price;

    console.log(this.currentProspect)
    this.prosSrv.createProspect(prospect);
    this.viewCtrl.dismiss();
  }

}
