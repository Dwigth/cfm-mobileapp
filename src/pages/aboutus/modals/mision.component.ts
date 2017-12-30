import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'app-mision',
  templateUrl: 'mision.component.html',
})
export class MisionComponent implements OnInit {
  constructor(
              public viewCtrl: ViewController,
  ) {
  }

  ngOnInit() {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
