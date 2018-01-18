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
    
    saveStudent(user){
        let confirm = this.alertCtrl.create({
            title: 'Crear estudiante',
            message: '¿En realidad quiere hacer a este usuario estudiante?',
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
                    this.createStudent(user);
                }
              }
            ]
          });
          confirm.present();
    }
    
    createStudent(user){
        this.db.list('students').update(user.uid,{
            name:user.name,
            lastName:user.lastName,
            lastName2:user.lastName2,
            imageURL:user.imageURL,
            email:user.email,
            key:user.key,
            uid:user.uid,
            enrollment:"N/A",
            birthday:"N/A",
            age:"N/A",
            course:user.course,
            genre:"N/A",
            phone:user.phone,
            ocupation:user.ocupation,
            address:"N/A",
            advertising:user.advertising,
            medicalObservation:"N/A",
            teacher:"",
            type:"",
            tutorName:"N/A",
            tutorRelationship:"N/A",
            tutorAge:"N/A",
            tutorOcupation:"N/A",
            tutorPosition:"N/A",
            tutorPhone:"N/A",
            tutorEmail:"N/A",
            tutorAddress:"N/A",
            tutorRegDate:"N/A",
            tutorInitDate:"N/A",
            tutorFinalDate:"N/A",
            cost:"N/A",
            registration:"N/A",
            pedagogicalSample:"N/A",
            coments:"N/A"
        })
        this.db.object("users/"+user.key).update({
            isStudent:true
        })
    }
    
}
