import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivitiesService } from '../../activitiesRecorder/services/activities.service';
import * as moment from 'moment';
@Injectable()
export class StudentCRMService {

    private imageUrl:string;

    constructor(
        public db:AngularFireDatabase,
        public afauth:AngularFireAuth,
        public alrtCtl:AlertController,
        public actSrv:ActivitiesService
    ) { }

    getStudents(){
        return this.db.list("students",
    val => val.limitToFirst(50)
    ).valueChanges();
    }

    getCourses(){
        return this.db.list('course').valueChanges();
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

    setImageUrl(imageURL,uid){
        this.db.object('students/'+uid.uid).update({
            imageURL:imageURL
        })
        let alrt = this.alrtCtl.create({
            title: 'Actualizaste una foto de estudiante.',
            message: 'Recarga al estudiante para ver el cambio.',
            buttons:['OK']
        })
        alrt.present();
        this.actSrv.recordActivity(
            this.afauth.auth.currentUser.uid,
            this.afauth.auth.currentUser.email,
            "editado a: " + uid + "con la imagen: " + imageURL,
            moment().format("L"),
            moment().format('LT')
          );
    }

    editStudent(uid,courses:any[]){
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
                        schedule:uid.schedule,
                        classroom:uid.classroom,
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
                      for (let index = 0; index < courses.length; index++) {
                          const element = courses[index];
                          this.db.list('students/'+uid.uid +'/courses/').push({
                            name:element.name,
                            schedule:element.schedule,
                            teacher:element.teacher,
                            classroom:element.classroom,
                            id_course:element.id_course
                          }).then(val =>{
                              this.db.object('students/'+uid.uid + '/courses/'+val.key).update({
                                  key:val.key
                              })
                              this.actSrv.recordActivity(
                                this.afauth.auth.currentUser.uid,
                                this.afauth.auth.currentUser.email,
                                "editado al estudiante: " + uid,
                                moment().format("L"),
                                moment().format('LT')
                              );
                          });
                          
                      }
                }
              }
            ]
          });
          confirm.present();
         
    }

    listCourses(){
        return this.db.list('course').valueChanges();
    }

    listStudentCourses(uid){
        return this.db.list('students/'+ uid + "/courses").valueChanges();
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
                    this.db.object("users/"+uid).update({
                        isStudent:false
                    });
                    this.actSrv.recordActivity(
                        this.afauth.auth.currentUser.uid,
                        this.afauth.auth.currentUser.email,
                        "eliminado al estudiante: " + uid,
                        moment().format("L"),
                        moment().format('LT')
                      );
                }
              }
            ]
          });
          confirm.present();
        
    }

    eraseStudentCourse(uid,key){
        let confirm = this.alrtCtl.create({
            title: 'Borrar curso',
            message: '¿En realidad quiere borrar este curso?',
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
                    this.db.list("students/"+ uid + "/courses/" + key ).remove();
                    this.actSrv.recordActivity(
                        this.afauth.auth.currentUser.uid,
                        this.afauth.auth.currentUser.email,
                        "eliminado el curso: " + key,
                        moment().format("L"),
                        moment().format('LT')
                      );
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