import { Component, OnInit } from '@angular/core';
import { AlertController } from "ionic-angular";

@Component({
  selector: 'courses',
  templateUrl: 'courses.html',
})
export class CoursesComponent implements OnInit {

  constructor(
    public alert:AlertController) {  }

  ngOnInit() {

  }

  info(param){
    console.log(param)
    let alert = this.alert.create({
      title: 'Horarios:',
      subTitle: ' Lunes y Miércoles o Martes y Jueves |4 a 5:30 | | 5:30 a 7 |   | 7 a 8:30|  |8:30 a 10 PM| O Sábados Intensivos |9 a 12| / |1 a 4| / |4 a 7 PM|',
      buttons: ['OK']
    });
    alert.present();
  }

}
