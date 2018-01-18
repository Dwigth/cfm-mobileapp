import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

@Injectable()
export class StudentCRMService {

    constructor(
        public db:AngularFireDatabase,
        public alrtCtl:AlertController,
    ) { }

    getStudents(){
        return this.db.list("students",
    val => val.limitToFirst(50)
    ).valueChanges();
    }

    searchByProperty(property,node){
        return this.db.list("students", 
        val => val.orderByChild(node.trim())
        .startAt(property.trim())
        ).valueChanges();
    }
    searchByName(name){
        return this.db.list("students", 
        val => val.orderByChild("name")
        .startAt(name)
        ).valueChanges();
    }
    editStudent(uid){
        let confirm = this.alrtCtl.create({
            title: 'Editar estudiante',
            message: '¿En realidad quiere editar este estudiante?',
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
                    this.db.object('students/'+uid.uid).update({
                        name:uid.name,
                        lastName:uid.lastName,
                        lastName2:uid.lastName2,
                        imageURL:uid.imageURL,
                        email:uid.email,
                        enrollment:uid.enrollment,
                        age:uid.age,
                        course:uid.course,
                        genre:uid.genre,
                        phone:uid.phone,
                        ocupation:uid.ocupation,
                        address:uid.address,
                        advertising:uid.advertising,
                        medicalObservation:uid.medicalObservation,
                        teacher:uid.teacher,
                        type:uid.type,
                        tutorName:uid.tutorName,
                        tutorRelationship:uid.tutorRelationship,
                        tutorAge:uid.tutorAge,
                        tutorOcupation:uid.tutorOcupation,
                        tutorPosition:uid.tutorPosition,
                        tutorPhone:uid.tutorPhone,
                        tutorEmail:uid.tutorEmail,
                        tutorAddress:uid.tutorAddress,
                        tutorRegDate:uid.tutorRegDate,
                        tutorInitDate:uid.tutorInitDate,
                        tutorFinalDate:uid.tutorFinalDate,
                        cost:uid.cost,
                        registration:uid.registration,
                        pedagogicalSample:uid.pedagogicalSample,
                        coments:uid.coments
                      });  
                }
              }
            ]
          });
          confirm.present();
         
    }

    eraseStudent(uid,key){
        let confirm = this.alrtCtl.create({
            title: 'Borrar estudiante',
            message: '¿En realidad quiere borrar este estudiante?',
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
                    this.db.list("students").remove(uid);
                    this.db.object("users/"+key).update({
                        isStudent:false
                    });
                }
              }
            ]
          });
          confirm.present();
        
    }

    listTeachers(){
        return this.db.list('users',
        val => val.orderByChild('accessLevel')
        .equalTo('teacher')
        ).valueChanges();
    }
}