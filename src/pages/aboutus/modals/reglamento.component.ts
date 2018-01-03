import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'app-reglamento',
  templateUrl: 'reglamento.component.html',
})
export class ReglamentoComponent implements OnInit {
  constructor(
              public viewCtrl: ViewController,
  ) {
  }

  ngOnInit() {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
