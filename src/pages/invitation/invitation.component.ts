import { Component, OnInit } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'app-invitation',
  templateUrl: 'invitation.component.html',
})
export class InvitationComponent implements OnInit {

  constructor(// POP UP DE REQUERIMINETOS PARA DESCARGAR LA INVITACION
              public toastCtrl: ToastController
  ) {

  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Para acceder al evento es necesario ser alumno #CFM y confirmar su asistencia dentro de la App. Desliza el botón de "Asistencia" de izquiera a derecha para confirmar tu asistencia y descargar el pase.',
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: position
    });

    toast.present(toast);
  }

  ngOnInit() {}
}
