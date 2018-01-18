import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from "ionic-angular";
import { ProspectService } from "./prospect.service";
import { Observable } from "rxjs/Observable";
import { Prospect } from "./prospect";
import { ProspectCrudComponent } from './prospect-crud.component'
//import { Chart } from 'chart.js'

@Component({
  templateUrl: 'prospect.component.html'
})
export class ProspectModalComponent implements OnInit {
list:Observable<any[]>;
//
advSrch:boolean;
statistic:boolean;
properties = {
property:'',
textProperty:''
}

coordis = [];

  constructor(
    public nav:NavController,
    public params:NavParams,
    public viewCtrl:ViewController,
    public prosSrv:ProspectService) {

    this.list = this.prosSrv.get();
  }

  ngOnInit() {
  }



getItems(ev:any){
  this.list = this.prosSrv.get();
  let item = ev.target.value;
  if (item && item.trim() != '') {
    return this.list = this.prosSrv.searchByName(item);
  }
}

openCreatorProspectForm(){
this.nav.push(ProspectCrudComponent,{isEditing:false});
}

editProspect(item:Prospect){
this.nav.push(ProspectCrudComponent,{isEditing:true,item:item});
}

deleteProspect(item:Prospect){
this.prosSrv.showConfirm(item);
}

assigProperty(ev:any){
  console.log(ev.target.value)
  //this.properties.property = ev;
}

searchProspectByProperty(){
  console.log(this.properties)
  this.list = this.prosSrv.searchProspectByProperty(this.properties.textProperty,this.properties.property);
  this.advSrch = false;
  console.log(this.advSrch)
}

  dismiss(){
    this.viewCtrl.dismiss();
  }


}
