import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';
//components

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalContentPage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginComponent } from '../pages/login/login';
import { ModalRegister } from '../pages/login/login';
import { NavbarComponent }from '../pages/components/navbar/navbar';
import { dashboardPage } from '../pages/components/dashboard/dashboard';
import { optionsPage } from '../pages/components/options/options';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsListComponent }  from '../pages/components/news/news-list.component';
import { NewsComponent } from '../pages/components/news/news.component';
import { NewsFormPage } from '../pages/components/news/news.component';
import { PageHandlerComponent } from '../pages/components/pageHandler/pageHandler.component';
import { ProfileComponent } from '../pages/userprofile/profile';
import { UploadListComponent } from '../pages/components/uploads/shared/upload-list/upload-list.component';
import { UploadFormComponent } from '../pages/components/uploads/shared/upload-form/upload-form.component';
import { UploadService } from '../pages/components/uploads/shared/upload.service';
import { NewsService } from "../pages/components/news/news.service";
import { ReversePipe } from "../pages/components/sort_reverse";
import { ModalComponent } from "../pages/components/modal/modal";
import { UpdateNewsModal } from "../pages/components/news/news-list.component"
import { NewsListService} from "../pages/components/news/news-list.service"
import { FCM } from '@ionic-native/fcm';
import { Push} from '@ionic-native/push';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { PushService } from './push.service'
import { AnnouncementComponent } from '../pages/announcements/announcements'
import { AnnouncementCrudComponent } from '../pages/announcements/announcement-crud';
import { AboutUsComponent } from '../pages/aboutus/aboutus';
import { CoursesComponent } from '../pages/courses/courses';
import { OneSignal } from '@ionic-native/onesignal';
import { AnnouncementButton } from '../pages/announcements/announcement-crud';
import { AnnouncementModalCRUD } from '../pages/announcements/announcement-crud';
//COMPONENT - CARLOS
import { DirectoryComponent } from '../pages/directory/directory.component';


//services
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { AnnouncementService } from '../pages/announcements/announcements.service';
import { ProspectButtonComponent } from "../pages/propects/prospect-button";
import { ProspectModalComponent } from "../pages/propects/prospect.component";
import { ProspectService } from "../pages/propects/prospect.service";
import { ProspectCrudComponent } from "../pages/propects/prospect-crud.component";


export const firebaseConfig = {
 apiKey: "AIzaSyDObZjIkysrMu1aT2AMFfaYaQD8E1hn12k",
 authDomain: "pcfm-5eeb9.firebaseapp.com",
 databaseURL: "https://pcfm-5eeb9.firebaseio.com",
 projectId: "pcfm-5eeb9",
 storageBucket: "pcfm-5eeb9.appspot.com",
 messagingSenderId: "205598390265"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginComponent,
    NavbarComponent,
    NewsListComponent,
    NewsComponent,
    NewsFormPage,
    ModalContentPage,
    ModalRegister,
    PageHandlerComponent,
    ProfileComponent,
    dashboardPage,
    optionsPage,
    UploadListComponent,
    UploadFormComponent,
    ReversePipe,
    ModalComponent,
    UpdateNewsModal,
    AnnouncementComponent,
    AnnouncementCrudComponent,
    AboutUsComponent,
    CoursesComponent,
    AnnouncementButton,
    AnnouncementModalCRUD,
    ProspectButtonComponent,
    ProspectModalComponent,
    ProspectCrudComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginComponent,
    NavbarComponent,
    NewsListComponent,
    NewsComponent,
    NewsFormPage,
    ModalContentPage,
    ModalRegister,
    PageHandlerComponent,
    ProfileComponent,
    dashboardPage,
    optionsPage,
    UploadListComponent,
    UploadFormComponent,
    ModalComponent,
    UpdateNewsModal,
    AnnouncementComponent,
    AnnouncementCrudComponent,
    CoursesComponent,
    AboutUsComponent,
    AnnouncementButton,
    AnnouncementModalCRUD,
    ProspectButtonComponent,
    ProspectModalComponent,
    ProspectCrudComponent,
    DirectoryComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    AngularFireDatabase,
    AnnouncementService,
    UploadService,
    NewsService,
    NewsListService,
    FCM,
    HTTP,
    HttpClientModule,
    Push,
    PushService,
    LocalNotifications,
    OneSignal,
    ProspectService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
