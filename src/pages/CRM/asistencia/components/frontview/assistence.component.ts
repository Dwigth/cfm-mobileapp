import { Component, OnInit } from '@angular/core';
import { ListAssitanceComponent } from '../listComponent/list-assitance.component';
import { ViewController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'assistence',
    template: `
    <ion-tabs >
    <ion-tab tabIcon="person" tabTitle="Perfil"  [root]="tab1"></ion-tab>
    <ion-tab  tabIcon="notifications-outline"  [root]="tab2"></ion-tab>
  </ion-tabs>
    `
})

export class AsistenceComponent implements OnInit {
    tab1: any;
    tab2: any;
    constructor(
        public viewCtl:ViewController,
        public navCtl:NavController,
    ) { 
        this.tab1 = ListAssitanceComponent;
        this.tab2 = ListAssitanceComponent;
     }

    ngOnInit() { }

    dismiss(){
        this.navCtl.pop();
        this.viewCtl.dismiss();
    }
}