import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { Button } from 'ionic-angular/components/button/button';
import { ActivitiesService } from '../activitiesRecorder/services/activities.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {
    currentDay:number;  
    day;

    constructor(
        public firebaseAuth:AngularFireAuth,
        public db:AngularFireDatabase,
        public alertCtrl:AlertController,
        public actSrv:ActivitiesService) { 
      this. day = moment();
      this.currentDay = Number(this.day.format('DDD'))
      moment.locale('es');
         }

    listRef(){
        return this.db.list("users");
    }
    
    objectRef(key:string){
        return this.db.object("users/"+key);
    }

    listUserByUID(uid){
        return this.db.list("users/", val => val.orderByChild("uid").equalTo(uid)).valueChanges();
    }

    searchUserByName(name:string){
        this.actSrv.recordActivity(
            this.firebaseAuth.auth.currentUser.uid,
            this.firebaseAuth.auth.currentUser.email,
            "Buscado un usuario por el nombre: " + "'" +name + "'",
            moment().format("L"),
            moment().format('LT')
          );

       return this.db.list("users", val => val
        .orderByChild("name")
        .startAt(name)
        ).valueChanges(["child_added"]);
        
    }

    searchUserByEmail(email:string){
        this.actSrv.recordActivity(
            this.firebaseAuth.auth.currentUser.uid,
            this.firebaseAuth.auth.currentUser.email,
            "Buscado un usuario por el correo: " + "'" +email + "'",
            moment().format("L"),
            moment().format('LT')
          );
        return this.db.list("users", val => val
        .orderByChild("email")
         .startAt(email).limitToFirst(1)
         ).valueChanges();
     }

    searchUserByProperty(node,data){
        this.actSrv.recordActivity(
            this.firebaseAuth.auth.currentUser.uid,
            this.firebaseAuth.auth.currentUser.email,
            "Buscado un usuario en el nodo "+ "'"+node +"'" + " por la propiedad: " + "'" + data + "'",
            moment().format("L"),
            moment().format('LT')
          );
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
        this.objectRef(item.uid).update(item);
        let alert = this.alertCtrl.create({
            title: 'Editar',
            subTitle: ' Se ha editado un usuario',
            buttons: ['OK']
        });
        alert.present();
        this.actSrv.recordActivity(
            this.firebaseAuth.auth.currentUser.uid,
            this.firebaseAuth.auth.currentUser.email,
            "Editado al usuario con el nombre: " + "'" + item.name + "'",
            moment().format("L"),
            moment().format('LT')
          );
    }
    deleteUsers(item){
        this.listRef().remove(item.uid);
        this.actSrv.recordActivity(
            this.firebaseAuth.auth.currentUser.uid,
            this.firebaseAuth.auth.currentUser.email,
            "Eliminado al usuario : " + "'" +item.name + "'",
            moment().format("L"),
            moment().format('LT')
          );
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
          this.actSrv.recordActivity(
            this.firebaseAuth.auth.currentUser.uid,
            this.firebaseAuth.auth.currentUser.email,
            "Creado al usuario al estudiante: " + "'" +user.name + "'",
            moment().format("L"),
            moment().format('LT')
          );
    }
    
    createStudent(user){
        this.db.list('students').update(user.uid,{
            name:user.name,
            lastName:user.lastName,
            lastName2:user.lastName2,
            imageURL:user.imageURL,
            email:user.email,
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
        this.db.object("users/"+user.uid).update({
            isStudent:true
        })
    }
    
    sendInvitation(uid:any[],sender,email){
        for (let index = 0; index < uid.length; index++) {
            let uidElement = uid[index];

            this.db.list("users/"+ sender ).update("students/",{
                [uidElement]:true
            })
            this.db.list("users/"+uidElement ).update("requests/"+sender,{
                accepted:false,
                date:this.day.format('dddd, MMMM D YYYY'),
                type:'tutorRequest',
                email:email,
                sender:sender,
                uid:uidElement,
            })
            this.db.object("tutorRequest/"+ sender + "/" + uidElement +'/').update({
                accepted:false,
                date:this.day.format('dddd, MMMM D YYYY'),
                type:'tutorRequest',
                email:email,
                uid:uidElement,
            })
            this.actSrv.recordActivity(
                this.firebaseAuth.auth.currentUser.uid,
                this.firebaseAuth.auth.currentUser.email,
                "enviado una invitación al usuario: " + "'" +uid[index] + "'",
                moment().format("L"),
                moment().format('LT')
              );
        }
    }
}
