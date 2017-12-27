import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth }     from 'angularfire2/auth';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAction} from "angularfire2/database";
import { Observable } from 'rxjs/observable';
import { Prospect } from "./prospect";
import { Subject } from "rxjs/Subject";
import { Http, RequestOptions } from '@angular/http';

@Injectable()

export class ProspectService {

  items:Observable<any[]>;
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>
  name$:BehaviorSubject<string|null>;
  prospects = [];

  constructor(public db:AngularFireDatabase,public http:Http ) {

}

  refLis(){
    return this.db.list('prospects');
  }
  refObj(itemkey){
    return this.db.object('prospects/'+itemkey);
  }

  createProspect(prospect:Prospect){
    this.refLis().push({
    id:prospect.id,
    nombre:prospect.nombre,
    apellidoPaterno:prospect.apellidoPaterno,
    apellioMaterno:prospect.apellioMaterno,
    edad:prospect.edad,
    estado:prospect.estado,
    telefono:prospect.telefono,
    estatus:prospect.estatus,
    atendio:prospect.atendio,
    curso:prospect.curso,
    fecha:prospect.fecha,
    comentario:prospect.comentario,
    fuente:prospect.fuente,
    precio:prospect.precio,
    checkbox:prospect.checkbox
  }).then(val => {
    this.refObj(val.key).update({
      key:val.key
    });
  });
  }

getProspect(){
return this.db.list("prospects",val => val.orderByChild("nombre").limitToFirst(20)).valueChanges();
}
  searchProspectByProperty(n,property){
    let result:Observable<any[]>;
    return result = this.db.list("prospects",val => val.orderByChild(property).equalTo(n)).valueChanges();
  }

searchByName(name:string){
console.log(name)
return this.db.list("prospects", val =>
 val.orderByChild("nombre").equalTo(name)
). valueChanges();
}

editProspect(){

}

deleteProspect(item:Prospect){
}

getItems(ev:any){
  //this.list = this.prosSrv.getProspect();
  this.name$ = new BehaviorSubject(null);
  let item = ev.target.value;
  if (item && item.trim() != '') {
    this.name$.next(item);
    this.items$ = this.name$.switchMap(name =>
    this.db.list('prospects', ref =>
  name ? ref.orderByChild('nombre'). equalTo(name) : ref
).snapshotChanges()
);
    //return this.list = this.prosSrv.searchByName(item);
  }
}
getProspectbyHttp(){

return this.http.get("https://pcfm-5eeb9.firebaseio.com/users")
.map(res => res.json());
}

get(){
  return this.prospects;
}
}
