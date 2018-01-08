import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Push, PushObject, PushOptions} from '@ionic-native/push';
import { HomePage } from '../pages/home/home';
import { LoginComponent } from '../pages/login/login';
//import { optionsPage } from '../pages/components/options/options';
import { dashboardPage } from '../pages/components/dashboard/dashboard';
import { ProfileComponent } from '../pages/userprofile/profile';
import { AnnouncementComponent } from '../pages/announcements/announcements';
import { PushService } from './push.service';
import { AboutUsComponent } from '../pages/aboutus/aboutus';
import { CoursesComponent } from '../pages/courses/courses';
//COMPONENTS -CARLOS
import { DirectoryComponent } from '../pages/directory/directory.component';
//
import { OneSignal } from '@ionic-native/onesignal';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AuthService } from "../app/auth.service";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  adminPages: Array<{title: string, component: any, icon: any}>;
  userpages: Array<{title: string, component: any, icon: any}>;

  users: Observable<any[]>;
  PushService;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,
    public authServ: AuthService,
    public db: AngularFireDatabase,
    public push: Push,
    public alertCtrl:AlertController,
    public pushServ:PushService
  ) {

    this.initializeApp();

    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      console.log("Usuario:" + user.email);
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

      this.userpages = [
        { title: 'Últimas noticias', component: HomePage, icon: 'apps' },
        { title: 'Quienes somos', component: AboutUsComponent, icon: 'contacts' },
        { title: 'Cursos', component: CoursesComponent, icon: 'md-albums' },
        { title: 'Avisos', component: AnnouncementComponent, icon: 'bulb' },
        { title: 'Directorio', component: DirectoryComponent, icon: 'bookmarks' },
        { title: 'Acceder/Salir', component: LoginComponent, icon: 'log-in' }

      ];

      this.adminPages = [
        { title: 'Últimas noticias', component: HomePage, icon: 'apps' },
        { title: 'Perfil', component: ProfileComponent, icon: 'person' },
        { title: 'Dashboard', component: dashboardPage, icon: 'clipboard' },
        { title: 'Avisos', component: AnnouncementComponent, icon: 'bulb' },
        { title: 'Quienes somos', component: AboutUsComponent, icon: 'contacts' },
        { title: 'Cursos', component: CoursesComponent, icon: 'md-albums' },
        { title: 'Directorio', component: DirectoryComponent, icon: 'bookmarks' },
        { title: 'Acceder/Salir', component: LoginComponent, icon: 'log-in' }
      ];

    // used for an example of ngFor and navigation
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushsetup();


      var notificationOpenedCallback = function(jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
          };

          window["plugins"].OneSignal
            .startInit('850f884b-f4e1-4ae0-a056-490643c0f762', '986806210217')
            .handleNotificationOpened(notificationOpenedCallback)
            .endInit();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  pushsetup() {
    const options: PushOptions = {
     android: {
         senderID: '986806210217'
     },
     ios: {
         alert: 'true',
         badge: true,
         sound: 'false'
     },
     windows: {}
  };

  const pushObject: PushObject = this.push.init(options);

  pushObject.on('notification').subscribe((notification: any) => {
    if (notification.additionalData.foreground) {
      let youralert = this.alertCtrl.create({
        title: 'New Push notification',
        message: notification.message
      });
      youralert.present();
    }
  });

  pushObject.on('registration').subscribe((registration: any) => {
     //do whatever you want with the registration ID
  });

  pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
}

  }
