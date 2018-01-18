import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';

//components - Dwigth
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
import { UpdateNewsModal } from "../pages/components/news/news-list.component";
import { NewsListService} from "../pages/components/news/news-list.service";
import { AnnouncementComponent } from '../pages/announcements/announcements';
import { AnnouncementCrudComponent } from '../pages/announcements/announcement-crud';
import { AboutUsComponent } from '../pages/aboutus/aboutus';
import { CoursesComponent } from '../pages/courses/courses';
import { AnnouncementButton } from '../pages/announcements/announcement-crud';
import { AnnouncementModalCRUD } from '../pages/announcements/announcement-crud';
import { AuthService } from './auth.service';
import { AnnouncementService } from '../pages/announcements/announcements.service';
import { ProspectButtonComponent } from "../pages/propects/prospect-button";
import { ProspectModalComponent } from "../pages/propects/prospect.component";
import { ProspectService } from "../pages/propects/prospect.service";
import { ProspectCrudComponent } from "../pages/propects/prospect-crud.component";
import { UserButton } from "../pages/Users/user.button";
import { UserCrud } from "../pages/Users/user.crud.component";
import { UserModal } from "../pages/Users/user.modal.component";
import { UserService } from "../pages/Users/user.service";
import { StudentsComponent } from "../pages/students/students.component";
import { StudentService } from "../pages/students/students.services";
import { QualificationComponent } from '../pages/students/qualification.component';
import { ClassesComponent } from '../pages/students/classes.component';
import { CourseDetailComponent } from '../pages/students/CourseDetail.component';
import { GroupAdminComponent } from '../pages/teachers/groupAdmin.component';
import { TeachersComponent } from '../pages/teachers/teachers.component';
import { GroupDetailsComponent } from '../pages/teachers/groupsDetails.component';
import { GroupFormComponent } from '../pages/teachers/groupForm.component';
import { LessonFormComponent } from '../pages/teachers/lessonForm.component';
import { TeacherService } from '../pages/teachers/teachers.services';
import { MemberComponent } from '../pages/teachers/members.component';
import { StudentButtonComponent } from '../pages/CRM/estudiantes/student.button';
import { StudentCRMService } from '../pages/CRM/estudiantes/student.services';
import { StudentCrudComponent } from '../pages/CRM/estudiantes/student.crud';
import { StudentCRMComponent } from '../pages/CRM/estudiantes/studentCRM.component';
//COMPONENT - CARLOS
import { DirectoryComponent } from '../pages/directory/directory.component';
import { MisionComponent } from '../pages/aboutus/modals/mision.component';
import { HistoriaComponent } from '../pages/aboutus/modals/historia.component';
import { ReglamentoComponent } from '../pages/aboutus/modals/reglamento.component';
import { ProfesoresComponent } from '../pages/aboutus/modals/profesoresmodal.component';
import { ManualComponent } from '../pages/aboutus/modals/manual.component';
import { CrudService } from '../pages/CRM/cursos/crud.service';
import { CursosComponent } from '../pages/CRM/cursos/cursos.component';
import { CursosButtonComponent } from '../pages/CRM/cursos/cursosbutton';
import { TemplateComponent } from '../pages/CRM/cursos/template.component';


//SERVICES carlos
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FCM } from '@ionic-native/fcm';
import { Push} from '@ionic-native/push';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { PushService } from './push.service';
import { OneSignal } from '@ionic-native/onesignal';



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
    DirectoryComponent,
    MisionComponent,
    HistoriaComponent,
    ReglamentoComponent,
    ProfesoresComponent,
    ManualComponent,
    UserButton,
    UserCrud,
    UserModal,
    StudentsComponent,
    QualificationComponent,
    ClassesComponent,
    CourseDetailComponent,
    GroupAdminComponent,
    TeachersComponent,
    GroupDetailsComponent,
    GroupFormComponent,
    LessonFormComponent,
    MemberComponent,
    CursosComponent,
    CursosButtonComponent,
    TemplateComponent,
    StudentButtonComponent,
    StudentCrudComponent,
    StudentCRMComponent,
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
    DirectoryComponent,
    MisionComponent,
    HistoriaComponent,
    ReglamentoComponent,
    ProfesoresComponent,
    ManualComponent,
    UserButton,
    UserCrud,
    UserModal,
    StudentsComponent,
    QualificationComponent,
    ClassesComponent,
    CourseDetailComponent,
    GroupAdminComponent,
    TeachersComponent,
    GroupDetailsComponent,
    GroupFormComponent,
    LessonFormComponent,
    MemberComponent,
    CursosComponent,
    CursosButtonComponent,
    TemplateComponent,
    StudentButtonComponent,
    StudentCrudComponent,
    StudentCRMComponent,
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
    UserService,
    StudentService,
    TeacherService,
    CrudService,
    StudentCRMService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
