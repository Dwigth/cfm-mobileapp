import { Component, OnInit } from '@angular/core';
import { NavController, ViewController } from "ionic-angular";
import { TemplateComponent } from './template.component';
import { NgForm } from '@angular/forms';
//SERVICIO DEL CRUD
import { CrudService } from './crud.service';
//NECESARIO PARA EL CRUD DE ANGULARFIRE
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cursos',
  templateUrl: 'cursos.component.html'
})
export class CursosComponent implements OnInit {

  public listarCurso: Observable<any[]>;

  constructor(
    public nav:NavController,
    public viewCtrl:ViewController,
    public db: AngularFireDatabase,
    public crud:CrudService
  ) {
    this.listarCurso = this.crud.get();
   }

  ngOnInit() {}

  openCreatorCursoForm(){
  this.nav.push(TemplateComponent);
  this.crud.currentId = "nuevo";
  }

  OpenEditCursoForm(key){
    this.nav.push(TemplateComponent);
    this.crud.currentId = key;
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  getbyCourse(datos:NgForm){
    console.log("Valores Recibidos: ", datos.value.name);
    this.listarCurso = this.crud.searchbyCourse(datos.value.name);
  }

  getbySchedule(schedule:NgForm){
    event.preventDefault();
    console.log("Valores Recibidos: ", schedule.value.schedule);
    this.listarCurso = this.crud.searchbySchedule(schedule.value.schedule);
  }

}
