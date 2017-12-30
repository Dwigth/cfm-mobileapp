import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireAction } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import { Prospect } from "./prospect";
import { Subject } from "rxjs/Subject";
import { Http, RequestOptions, Headers } from '@angular/http';
import * as moment from 'moment';
@Injectable()

export class ProspectService {

  items: Observable<any[]>;
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>
  name$: BehaviorSubject<string | null>;
  prospects = [];
  users: Observable<any[]>;
  currentDay:number;

  constructor(public db: AngularFireDatabase, public http: Http, public afAuth: AngularFireAuth) {
    let day = moment();
    this.currentDay = Number(day.format('DDD'))
    moment.locale('es');
  }

  refLis() {
    return this.db.list('prospects');
  }
  refObj(itemkey) {
    return this.db.object('prospects/' + itemkey);
  }

  getCoordis() {
    return this.users = this.db.list('users', value => value.orderByChild('accessLevel').equalTo("coordi")).valueChanges();
  }

  createProspect(prospect: Prospect) {
    let date = moment();
    this.refLis().push({
      name: prospect.name,
      lastname: prospect.lastname,
      lastname2: prospect.lastname2,
      age: prospect.age,
      state: prospect.state,
      phone: prospect.phone,
      status: prospect.status,
      attended: prospect.attended,
      course: prospect.course,
      date: date.format("MMMM D YYYY").toString(),
      coment: prospect.coment,
      source: prospect.source,
      price: prospect.price,
      day: Number(date.format("DDD"))
      //checkbox:prospect.checkbox
    }).then(val => {
      this.refObj(val.key).update({
        key: val.key
      });
    });
  }

  getProspect() {
    //  this.db.list('prospects')
  }

  searchProspectByProperty(n, property) {
    let result: Observable<any[]>;
    return result = this.db.list("prospects", val => val.orderByChild(property).equalTo(n).limitToFirst(50) ).valueChanges();
  }

  searchByName(name: string) {
    console.log(name)
    return this.db.list("prospects", val =>
      val.orderByChild("name")//.equalTo(name)
      .startAt(name.trim())
      //.endAt(name.trim())
    ).valueChanges();
  }

  editProspect(item) {
    this.refObj(item.key).update({
      name: item.name,
      lastname: item.lastname,
      lastname2: item.lastname2,
      age: item.age,
      state: item.state,
      phone: item.phone,
      status: item.status,
      attended: item.attended,
      course: item.course,
      coment: item.coment,
      source: item.source,
      price: item.price
    });
  }

  deleteProspect(item) {
    this.refObj(item.key).remove();
  }

  getItems(ev: any) {
    //this.list = this.prosSrv.getProspect();
    this.name$ = new BehaviorSubject(null);
    let item = ev.target.value;
    if (item && item.trim() != '') {
      this.name$.next(item);
      this.items$ = this.name$.switchMap(name =>
        this.db.list('prospects', ref =>
          name ? ref.orderByChild('nombre').equalTo(name) : ref
        ).snapshotChanges()
      );
      //return this.list = this.prosSrv.searchByName(item);
    }
  }

  get() {
    console.log(this.currentDay)
    return this.db.list('prospects', val => val.orderByChild('day').equalTo(this.currentDay)). valueChanges();
  }

  getByHttp(){
    
  }
}
