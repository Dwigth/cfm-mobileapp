import { Component, OnInit } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as moment from 'moment';
import { InvitationService } from './invitation.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-invitation',
  templateUrl: 'invitation.component.html',
})
export class InvitationComponent implements OnInit {
  private currentDay:number;
  private currentUser:string;
  public maxDay:number;
  private code:string;
  private user:Observable<any[]>;
  private days;
  constructor(// POP UP DE REQUERIMINETOS PARA DESCARGAR LA INVITACION
              public toastCtrl: ToastController,
              private auth:AngularFireAuth,
              private isrv:InvitationService,
  ) {
    let day = moment();
    this.currentUser = this.auth.auth.currentUser.uid;
    this.currentDay = Number(day.format('DDD'));
    this.maxDay = 49;
    console.log(this.currentDay);
    this.user = isrv.searchByInvitationStat(this.currentUser);
  }

  ngOnInit() {
    
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Para acceder al evento es necesario ser alumno #CFM y confirmar su asistencia dentro de la App. Desliza el botón de "Asistencia" de izquierda a derecha para confirmar tu asistencia y generar un pase.',
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: position
    });

    toast.present(toast);
  }

  generateCode(){
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (let i = 0; i < 15; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    generateInvitation(confirm){
      if (confirm) {
      this.code = this.generateCode();
      this.isrv.saveInvitation(this.currentUser,this.currentDay,this.code);
      }else{
        this.isrv.deleteInvitation(this.currentUser,this.currentDay,this.code);
      }
    }

}
