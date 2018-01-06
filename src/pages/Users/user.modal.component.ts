import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from "ionic-angular";
import { UserService } from "./user.service";
import { Observable } from "rxjs/Observable";
import { User } from "../components/users/user";
import { UserCrud } from './user.crud.component'

@Component({
    templateUrl: 'user.modal.component.html'
})

export class UserModal implements OnInit {
    advSrch:boolean;
    list:Observable<any[]>
    properties = {
        property:"",
        textProperty:""
    }

    constructor(
        public viewCtrl:ViewController,
        public usrv:UserService,
        public nav:NavController) { 
            this.list = usrv.getUsers();
         }

    ngOnInit() {  }

    getItems(ev:any){
        this.list = this.usrv.getUsers();
        let item = ev.target.value;
        if (item && item.trim() != '') {
            return this.list = this.usrv.searchUserByName(item);
          }
        
    }

    searchProspectByProperty(){
        this.list = this.usrv.searchUserByProperty(this.properties.property,this.properties.textProperty);
        this.advSrch = false;
    }

    editProspect(item){
        let nav = this.nav.push(UserCrud,{item:item,isEditing:true});
    }

    deleteProspect(item){
        this.usrv.showConfirm(item);
    }
    dismiss(){ 
        this.viewCtrl.dismiss();
    }
}