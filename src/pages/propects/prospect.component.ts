import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from "ionic-angular";
import { ProspectService } from "./prospect.service";
import { Observable } from "rxjs/Observable";
import { Prospect } from "./prospect";
import { ProspectCrudComponent } from './prospect-crud.component'

@Component({
  templateUrl: 'prospect.component.html'
})
export class ProspectModalComponent implements OnInit {
list:Observable<any[]>;
prospects = [];
//


  constructor(
    public nav:NavController,
    public params:NavParams,
    public viewCtrl:ViewController,
    public prosSrv:ProspectService) {

    //this.list = this.prosSrv.getProspect();
  }

  ngOnInit() {}

getItems(ev:any){
  this.prosSrv.getProspectbyHttp().subscribe(data => this.prospects = data);
  this.prospects = this.prosSrv.get();
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

}

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
