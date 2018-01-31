import { Component, OnInit } from '@angular/core';
import { User } from "../components/users/user";
import { NavParams, ViewController } from "ionic-angular";
import { UserService } from "./user.service";

@Component({
    selector: 'user-crud',
    templateUrl: 'user.crud.component.html'
})

export class UserCrud implements OnInit {

    item: User;
    isEditing:boolean = false;
    constructor(
        public params:NavParams,
        public vCtrl:ViewController,
        public ursv:UserService) {
            this.item = params.get("item");
            console.log(this.item);
     }

     editCurrentUser(item){
        this.ursv.editUsers(item);
        this.vCtrl.dismiss();
     }

    ngOnInit() { }

    dismiss(){
        this.vCtrl.dismiss();
    }
}