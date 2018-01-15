import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as moment from 'moment';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeacherService {
    private currentTeacherName:string;
    private moment:any;

    constructor(
    public db:AngularFireDatabase,
    public afauth:AngularFireAuth,
    public alertCtl:AlertController,) { 
        this.currentTeacherName = afauth.auth.currentUser.uid;
        this.moment = moment();
    }

    refGroupList(){
        return this.db.list('groups');
    }

    refGroupObj(key){
        return this.db.object('groups/'+key);
    }

    listStudets(){
        return this.db.list('users',val => val.orderByChild("isStudent").equalTo(true) .limitToFirst(30)).valueChanges();
     }
     
     searchStudents(name){
         return this.db.list('students', val => val
        .orderByChild("name")
        .startAt(name))
         .valueChanges();
     }

     addMember(groupkey,studentuid,studentkey){
        this.db.list("groups/" + groupkey  ).update("members",{
            [studentuid]:true
        })
        this.db.list("users/" + studentkey  ).update("/groups",{
            [groupkey]:true
        })
     }

     deleteMember(groupkey,studentkey){
        let confirm = this.alertCtl.create({
            title: 'Borrar integrante',
            message: '¿En realidad quieres borrar este integrante?',
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
                    this.db.list("groups/" + groupkey + "/members/"
                    ).remove(studentkey);

                    this.db.list("users/" + studentkey + "/groups/"
                ).remove(groupkey);
                }
              }
            ]
          });
          confirm.present();
        
     }


    saveGroup(name,course,members:any[],memberuid:any[]){
        this.refGroupList().push({
            name:name,
            teacher:this.currentTeacherName,
            course:course,
            date:this.moment.format("D, MMMM YYYY")
        }).then(val => {
            let object = this.refGroupObj(val.key);
            object.update({
                groupkey:val.key
            });
            this.addMembersToGroup(val.key,members,memberuid);
            let alert = this.alertCtl.create({
                title: '¡Nuevo grupo!',
                subTitle: '¡Haz creado un grupo enhorabuena!',
                buttons: ['OK']
            });
            alert.present();
        })
    }
    
    deleteGroup(key){
        let confirm = this.alertCtl.create({
            title: 'Borrar grupo',
            message: '¿En realidad quieres borrar este grupo?',
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
                    this.refGroupObj(key).remove();
                }
              }
            ]
          });
          confirm.present();
    }

    addMembersToGroup(key,member:any[],memberuid:any[]){

        for (let index = 0; index < member.length; index++) {
            const element = member[index];
            const uidElement = memberuid[index];

            this.db.list("groups/"+key).update("members",{
                [uidElement]:true
            })
            this.db.list("users/"+[element]).update("groups",{
                [key]:true
            })
        }
    }

    retrieveGroupData(key){
        return this.db.list("groups",val => val.orderByChild("teacher").equalTo(key)).valueChanges();
    }

    retriveGroupMembers(key,name){
        return this.db.list("users",val => val.orderByChild("groups/"+ key).equalTo(true)).valueChanges();
    }

    retrieveLesson(groupkey){
       return this.db.list("lessons/"+ groupkey).valueChanges();
    }

    saveLesson(groupkey,name,textbody,url,date){
        this.db.list("lessons/"+groupkey).push({
            name:name,
            createdAt:date,
            bodytext:textbody,
            url:url
        }).then(val =>{
            this.db.object("lessons/"+groupkey+"/"+val.key).update({
                key:val.key
            })
            let alert = this.alertCtl.create({
                title: '¡Nuevo lección!',
                subTitle: '¡Haz creado una lección enhorabuena!',
                buttons: ['OK']
            });
            alert.present();
        })
    }

    deleteLesson(groupkey,lessonkey){
        let confirm = this.alertCtl.create({
            title: 'Borrar lección',
            message: '¿En realidad quieres borrar esta lección?',
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
                    this.db.list("lessons/" + groupkey).remove(lessonkey);
                }
              }
            ]
          });
          confirm.present();
        
      
    }

    editLesson(lessonkey,groupkey,name,textbody,url,date){
        this.db.object("lessons/"+ groupkey + "/" +lessonkey ).update({
            name:name,
            createdAt:date,
            bodytext:textbody,
            url:url
        }).then(val =>{
            
            let alert = this.alertCtl.create({
                title: '¡Lección editada!',
                subTitle: '¡Haz editado una lección enhorabuena!',
                buttons: ['OK']
            });
            alert.present();
        })
    }
}