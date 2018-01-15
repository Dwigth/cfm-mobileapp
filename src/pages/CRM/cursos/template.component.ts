import { Component, OnInit } from '@angular/core';
//NECESARIO PARA RECIBIR PARAMETROS PROR URL
import { NavController, NavParams, ViewController } from "ionic-angular";
//NECESARIO PARA EL CRUD DE ANGULARFIRE
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
//SERVICIO DEL CRUD
import { CrudService } from './crud.service';


@Component({
  selector: 'app-template',
  templateUrl: 'template.component.html'
})
export class TemplateComponent implements OnInit {

    public id:string = "nuevo"; //variable que guarda el id si es editar o es nuevo
    public listarCurso: Observable<any[]>;
    public curso: Observable<any[]>;

  constructor(
    public db: AngularFireDatabase,
    public crud:CrudService,
    public nav:NavController,
    public params:NavParams,
    public viewCtrl:ViewController,
  ) {
    //HACE EL INSERT O EL UPDATE DEPENDIENDO SI ES NUEVO O YA EXISTE
    this.curso = db.list('courses').valueChanges();
    //ASIGNA EL ID
    this.id = this.crud.currentId;
    //OBTIENE EL REGISTRO POR ID
    this.listarCurso = this.crud.getbyId();


   }

  ngOnInit() {}



  dismiss(){
    this.viewCtrl.dismiss();
  }

}
