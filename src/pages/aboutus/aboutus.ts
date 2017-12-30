import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { MisionComponent } from './modals/mision.component';
import { HistoriaComponent } from './modals/historia.component';
import { ReglamentoComponent } from './modals/reglamento.component';
import { ProfesoresComponent } from './modals/profesoresmodal.component';
import { ManualComponent } from './modals/manual.component';



@Component({
  selector: 'aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutUsComponent implements OnInit {
  info:string;
  title:string;
  constructor(
              public modalCtrl: ModalController
  ) {
    this.title = "¿Quiénes somos?";
    this.info = "En tanto proyecto pedagógico, nos caracteriza el máximo nivel del profesorado que capacitamos en Centros de valía en el país, las regulaciones del cupo por academia para garantizar una enseñanza personalizada, el empeño de una formación integral que favorecemos con la coordinación de diversos cursos en otras vertientes artísticas diferentes de la música, la búsqueda de un alumnado que en su proceso de aprendizaje también devenga en experiencia mediante la realización de espectáculos, y un fuerte compromiso social que se mani esta con las promociones para distintos miembros de la familia del estudiante, así como mediante el otorgamiento de becas de matrícula y residencia a algunos casos sociales que así lo ameriten.";
  }

  ngOnInit() {}

  presentModal(index:number) {
      switch(index) {
   case 1: {
      let mision = this.modalCtrl.create( MisionComponent );
      mision.present();
      break;
   }
   case 2: {
     let historia = this.modalCtrl.create( HistoriaComponent );
     historia.present();
     break;
   }
   case 3: {
     let reglamento = this.modalCtrl.create( ReglamentoComponent );
     reglamento.present();
     break;
   }
   case 4: {
     let profesores = this.modalCtrl.create( ProfesoresComponent );
     profesores.present();
     break;
   }
   case 5: {
     let manual = this.modalCtrl.create( ManualComponent );
     manual.present();
     break;
   }
   default: {
      console.log("ESTE MODAL NO ES VÁLIDO")
      break;
   }
  }
      }

  }
