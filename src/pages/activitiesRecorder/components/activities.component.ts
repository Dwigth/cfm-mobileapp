import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ActivitiesService } from '../services/activities.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../Users/user.service';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import * as moment from 'moment';

@Component({
    selector: 'activities-component',
    templateUrl: 'activities.component.html'
})

export class ActivitiesComponent implements OnInit {
    activities:any;
    user:Observable<any[]>;
    currentHour:string;
    constructor(
        public navCtrl:NavController,
        private actSrv:ActivitiesService,
        private usrSrv:UserService,
        private toastCrtl:ToastController,
    ) { 
        
     }

    ngOnInit() {
        this.currentHour = moment().format('LT'); 
        this.activities = this.actSrv.retrieveActivities(this.currentHour);
     }
    goBack() {
        this.navCtrl.pop();
      }

      modal(uid,num){
          console.log('myBtn'+num);
          
       let btns = (<HTMLInputElement>document.getElementById('myBtn' + num));
       //let btns = document.getElementById("myBtn");
       let modal = (<HTMLInputElement>document.getElementById('myModal'));
       let span = (<HTMLInputElement>document.getElementsByClassName("close")[0]);

       btns.addEventListener("click",(e:Event) => this.openModal(modal));

       //span.addEventListener("click",(e:Event) => this.closeModal(modal));
       this.user = this.usrSrv.listUserByUID(uid);
       console.log(uid);
       
      }

      openModal(modal){
        modal.style.display = "block";
      }

      closeModal(num){
        let modal = (<HTMLInputElement>document.getElementById('myModal'));
        modal.style.display = "none";
      }

    createToast(){
        let toast = this.toastCrtl.create({
            message: 'Por seguridad, los nombres de los usuarios serán encriptados y solo se podrán visualizar al darle click a su liga encriptada.',
            duration: 3000
          });
          toast.present();
    }

}