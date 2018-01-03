import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'app-manual',
  templateUrl: 'manual.component.html',
})
export class ManualComponent implements OnInit {
  constructor(
              public viewCtrl: ViewController,
  ) {
  }

  ngOnInit() {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
