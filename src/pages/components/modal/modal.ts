import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
})
export class ModalComponent implements OnInit {
  title:string;
  selector:any;
  content:string;
  constructor(
    public viewCtl:ViewController,
  ) {
    
  }

  ngOnInit() {

  }
  dismiss(){
    this.viewCtl.dismiss();
  }
}
