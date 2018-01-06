import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular'

@Injectable()
export class UserService {

    constructor(
        public db:AngularFireDatabase,
        public alertCtrl:AlertController) { }

    listRef(){
        return this.db.list("users");
    }
    
    objectRef(key:string){
        return this.db.object("users/"+key);
    }

    searchUserByName(name:string){
       return this.db.list("users", val => val
        .orderByChild("name")
        .startAt(name)
        ).valueChanges(["child_added"]);
    }

    searchUserByProperty(node,data){
        return this.db.list("users", val => val
        .orderByChild(node)
        .equalTo(data)
    ).valueChanges();
    }

    getUsers(){
       return this.db.list("users", val => val
       .orderByChild("name")
       .limitToFirst(50)
    ).valueChanges();
    }
    
    editUsers(item){
        console.log(item);
        this.objectRef(item.key).update(item);
    }
    deleteUsers(item){
        this.listRef().remove(item.key);
    }

    showConfirm(item) {
        let confirm = this.alertCtrl.create({
          title: 'Borrar usuario',
          message: '¿En realidad quiere borrar este usuario?',
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
                this.deleteUsers(item);
              }
            }
          ]
        });
        confirm.present();
      }
    

}
