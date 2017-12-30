import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'app-profesores',
  templateUrl: 'profesoresmodal.component.html',
})
export class ProfesoresComponent implements OnInit {
  constructor(
              public viewCtrl: ViewController,
  ) {
  }

  ngOnInit() {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
