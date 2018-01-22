import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { NgForm } from '@angular/forms';
//TEMPLATE PARA ABRIR EL FORMULARIO DE EDITAR
import { ModalController } from 'ionic-angular';
//BUSQUEDAS
import { Observable } from 'rxjs/Observable';
//CONFIRMACION/ALERTA PARA REMOVER CURSOS
import { AlertController } from 'ionic-angular';


@Injectable()

export class CrudService {
//ID DEL CURSO PARA EDITAR O ELIMINAR
public currentId:string = "nuevo";

  constructor(
              public db:AngularFireDatabase,
              public modalCtrl: ModalController,
              public alertCtrl:AlertController
               ) {

  }

  //referencia a mi lista cursos
  tabla(){
  return this.db.list("courses");
  }

  refOb(key:string){
  return this.db.object("courses/" + key);
  }
  //RECIBE EL ID DEL CURSO PARA EDITAR O ELIMINAR


//funcion que guarda un nuevo curso si el id es nuevo o edita si el id existe
guardar(forma:NgForm){
if ( this.currentId == "nuevo" ){
  console.log("INSERTADO EXITOSO");
  console.log("NgForm ", forma);
  console.log("Valores Enviados: ", forma.value);
  //DATOS QUE SE ENVIAN DEL FORMULARIO HACIA FIREBASE
  this.tabla(). push({
  name:forma.value.name,
  spaces:forma.value.spaces,
  schedule:forma.value.schedule,
  type:forma.value.type
  //FUNCION QUE ME MANDA EL ID DEL REGISTRO
  }).then(val => {
      console.log("ID DEL REGISTRO", val.key);
      this.refOb(val.key).update({
        key:val.key
      });
      //ALERTA CUANDO SE ACTUALIZA CORRECTAMENTE
      let confirm = this.alertCtrl.create({
        title: 'Insertado correctamente',
        message: 'El curso ha sido insertado correctamente',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              console.log('OK clicked');
            }
          }
        ]
      });
      confirm.present();

    });
} else{
  console.log("Se actualizo con exito");
  this.refOb(this.currentId).update({
    name:forma.value.name,
    spaces:forma.value.spaces,
    schedule:forma.value.schedule,
    type:forma.value.type
    });
    //ALERTA CUANDO SE ACTUALIZA CORRECTAMENTE
    let confirm = this.alertCtrl.create({
      title: 'Actualizado',
      message: 'El curso ha sido actualizado correctamente',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK clicked');
          }
        }
      ]
    });
    confirm.present();
}

  }

  //OBTIENE LA LISTA DE TODOS LOS CURSOS
  get() {
      return this.db.list('courses', val => val.orderByChild('name')).valueChanges();
    }
//OBTIENE EL CURSO SEGÚN EL ID QUE SE ENVÍE
  getbyId() {
      return this.db.list('courses', val => val.orderByChild('key').equalTo(this.currentId)).valueChanges();

    }
//OBTIENE EL VALOR DEL NOMBRE DEL CURSO
  searchbyCourse( name:string ){
  return this.db.list("courses", val => val.orderByChild("name").equalTo(name) ).valueChanges();
  }

  searchbySchedule( schedule:string ){
  event.preventDefault();
  return this.db.list("courses", val => val.orderByChild("schedule").equalTo(schedule) ).valueChanges();
  }

  delete(keyid:string){
    console.log("delete", keyid);
    this.currentId = keyid;
    this.refOb(this.currentId).remove();
  }

  showConfirm(keyid:string) {
    console.log("Alerta", keyid);
    this.currentId = keyid;
    let confirm = this.alertCtrl.create({
      title: 'Borrar Curso',
      message: '¿En realidad quiere borrar este curso?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.delete(keyid);
          }
        }
      ]
    });
    confirm.present();
  }



}
