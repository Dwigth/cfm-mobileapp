import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from "ionic-angular";
import { ProspectService } from "./prospect.service";
import { Prospect } from './prospect';

@Component({
  selector:"prospect-crud",
  templateUrl: 'prospect-crud.component.html',
})

export class ProspectCrudComponent implements OnInit {

  item: Prospect;
  isEditing:boolean = false;
  cursos = ["Bajo", "Bateria", "Canto", "Dibujo", "Guitarra Electrica/Acustica", "Piano", "Saxofon", "Ukulele", "Violin"];
  coordi;

  constructor(
    public nav: NavController,
    public params: NavParams,
    public viewCtrl: ViewController,
    public prosSrv: ProspectService) {
      this.item = this.params.get('item');
      this.isEditing = this.params.get('isEditing');
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

  createNewProspect():void{
    let prospect = new Prospect();
    prospect.name = this.currentProspect.name;
    prospect.lastname = this.currentProspect.lastname;
    prospect.lastname2 = this.currentProspect.lastname2;
    prospect.age = this.currentProspect.age;
    prospect.state = this.currentProspect.state;
    prospect.attended = this.currentProspect.attended;
    prospect.phone = this.currentProspect.phone;
    prospect.status = this.currentProspect.status;
    prospect.course = this.currentProspect.course;
    prospect.source = this.currentProspect.source;
    prospect.coment = this.currentProspect.coment;
    prospect.price = this.currentProspect.price;

    console.log(this.currentProspect)
    this.prosSrv.createProspect(prospect);
    this.viewCtrl.dismiss();
  }

  editCurrentProspect(item:Prospect):void{
    this.prosSrv.editProspect(item);
    this.viewCtrl.dismiss();
  }

}
