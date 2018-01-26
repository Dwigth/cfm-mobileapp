import { Component } from '@angular/core';
import { ProfileComponent } from './profile';
import { TutorRequestComponent } from './tutorRequest';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
    template: `
    <ion-tabs >
      <ion-tab tabIcon="person" tabTitle="Perfil"  [root]="tab1"></ion-tab>
      <ion-tab  tabIcon="notifications-outline"  [root]="tab2"></ion-tab>
    </ion-tabs>
    `
})

export class ProfileTabsComponent {
    tab1: any;
    tab2: any;
    requests: Observable<any[]>;

    constructor(
    ) { 
        this.tab1 = ProfileComponent;
        this.tab2 = TutorRequestComponent;
     }
}