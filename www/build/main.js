webpackJsonp([0],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tutorRequest__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileComponent = (function () {
    function ProfileComponent(autServ, db, afAuth, alertCtrl, navCtrl) {
        this.autServ = autServ;
        this.db = db;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.userUpdate = {
            imageURL: '',
            phone: '',
            ocupation: '',
            grade: '',
            age: '',
            advertising: '',
            uid: ''
        };
        var user = afAuth.auth.currentUser;
        var name, email, photoUrl, uid, emailVerified;
        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;
        }
        this.users = db.list('users', function (value) { return value.orderByChild('email').equalTo(user.email); }).valueChanges();
        this.student = db.list('students/' + user.uid + '/courses/').valueChanges();
        console.log(this.myDate);
    }
    ProfileComponent.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    ProfileComponent.prototype.UpdateInfo = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Editar perfil',
            message: '¿En realidad quiere editar su perfil?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.userUpdate.uid = document.getElementById('uid').value;
                        var item = _this.db.object('users/' + _this.userUpdate.uid);
                        var actPhone = document.getElementById('actPhone').value;
                        var actGrade = document.getElementById('actGrade').value;
                        var actAge = document.getElementById('actAge').value;
                        var actOcupation = document.getElementById('actOcupation').value;
                        var phone = (_this.userUpdate.phone == '') ? actPhone : _this.userUpdate.phone;
                        var grade = (_this.userUpdate.grade == '') ? actGrade : _this.userUpdate.grade;
                        var age = (_this.userUpdate.age == '') ? actAge : _this.userUpdate.age;
                        var ocupation = (_this.userUpdate.ocupation == '') ? actOcupation : _this.userUpdate.ocupation;
                        var imageURL = document.getElementById('url');
                        var currentImage = document.getElementById('urlcurrent').value;
                        _this.userUpdate.phone = phone;
                        _this.userUpdate.grade = grade;
                        _this.userUpdate.age = age;
                        _this.userUpdate.ocupation = ocupation;
                        _this.userUpdate.imageURL = (imageURL != null) ? imageURL.value : currentImage;
                        item.update({
                            imageURL: _this.userUpdate.imageURL,
                            phone: _this.userUpdate.phone,
                            ocupation: _this.userUpdate.ocupation,
                            grade: _this.userUpdate.grade,
                            age: _this.userUpdate.age,
                            advertising: _this.userUpdate.advertising
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ProfileComponent.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__tutorRequest__["a" /* TutorRequestComponent */]);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        //console.log( this.afAuth.auth.currentUser.email);
    };
    ProfileComponent.prototype.editBirthDate = function () {
        console.log(this.myDate);
        console.log(this.myDate.dayValues);
        var ageText = __WEBPACK_IMPORTED_MODULE_6_moment__(this.myDate).fromNow(true);
        var age = Number(ageText.substr(0, 2));
        console.log(ageText);
        console.log(age);
        this.db.object('users/' + this.afAuth.auth.currentUser.uid).update({ age: age, ageText: ageText });
        this.showAlert("Gracias", "Se ha actualizado tu edad");
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\userprofile\profile.html"*/'\n\n<ion-content>\n\n  <div class="background"  *ngFor="let item of users | async">\n\n  <div class="namepos">\n\n      <ion-grid>\n\n          <ion-row>\n\n            <ion-col >\n\n              <div padding>\n\n\n\n              </div>\n\n              <ion-item class="card_profile">\n\n                  <img src="{{item.imageURL}}" class="custom-img"/>\n\n                  <input type="hidden" id="urlcurrent" value="{{item.imageURL}}">\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col >\n\n              <div padding></div>\n\n              <div>\n\n                  <h4>{{item.name + " " + item.lastName | uppercase}}</h4>\n\n                  <p class="parap">POSICIÓN: {{item.accessLevel | uppercase}}</p>\n\n              </div>\n\n               \n\n              </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n  </div>\n\n  <div id="cont">\n\n  <ion-list padding no-lines >\n\n\n\n     <!-- <ion-item>\n\n          \n\n          <ion-card text-center class="hide-card">\n\n              <img src="{{item.imageURL}}" class="custom-img"/>\n\n              <input type="hidden" id="urlcurrent" value="{{item.imageURL}}">\n\n              <br>\n\n              <br>\n\n              <h2 text-wrap > {{item.name + \' \' + item.lastName + \' \'+ item.lastName2 | uppercase}} </h2>\n\n              <p>Posición: <ion-badge color="orange"><ion-note id="pos">{{item.accessLevel}}</ion-note></ion-badge> </p> \n\n              <hr>\n\n          </ion-card>\n\n          \n\n      </ion-item>-->\n\n          <ion-item>\n\n              <p text-center class="notif" (click)="notification()"><ion-icon name="notifications-outline"></ion-icon> Notificaciones </p>\n\n          </ion-item>\n\n      \n\n            <ion-item text-center>\n\n                   <h1> INFORMACIÓN</h1>\n\n            </ion-item>\n\n\n\n          <ion-item>\n\n           \n\n            <ion-icon name=\'mail\' item-start></ion-icon>\n\n            E-mail\n\n            <ion-note item-end>\n\n            {{item.email}}\n\n            </ion-note>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-toggle [(ngModel)]="phone" name="phone" checked="false"></ion-toggle>\n\n            <ion-label>\n\n              Telefono\n\n            </ion-label>\n\n            <ion-icon name=\'call\' item-start></ion-icon>\n\n          </ion-item>\n\n          <div *ngIf="phone != true; else phoneNumber">\n\n\n\n          </div>\n\n\n\n          <ng-template #phoneNumber>\n\n            <ion-item>\n\n              <ion-icon name=\'call\' item-start></ion-icon>\n\n              <input type="text" value="{{item.phone}}" readonly>\n\n\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name=\'call\' item-start></ion-icon>\n\n              <input id="phone" type="text" [(ngModel)]="userUpdate.phone" name="phone" placeholder="Agregar: ">\n\n            </ion-item>\n\n          </ng-template>\n\n\n\n\n\n          <ion-item>\n\n            <ion-icon name=\'alert\' item-start></ion-icon>\n\n            Estatus\n\n            <ion-badge item-end color="green"> <ion-note id="pos" item-end>\n\n            {{item.status}}\n\n            </ion-note></ion-badge>\n\n          </ion-item>\n\n\n\n<!-- -->\n\n          <ion-item>\n\n            <ion-label>\n\n              Último grado de estudios\n\n            </ion-label>\n\n            <ion-toggle [(ngModel)]="grade" name="grade" checked="false"></ion-toggle>\n\n            <ion-icon name=\'school\' item-start></ion-icon>\n\n          </ion-item>\n\n\n\n          <div *ngIf="grade != true; else lastGrade">\n\n\n\n          </div>\n\n          <ng-template #lastGrade>\n\n            <ion-item>\n\n              <ion-icon name=\'school\' item-start></ion-icon>\n\n              <input  type="text"  value="{{item.grade}}" readonly> \n\n\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name=\'school\' item-start></ion-icon>\n\n              <input id="grade" type="text" [(ngModel)]="userUpdate.grade" name="grade" placeholder="Actualizar: ">\n\n            </ion-item>\n\n\n\n          </ng-template>\n\n<!-- -->\n\n<ion-item>\n\n  <ion-label>Fecha de nacimiento</ion-label>\n\n  <ion-icon name=\'calendar\' item-start></ion-icon>\n\n  <ion-datetime displayFormat="YY MM DD" (ionChange)="editBirthDate()"  pickerFormat="YYYY MMMM DD" [(ngModel)]="myDate"></ion-datetime>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Edad</ion-label>\n\n  <ion-icon name=\'calendar\' item-start></ion-icon>\n\n  <p item-end>{{item.ageText}}</p>\n\n</ion-item>\n\n<!--\n\n\n\n          <ion-item>\n\n            <ion-label>\n\n              Edad\n\n            </ion-label>\n\n            <ion-toggle [(ngModel)]="age" name="age" checked="false"></ion-toggle>\n\n            <ion-icon name=\'body\' item-start></ion-icon>\n\n          </ion-item>\n\n\n\n          <div *ngIf="age != true; else ageU">\n\n\n\n          </div>\n\n          <ng-template #ageU>\n\n            <ion-item>\n\n              <ion-icon name=\'body\' item-start></ion-icon>\n\n              <input  type="text"  value="{{item.age}}" readonly>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name=\'body\' item-start></ion-icon>\n\n              <input id="age"type="text" [(ngModel)]="userUpdate.age" name="age" placeholder="Actualizar: ">\n\n            </ion-item>\n\n\n\n          </ng-template>\n\n-->\n\n<!-- -->\n\n          <ion-item>\n\n            <ion-label>\n\n              Ocupación\n\n            </ion-label>\n\n            <ion-toggle [(ngModel)]="ocupation" checked="false"></ion-toggle>\n\n            <ion-icon name=\'folder\' item-start></ion-icon>\n\n          </ion-item>\n\n\n\n          <div *ngIf="ocupation != true; else ocupationU">\n\n\n\n          </div>\n\n          <ng-template #ocupationU>\n\n            <ion-item>\n\n                <ion-icon name=\'folder\' item-start></ion-icon>\n\n                <input  type="text" value="{{item.ocupation}}" readonly> \n\n\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name=\'folder\' item-start></ion-icon>\n\n              <input id="ocupation" type="text" [(ngModel)]="userUpdate.ocupation" name="ocupation" placeholder="Actualizar: ">\n\n            </ion-item>\n\n\n\n          </ng-template>\n\n<!-- -->\n\n\n\n          <ion-item>\n\n            <ion-icon name=\'create\' item-start></ion-icon>\n\n\n\n      <ion-label>¿Cómo se enteró de la escuela?</ion-label>\n\n            <ion-select [(ngModel)]="userUpdate.advertising" name="advertising" item-end>\n\n              <ion-option value="redes">Redes sociales</ion-option>\n\n              <ion-option value="conocido">Conocido</ion-option>\n\n              <ion-option value="cartel">Cartel</ion-option>\n\n            </ion-select>\n\n\n\n\n\n\n\n          </ion-item>\n\n          <input type="hidden"name="uid" id="uid" value="{{item.uid}}">\n\n          <input type="hidden"name="actPhone" id="actPhone" value="{{item.phone}}">\n\n            <input type="hidden"name="actGrade" id="actGrade" value="{{item.grade}}">\n\n            <input type="hidden"name="actAge" id="actAge" value="{{item.age}}">\n\n            <input type="hidden"name="actOcupation" id="actOcupation" value="{{item.ocupation}}">\n\n \n\n\n\n            <ion-item>\n\n          \n\n      <ion-list  no-lines *ngFor="let stu of student | async">\n\n        <ion-item>\n\n            <ion-list-header text-center>\n\n                Academia\n\n              </ion-list-header>\n\n        </ion-item>\n\n          \n\n\n\n        <ion-item>\n\n          <ion-icon name=\'paper\' item-start></ion-icon>\n\n          Curso\n\n          <ion-note item-end>\n\n            {{stu.name | uppercase}}\n\n          </ion-note>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-icon name=\'clock\' item-start></ion-icon>\n\n            Horario\n\n            <ion-note item-end>\n\n              {{stu.schedule | uppercase}}\n\n            </ion-note>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-icon name=\'contact\' item-start></ion-icon>\n\n              Maestro\n\n              <ion-note item-end>\n\n                {{stu.teacher | uppercase}}\n\n              </ion-note>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-icon name=\'cube\' item-start></ion-icon>\n\n                Aula\n\n                <ion-note item-end>\n\n                  {{stu.classroom}}\n\n                </ion-note>\n\n              </ion-item>\n\n\n\n        </ion-list>\n\n      </ion-item>\n\n      <ion-item>\n\n          <label>Cargar foto de perfil</label>\n\n        <upload-form></upload-form>\n\n        <button type="button" ion-button block (click)="UpdateInfo()" > Actualizar información</button>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n          \n\n          \n\n\n\n        </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\userprofile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__app_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _e || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TutorRequestComponent = (function () {
    function TutorRequestComponent(db, afAuth, alertCtrl, navCtrl) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.requests = db.list('users/' + afAuth.auth.currentUser.uid + "/requests", function (val) { return val
            .orderByChild('accepted')
            .equalTo(false); }).valueChanges();
        this.currentUser = afAuth.auth.currentUser;
        this.users = db.list('users', function (value) { return value.orderByChild('email').equalTo(_this.currentUser.email); }).valueChanges();
    }
    TutorRequestComponent.prototype.ngOnInit = function () { };
    TutorRequestComponent.prototype.acceptRequest = function (uid) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Solicitudes',
            message: '¿Está de acuerdo con aceptar esta solicitud?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log("no");
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.db.object("users/" + _this.currentUser.uid + "/requests/" + uid + "/").update({
                            accepted: true
                        });
                        _this.db.object("users/" + uid + "/students/").update({
                            requestAcepted: uid
                        });
                        _this.db.object("tutorRequest/" + uid + "/" + _this.currentUser.uid + "/").update({
                            accepted: true
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    TutorRequestComponent.prototype.pop = function () {
        this.navCtrl.pop();
    };
    TutorRequestComponent.prototype.declineRequest = function (uid) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Solicitudes',
            message: '¿Está de acuerdo con eliminar esta solicitud?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log("no");
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        var item = _this.db.object("users/" + _this.currentUser.uid + "/requests/" + uid + "/");
                        item.remove();
                    }
                }
            ]
        });
        confirm.present();
    };
    TutorRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\userprofile\tutorRequest.html"*/'<ion-content>\n\n\n\n        <ion-list  style="margin-top: 20%;">\n\n                 \n\n<div *ngFor="let item of requests | async; index as i;" [attr.data-index]="i">\n\n        \n\n        <p text-center *ngIf="item.type == \'tutorRequest\' && i > 1" >Tienes {{i+1}} solicitudes de tutor pendiente</p>\n\n        <p text-center *ngIf="item.type == \'tutorRequest\' && i == 0 " >Tienes una solicitud de tutor pendiente</p>\n\n        \n\n                <ion-item-sliding >\n\n                 \n\n                  <ion-item>\n\n                    <h2>{{item.email}}</h2>\n\n                  </ion-item>\n\n                  <ion-item-options side="right">\n\n                    <button (click)="acceptRequest(item.sender)" ion-button color="secondary">\n\n                      <ion-icon clear name="checkbox"></ion-icon>\n\n                      Aceptar\n\n                    </button>\n\n                    <button (click)=" declineRequest(item.sender)" ion-button color="danger">\n\n                      <ion-icon name="close"></ion-icon>\n\n                      Declinar\n\n                    </button>\n\n                    </ion-item-options>\n\n\n\n                </ion-item-sliding>\n\n              </div>  \n\n              </ion-list>\n\n\n\n         <p text-center>Aquí recibirás notificaciones</p>\n\n\n\n\n\n</ion-content> '/*ion-inline-end:"C:\cfm-mobileapp\src\pages\userprofile\tutorRequest.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]])
    ], TutorRequestComponent);
    return TutorRequestComponent;
}());

//# sourceMappingURL=tutorRequest.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activitiesRecorder_services_activities_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AnnouncementService = (function () {
    function AnnouncementService(db, alertCtrl, actSrv, firebaseAuth) {
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.actSrv = actSrv;
        this.firebaseAuth = firebaseAuth;
        __WEBPACK_IMPORTED_MODULE_2_moment__["locale"]('es');
    }
    AnnouncementService.prototype.refLis = function () {
        return this.db.list('announcements');
    };
    AnnouncementService.prototype.refObj = function (itemkey) {
        return this.db.object('announcements/' + itemkey);
    };
    AnnouncementService.prototype.getAnnouncementsByDate = function () {
        var _this = this;
        this.day = __WEBPACK_IMPORTED_MODULE_2_moment__().format("DDD");
        var itemRef = this.db.list("/announcements", function (val) { return val.orderByChild("day").equalTo(_this.day); }).valueChanges();
        return this.announcements = itemRef;
    };
    AnnouncementService.prototype.getNotify = function () {
        var itemRef = this.refLis().valueChanges();
        return this.announcements = itemRef;
        ;
    };
    AnnouncementService.prototype.editAnnouncement = function (Announcement) {
        var _this = this;
        this.refObj(Announcement.key).update({
            title: Announcement.title,
            body: Announcement.body,
            destacado: Announcement.destacado,
            createdAt: Announcement.createdAt,
            day: Announcement.day
        }).then(function (val) {
            var alert = _this.alertCtrl.create({
                title: '¡Exito!',
                subTitle: 'Ya has editado el aviso: ' + val,
                buttons: ['OK']
            });
            alert.present();
            _this.actSrv.recordActivity(_this.firebaseAuth.auth.currentUser.uid, _this.firebaseAuth.auth.currentUser.email, "Editado un anuncio ", __WEBPACK_IMPORTED_MODULE_2_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_2_moment__().format('LT'));
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: '¡Error!',
                subTitle: 'Error tipo: ' + err,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    AnnouncementService.prototype.createAnnouncements = function (Announcement) {
        var _this = this;
        this.refLis().push({
            title: Announcement.title,
            body: Announcement.body,
            destacado: Announcement.destacado,
            createdAt: Announcement.createdAt,
            day: Announcement.day
        }).then(function (value) {
            _this.db.object(value).update({ key: value.key });
            var alert = _this.alertCtrl.create({
                title: '¡Exito!',
                subTitle: 'Ya has creado el aviso: ' + value,
                buttons: ['OK']
            });
            alert.present();
            _this.actSrv.recordActivity(_this.firebaseAuth.auth.currentUser.uid, _this.firebaseAuth.auth.currentUser.email, "Creado un anuncio ", __WEBPACK_IMPORTED_MODULE_2_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_2_moment__().format('LT'));
        });
    };
    AnnouncementService.prototype.deleteAnnouncement = function (item) {
        var _this = this;
        this.refObj(item.key).remove()
            .then(function (value) {
            var alert = _this.alertCtrl.create({
                title: '¡Exito!',
                subTitle: 'Has eliminado el aviso : ' + value,
                buttons: ['OK']
            });
            alert.present();
            _this.actSrv.recordActivity(_this.firebaseAuth.auth.currentUser.uid, _this.firebaseAuth.auth.currentUser.email, "Borrado un anuncio :" + item.key, __WEBPACK_IMPORTED_MODULE_2_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_2_moment__().format('LT'));
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Error : ' + err,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    AnnouncementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__activitiesRecorder_services_activities_service__["a" /* ActivitiesService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AnnouncementService);
    return AnnouncementService;
}());

//# sourceMappingURL=announcements.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdateNewsModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_service__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsListComponent = (function () {
    function NewsListComponent(platform, params, viewCtrl, db, newSvc, authServ) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.newSvc = newSvc;
        this.authServ = authServ;
        this.news = {
            title: '',
            imageURL: '',
            textBody: '',
            createdAt: '',
            creatorPhotoURL: '',
            uploadFor: '',
            key: ''
        };
        this.user = db.list('users', function (value) { return value.orderByChild('email').equalTo(_this.authServ.auth.currentUser.email); }).valueChanges();
        this.item = params.data.item;
    }
    NewsListComponent.prototype.ngOnInit = function () {
        this.news.title = this.item.title;
        this.news.textBody = this.item.textBody;
        this.news.imageURL = this.item.imageURL;
        this.news.key = this.item.key;
    };
    NewsListComponent.prototype.updateNew = function () {
        this.news.imageURL = this.item.imageURL;
        this.news.createdAt = this.item.createdAt;
        this.news.uploadFor = document.getElementById('name').value;
        this.news.creatorPhotoURL = document.getElementById('photoURL').value;
        //si sube una nueva foto
        var newPhoto = document.getElementById('url');
        var currentNew = new __WEBPACK_IMPORTED_MODULE_2__news__["a" /* News */]();
        currentNew.key = this.item.key;
        currentNew.textBody = this.news.textBody;
        currentNew.title = this.news.title;
        currentNew.createdAt = this.news.createdAt;
        currentNew.uploadFor = this.news.uploadFor;
        var photoURL = (newPhoto != null) ? newPhoto.value : this.news.imageURL;
        currentNew.imageURL = photoURL;
        currentNew.creatorPhotoURL = this.item.creatorPhotoURL;
        this.newSvc.updateNews(currentNew);
    };
    NewsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-list',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\news\news-list.component.html"*/'<ion-header>\n\n  \n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Noticias\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<form>\n\n<ion-item *ngFor="let users of user | async">\n\n<input type="hidden" id="name" value="{{users.name  +  users.lastName}}">\n\n<input type="hidden" id="photoURL" value="{{users.imageURL}}">\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <input placeholder="Titulo" type="text" required [(ngModel)]="news.title"  name="title">\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <textarea rows=\'5\' data-min-rows=\'3\' [(ngModel)]="news.textBody" name="textBody" placeholder=\'Cuerpo de noticia\' required></textarea>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <upload-form></upload-form>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <button type="button" ion-button color="danger" (click)="updateNew()" block>Actualizar</button>\n\n</ion-item>\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\news\news-list.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], NewsListComponent);
    return NewsListComponent;
}());

var UpdateNewsModal = (function () {
    function UpdateNewsModal(navCtrl, params, afDB, newSvc, modalCtrl, nav, viewCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.afDB = afDB;
        this.newSvc = newSvc;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.news = afDB.list('news').valueChanges();
    }
    UpdateNewsModal.prototype.openNavDetailsPage = function (news) {
        this.nav.push(NewsListComponent, { item: news });
    };
    UpdateNewsModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UpdateNewsModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\n  <ion-content>\n  <div id=\"container\">\n  </div>\n  <ion-list>\n    <ion-item *ngFor=\"let item of news | async\">\n      <ion-thumbnail item-start>\n        <img src=\"{{item.imageURL}}\">\n      </ion-thumbnail>\n      <h2>{{item.title}}</h2>\n      <p>{{item.createdAt}}</p>\n      <button type=\"button\" ion-button (click)=\"openNavDetailsPage(item)\" clear item-end>Editar</button>\n      <button typue=\"button\" ion-button (click)=\"this.newSvc.deleteNews(item)\" clear item-end>Eliminar</button>\n    </ion-item>\n  </ion-list>\n  </ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], UpdateNewsModal);
    return UpdateNewsModal;
}());

//# sourceMappingURL=news-list.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activitiesRecorder_services_activities_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//



var NewsService = (function () {
    function NewsService(db, firebaseAuth, alertCtrl, lclPushNot, actSrv) {
        this.db = db;
        this.firebaseAuth = firebaseAuth;
        this.alertCtrl = alertCtrl;
        this.lclPushNot = lclPushNot;
        this.actSrv = actSrv;
        var day = __WEBPACK_IMPORTED_MODULE_3_moment__();
        this.currentDay = Number(day.format('DDD'));
        __WEBPACK_IMPORTED_MODULE_3_moment__["locale"]('es');
    }
    NewsService.prototype.createNews = function (news) {
        var _this = this;
        var itemRef = this.db.list('news');
        itemRef.push({
            title: news.title,
            imageURL: news.imageURL,
            textBody: news.textBody,
            createdAt: news.createdAt,
            uploadFor: news.uploadFor,
            creatorPhotoURL: news.creatorPhotoURL,
            day: Number(this.currentDay)
        }).then(function (value) {
            var s = _this.db.object('news/' + value.key);
            s.update({ key: value.key });
            _this.showAlert("Excelente", "¡Haz subido una noticia al servidor!");
            _this.actSrv.recordActivity(_this.firebaseAuth.auth.currentUser.uid, _this.firebaseAuth.auth.currentUser.email, "Creado una noticia: " + value.key, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        });
    };
    NewsService.prototype.readNews = function () {
        var itemRef = this.db.list("news/").valueChanges();
        return itemRef;
    };
    NewsService.prototype.updateNews = function (news) {
        var _this = this;
        var itemRef = this.db.object('news/' + news.key);
        itemRef.update({
            title: news.title,
            imageURL: news.imageURL,
            textBody: news.textBody,
            uploadFor: news.uploadFor
        }).then(function (val) {
            _this.showAlert("Presione 'OK' para continuar.", "Exito al actualizar elemento: " + val);
            _this.actSrv.recordActivity(_this.firebaseAuth.auth.currentUser.uid, _this.firebaseAuth.auth.currentUser.email, "Editado una noticia: " + news.key, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        }).catch(function (err) {
            _this.showAlert("Erro tipo: " + err, "Error al actualizar");
        });
    };
    NewsService.prototype.deleteNews = function (news) {
        var _this = this;
        var itemRef = this.db.object('news/' + news.key);
        itemRef.remove().then(function (value) {
            _this.showAlert("Presione 'OK' para continuar.", "Exito al eliminar elemento: " + value);
            _this.actSrv.recordActivity(_this.firebaseAuth.auth.currentUser.uid, _this.firebaseAuth.auth.currentUser.email, "Eliminado una noticia: " + news.key, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        }).catch(function (err) {
            _this.showAlert("Erro tipo: " + err, "Error al eliminar");
        });
    };
    NewsService.prototype.onChildAdded = function () {
        var itemRef = this.db.list('news');
        itemRef.snapshotChanges(['child_added'])
            .subscribe(function (actions) {
            actions.forEach(function (actions) {
                return actions;
            });
        });
    };
    NewsService.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    NewsService.prototype.confirmAlert = function (message, title, remove, news) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        console.log('Buy clicked');
                        remove(news);
                    }
                }
            ]
        });
        alert.present();
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_5__activitiesRecorder_services_activities_service__["a" /* ActivitiesService */]])
    ], NewsService);
    return NewsService;
}());

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadService = (function () {
    function UploadService(db) {
        this.db = db;
        this.basePath = 'uploads';
    }
    //Obtener archivos cargados
    UploadService.prototype.getUploads = function () {
        //
        this.uploads = this.db.list(this.basePath).snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.val();
                var $key = a.payload.key;
                return __assign({ $key: $key }, data);
            });
        });
        return this.uploads;
    };
    UploadService.prototype.deleteUpload = function (upload) {
        var _this = this;
        this.deleteFileData(upload.$key)
            .then(function () {
            _this.deleteFileStorage(upload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
    UploadService.prototype.pushUpload = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        //obtenemos la referencia de firebase storage
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        //se hace el proceso que nos permite monitorear y manejar la carga
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // carga en progreso
            var snap = snapshot;
            upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
        }, function (error) {
            // carga fallida
            console.log(error);
        }, function () {
            // carga exitosa
            if (uploadTask.snapshot.downloadURL) {
                upload.url = uploadTask.snapshot.downloadURL;
                upload.name = upload.file.name;
                _this.saveFileData(upload);
                return;
            }
            else {
                console.error('No download URL!');
            }
        });
    };
    // Escribe los detalles de la carga en la base de datos
    UploadService.prototype.saveFileData = function (upload) {
        this.db.list(this.basePath + "/").push(upload);
    };
    // Elimina los datos de la base de datos
    UploadService.prototype.deleteFileData = function (key) {
        return this.db.list(this.basePath + "/").remove(key);
    };
    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    UploadService.prototype.deleteFileStorage = function (name) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    UploadService.prototype.getCurrentFileURL = function (upload) {
        console.log(upload.url);
        return upload.url;
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UploadService);
    return UploadService;
}());

//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnnouncementCrudComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AnnouncementModalCRUD; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcements_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__announcement__ = __webpack_require__(685);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnnouncementCrudComponent = (function () {
    function AnnouncementCrudComponent(modalCtrl, nav, params, viewCtrl, annserv) {
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.annserv = annserv;
        this.isEditing = false;
        this.announcement = {
            title: '',
            body: '',
            destacado: false
        };
        this.isEditing = this.params.get("isEditing");
        this.item = this.params.get("item");
    }
    AnnouncementCrudComponent.prototype.ngOnInit = function () {
    };
    AnnouncementCrudComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AnnouncementCrudComponent.prototype.CreateAnnouncement = function () {
        var annoucement = new __WEBPACK_IMPORTED_MODULE_4__announcement__["a" /* Announcement */]();
        annoucement.title = this.announcement.title;
        annoucement.body = this.announcement.body;
        annoucement.destacado = this.announcement.destacado;
        console.log(this.announcement.destacado);
        this.annserv.createAnnouncements(annoucement);
    };
    AnnouncementCrudComponent.prototype.editAnnouncement = function () {
        this.annserv.editAnnouncement(this.item);
    };
    AnnouncementCrudComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'announcement-crud',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\announcements\announcement-crud.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Avisos\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<form *ngIf="isEditing == false; else edit">\n\n<ion-item>\n\n  <input type="text" placeholder="Titulo" required [(ngModel)]="announcement.title" name="title" #titu>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="announcement.body" name = "body"></textarea>\n\n</ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Aviso Destacado</ion-label>\n\n    <ion-toggle [(ngModel)]="announcement.destacado" name="destacado" checked="false"></ion-toggle>\n\n  </ion-item>\n\n\n\n<ion-item >\n\n  <button type="submit" ion-button color="danger" (click)="CreateAnnouncement()" block>Registrar</button>\n\n</ion-item>\n\n\n\n</form>\n\n\n\n<ng-template #edit>\n\n  <form>\n\n  <ion-item>\n\n    <input type="text" required [(ngModel)]="item.title" name="title" #titu>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="item.body" name = "body"></textarea>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Aviso Destacado</ion-label>\n\n    <ion-toggle [(ngModel)]="item.destacado" name="destacado" checked="false"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n<button type="submit" ion-button color="secondary" (click)="editAnnouncement()" block>Editar</button>\n\n</ion-item>\n\n</form>\n\n</ng-template>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\announcements\announcement-crud.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__announcements_service__["a" /* AnnouncementService */]])
    ], AnnouncementCrudComponent);
    return AnnouncementCrudComponent;
}());

var AnnouncementButton = (function () {
    function AnnouncementButton(modalCtrl, nav) {
        this.modalCtrl = modalCtrl;
        this.nav = nav;
    }
    AnnouncementButton.prototype.OpenModal = function () {
        var modal = this.modalCtrl.create(AnnouncementModalCRUD);
        modal.present();
    };
    AnnouncementButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'announcement-button',
            template: "\n<button type=\"button\" class=\"button_round\" (click)=\"OpenModal ()\">Administrar avisos</button>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AnnouncementButton);
    return AnnouncementButton;
}());

var AnnouncementModalCRUD = (function () {
    function AnnouncementModalCRUD(navCtrl, params, afDB, announSvc, modalCtrl, nav, viewCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.afDB = afDB;
        this.announSvc = announSvc;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.isEditing = false;
        this.announcements = afDB.list('announcements').valueChanges();
    }
    AnnouncementModalCRUD.prototype.CreateNewAnnouncementPage = function () {
        this.isEditing = false;
        this.nav.push(AnnouncementCrudComponent, { isEditing: this.isEditing });
    };
    AnnouncementModalCRUD.prototype.editItem = function (item) {
        this.isEditing = true;
        this.nav.push(AnnouncementCrudComponent, { isEditing: this.isEditing, item: item });
    };
    AnnouncementModalCRUD.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AnnouncementModalCRUD = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Noticia\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)=\"dismiss()\">\n          <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n          <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n\n  <ion-item-group>\n\n    <ion-item-divider color=\"light\">Crear avisos</ion-item-divider>\n    <button ion-button large block color=\"secondary\" (click)=\"CreateNewAnnouncementPage()\" >Aviso nuevo</button>\n\n  </ion-item-group>\n\n  <ion-item-group>\n  <ion-list>\n      <ion-item-divider color=\"light\">Avisos</ion-item-divider>\n    <ion-item-sliding *ngFor=\"let item of announcements | async\">\n        <ion-item >\n        <h2>{{item.title}}</h2>\n        <p text-wrap>{{item.body}}</p>\n\n        <ion-item>\n        <ion-icon name=\"calendar\" item-start></ion-icon>\n        FECHA:\n        <ion-badge item-end>{{item.createdAt}}</ion-badge>\n        </ion-item>\n        </ion-item>\n\n      <ion-item-options side=\"right\">\n        <button ion-button (click)=\"editItem(item)\" color=\"secondary\">\n          <ion-icon name=\"open\"></ion-icon>\n          Editar\n        </button>\n        <button ion-button (click)=\"this.announSvc.deleteAnnouncement(item)\" color=\"danger\">\n          <ion-icon name=\"trash\"></ion-icon>\n          Eliminar\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n    </ion-item-group>\n\n  </ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__announcements_service__["a" /* AnnouncementService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], AnnouncementModalCRUD);
    return AnnouncementModalCRUD;
}());

//# sourceMappingURL=announcement-crud.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activitiesRecorder_services_activities_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProspectService = (function () {
    function ProspectService(db, http, afAuth, alertCtrl, actSrv, firebaseAuth) {
        this.db = db;
        this.http = http;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.actSrv = actSrv;
        this.firebaseAuth = firebaseAuth;
        this.prospects = [];
        var day = __WEBPACK_IMPORTED_MODULE_6_moment__();
        this.currentDay = Number(day.format('DDD'));
        __WEBPACK_IMPORTED_MODULE_6_moment__["locale"]('es');
    }
    ProspectService.prototype.refLis = function () {
        return this.db.list('prospects');
    };
    ProspectService.prototype.refObj = function (itemkey) {
        return this.db.object('prospects/' + itemkey);
    };
    ProspectService.prototype.getCoordis = function () {
        return this.users = this.db.list('users', function (value) { return value.orderByChild('accessLevel').equalTo("coordi"); }).valueChanges();
    };
    ProspectService.prototype.createProspect = function (prospect) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Se ha creado un nuevo prospecto',
            message: '¿Está seguro que quiere guardar?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        var date = __WEBPACK_IMPORTED_MODULE_6_moment__();
                        _this.refLis().push({
                            name: prospect.name,
                            lastname: prospect.lastname,
                            lastname2: prospect.lastname2,
                            age: Number(prospect.age),
                            state: prospect.state,
                            phone: Number(prospect.phone),
                            status: prospect.status,
                            attended: prospect.attended,
                            course: prospect.course,
                            date: date.format("MMMM D YYYY").toString(),
                            coment: prospect.coment,
                            source: prospect.source,
                            price: Number(prospect.price),
                            day: Number(date.format("DDD"))
                            //checkbox:prospect.checkbox
                        }).then(function (val) {
                            _this.refObj(val.key).update({
                                key: val.key
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ProspectService.prototype.getProspect = function () {
        //  this.db.list('prospects')
    };
    ProspectService.prototype.searchProspectByProperty = function (n, property) {
        var result;
        this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "Buscado un usuario en el nodo " + "'" + n + "'" + " por la propiedad: " + "'" + property + "'", __WEBPACK_IMPORTED_MODULE_6_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_6_moment__().format('LT'));
        return result = this.db.list("prospects", function (val) { return val.orderByChild(property).equalTo(n).limitToFirst(50); }).valueChanges();
    };
    ProspectService.prototype.searchByName = function (name) {
        this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "Buscado un prospecto por el nombre: " + "'" + name + "'", __WEBPACK_IMPORTED_MODULE_6_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_6_moment__().format('LT'));
        //console.log(name)
        return this.db.list("prospects", function (val) {
            return val.orderByChild("name") //.equalTo(name)
                .startAt(name.trim());
        }
        //.endAt(name.trim())
        ).valueChanges();
    };
    ProspectService.prototype.editProspect = function (item) {
        var _this = this;
        this.refObj(item.key).update({
            name: item.name,
            lastname: item.lastname,
            lastname2: item.lastname2,
            age: Number(item.age),
            state: item.state,
            phone: item.phone,
            status: item.status,
            attended: item.attended,
            course: item.course,
            coment: item.coment,
            source: item.source,
            price: item.price
        }).then(function (val) {
            _this.actSrv.recordActivity(_this.firebaseAuth.auth.currentUser.uid, _this.firebaseAuth.auth.currentUser.email, "Editado al prospecto con el nombre: " + "'" + item.name + "'", __WEBPACK_IMPORTED_MODULE_6_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_6_moment__().format('LT'));
        });
    };
    ProspectService.prototype.deleteProspect = function (item) {
        this.refObj(item.key).remove();
        this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "Eliminado al prospecto : " + "'" + item.name + "'", __WEBPACK_IMPORTED_MODULE_6_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_6_moment__().format('LT'));
    };
    ProspectService.prototype.getItems = function (ev) {
        var _this = this;
        //this.list = this.prosSrv.getProspect();
        this.name$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        var item = ev.target.value;
        if (item && item.trim() != '') {
            this.name$.next(item);
            this.items$ = this.name$.switchMap(function (name) {
                return _this.db.list('prospects', function (ref) {
                    return name ? ref.orderByChild('nombre').equalTo(name) : ref;
                }).snapshotChanges();
            });
            //return this.list = this.prosSrv.searchByName(item);
        }
    };
    ProspectService.prototype.get = function () {
        var _this = this;
        //console.log(this.currentDay)
        return this.db.list('prospects', function (val) { return val.orderByChild('day').equalTo(_this.currentDay); }).valueChanges();
    };
    ProspectService.prototype.getByHttp = function () {
    };
    ProspectService.prototype.showConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Borrar prospecto',
            message: '¿En realidad quiere borrar este prospecto?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.deleteProspect(item);
                    }
                }
            ]
        });
        confirm.present();
    };
    ProspectService.prototype.createStudent = function (key) {
    };
    ProspectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__activitiesRecorder_services_activities_service__["a" /* ActivitiesService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ProspectService);
    return ProspectService;
}());

//# sourceMappingURL=prospect.service.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentService = (function () {
    function StudentService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
    }
    StudentService.prototype.getStudentGroups = function () {
        var _this = this;
        return this.db.list("groups", function (val) { return val.orderByChild("members/" + _this.afAuth.auth.currentUser.uid).equalTo(true); }).valueChanges();
    };
    StudentService.prototype.getLessons = function (groupkey) {
        return this.db.list("lessons/" + groupkey).valueChanges();
    };
    StudentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], StudentService);
    return StudentService;
}());

//# sourceMappingURL=students.services.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//TEMPLATE PARA ABRIR EL FORMULARIO DE EDITAR

//CONFIRMACION/ALERTA PARA REMOVER CURSOS

var CrudService = (function () {
    function CrudService(db, modalCtrl, alertCtrl) {
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        //ID DEL CURSO PARA EDITAR O ELIMINAR
        this.currentId = "nuevo";
    }
    //referencia a mi lista cursos
    CrudService.prototype.tabla = function () {
        return this.db.list("courses");
    };
    CrudService.prototype.refOb = function (key) {
        return this.db.object("courses/" + key);
    };
    //RECIBE EL ID DEL CURSO PARA EDITAR O ELIMINAR
    //funcion que guarda un nuevo curso si el id es nuevo o edita si el id existe
    CrudService.prototype.guardar = function (forma) {
        var _this = this;
        if (this.currentId == "nuevo") {
            console.log("INSERTADO EXITOSO");
            console.log("NgForm ", forma);
            console.log("Valores Enviados: ", forma.value);
            //DATOS QUE SE ENVIAN DEL FORMULARIO HACIA FIREBASE
            this.tabla().push({
                name: forma.value.name,
                spaces: forma.value.spaces,
                schedule: forma.value.schedule,
                type: forma.value.type
                //FUNCION QUE ME MANDA EL ID DEL REGISTRO
            }).then(function (val) {
                console.log("ID DEL REGISTRO", val.key);
                _this.refOb(val.key).update({
                    key: val.key
                });
                //ALERTA CUANDO SE ACTUALIZA CORRECTAMENTE
                var confirm = _this.alertCtrl.create({
                    title: 'Insertado correctamente',
                    message: 'El curso ha sido insertado correctamente',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                console.log('OK clicked');
                            }
                        }
                    ]
                });
                confirm.present();
            });
        }
        else {
            console.log("Se actualizo con exito");
            this.refOb(this.currentId).update({
                name: forma.value.name,
                spaces: forma.value.spaces,
                schedule: forma.value.schedule,
                type: forma.value.type
            });
            //ALERTA CUANDO SE ACTUALIZA CORRECTAMENTE
            var confirm_1 = this.alertCtrl.create({
                title: 'Actualizado',
                message: 'El curso ha sido actualizado correctamente',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            console.log('OK clicked');
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    //OBTIENE LA LISTA DE TODOS LOS CURSOS
    CrudService.prototype.get = function () {
        return this.db.list('courses', function (val) { return val.orderByChild('name'); }).valueChanges();
    };
    //OBTIENE EL CURSO SEGÚN EL ID QUE SE ENVÍE
    CrudService.prototype.getbyId = function () {
        var _this = this;
        return this.db.list('courses', function (val) { return val.orderByChild('key').equalTo(_this.currentId); }).valueChanges();
    };
    //OBTIENE EL VALOR DEL NOMBRE DEL CURSO
    CrudService.prototype.searchbyCourse = function (name) {
        return this.db.list("courses", function (val) { return val.orderByChild("name").equalTo(name); }).valueChanges();
    };
    CrudService.prototype.searchbySchedule = function (schedule) {
        event.preventDefault();
        return this.db.list("courses", function (val) { return val.orderByChild("schedule").equalTo(schedule); }).valueChanges();
    };
    CrudService.prototype.delete = function (keyid) {
        console.log("delete", keyid);
        this.currentId = keyid;
        this.refOb(this.currentId).remove();
    };
    CrudService.prototype.showConfirm = function (keyid) {
        var _this = this;
        console.log("Alerta", keyid);
        this.currentId = keyid;
        var confirm = this.alertCtrl.create({
            title: 'Borrar Curso',
            message: '¿En realidad quiere borrar este curso?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.delete(keyid);
                    }
                }
            ]
        });
        confirm.present();
    };
    CrudService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], CrudService);
    return CrudService;
}());

//# sourceMappingURL=crud.service.js.map

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 230;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivitiesService = (function () {
    function ActivitiesService(db) {
        this.db = db;
    }
    ActivitiesService.prototype.retrieveActivities = function (hour) {
        return this.db.list('activities', function (val) { return val.limitToLast(50); })
            .valueChanges(['child_added'])
            .map(function (arr) {
            return arr.reverse();
        });
    };
    ActivitiesService.prototype.recordActivity = function (uid, email, activity, date, hour) {
        this.db.list('activities').push({
            activity: activity,
            date: date,
            email: email,
            user: uid,
            hour: hour
        });
    };
    ActivitiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ActivitiesService);
    return ActivitiesService;
}());

//# sourceMappingURL=activities.service.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var dashboardPage = (function () {
    function dashboardPage(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        var user = afAuth.auth.currentUser;
        this.user = db.list('users', function (value) { return value.orderByChild('email').equalTo(user.email); }).valueChanges();
    }
    dashboardPage.prototype.ngOnInit = function () {
    };
    dashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\dashboard\dashboard.html"*/'\n\n<ion-content>\n\n  <div class="back" *ngFor="let item of user | async" >\n\n  <div class="namepos">\n\n      <ion-grid>\n\n          <ion-row>\n\n            <!--<ion-col >\n\n              <div padding>\n\n\n\n              </div>\n\n              <ion-item class="card_profile">\n\n                  <img src="{{item.imageURL}}" class="custom-img"/>\n\n                  <input type="hidden" id="urlcurrent" value="{{item.imageURL}}">\n\n              </ion-item>\n\n            </ion-col>-->\n\n            <ion-col >\n\n              <div padding></div>\n\n              <div>\n\n                  <h1 text-center class="parap">DASHBOARD</h1>\n\n              </div>\n\n               \n\n              </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n  </div>\n\n  <div id="container">\n\n\n\n  </div>\n\n\n\n  <div id="cont" >\n\n\n\n    <ion-item *ngIf="item.accessLevel == \'user\' ;" text-wrap>\n\n      <p>Ingresa a la academia para poder visualizar esta sección.</p>\n\n    </ion-item>\n\n\n\n    <div text-center *ngIf="item.accessLevel == \'admin\';">\n\n        \n\n            <h1 class="button_round_black" text-center>Menú administrativo</h1>\n\n          \n\n    </div>\n\n\n\n    <ion-item text-center *ngIf="item.accessLevel == \'admin\' || item.accessLevel == \'coordi\';">\n\n      <div class="container">\n\n        \n\n      <app-news></app-news>\n\n      <announcement-button></announcement-button>\n\n      <prospect-button></prospect-button>\n\n      <user-button></user-button>\n\n      <cursos-button></cursos-button>\n\n      <student-button></student-button>\n\n      </div>\n\n      \n\n      <hr>\n\n      \n\n        <h1 class="button_round_black" text-center>Asistencias</h1>\n\n\n\n      <button-assitence></button-assitence>\n\n\n\n      <hr>\n\n\n\n    \n\n    \n\n        <h1 class="button_round_black" text-center>Control</h1>\n\n\n\n      <activities-button></activities-button>\n\n\n\n    </ion-item>\n\n\n\n\n\n    <ion-item *ngIf="item.accessLevel == \'teacher\'; " text-wrap>\n\n      <teachers-module></teachers-module>\n\n    </ion-item>       \n\n\n\n\n\n    <ion-item *ngIf="item.accessLevel == \'student\' ;">\n\n     <students-module></students-module>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="item.accessLevel == \'tutor\';">\n\n      <tutor></tutor>\n\n     </ion-item>\n\n\n\n  </div>\n\n\n\n<div class="ng-d" *ngIf="item.accessLevel != \'admin\'"></div>\n\n<div class="footer_cont">\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col >\n\n            <div>\n\n                <img class="img_i" src="../../assets/imgs/CFM3.png" alt="">\n\n            </div>\n\n             \n\n            </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n</div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], dashboardPage);
    return dashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__announcements_service__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnouncementComponent = (function () {
    function AnnouncementComponent(msgService) {
        this.msgService = msgService;
        this.message = this.msgService.getAnnouncementsByDate();
        this.destacado = this.msgService.getNotify();
    }
    AnnouncementComponent.prototype.ngOnInit = function () {
    };
    AnnouncementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\announcements\announcements.html"*/'  <ion-content padding >\n\n    <div id="container">\n\n    </div>\n\n\n\n\n\n    <ion-item-group>\n\n      <ion-item-divider  color="light">DESTACADOS</ion-item-divider>\n\n      <ion-item *ngFor="let it of destacado | async" >\n\n        <div *ngIf="it.destacado != false">\n\n          <ion-item color="dark">\n\n            <ion-icon name="warning" color="yellow"></ion-icon>\n\n            {{it.title}}\n\n            </ion-item>\n\n          <p></p>\n\n          <ion-item>\n\n          <p style="text-align:justify" text-wrap>{{it.body}}</p>\n\n        </ion-item>\n\n          <ion-item>\n\n          <ion-icon name="calendar" item-start></ion-icon>\n\n          <ion-badge item-end color="danger">{{it.createdAt}}</ion-badge>\n\n        </ion-item>\n\n        </div>\n\n      </ion-item>\n\n    </ion-item-group>\n\n\n\n      <ion-item-group>\n\n        <ion-item-divider  color="light">Hoy</ion-item-divider>\n\n        <ion-item *ngFor="let item of message | async" >\n\n    <div *ngIf="item.destacado == false">\n\n          <ion-item color="dark">\n\n            <ion-icon name="warning" color="yellow"></ion-icon>\n\n            {{item.title}}\n\n          </ion-item>\n\n          <br>\n\n          <ion-item>\n\n          <p style="text-align:justify" text-wrap>{{item.body}}</p>\n\n          </ion-item>\n\n          <ion-item>\n\n          <ion-icon name="calendar" item-start></ion-icon>\n\n          <ion-badge item-end color="danger">{{item.createdAt}}</ion-badge>\n\n        </ion-item>\n\n    </div>\n\n        </ion-item>\n\n      </ion-item-group>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\announcements\announcements.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__announcements_service__["a" /* AnnouncementService */]])
    ], AnnouncementComponent);
    return AnnouncementComponent;
}());

//# sourceMappingURL=announcements.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_mision_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_historia_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_reglamento_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_profesoresmodal_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_manual_component__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutUsComponent = (function () {
    function AboutUsComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.title = "¿Quiénes somos?";
        this.info = "En tanto proyecto pedagógico, nos caracteriza el máximo nivel del profesorado que capacitamos en Centros de valía en el país, las regulaciones del cupo por academia para garantizar una enseñanza personalizada, el empeño de una formación integral que favorecemos con la coordinación de diversos cursos en otras vertientes artísticas diferentes de la música, la búsqueda de un alumnado que en su proceso de aprendizaje también devenga en experiencia mediante la realización de espectáculos, y un fuerte compromiso social que se mani esta con las promociones para distintos miembros de la familia del estudiante, así como mediante el otorgamiento de becas de matrícula y residencia a algunos casos sociales que así lo ameriten.";
    }
    AboutUsComponent.prototype.ngOnInit = function () { };
    AboutUsComponent.prototype.presentModal = function (index) {
        switch (index) {
            case 1: {
                var mision = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modals_mision_component__["a" /* MisionComponent */]);
                mision.present();
                break;
            }
            case 2: {
                var historia = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_historia_component__["a" /* HistoriaComponent */]);
                historia.present();
                break;
            }
            case 3: {
                var reglamento = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modals_reglamento_component__["a" /* ReglamentoComponent */]);
                reglamento.present();
                break;
            }
            case 4: {
                var profesores = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modals_profesoresmodal_component__["a" /* ProfesoresComponent */]);
                profesores.present();
                break;
            }
            case 5: {
                var manual = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modals_manual_component__["a" /* ManualComponent */]);
                manual.present();
                break;
            }
            default: {
                console.log("ESTE MODAL NO ES VÁLIDO");
                break;
            }
        }
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'aboutus',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\aboutus\aboutus.html"*/'<ion-content id="paddinBottom">\n\n  <ion-list id="paddinBottom2">\n\n    <!--<button ion-item (click)="presentModal(1)">\n\n      <ion-icon name="book" item-start></ion-icon>\n\n    Misión, Visión, Objetivos\n\n  </button>-->\n\n    <button ion-item (click)="presentModal(2)">\n\n      <ion-icon name="calendar" item-start></ion-icon>\n\n    Historia de la Escuela\n\n    </button>\n\n    <button ion-item (click)="presentModal(3)">\n\n      <ion-icon name="clipboard" item-start></ion-icon>\n\n    Reglamento\n\n    </button>\n\n    <!--<button ion-item (click)="presentModal(4)">\n\n      <ion-icon name="briefcase" item-start></ion-icon>\n\n    Profesores\n\n  </button>-->\n\n    <!--<button ion-item (click)="presentModal(5)">\n\n      <ion-icon  name="bookmarks" item-start></ion-icon>\n\n    Manual de Bienvenida\n\n  </button>-->\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\aboutus\aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MisionComponent = (function () {
    function MisionComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    MisionComponent.prototype.ngOnInit = function () { };
    MisionComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MisionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mision',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\aboutus\modals\mision.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content id="paddinBottom">\n\n<ion-card>\n\n  <ion-card-header>\n\n    Misión:\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n\n  </ion-card-content>\n\n  <ion-card-header>\n\n    Visión:\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n\n  </ion-card-content>\n\n<ion-card-header>\n\n  Objetivos:\n\n</ion-card-header>\n\n<ion-card-content>\n\n  The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n\n</ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\aboutus\modals\mision.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], MisionComponent);
    return MisionComponent;
}());

//# sourceMappingURL=mision.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoriaComponent = (function () {
    function HistoriaComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.title = "¿Quiénes somos?";
        this.info = "En tanto proyecto pedagógico, nos caracteriza el máximo nivel del profesorado que capacitamos en Centros de valía en el país, las regulaciones del cupo por academia para garantizar una enseñanza personalizada, el empeño de una formación integral que favorecemos con la coordinación de diversos cursos en otras vertientes artísticas diferentes de la música, la búsqueda de un alumnado que en su proceso de aprendizaje también devenga en experiencia mediante la realización de espectáculos, y un fuerte compromiso social que se mani esta con las promociones para distintos miembros de la familia del estudiante, así como mediante el otorgamiento de becas de matrícula y residencia a algunos casos sociales que así lo ameriten.";
    }
    HistoriaComponent.prototype.ngOnInit = function () { };
    HistoriaComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    HistoriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-historia',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\aboutus\modals\historia.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-card>\n\n    <ion-slides id="sliderabout">\n\n      <ion-slide>\n\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2F4.jpg?alt=media&token=b25e23f8-3c14-4191-ac72-ecd1f472e034" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2F3.jpg?alt=media&token=14096253-e032-465a-9ffd-955a3607ca7c" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fabout2.jpg?alt=media&token=27caf2d0-28a7-488d-927e-8c29d999f59b" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fabout.jpg?alt=media&token=f4814395-d994-4fff-be8e-8066b8716929" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fabout1.jpg?alt=media&token=598d74be-ab34-4dc7-aca2-f5d0aecfb020" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fabout3.jpg?alt=media&token=dda619b4-af65-4385-a10c-29d829e54fc5" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fabout4.jpg?alt=media&token=dc596d1c-91a5-47e6-9313-7767c26c32b2" alt="">\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <ion-card-header>\n\n      {{title}}\n\n    </ion-card-header>\n\n    <ion-card-content class="spacebottom" style="text-align:justify" text-wrap>\n\n      {{info}}\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\aboutus\modals\historia.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], HistoriaComponent);
    return HistoriaComponent;
}());

//# sourceMappingURL=historia.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglamentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReglamentoComponent = (function () {
    function ReglamentoComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ReglamentoComponent.prototype.ngOnInit = function () { };
    ReglamentoComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReglamentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reglamento',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\aboutus\modals\reglamento.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content id="paddinBottom">\n\n<ion-card class="spacebottom2">\n\n  <ion-card-header class="center">\n\n    Estatutos, Reglamentos <br> y Disposiciones Generales\n\n  </ion-card-header>\n\n  <ion-card-content class="justify">\n\n    El centro de Formación Musical, tiene entre sus facultades encauzar las aptitudes artísticas y académicas tanto de niños, jóvenes y adultos, enfocándose así a su formación y desarrollo tanto musical como académico.\n\nEl presente Reglamento tiene como propósito promover el orden, dentro de un marco educativo, que permita regular el óptimo desarrollo de las actividades musicales y académicas impartidas en la escuela. El cumplimiento de estas normas contribuirá de manera positiva al desarrollo de un ambiente cordial y armónico en la comunidad CFM y además para para la vigilancia y control integral de los bienes muebles e inmuebles que son patrimonio de la Escuela de Música, por lo que es de importancia general y de observancia obligatoria para los alumnos, profesores y personal que forman parte del CFM y Mr. NERD así como para el cuidado de las relaciones afectivas de la #Familia CFM.\n\n  </ion-card-content>\n\n  <a  href="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/Reglamento%20Academico%2FReglamento%20CFM.pdf?alt=media&token=22fd1c61-f2fd-4b1c-b613-501735b66702" >\n\n  <button ion-button full >Descargar en PDF <ion-icon name="md-download" > </ion-icon></button>\n\n  </a>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\aboutus\modals\reglamento.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ReglamentoComponent);
    return ReglamentoComponent;
}());

//# sourceMappingURL=reglamento.component.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfesoresComponent = (function () {
    function ProfesoresComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ProfesoresComponent.prototype.ngOnInit = function () { };
    ProfesoresComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfesoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profesores',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\aboutus\modals\profesoresmodal.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2 class="center">Profesores CFM</h2>\n\n  <ion-card>\n\n\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%2Fjoaquin.jpg?alt=media&token=6fb53bd0-8854-4342-ad15-a9b7ec354aa8">\n\n      </ion-avatar>\n\n      <h2>Joaquin</h2>\n\n      <p>#ProfesorCFM</p>\n\n    </ion-item>\n\n\n\n    <img src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%2Fjoaquin2.png?alt=media&token=774c09e8-35e8-4a41-8c71-4992ba76952a">\n\n\n\n    <ion-card-content>\n\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="contact"></ion-icon>\n\n          <div>Posición: Profesor</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="musical-notes"></ion-icon>\n\n          <div>Bajo Eléctrico, Guitarra, Ukulele</div>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\aboutus\modals\profesoresmodal.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ProfesoresComponent);
    return ProfesoresComponent;
}());

//# sourceMappingURL=profesoresmodal.component.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManualComponent = (function () {
    function ManualComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ManualComponent.prototype.ngOnInit = function () { };
    ManualComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ManualComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manual',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\aboutus\modals\manual.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<h1>MANUAL WORKS!</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\aboutus\modals\manual.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ManualComponent);
    return ManualComponent;
}());

//# sourceMappingURL=manual.component.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesComponent = (function () {
    function CoursesComponent(alert) {
        this.alert = alert;
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent.prototype.info = function (param) {
        console.log(param);
        var alert = this.alert.create({
            title: 'Horarios:',
            subTitle: ' Lunes y Miércoles o Martes y Jueves |4 a 5:30 | | 5:30 a 7 |   | 7 a 8:30|  |8:30 a 10 PM| O Sábados Intensivos |9 a 12| / |1 a 4| / |4 a 7 PM|',
            buttons: ['OK']
        });
        alert.present();
    };
    CoursesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'courses',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\courses\courses.html"*/'<ion-content class="card-background-page">\n\n\n\n  <ion-card class="margintop">\n\n    <img (click)="info(1)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FBajo.jpg?alt=media&token=21bf3b0d-4624-4a9f-9dcb-ac1ad7d9edee"/>\n\n    <div class="card-title">Bajo</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img (click)="info(2)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FBateria.jpg?alt=media&token=1ad35a67-6dda-4ffd-8c23-e0502f43f620"/>\n\n    <div class="card-title">Bateria</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img (click)="info(3)"  src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FCanto.jpg?alt=media&token=d729267a-3d76-417e-aa5b-da4e88428d36"/>\n\n    <div class="card-title">Canto</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img (click)="info(4)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FDibujo.jpg?alt=media&token=da39d1ae-5e5e-4dbd-81ad-425521cc8bd1"/>\n\n    <div class="card-title">Dibujo</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img (click)="info(5)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FGuitarra.jpg?alt=media&token=b919dec1-5365-40d5-a550-6a4195e9ee83"/>\n\n    <div class="card-title">Guitarra eléctrica/acústica</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img (click)="info(6)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FPiano.jpg?alt=media&token=8b0ffe2e-fff9-4582-8e6a-eb9b4e18b2ab"/>\n\n    <div class="card-title">Piano</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img (click)="info(7)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FSaxofon.jpg?alt=media&token=3067a003-6eb3-4e62-9965-06f0bab64639"/>\n\n    <div class="card-title">Saxofon</div>\n\n    <div class="card-subtitle">Adultos y jovenes</div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img (click)="info(8)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FUkelele.jpg?alt=media&token=871a679f-d02f-489a-b8cc-a47646ed7526"/>\n\n    <div class="card-title">Ukelele</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img (click)="info(9)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FViolin.jpg?alt=media&token=5d829e04-1d30-479d-860d-5d2d5dd56cfa"/>\n\n    <div class="card-title">Violín</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CoursesComponent);
    return CoursesComponent;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DirectoryComponent = (function () {
    function DirectoryComponent() {
        this.menu = 'contacto';
    }
    DirectoryComponent.prototype.ngOnInit = function () { };
    DirectoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-directory',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\directory\directory.component.html"*/'<ion-content id="paddinBottom">\n\n<ion-card id="directorio">\n\n  <img src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fredessociales.png?alt=media&token=26900c31-9bd1-4340-aac1-39d31c015d88"/>\n\n  <ion-card-header>\n\n    <div>\n\n    <ion-segment [(ngModel)]="menu">\n\n      <ion-segment-button value="contacto">\n\n        Contacto\n\n      </ion-segment-button>\n\n      <ion-segment-button value="sociales">\n\n        Social Media\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    <div [ngSwitch]="menu">\n\n      <ion-list *ngSwitchCase="\'sociales\'">\n\n        <ion-item>\n\n          <h1>Siguenos en nuestras <br> <small>Redes sociales:</small></h1>\n\n          <br>\n\n          <a href="https://www.facebook.com/CFM.EscueladeMusica/">\n\n            <ion-item>\n\n            <ion-icon name="logo-facebook" item-start></ion-icon>\n\n              Facebook\n\n              <ion-badge item-end>+23,000</ion-badge><br><small right>Seguidores</small>\n\n          </ion-item>\n\n          </a>\n\n          <a href="https://twitter.com/CFMvillahermosa">\n\n            <ion-item>\n\n              <ion-icon name="logo-twitter" item-start></ion-icon>\n\n                Twitter\n\n                <ion-badge item-end>+100</ion-badge><br><small right>Seguidores</small>\n\n            </ion-item>\n\n          </a>\n\n\n\n            <a href="https://www.instagram.com/cfm.escuelademusica/">\n\n              <ion-item>\n\n                <ion-icon name="logo-instagram" item-start></ion-icon>\n\n                  Instagram\n\n                  <ion-badge item-end>+400</ion-badge><br><small right>Seguidores</small>\n\n              </ion-item>\n\n            </a>\n\n\n\n            <a href="https://www.youtube.com/channel/UChTSs5IFNN5a0W5m8oTkP9w">\n\n              <ion-item>\n\n                <ion-icon name="logo-youtube" item-start></ion-icon>\n\n                  Youtube\n\n                  <ion-badge item-end>+50</ion-badge><br><small right>Seguidores</small>\n\n              </ion-item>\n\n            </a>\n\n          </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list *ngSwitchCase="\'contacto\'">\n\n        <ion-item>\n\n          <h1>Datos de Contacto:</h1>\n\n        </ion-item>\n\n\n\n      <a href="https://api.whatsapp.com/send?phone=529934431765">\n\n        <ion-item >\n\n          <ion-icon name="logo-whatsapp" item-start></ion-icon>\n\n            99 34 43 17 65\n\n            <ion-badge item-end>Enviar mensaje</ion-badge><small><br>Extensión +52</small>\n\n        </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="call" item-start></ion-icon>\n\n          3 15 48 10\n\n          <ion-badge item-end>¡Llamanos!</ion-badge><small><br>Extensión +993</small>\n\n      </ion-item>\n\n      </a>\n\n      \n\n        <ion-item>\n\n        <ion-icon name="mail" item-start></ion-icon>\n\n            Correo Corporativo: <br> <small>centrodeformacionmusicalmx@gmail.com</small>\n\n\n\n        </ion-item>\n\n\n\n      <a href="http://centrodeformacionmusical.mx/">\n\n        <ion-item>\n\n        <ion-icon name="laptop" item-start></ion-icon>\n\n            <button ion-button full round>Abrir Sitio Web</button>\n\n            <small class="center">centrodeformacionmusical.mx</small>\n\n        </ion-item>\n\n      </a>\n\n\n\n        <ion-item class="spacebottom">\n\n        <ion-icon name="navigate" item-start></ion-icon>\n\n            <button ion-button full round>Av. Heroico Colegio Militar N.125</button>\n\n            <small class="center">Colonia Atasta</small>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n    </div>\n\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\directory\directory.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], DirectoryComponent);
    return DirectoryComponent;
}());

//# sourceMappingURL=directory.component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invitation_service__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvitationComponent = (function () {
    function InvitationComponent(// POP UP DE REQUERIMINETOS PARA DESCARGAR LA INVITACION
        toastCtrl, auth, isrv) {
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.isrv = isrv;
        var day = __WEBPACK_IMPORTED_MODULE_3_moment__();
        this.currentUser = this.auth.auth.currentUser.uid;
        this.currentDay = Number(day.format('DDD'));
        this.maxDay = 49;
        console.log(this.currentDay);
        this.user = isrv.searchByInvitationStat(this.currentUser);
    }
    InvitationComponent.prototype.ngOnInit = function () {
    };
    InvitationComponent.prototype.showToast = function (position) {
        var toast = this.toastCtrl.create({
            message: 'Para acceder al evento es necesario ser alumno #CFM y confirmar su asistencia dentro de la App. Desliza el botón de "Asistencia" de izquierda a derecha para confirmar tu asistencia y generar un pase.',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: position
        });
        toast.present(toast);
    };
    InvitationComponent.prototype.generateCode = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    InvitationComponent.prototype.generateInvitation = function (confirm) {
        if (confirm) {
            this.code = this.generateCode();
            this.isrv.saveInvitation(this.currentUser, this.currentDay, this.code);
        }
        else {
            this.isrv.deleteInvitation(this.currentUser, this.currentDay, this.code);
        }
    };
    InvitationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invitation',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\invitation\invitation.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content  padding>\n\n\n\n  <div *ngIf="currentDay < maxDay">\n\n  <ion-card >\n\n    <ion-card-header class="center">\n\n      ¡Bienvenido a CFM!\n\n    </ion-card-header>\n\n    <ion-card-content class="justify">\n\n      Centro de Formación Músical te la bienvenida a nuestra escuela, brindando\n\n      una fiesta de bienvenida donde contaremos con comida, concierto entre otras sorpresas.\n\n\n\n      <br><br>\n\n      <!--BOTON PARA VER LOS REQUERIMINETOS PARA ACCEDER A LA FIESTA-->\n\n      <button ion-button block (click)="showToast(\'middle\')">Requisitos para asistir</button>\n\n      <br>\n\n\n\n      Para acceder al evento confirma tu asistencia descargando el pase de Bienvenida\n\n      CFM.\n\n      <br>\n\n\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  <br>\n\n\n\n  \n\n\n\n<div *ngFor="let item of user | async">\n\n    <div *ngIf="item.accessLevel == \'student\' || item.accessLevel == \'tutor\' || item.accessLevel == \'coordi\' || item.accessLevel == \'admin\' ;">\n\n  <ion-card >\n\n    <ion-card-header class="center">\n\n      <ion-item> \n\n        <ion-label *ngIf="item.invitation">Si asistiré</ion-label>\n\n        <ion-label *ngIf="!item.invitation">No asistiré</ion-label>\n\n        <ion-toggle color="secondary" (ionChange)="generateInvitation(item.invitation)" [(ngModel)]="item.invitation" ></ion-toggle>\n\n      </ion-item> \n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <!-- TOOGLE PARA CONFIRMAR -->\n\n      \n\n\n\n      \n\n      <div *ngIf="item.invitation" class="justify">\n\n        ¡Tu confimación se realizó con exito! <br><br>\n\n        Te esperamos el 17 de Febrero, recuerda guardar tu pase a la fiesta, podrás acceder a el dentro de la aplicación siempre que quieras.\n\n        <br>\n\n        <br>\n\n        \n\n        <button ion-button full>FOLIO: {{item.invitations.code}}  </button>\n\n     \n\n        <br>\n\n        A nombre: {{item.name +" "+item.lastName +" " +item.lastName2}} \n\n        <br>\n\n        -Si desea cancelar su confirmación, puede deseleccionar la opción de "Sí asistiré" y su pase sera automaticamente cancelado. <br><br>\n\n        -En caso de cancelar su asistencia por accidente u otra razón, debera generar un nuevo pase, ya que el anterior se tomara como cancelado. <br>\n\n      </div>\n\n      <!-- FIN TOOGLE CONFIRMAR -->\n\n      <div *ngIf="!item.invitation" class="justify">\n\n        -Fecha limite para confirmar asistencia: 10 de Febrero, 2018. <br><br>\n\n        -Niños menores de 12 años tienen derecho a ir acompañados de 1 adulto. <br><br>\n\n        -Si desea cancelar su confirmación, puede deseleccionar la opción de "Sí asistiré" y su pase sera automaticamente borrado. <br><br>\n\n        -En caso de cancelar su asistencia por accidente u otra razón, debera generar un nuevo pase, ya que el anterior se tomara cancelado. <br><br>\n\n        -Solo puede generar 1 pase por alumno. <br>\n\n      </div>\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n</div>\n\n</div>\n\n\n\n\n\n  <!-- OBSERVACIONES -->\n\n  <ion-card-content>\n\n\n\n\n\n  </ion-card-content>\n\n</div>\n\n<div *ngIf="currentDay >= maxDay">\n\n    <ion-card >\n\n        <ion-card-content class="justify">\n\n          Centro de Formación Músical te las gracias por haber participado.\n\n          Lamentablemente la fecha de invitaciones ha concluido.\n\n          <br>\n\n    \n\n        </ion-card-content>\n\n    \n\n      </ion-card>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\invitation\invitation.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__invitation_service__["a" /* InvitationService */]])
    ], InvitationComponent);
    return InvitationComponent;
}());

//# sourceMappingURL=invitation.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activitiesRecorder_services_activities_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvitationService = (function () {
    function InvitationService(db, firebaseAuth, actSrv) {
        this.db = db;
        this.firebaseAuth = firebaseAuth;
        this.actSrv = actSrv;
    }
    InvitationService.prototype.saveInvitation = function (uid, date, code) {
        this.db.object("users/" + uid + "/invitations").update({
            date: date,
            code: code,
        });
        this.db.object("users/" + uid).update({
            invitation: true
        });
    };
    InvitationService.prototype.searchByUID = function (uid) {
        return this.db.list('invitations', function (val) { return val.orderByChild('uid').equalTo(uid); }).valueChanges();
    };
    InvitationService.prototype.searchInfo = function () {
        return this.db.list('info');
    };
    InvitationService.prototype.searchByInvitationStat = function (uid) {
        return this.db.list('users', function (val) { return val.orderByChild('uid').equalTo(uid); }).valueChanges();
    };
    InvitationService.prototype.deleteInvitation = function (uid, date, code) {
        this.db.object("users/" + uid + "/invitations").update({
            date: date,
            code: "",
        });
        this.db.object("users/" + uid).update({
            invitation: false
        });
        this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "Eliminado  una invitación de: " + "<ion-badge> </ion-badge>", __WEBPACK_IMPORTED_MODULE_4_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_4_moment__().format('LT'));
    };
    InvitationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__activitiesRecorder_services_activities_service__["a" /* ActivitiesService */]])
    ], InvitationService);
    return InvitationService;
}());

//# sourceMappingURL=invitation.service.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
var News = (function () {
    function News() {
    }
    return News;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_push_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_list_component__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//


//


var NewsComponent = (function () {
    function NewsComponent(modalCtrl, newSvc, nav) {
        this.modalCtrl = modalCtrl;
        this.newSvc = newSvc;
        this.nav = nav;
    }
    NewsComponent.prototype.OpenModal = function () {
        var modal = this.modalCtrl.create(NewsFormPage);
        modal.present();
    };
    NewsComponent.prototype.Op = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__news_list_component__["b" /* UpdateNewsModal */]);
    };
    NewsComponent.prototype.ngOnInit = function () { };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\news\news.component.html"*/'<button type="button" class="button_round" (click)="OpenModal()"  name="" value="">Crear noticia</button>\n\n<button type="button" class="button_round" (click)="Op()" >Listar noticias creadas</button>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\news\news.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], NewsComponent);
    return NewsComponent;
}());

var NewsFormPage = (function () {
    function NewsFormPage(platform, params, viewCtrl, db, newSvc, authServ, push) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.newSvc = newSvc;
        this.authServ = authServ;
        this.push = push;
        this.news = {
            title: '',
            imageURL: '',
            textBody: '',
            createdAt: '',
            creatorPhotoURL: '',
            uploadFor: ''
        };
        this.user = db.list('users', function (value) { return value.orderByChild('email').equalTo(_this.authServ.auth.currentUser.email); }).valueChanges();
    }
    NewsFormPage.prototype.uploadNew = function () {
        this.news.imageURL = document.getElementById('url').value;
        this.news.createdAt = document.getElementById('date').value;
        this.news.uploadFor = document.getElementById('name').value;
        this.news.creatorPhotoURL = document.getElementById('photoURL').value;
        var currentNew = new __WEBPACK_IMPORTED_MODULE_4__news__["a" /* News */]();
        currentNew.imageURL = this.news.imageURL;
        currentNew.textBody = this.news.textBody;
        currentNew.title = this.news.title;
        currentNew.createdAt = this.news.createdAt;
        currentNew.uploadFor = this.news.uploadFor;
        currentNew.creatorPhotoURL = this.news.creatorPhotoURL;
        console.log(currentNew);
        this.newSvc.createNews(currentNew);
    };
    NewsFormPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewsFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Noticia\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<form >\n<ion-item *ngFor=\"let users of user | async\">\n<input type=\"hidden\" id=\"name\" value=\"{{users.name  +  users.lastName}}\">\n<input type=\"hidden\" id=\"photoURL\" value=\"{{users.imageURL}}\">\n</ion-item>\n<ion-item>\n  <input placeholder=\"Titulo\" type=\"text\" required [(ngModel)]=\"news.title\" name=\"title\">\n</ion-item>\n\n<ion-item>\n  <textarea rows='5' data-min-rows='3' [(ngModel)]=\"news.textBody\" name=\"textBody\" placeholder='Cuerpo de noticia' required></textarea>\n</ion-item>\n\n<ion-item>\n  <upload-form></upload-form>\n</ion-item>\n\n<ion-item>\n  <button type=\"button\" ion-button color=\"danger\" block (click)=\"uploadNew()\">Registrar</button>\n</ion-item>\n</form>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__app_push_service__["a" /* PushService */]])
    ], NewsFormPage);
    return NewsFormPage;
}());

//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

__WEBPACK_IMPORTED_MODULE_0_moment__["locale"]('es');
var date = __WEBPACK_IMPORTED_MODULE_0_moment__();
var Upload = (function () {
    function Upload(file) {
        this.createdAt = date.format("dddd, MMMM Do YYYY").toString();
        this.file = file;
    }
    return Upload;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prospect_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prospect_crud_component__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Chart } from 'chart.js'
var ProspectModalComponent = (function () {
    function ProspectModalComponent(nav, params, viewCtrl, prosSrv) {
        this.nav = nav;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.prosSrv = prosSrv;
        this.properties = {
            property: '',
            textProperty: ''
        };
        this.coordis = [];
        this.list = this.prosSrv.get();
    }
    ProspectModalComponent.prototype.ngOnInit = function () {
    };
    ProspectModalComponent.prototype.getItems = function (ev) {
        this.list = this.prosSrv.get();
        var item = ev.target.value;
        if (item && item.trim() != '') {
            return this.list = this.prosSrv.searchByName(item);
        }
    };
    ProspectModalComponent.prototype.openCreatorProspectForm = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__prospect_crud_component__["a" /* ProspectCrudComponent */], { isEditing: false });
    };
    ProspectModalComponent.prototype.editProspect = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__prospect_crud_component__["a" /* ProspectCrudComponent */], { isEditing: true, item: item });
    };
    ProspectModalComponent.prototype.deleteProspect = function (item) {
        this.prosSrv.showConfirm(item);
    };
    ProspectModalComponent.prototype.assigProperty = function (ev) {
        console.log(ev.target.value);
        //this.properties.property = ev;
    };
    ProspectModalComponent.prototype.searchProspectByProperty = function () {
        console.log(this.properties);
        this.list = this.prosSrv.searchProspectByProperty(this.properties.textProperty, this.properties.property);
        this.advSrch = false;
    };
    ProspectModalComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProspectModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\propects\prospect.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Prospectos\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-item>\n\n<button type="button" large block ion-button (click)="openCreatorProspectForm()"> Crear prospecto </button>\n\n</ion-item>\n\n<!--d-->\n\n\n\n\n\n\n\n<!--sss-->\n\n<ion-searchbar (keyup)="getItems($event)" ></ion-searchbar>\n\n\n\n<ion-item >\n\n  <ion-label>Estadística del día</ion-label>\n\n  <div class="chart-container" style="position: relative; height:40vh; width:80vw">\n\n      <canvas id="chart"></canvas>\n\n  </div>\n\n</ion-item>\n\n\n\n\n\n\n\n\n\n\n\n<ion-item>\n\n  <ion-label>Busqueda avanzada</ion-label>\n\n  <ion-toggle color="secondary" [(ngModel)]="advSrch" checked="false"></ion-toggle>\n\n</ion-item>\n\n\n\n\n\n<div *ngIf="advSrch">\n\n  <ion-item>\n\n    <ion-label>Buscar por:</ion-label>\n\n    <ion-select  [(ngModel)]="properties.property">\n\n      <ion-option value="attended">Atendió</ion-option>\n\n      <ion-option value="age">Edad </ion-option>\n\n      <ion-option value="state">Estado </ion-option>\n\n      <ion-option value="status">Estatus </ion-option>\n\n      <ion-option value="course">Curso</ion-option>\n\n      <ion-option value="source">Fuente</ion-option>\n\n      <ion-option value="phone">Telefono</ion-option> \n\n      <!--llamada y página web-->     \n\n      <ion-option value="lastname">Apellido paterno</ion-option>\n\n      <ion-option value="lastname2">Apellido materno</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item >\n\n    <label>Cuando sea:</label>\n\n    <input [(ngModel)]="properties.textProperty" placeholder="De acuerdo a...">\n\n  </ion-item>\n\n\n\n<ion-item>\n\n  <button type="button" (click)="searchProspectByProperty()" ion-button block>Buscar</button>\n\n</ion-item>\n\n\n\n</div>\n\n\n\n<!--Resultados de busqueda-->\n\n<ion-list>\n\n<ion-item-group >\n\n<ion-item-divider style="text-align:center;" color="light">Prospectos del día</ion-item-divider>\n\n<ion-item-sliding  *ngFor="let item of list | async; index as i;" [attr.data-index]="i">\n\n  <ion-item >\n\n      <p style="font-size: 100%;">{{ i+1 + ". "+ item.name + " " + item.lastname +" " +item.phone}}</p>\n\n  </ion-item>\n\n\n\n<ion-item-options  side="right">\n\n    <button (click)="editProspect(item)" ion-button color="secondary">\n\n      <ion-icon name="open"></ion-icon>\n\n      Editar\n\n    </button>\n\n    <button (click)="deleteProspect(item)" ion-button  color="danger">\n\n      <ion-icon name="trash"></ion-icon>\n\n      Eliminar\n\n    </button>\n\n  </ion-item-options>\n\n</ion-item-sliding>\n\n</ion-item-group>\n\n</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\propects\prospect.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__prospect_service__["a" /* ProspectService */]])
    ], ProspectModalComponent);
    return ProspectModalComponent;
}());

//# sourceMappingURL=prospect.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectCrudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prospect_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prospect__ = __webpack_require__(688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProspectCrudComponent = (function () {
    function ProspectCrudComponent(nav, params, viewCtrl, prosSrv) {
        this.nav = nav;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.prosSrv = prosSrv;
        this.isEditing = false;
        this.cursos = ["Bajo", "Bateria", "Canto", "Dibujo", "Guitarra Electrica/Acustica", "Piano", "Saxofon", "Ukulele", "Violin"];
        this.currentProspect = {
            name: '',
            lastname: '',
            lastname2: '',
            age: '',
            state: '',
            attended: '',
            phone: '',
            status: '',
            course: '',
            source: '',
            coment: '',
            price: '',
        };
        this.item = this.params.get('item');
        this.isEditing = this.params.get('isEditing');
        this.coordi = this.prosSrv.getCoordis();
    }
    ProspectCrudComponent.prototype.ngOnInit = function () {
    };
    ProspectCrudComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProspectCrudComponent.prototype.createNewProspect = function () {
        var prospect = new __WEBPACK_IMPORTED_MODULE_3__prospect__["a" /* Prospect */]();
        prospect.name = this.currentProspect.name;
        prospect.lastname = this.currentProspect.lastname;
        prospect.lastname2 = this.currentProspect.lastname2;
        prospect.age = this.currentProspect.age;
        prospect.state = this.currentProspect.state;
        prospect.attended = this.currentProspect.attended;
        prospect.phone = this.currentProspect.phone;
        prospect.status = this.currentProspect.status;
        prospect.course = this.currentProspect.course;
        prospect.source = this.currentProspect.source;
        prospect.coment = this.currentProspect.coment;
        prospect.price = this.currentProspect.price;
        console.log(this.currentProspect);
        this.prosSrv.createProspect(prospect);
        this.viewCtrl.dismiss();
    };
    ProspectCrudComponent.prototype.editCurrentProspect = function (item) {
        this.prosSrv.editProspect(item);
        this.viewCtrl.dismiss();
    };
    ProspectCrudComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "prospect-crud",template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\propects\prospect-crud.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Prospectos\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n<!--Si no va a editar-->\n\n  <ion-list *ngIf="isEditing == false; else editing">\n\n\n\n    <ion-item>\n\n      <p>Nombre</p>\n\n      <input placeholder="Nombre" [(ngModel)]="currentProspect.name" name="name" type="text">\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <p>Apellido paterno</p>\n\n      <input placeholder="Apellido paterno" [(ngModel)]="currentProspect.lastname" name="lastname" type="text">\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <p>Apellido Materno</p>\n\n      <input placeholder="Apellido Materno"  [(ngModel)]="currentProspect.lastname2" name="lastname2" type="text">\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <p>Edad</p>\n\n      <input placeholder="Edad" [(ngModel)]="currentProspect.age" name="age" type="text">\n\n      <p>Solo números enteros (necesario).</p>\n\n    </ion-item>\n\n\n\n    <!--<ion-item>\n\n      <ion-label>Estado</ion-label>\n\n      <ion-select [(ngModel)]="currentProspect.state" name="state">\n\n        <ion-option value="si">Si</ion-option>\n\n        <ion-option value="nn">No</ion-option>\n\n      </ion-select>\n\n    </ion-item>-->\n\n\n\n    <ion-item>\n\n      <p>Número de telefono</p>\n\n      <input placeholder="Telefono" maxlength="10" [(ngModel)]="currentProspect.phone" name="phone" type="text">\n\n      <p>Máximo 10 dígitos.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Estatus</ion-label>\n\n      <ion-select [(ngModel)]="currentProspect.status" name="status">\n\n        <ion-option value="debil">Débil</ion-option>\n\n        <ion-option value="interesado">Interesado</ion-option>\n\n        <ion-option value="inscrito">Inscrito</ion-option>\n\n        <ion-option value="muerto">Muerto</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Atendió</ion-label>\n\n      <ion-select [(ngModel)]="currentProspect.attended" name="attended">\n\n        <ion-option *ngFor="let item of coordi | async" value="{{item.name}}">{{item.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Cursos</ion-label>\n\n      <ion-select [(ngModel)]="currentProspect.course" name="course">\n\n        <ion-option *ngFor="let item of cursos;" value="{{item}}">{{item}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <textarea rows=\'5\' [(ngModel)]="currentProspect.coment" name="coment" data-min-rows=\'3\' name="coment" placeholder=\'Comentario...\' required></textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Fuente</ion-label>\n\n      <ion-select [(ngModel)]="currentProspect.source" name="source">\n\n        <ion-option value="inboxfb">INBOX FB</ion-option>\n\n        <ion-option value="whatsapp">WHATSAPP</ion-option>\n\n        <ion-option value="comentariofb">COMENTARIO</ion-option>\n\n        <ion-option value="database">BASE DE DATOS</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n        <ion-icon name="logo-usd" item-start></ion-icon>\n\n          Precio\n\n        <input [(ngModel)]="currentProspect.price" name="price" type="text">\n\n        <p>Solo números enteros sin decimales.</p>\n\n      </ion-item>\n\n\n\n\n\n      <button type="button" ion-button block (click)="createNewProspect()" > Crear prospecto </button>\n\n\n\n  </ion-list>\n\n\n\n<ng-template #editing>\n\n\n\n      <ion-item>\n\n          <p>Nombre</p>\n\n        <input  placeholder="Nombre" [(ngModel)]="item.name" name="name" type="text">\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <p>Apellido paterno</p>\n\n        <input placeholder="Apellido paterno"  [(ngModel)]="item.lastname" name="lastname" type="text">\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <p>Apellido Materno</p>        \n\n        <input  placeholder="Apellido materno" [(ngModel)]="item.lastname2" name="lastname2" type="text">\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <p>Edad</p>\n\n        \n\n        <input placeholder="Edad" [(ngModel)]="item.age" name="age" type="text">\n\n        <p>Solo números enteros (necesario).</p>\n\n        \n\n      </ion-item>\n\n\n\n      <!--ion-item>\n\n        <ion-label>Estado</ion-label>\n\n        <ion-select [(ngModel)]="item.state" name="state">\n\n          <ion-option value="si">Si</ion-option>\n\n          <ion-option value="nn">No</ion-option>\n\n        </ion-select>\n\n      </ion-item>-->\n\n\n\n      <ion-item>\n\n        <p>Número de telefono</p>\n\n        <input placeholder="Telefono"  maxlength="10" [(ngModel)]="item.phone" name="phone" type="text">\n\n        <p>Máximo 10 dígitos.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Estatus</ion-label>\n\n        <ion-select [(ngModel)]="item.status" name="status">\n\n          <ion-option value="debil">Débil</ion-option>\n\n          <ion-option value="interesado">Interesado</ion-option>\n\n          <ion-option value="inscrito">Inscrito</ion-option>\n\n          <ion-option value="muerto">Muerto</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Atendió</ion-label>\n\n        <ion-select [(ngModel)]="item.attended" name="attended">\n\n          <ion-option *ngFor="let item of coordi | async" value="{{item.name}}">{{item.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Cursos</ion-label>\n\n        <ion-select [(ngModel)]="item.course" name="course">\n\n          <ion-option *ngFor="let item of cursos;" value="{{item}}">{{item}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <textarea rows=\'5\' [(ngModel)]="item.coment" name="coment" data-min-rows=\'3\' name="coment" placeholder=\'Comentario...\' required></textarea>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Fuente</ion-label>\n\n        <ion-select [(ngModel)]="item.source" name="source">\n\n          <ion-option value="inboxfb">INBOX FB</ion-option>\n\n          <ion-option value="whatsapp">WHATSAPP</ion-option>\n\n          <ion-option value="comentariofb">COMENTARIO</ion-option>\n\n          <ion-option value="database">BASE DE DATOS</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n          <ion-icon name="logo-usd" item-start></ion-icon>\n\n            Precio\n\n          <input [(ngModel)]="item.price" name="price" type="text">\n\n          <p>Solo números enteros sin decimales.</p>\n\n        </ion-item>\n\n\n\n\n\n        <button type="button" ion-button block (click)="editCurrentProspect(item)" > Editar prospecto </button>\n\n\n\n</ng-template>\n\n\n\n  <!--Si va a editar-->\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\propects\prospect-crud.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__prospect_service__["a" /* ProspectService */]])
    ], ProspectCrudComponent);
    return ProspectCrudComponent;
}());

//# sourceMappingURL=prospect-crud.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_crud_component__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserModal = (function () {
    function UserModal(viewCtrl, usrv, nav) {
        this.viewCtrl = viewCtrl;
        this.usrv = usrv;
        this.nav = nav;
        this.properties = {
            property: "",
            textProperty: ""
        };
        this.list = usrv.getUsers();
    }
    UserModal.prototype.ngOnInit = function () { };
    UserModal.prototype.getItems = function (ev) {
        this.list = this.usrv.getUsers();
        var item = ev.target.value;
        if (item && item.trim() != '') {
            return this.list = this.usrv.searchUserByName(item);
        }
    };
    UserModal.prototype.searchProspectByProperty = function () {
        this.list = this.usrv.searchUserByProperty(this.properties.property, this.properties.textProperty);
        this.advSrch = false;
    };
    UserModal.prototype.editProspect = function (item) {
        var nav = this.nav.push(__WEBPACK_IMPORTED_MODULE_3__user_crud_component__["a" /* UserCrud */], { item: item, isEditing: true });
    };
    UserModal.prototype.deleteProspect = function (item) {
        this.usrv.showConfirm(item);
    };
    UserModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UserModal.prototype.createStudent = function (key) {
        console.log(key);
        this.usrv.saveStudent(key);
    };
    UserModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\Users\user.modal.component.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Usuarios\n\n      </ion-title>\n\n      <ion-buttons start>\n\n        <button ion-button (click)="dismiss()">\n\n          <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n  <ion-item>\n\n  <!--<button type="button" large block ion-button (click)="openCreatorProspectForm()"> Crear usuario </button>-->\n\n  </ion-item>\n\n  <!--d-->\n\n  \n\n  \n\n  \n\n  <!--sss-->\n\n  <ion-searchbar (keyup)="getItems($event)" ></ion-searchbar>\n\n  \n\n <!-- <ion-item >\n\n    <ion-label  >Estadística del día</ion-label>\n\n    <div class="chart-container" style="position: relative; height:40vh; width:80vw">\n\n        <canvas id="chart"></canvas>\n\n    </div>\n\n  </ion-item>\n\n-->\n\n  \n\n  <ion-item>\n\n    <ion-label>Busqueda avanzada</ion-label>\n\n    <ion-toggle color="secondary" [(ngModel)]="advSrch" checked="false"></ion-toggle>\n\n  </ion-item>\n\n  \n\n  \n\n  <div *ngIf="advSrch">\n\n    <ion-item>\n\n      <ion-label>Buscar por:</ion-label>\n\n      <ion-select  [(ngModel)]="properties.property">\n\n        <ion-option value="accessLevel">Nivel de acceso</ion-option>\n\n        <ion-option value="course">Curso </ion-option>\n\n        <ion-option value="email">E-mail</ion-option>\n\n        <ion-option value="age">Edad </ion-option>\n\n        <ion-option value="phone">Telefono</ion-option>\n\n        <ion-option value="tutor">Tutor</ion-option>\n\n        <ion-option value="lastName">Apellido paterno</ion-option>\n\n        <ion-option value="lastName2">Apellido materno</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item >\n\n      <label>Cuando sea:</label>\n\n      <input [(ngModel)]="properties.textProperty" placeholder="De acuerdo a...">\n\n    </ion-item>\n\n  \n\n  <ion-item>\n\n    <button type="button" (click)="searchProspectByProperty()" ion-button block>Buscar</button>\n\n  </ion-item>\n\n  \n\n  </div>\n\n  \n\n  <!--Resultados de busqueda-->\n\n  <ion-list>\n\n  <ion-item-group >\n\n  <ion-item-divider style="text-align:center;" color="light">Usuarios</ion-item-divider>\n\n  <ion-item-sliding *ngFor="let item of list | async; index as i;" [attr.data-index]="i">\n\n    <ion-item >\n\n        <p>{{ i+1 + ". "+ item.name + " " + item.lastName +" " +item.lastName2}}</p>\n\n    </ion-item>\n\n  \n\n  <ion-item-options  side="right">\n\n      <button *ngIf="item.isStudent == false" (click)="createStudent(item)" ion-button color="primary">\n\n          <ion-icon name="person-add"></ion-icon>\n\n          Crear estudiante\n\n        </button>\n\n      <button (click)="editProspect(item)" ion-button color="secondary">\n\n        <ion-icon name="open"></ion-icon>\n\n        Ver\n\n      </button>\n\n      <button (click)="deleteProspect(item)" ion-button  color="danger">\n\n        <ion-icon name="trash"></ion-icon>\n\n        Eliminar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  </ion-item-group>\n\n  </ion-list>\n\n  \n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\cfm-mobileapp\src\pages\Users\user.modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], UserModal);
    return UserModal;
}());

//# sourceMappingURL=user.modal.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCrud; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserCrud = (function () {
    function UserCrud(params, vCtrl, ursv) {
        this.params = params;
        this.vCtrl = vCtrl;
        this.ursv = ursv;
        this.isEditing = false;
        this.item = params.get("item");
        console.log(this.item);
    }
    UserCrud.prototype.editCurrentUser = function (item) {
        this.ursv.editUsers(item);
        this.vCtrl.dismiss();
    };
    UserCrud.prototype.ngOnInit = function () { };
    UserCrud.prototype.dismiss = function () {
        this.vCtrl.dismiss();
    };
    UserCrud = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-crud',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\Users\user.crud.component.html"*/'<ion-header>\n\n        <ion-toolbar>\n\n          <ion-title>\n\n            Usuario : {{item.name}}\n\n          </ion-title>\n\n          <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n              <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n      <ion-content>\n\n<ion-content>\n\n\n\n      <ion-item>\n\n        <input placeholder="Nombre" [(ngModel)]="item.name" name="name" type="text">\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        \n\n        <input placeholder="Apellido paterno" [(ngModel)]="item.lastName" name="lastname" type="text">\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        \n\n        <input placeholder="Apellido materno" [(ngModel)]="item.lastName2" name="lastname2" type="text">\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        \n\n        <input placeholder="Edad" [(ngModel)]="item.age" name="age" type="text">\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        \n\n        <input placeholder="Telefono" [(ngModel)]="item.phone" name="phone" type="text">\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Estatus</ion-label>\n\n        <ion-select [(ngModel)]="item.accessLevel" name="accessLevel">\n\n          <ion-option value="admin">Administrador</ion-option>\n\n          <ion-option value="coordi">Coordinador</ion-option>          \n\n          <ion-option value="teacher">Maestro</ion-option>\n\n          <ion-option value="student">Estudiante</ion-option>\n\n          <ion-option value="user">Usuario</ion-option>\n\n          <ion-option value="tutor">Tutor</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n\n\n        <button type="button" ion-button block (click)="editCurrentUser(item)" > Editar usuario </button>\n\n</ion-content>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\Users\user.crud.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], UserCrud);
    return UserCrud;
}());

//# sourceMappingURL=user.crud.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QualificationComponent = (function () {
    function QualificationComponent(viewCtl) {
        this.viewCtl = viewCtl;
        this.qualifications = [
            { atribute: "Lectura", score: 9 },
            { atribute: "Instrumento", score: 9 },
            { atribute: "Ejecucion", score: 9 },
            { atribute: "Lectura", score: 9 },
            { atribute: "Lectura", score: 9 },
        ];
    }
    QualificationComponent.prototype.ngOnInit = function () { };
    QualificationComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    QualificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'qualification-name',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\students\qualification.component.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n          Calificaciones\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n    <body>\n        <p text-wrap> Modulo en construcción. </p>\n    <ion-content >\n       \n      <!--\n      <div class="container"></div>\n      <div *ngFor="let item of qualifications;index as i;" [attr.data-index]="i">\n      <ion-card >\n          <ion-item>\n              <h2>Batería</h2>\n              <p>November 5, 1955</p>\n            </ion-item>\n\n        <ion-card-content>\n        <div class="row header" >\n          <div class="col">{{item.atribute}}: </div>\n          <div class="col">{{item.score}}</div>\n        </div>\n      </ion-card-content>\n  </ion-card>\n</div>-->\n\n\n\n    </ion-content>\n\n  </body>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\students\qualification.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], QualificationComponent);
    return QualificationComponent;
}());

//# sourceMappingURL=qualification.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CourseDetail_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__students_services__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClassesComponent = (function () {
    function ClassesComponent(viewCtl, Nav, params, stdSrv) {
        this.viewCtl = viewCtl;
        this.Nav = Nav;
        this.params = params;
        this.stdSrv = stdSrv;
        this.groups = stdSrv.getStudentGroups();
    }
    ClassesComponent.prototype.ngOnInit = function () {
    };
    ClassesComponent.prototype.DisplayDetails = function (key) {
        console.log(key);
        this.Nav.push(__WEBPACK_IMPORTED_MODULE_2__CourseDetail_component__["a" /* CourseDetailComponent */], { lessonkey: key });
    };
    ClassesComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    ClassesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'classes-name',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\students\classes.component.html"*/'<ion-header>\n\n        <ion-toolbar>\n\n          <ion-title>\n\n              Clases\n\n          </ion-title>\n\n          <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n      <ion-content>\n\n            \n\n            <ion-card>\n\n                    <ion-card-header>\n\n                     Cursos\n\n                    </ion-card-header>\n\n                  \n\n                    <ion-list *ngFor="let item of groups | async">\n\n\n\n                      <div>\n\n                          <button  (click)="DisplayDetails(item.groupkey)" ion-item>\n\n\n\n                              <ion-icon name="at" item-start></ion-icon>\n\n      \n\n                              {{item.name}}\n\n                            </button>\n\n                      </div>\n\n                      \n\n                    </ion-list>\n\n                  </ion-card>\n\n      </ion-content>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\students\classes.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__students_services__["a" /* StudentService */]])
    ], ClassesComponent);
    return ClassesComponent;
}());

//# sourceMappingURL=classes.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__students_services__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseDetailComponent = (function () {
    function CourseDetailComponent(viewCtl, params, stdSrv) {
        this.viewCtl = viewCtl;
        this.params = params;
        this.stdSrv = stdSrv;
        this.key = this.params.get('lessonkey');
        this.lessons = stdSrv.getLessons(this.key);
    }
    CourseDetailComponent.prototype.ngOnInit = function () { };
    CourseDetailComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    CourseDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'courseDetail-name',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\students\courseDetail.component.html"*/'<ion-header>\n\n        <ion-toolbar>\n\n          <ion-title>\n\n              Detalles de grupo: \n\n          </ion-title>\n\n          <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n      <ion-content>\n\n        <p>¡Aquí recibirás tus lecciones!</p>\n\n            <ion-card *ngFor="let item of lessons | async" text-wrap>\n\n                    <ion-item>\n\n                      <h2>{{item.name}}</h2>\n\n                      <p>{{item.createdAt}}</p>\n\n                    </ion-item>\n\n                  \n\n                    <ion-card-content text-wrap>\n\n                      <p>{{item.bodytext}}</p>\n\n                    </ion-card-content>\n\n                    <ion-row>\n\n\n\n                      <ion-col>\n\n                        <a  href="{{item.url}}" >\n\n                          <button ion-button icon-left clear small >\n\n                            Recurso Compartido \n\n                            <ion-icon name="md-cloud-download"></ion-icon>\n\n                          </button>\n\n                          </a>\n\n                  </ion-col>\n\n                    </ion-row>\n\n                  \n\n                  </ion-card>\n\n\n\n      </ion-content>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\students\courseDetail.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__students_services__["a" /* StudentService */]])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());

//# sourceMappingURL=CourseDetail.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teachers_groupsDetails_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teachers_groupForm_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teachers_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teachers_members_component__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GroupAdminComponent = (function () {
    function GroupAdminComponent(viewCtl, nav, tchSrv, authSrv) {
        this.viewCtl = viewCtl;
        this.nav = nav;
        this.tchSrv = tchSrv;
        this.authSrv = authSrv;
        this.groups = tchSrv.retrieveGroupData(authSrv.auth.currentUser.uid);
    }
    GroupAdminComponent.prototype.ngOnInit = function () { };
    GroupAdminComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    GroupAdminComponent.prototype.OpenDetails = function (groupkey) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__teachers_groupsDetails_component__["a" /* GroupDetailsComponent */], { groupkey: groupkey });
    };
    GroupAdminComponent.prototype.OpenCreateGroupForm = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__teachers_groupForm_component__["a" /* GroupFormComponent */]);
    };
    GroupAdminComponent.prototype.openMembers = function (id, name, groupName) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__teachers_members_component__["a" /* MemberComponent */], { id: id, name: name, groupName: groupName });
    };
    GroupAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gp-admin',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\teachers\groupAdmin.component.html"*/'<ion-header>\n\n        <ion-toolbar>\n\n          <ion-title>\n\n              Grupos \n\n          </ion-title>\n\n          <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n          <ion-buttons end>\n\n                <button (click)="OpenCreateGroupForm()" ion-button >\n\n                        <ion-icon name="add-circle" ></ion-icon>\n\n                      </button>\n\n              </ion-buttons>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n      <ion-content>\n\n            \n\n            <ion-card text-wrap *ngFor="let item of groups | async" >\n\n                    <ion-item>\n\n                      <h2>{{item.name }}</h2>\n\n                      <h4>Materia: {{item.course}} </h4>\n\n                      <p >{{item.date}}</p>\n\n                      <p hidden  >{{item.groupkey}}</p>\n\n                    </ion-item>\n\n                  \n\n                    <ion-card-content>\n\n                        <ion-list>\n\n                            <ion-list-header>\n\n                                <button ion-button (click)="openMembers(item.groupkey,item.name)" >Integrantes</button>\n\n                              </ion-list-header>\n\n\n\n                            <ion-item-sliding *ngFor="let member of groupMembers | async" >\n\n                                <ion-item>\n\n                                  <ion-avatar  item-start>\n\n                                    <img src="{{member.imageURL}}">\n\n                                  </ion-avatar>\n\n                                  <h2>{{member.name}}</h2>\n\n                                </ion-item>\n\n                                <ion-item-options side="right">\n\n                                  <button ion-button color="danger">\n\n                                    <ion-icon name="trash"></ion-icon>\n\n                                    Borrar\n\n                                  </button>\n\n                                </ion-item-options>\n\n                              </ion-item-sliding>\n\n                          </ion-list>\n\n                    </ion-card-content>\n\n                  \n\n                    <ion-row>\n\n                        <ion-col>\n\n                          <button (click)="this.tchSrv.deleteGroup(item.groupkey)" ion-button icon-left clear >\n\n                              <ion-icon color="danger" name="trash"></ion-icon>\n\n                          </button>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <button (click)="OpenDetails(item.groupkey)" ion-button icon-right clear >\n\n                                Lecciones\n\n                                <ion-icon name="md-arrow-round-forward"></ion-icon>\n\n                            </button>\n\n                          </ion-col>\n\n                      </ion-row>\n\n\n\n                      \n\n\n\n                    </ion-card>\n\n\n\n\n\n      </ion-content>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\teachers\groupAdmin.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__teachers_services__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], GroupAdminComponent);
    return GroupAdminComponent;
}());

//# sourceMappingURL=groupAdmin.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teachers_lessonForm_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teachers_services__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupDetailsComponent = (function () {
    function GroupDetailsComponent(viewCtl, Nav, params, tchSrv) {
        this.viewCtl = viewCtl;
        this.Nav = Nav;
        this.params = params;
        this.tchSrv = tchSrv;
        this.edit = false;
        this.groupkey = params.get("groupkey");
        this.lessons = tchSrv.retrieveLesson(this.groupkey);
    }
    GroupDetailsComponent.prototype.ngOnInit = function () { };
    GroupDetailsComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    GroupDetailsComponent.prototype.OpenLessonCreator = function (groupkey) {
        this.Nav.push(__WEBPACK_IMPORTED_MODULE_2__teachers_lessonForm_component__["a" /* LessonFormComponent */], { groupkey: groupkey });
    };
    GroupDetailsComponent.prototype.Edit = function (lessonkey) {
        this.edit = true;
        this.Nav.push(__WEBPACK_IMPORTED_MODULE_2__teachers_lessonForm_component__["a" /* LessonFormComponent */], { lessonkey: lessonkey, edit: this.edit, groupkey: this.groupkey });
    };
    GroupDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'group-details',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\teachers\groupsDetails.component.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n          Lecciones agregadas\n\n      </ion-title>\n\n      <ion-buttons start>\n\n        <button ion-button (click)="dismiss()">\n\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons end>\n\n            <button (click)="OpenLessonCreator(groupkey)" ion-button >\n\n                    <ion-icon name="add-circle" ></ion-icon>\n\n                  </button>\n\n          </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n        \n\n        <ion-card *ngFor="let item of lessons | async" text-wrap>\n\n           \n\n                <ion-item>\n\n                  <h2>{{item.name}}</h2>\n\n                  <p>{{item.createdAt}}</p>\n\n                </ion-item>\n\n              \n\n                <ion-card-content text-wrap>\n\n                  {{item.bodytext}}\n\n                </ion-card-content>\n\n              \n\n                <ion-row>\n\n                    <ion-col>\n\n                      <button (click)="this.tchSrv.deleteLesson(groupkey,item.key)" ion-button icon-left clear small>\n\n                          <ion-icon color="danger" name="trash"></ion-icon>\n\n                      </button>\n\n                    </ion-col>\n\n\n\n                    <ion-col>\n\n                            <a  href="{{item.url}}">\n\n                              <button ion-button icon-left clear small >\n\n                                Recurso Compartido \n\n                                \n\n                                <ion-icon name="md-cloud-download"></ion-icon>\n\n                              </button>\n\n                              </a>\n\n                          \n\n                       \n\n                      </ion-col>\n\n                    \n\n                      <ion-col>\n\n                          <button (click)="Edit(item.key)" ion-button icon-left clear small>\n\n                            <ion-icon name="build"></ion-icon>\n\n                            <div>Editar</div>\n\n                          </button>\n\n                        </ion-col>\n\n\n\n                  </ion-row>\n\n              </ion-card>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\teachers\groupsDetails.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__["a" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__teachers_services__["a" /* TeacherService */]])
    ], GroupDetailsComponent);
    return GroupDetailsComponent;
}());

//# sourceMappingURL=groupsDetails.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teachers_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LessonFormComponent = (function () {
    function LessonFormComponent(viewCtl, formGroup, tchSrv, params) {
        this.viewCtl = viewCtl;
        this.formGroup = formGroup;
        this.tchSrv = tchSrv;
        this.params = params;
        this.groupkey = params.get("groupkey");
        this.lessonkey = params.get("lessonkey");
        this.edit = params.get("edit");
        this.lessonForm = this.formGroup.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            body: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    LessonFormComponent.prototype.ngOnInit = function () { };
    LessonFormComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    LessonFormComponent.prototype.saveLesson = function () {
        var url = document.getElementById('url').value;
        var date = document.getElementById('date').value;
        this.tchSrv.saveLesson(this.groupkey, this.lessonForm.value.name, this.lessonForm.value.body, url, date);
        this.viewCtl.dismiss();
    };
    LessonFormComponent.prototype.editLesson = function (key) {
        var url = document.getElementById('url').value;
        var date = document.getElementById('date').value;
        this.tchSrv.editLesson(key, this.groupkey, this.lessonForm.value.name, this.lessonForm.value.body, url, date);
        this.viewCtl.dismiss();
    };
    LessonFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lesson-form',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\teachers\lessonForm.component.html"*/'<ion-header>\n\n        <ion-toolbar>\n\n          <ion-title *ngIf="!edit;else editTitle">\n\n              Crear lección\n\n          </ion-title>\n\n          <ng-template #editTitle>\n\n              <ion-title >\n\n                  Editar lección\n\n              </ion-title>\n\n          </ng-template>\n\n          <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n      <ion-content>\n\n            \n\n            <form [formGroup]="lessonForm">\n\n                    <ion-list no-lines>\n\n                  <ion-row>\n\n                      <ion-col col-12>\n\n                    <ion-item>\n\n                      <input autocorrect="on"  type="text" placeholder="Nombre de lección" formControlName="name" >\n\n                    </ion-item>\n\n                    </ion-col>\n\n                  <ion-col col-12>\n\n                      <h2 text-center>Contenido de lección</h2>\n\n                  </ion-col>\n\n                <ion-col col-12>\n\n                    <ion-card>\n\n                        <ion-card-header>\n\n                                \n\n                        </ion-card-header>\n\n                        \n\n                        <ion-card-content>\n\n                                <ion-item>\n\n                                        <textarea rows=\'5\' data-min-rows=\'3\' formControlName="body" placeholder=\'Cuerpo de lección\' required></textarea>\n\n                                      </ion-item>\n\n\n\n                                <upload-form>\n\n                                </upload-form>\n\n                    </ion-card-content>\n\n\n\n                    </ion-card>\n\n                    </ion-col>\n\n\n\n                  </ion-row>\n\n                  </ion-list>\n\n                  <button  *ngIf="!edit;else editButton" type="button" (click)="saveLesson()" ion-button outline block >Crear lección</button>\n\n                  <ng-template #editButton>\n\n                      <button  type="button" (click)="editLesson(lessonkey)" ion-button outline block >Editar lección</button>\n\n                  </ng-template>\n\n                  </form>\n\n    \n\n      </ion-content>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\teachers\lessonForm.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__teachers_services__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__["a" /* NavParams */]])
    ], LessonFormComponent);
    return LessonFormComponent;
}());

//# sourceMappingURL=lessonForm.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teachers_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TeacherStudent__ = __webpack_require__(691);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupFormComponent = (function () {
    function GroupFormComponent(formBuilder, viewCtl, tchSrv) {
        this.formBuilder = formBuilder;
        this.viewCtl = viewCtl;
        this.tchSrv = tchSrv;
        this.membersuid = [];
        this.members = [];
        this.students = tchSrv.listStudets();
        this.groupForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            course: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    }
    GroupFormComponent.prototype.ngOnInit = function () { };
    GroupFormComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    GroupFormComponent.prototype.createGroup = function () {
        if (this.groupForm.valid) {
            this.tchSrv.saveGroup(this.groupForm.value.name, this.groupForm.value.course, this.membersuid);
            this.viewCtl.dismiss();
        }
    };
    GroupFormComponent.prototype.getValueEachMember = function (uid, imageurl, name) {
        var memberItem = document.getElementById(uid);
        var currentMember = new __WEBPACK_IMPORTED_MODULE_4__TeacherStudent__["a" /* TeacherStudent */]();
        currentMember.uid = uid;
        currentMember.name = name;
        currentMember.imageURL = imageurl;
        if (memberItem.checked) {
            this.membersuid.push(uid);
            this.members.push(currentMember);
        }
        else {
            this.deleteMembers(uid);
        }
        this.displayMembers();
    };
    GroupFormComponent.prototype.displayMembers = function () {
        console.log(this.membersuid);
    };
    GroupFormComponent.prototype.deleteMembers = function (id) {
        for (var index = 0; index < this.membersuid.length; index++) {
            if (this.membersuid[index] == id) {
                this.membersuid.splice(index, 1);
            }
            if (this.members[index].uid == id) {
                this.members.splice(index, 1);
            }
        }
    };
    GroupFormComponent.prototype.getItems = function (ev) {
        this.students = this.tchSrv.listStudets();
        var item = ev.target.value;
        if (item && item.trim() != '') {
            return this.students = this.tchSrv.searchStudents(item);
        }
    };
    GroupFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'GroupForm',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\teachers\groupForm.component.html"*/'<ion-header>\n\n        <ion-toolbar>\n\n          <ion-title>\n\n              Crear grupo\n\n          </ion-title>\n\n          <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n      <ion-content>\n\n            \n\n            <form [formGroup]="groupForm">\n\n                    <ion-list no-lines>\n\n                  <ion-row>\n\n                      <ion-col col-12>\n\n                    <ion-item>\n\n                      <input autocorrect="on"  type="text" placeholder="Nombre grupo ej: Bateria-S1, etc... " formControlName="name" >\n\n                    </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12>\n\n                      <ion-item>\n\n                        <ion-label>Materia</ion-label>\n\n                        <ion-select formControlName="course">\n\n                          <ion-option value="bajo">BAJO</ion-option>\n\n                          <ion-option value="bateria">BATERIA</ion-option>\n\n                          <ion-option value="canto">CANTO</ion-option>\n\n                          <ion-option value="dibujo">DIBUJO</ion-option>\n\n                          <ion-option value="guitarra">GUITARRA</ion-option>\n\n                          <ion-option value="piano">PIANO</ion-option>\n\n                          <ion-option value="saxofon">SAXOFON</ion-option>\n\n                          <ion-option value="ukulele">UKULELE</ion-option>\n\n                          <ion-option value="violin">VIOLIN</ion-option>\n\n                        </ion-select>\n\n                      </ion-item>\n\n                      </ion-col>\n\n                  <ion-col col-12>\n\n                      <h2 text-center>Integrantes</h2>\n\n                  </ion-col>\n\n                <ion-col col-12>\n\n\n\n                  <ion-card>\n\n                    <ion-item *ngFor="let item of members" >\n\n                      <ion-thumbnail item-start>\n\n                        <img src="{{item.imageURL}}">\n\n                      </ion-thumbnail>\n\n                      <h2>{{item.name}}</h2>\n\n                      <button (click)="deleteMembers(item.uid)" ion-button color="danger" clear item-end>Borrar</button>\n\n                    </ion-item>\n\n                  </ion-card>\n\n                   \n\n\n\n                    </ion-col>\n\n\n\n                  </ion-row>\n\n                  </ion-list>\n\n                </form>\n\n\n\n                <ion-card>\n\n                    <ion-card-header>\n\n                            <ion-searchbar (keyup)="getItems($event)" ></ion-searchbar>\n\n                    </ion-card-header>\n\n                    \n\n                    <ion-card-content>\n\n                    <ion-list no-lines>\n\n                            <ion-item *ngFor="let item of students | async;  i as index" text-wrap>\n\n                              <p id="{{item.uid}}"></p>\n\n                              <ion-avatar item-start>\n\n                                    <img src="{{item.imageURL}}">\n\n                              </ion-avatar>\n\n                              <ion-label>{{item.name +" " + item.lastName + " " + item.lastName2}}</ion-label>\n\n                              <input type="checkbox" id="{{item.uid}}" (click)="getValueEachMember(item.uid,item.imageURL,item.name)" item-end color="secondary" > \n\n                            </ion-item>\n\n                    </ion-list>\n\n                </ion-card-content>\n\n\n\n                </ion-card>\n\n\n\n                  <button type="button" (click)="createGroup()" ion-button outline block >Crear grupo</button>\n\n                  \n\n    \n\n      </ion-content>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\teachers\groupForm.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__teachers_services__["a" /* TeacherService */]])
    ], GroupFormComponent);
    return GroupFormComponent;
}());

//# sourceMappingURL=groupForm.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teachers_services__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberComponent = (function () {
    function MemberComponent(viewCtl, params, tchSrv) {
        this.viewCtl = viewCtl;
        this.params = params;
        this.tchSrv = tchSrv;
        this.search = false;
        this.id = params.get('id');
        this.name = params.get('name');
        this.groupMembers = this.tchSrv.retriveGroupMembers(this.id, this.name);
    }
    MemberComponent.prototype.ngOnInit = function () { };
    MemberComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    MemberComponent.prototype.getItems = function (ev) {
        this.members = this.tchSrv.listStudets();
        var item = ev.target.value;
        if (item && item.trim() != '') {
            return this.members = this.tchSrv.searchStudents(item);
        }
    };
    MemberComponent.prototype.openSearch = function () {
        this.search = !this.search;
        console.log(this.search);
    };
    MemberComponent.prototype.deleteMember = function (groupkey, studentkey) {
        console.log(groupkey + " " + studentkey);
        this.tchSrv.deleteMember(groupkey, studentkey);
    };
    MemberComponent.prototype.addMember = function (groupkey, studentuid, studentkey) {
        this.tchSrv.addMember(groupkey, studentuid, studentkey);
    };
    MemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'member-name',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\teachers\member.component.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n          Integrantes \n\n      </ion-title>\n\n      <ion-buttons start>\n\n        <button ion-button (click)="dismiss()">\n\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons end>\n\n            <button (click)="openSearch()" ion-button >\n\n                    <ion-icon *ngIf="!search; else remove"  name="add-circle" ></ion-icon>\n\n                    <ng-template #remove >\n\n                        <ion-icon color="danger"  name="md-remove" ></ion-icon>\n\n                    </ng-template>\n\n                  </button>\n\n          </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n        \n\n        <ion-card text-wrap >\n\n                <ion-card-content>\n\n                    <ion-list>\n\n                        <ion-list-header>\n\n                                <ion-searchbar *ngIf="search" (keyup)="getItems($event)"></ion-searchbar>\n\n                          </ion-list-header>\n\n                          <h2 text-center>Integrantes actuales</h2>\n\n                        <ion-item-sliding *ngFor="let item of groupMembers | async" >\n\n                            <ion-item>\n\n                              <ion-avatar  item-start>\n\n                                <img src="{{item.imageURL}}">\n\n                              </ion-avatar>\n\n                              <h2>{{item.name + " " +item.lastName  +" " + item.lastName2}}</h2>\n\n                            </ion-item>\n\n                            <ion-item-options side="right">\n\n                              <button (click)="deleteMember(id,item.uid)" ion-button color="danger">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                                Borrar\n\n                              </button>\n\n                            </ion-item-options>\n\n                          </ion-item-sliding>\n\n                      </ion-list>\n\n                      <p>Deslice hacia la izquierda para ver opciones</p>\n\n                </ion-card-content>\n\n                </ion-card>\n\n\n\n                <ion-card text-wrap *ngIf="search">\n\n                        <ion-list-header no-lines>\n\n                                Resultados de busqueda:\n\n                          </ion-list-header>\n\n                        <ion-card-content>\n\n                            <ion-list no-lines>\n\n\n\n                                <ion-item-sliding *ngFor="let item of members | async" >\n\n                                    <ion-item>\n\n                                      <ion-avatar  item-start>\n\n                                        <img src="{{item.imageURL}}">\n\n                                      </ion-avatar>\n\n                                      <h2>{{item.name + " " +item.lastName  +" " + item.lastName2}}</h2>\n\n                                    </ion-item>\n\n                                    <ion-item-options side="right">\n\n                                      <button (click)="addMember(id,item.uid,item.uid)" ion-button color="primary" clear>\n\n                                        <ion-icon name="add-circle"></ion-icon>\n\n                                      </button>\n\n                                    </ion-item-options>\n\n                                  </ion-item-sliding>\n\n                              </ion-list>\n\n                              <p>Deslice hacia la izquierda para ver opciones</p>\n\n                        </ion-card-content>\n\n                        </ion-card>\n\n  </ion-content>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\teachers\member.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__teachers_services__["a" /* TeacherService */]])
    ], MemberComponent);
    return MemberComponent;
}());

//# sourceMappingURL=members.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentCRMComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_services__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_crud__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentCRMComponent = (function () {
    function StudentCRMComponent(viewCtl, studnSrv, nav) {
        this.viewCtl = viewCtl;
        this.studnSrv = studnSrv;
        this.nav = nav;
        this.properties = {
            property: '',
            textProperty: ''
        };
        this.students = studnSrv.getStudents();
    }
    StudentCRMComponent.prototype.ngOnInit = function () { };
    StudentCRMComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    StudentCRMComponent.prototype.searchByProperty = function (property, node) {
        this.students = this.studnSrv.searchByProperty(property, node);
    };
    StudentCRMComponent.prototype.getItems = function (ev) {
        this.students = this.studnSrv.getStudents();
        var item = ev.target.value;
        if (item && item.trim() != '') {
            return this.students = this.studnSrv.searchByName(item);
        }
    };
    StudentCRMComponent.prototype.editStudent = function (uid, student) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__student_crud__["a" /* StudentCrudComponent */], { uid: uid, student: student });
    };
    StudentCRMComponent.prototype.eraseStudent = function (uid, key) {
        this.studnSrv.eraseStudent(uid, key);
    };
    StudentCRMComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\CRM\estudiantes\studentCRM.component.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Estudiantes\n\n      </ion-title>\n\n      <ion-buttons start>\n\n        <button ion-button (click)="dismiss()">\n\n          <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n  <!--<ion-item>\n\n  <button type="button" large block ion-button > Crear prospecto </button>\n\n  </ion-item>-->\n\n  <!--d-->\n\n  \n\n  \n\n  \n\n  <!--sss-->\n\n  <ion-searchbar (keyup)="getItems($event)"></ion-searchbar>\n\n  \n\n  <ion-item>\n\n    <ion-label>Busqueda avanzada</ion-label>\n\n    <ion-toggle color="secondary" [(ngModel)]="advSrch" checked="false"></ion-toggle>\n\n  </ion-item>\n\n\n\n  <div *ngIf="advSrch">\n\n    <ion-item>\n\n      <ion-label>Buscar por:</ion-label>\n\n      <ion-select  [(ngModel)]="properties.property">\n\n          <ion-option value="name">Nombre </ion-option>\n\n        <ion-option value="age">Edad </ion-option>\n\n        <ion-option value="course">Curso</ion-option>\n\n        <ion-option value="email">E-mail</ion-option>\n\n        <ion-option value="lastName">Apellido paterno</ion-option>\n\n        <ion-option value="lastName2">Apellido materno</ion-option>\n\n        <ion-option value="genre">Género</ion-option>\n\n        <ion-option value="ocupation">Ocupación</ion-option>\n\n        <ion-option value="phone">Número</ion-option>\n\n        <ion-option value="tutorName">Nombre tutor</ion-option>\n\n        <ion-option value="tutoremail">E-mail tutor</ion-option>\n\n        <ion-option value="tutorPhone">Numero tutor</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item >\n\n      <label>Cuando sea:</label>\n\n      <input [(ngModel)]="properties.textProperty" placeholder="De acuerdo a...">\n\n    </ion-item>\n\n  \n\n  <ion-item>\n\n    <button (click)="searchByProperty(properties.textProperty,properties.property)" type="button" ion-button block>Buscar</button>\n\n  </ion-item>\n\n  \n\n  </div>\n\n  \n\n  <!--Resultados de busqueda-->\n\n  <ion-list>\n\n  <ion-item-group >\n\n  <ion-item-divider style="text-align:center;" color="light">Estudiantes</ion-item-divider>\n\n  <ion-item-sliding *ngFor="let item of students | async; index as i;" [attr.data-index]="i">\n\n    <ion-item >\n\n        <p>{{ i+1 + ". "+ item.name + " " + item.lastName +" " +item.phone}}</p>\n\n    </ion-item>\n\n  \n\n  <ion-item-options  side="right">\n\n      <button (click)="editStudent(item.uid,item)"  ion-button color="secondary">\n\n        <ion-icon name="open"></ion-icon>\n\n        Editar\n\n      </button>\n\n      <button (click)="eraseStudent(item.uid,item.key)" ion-button  color="danger">\n\n        <ion-icon name="trash"></ion-icon>\n\n        Eliminar\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  </ion-item-group>\n\n  </ion-list>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\cfm-mobileapp\src\pages\CRM\estudiantes\studentCRM.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__student_services__["a" /* StudentCRMService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], StudentCRMComponent);
    return StudentCRMComponent;
}());

//# sourceMappingURL=studentCRM.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentCrudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_params__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_services__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clases_curso__ = __webpack_require__(694);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentCrudComponent = (function () {
    function StudentCrudComponent(params, viewCtl, studnSrv) {
        this.params = params;
        this.viewCtl = viewCtl;
        this.studnSrv = studnSrv;
        this.img = false;
        this.courses = [];
        this.currentUID = params.get('uid');
        this.student = params.get('student');
        console.log(this.student);
        this.Student_courses = studnSrv.listStudentCourses(this.currentUID);
        this.teachers = studnSrv.listTeachers();
        this.courses_db = studnSrv.listCourses();
    }
    StudentCrudComponent.prototype.ngOnInit = function () { };
    StudentCrudComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    StudentCrudComponent.prototype.editImage = function (student) {
        if (this.img) {
            this.newImageURL = document.getElementById('url').value;
            this.studnSrv.setImageUrl(this.newImageURL, student);
            console.log();
        }
    };
    StudentCrudComponent.prototype.getId = function (id) {
        console.log(id);
        this.id_course = id;
    };
    StudentCrudComponent.prototype.addCourses = function (course) {
        var coursen = new __WEBPACK_IMPORTED_MODULE_4__clases_curso__["a" /* Course */]();
        coursen.name = course.name;
        coursen.schedule = course.schedule;
        coursen.teacher = course.teacher;
        coursen.classroom = course.classroom;
        coursen.id_course = this.id_course;
        if (course.teacher == undefined) {
            course.teacher = "";
        }
        this.courses.push(coursen);
        console.log(this.courses);
    };
    StudentCrudComponent.prototype.deleteCourse = function (id, key) {
        this.studnSrv.eraseStudentCourse(id, key);
    };
    StudentCrudComponent.prototype.removeCourse = function (pos) {
        this.courses.splice(pos, 1);
        console.log(this.courses);
    };
    StudentCrudComponent.prototype.editStudent = function (student) {
        this.studnSrv.editStudent(student, this.courses);
    };
    StudentCrudComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\CRM\estudiantes\student.crud.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            Estudiante: {{currentUID}}\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n<ion-item no-lines class="image">\n\n        <img src="{{student.imageURL}}">\n\n</ion-item>\n\n\n\n<ion-item>\n\n        <ion-label>Actualizar imagen</ion-label>\n\n        <ion-toggle [(ngModel)]="img" ></ion-toggle>\n\n</ion-item>\n\n\n\n<ion-item *ngIf="img" text-center> \n\n    <h3>Agregar fotografía</h3>\n\n    <upload-form>\n\n\n\n    </upload-form>\n\n    <button (click)="editImage(student)" ion-button block >\n\n        Actualizar\n\n    </button>\n\n</ion-item>\n\n\n\n    <h3 text-center>Nombre</h3>\n\n    <ion-item>\n\n        <input placeholder="Nombre" [(ngModel)]="student.name" name="name" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Apellido paterno</h3>\n\n    <ion-item>\n\n        <input placeholder="Apellido paterno" [(ngModel)]="student.lastName" name="lastname" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Fecha de inscripción</h3>\n\n    <ion-item>\n\n        <input placeholder="Apellido materno" [(ngModel)]="student.lastName2" name="lastname2" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Matricula</h3>\n\n    <ion-item>\n\n        <input placeholder="Matricula" [(ngModel)]="student.enrollment" name="enrollment" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Cursos</h3>\n\n\n\n    <ion-item>\n\n        <ion-label>Agregar cursos</ion-label>\n\n        <ion-toggle text-center  color="primary" [(ngModel)]="show"></ion-toggle>\n\n    </ion-item>\n\n\n\n        <div *ngIf="show">\n\n                <h3 text-center>Curso</h3>\n\n                <ion-item>\n\n                        <ion-select [(ngModel)]="courses.name" name="name">\n\n                          <ion-option  *ngFor="let names of courses_db | async" value="{{names.name}}" (ionSelect)="getId(names.id)" >\n\n                              {{names.name}}\n\n                              </ion-option>\n\n                        </ion-select>\n\n                      </ion-item>\n\n                <!--<h3 text-center>Curso</h3>\n\n                <ion-item>\n\n                    <ion-select [(ngModel)]="courses.name" name="name" >\n\n                      <ion-option value="guitarra">GUITARRA</ion-option>\n\n                      <ion-option value="ukulele">UKULELE</ion-option>\n\n                      <ion-option value="bajo electrico">BAJO ELECTRICO</ion-option>\n\n                      <ion-option value="violin">VIOLIN</ion-option>\n\n                      <ion-option value="saxofon">SAXOFON</ion-option>\n\n                      <ion-option value="piano">PIANO</ion-option>\n\n                      <ion-option value="bateria">BATERIA</ion-option>\n\n                      <ion-option value="canto">CANTO</ion-option>\n\n                      <ion-option value="dibujo y pintura">DIBUJO Y PINTURA</ion-option>\n\n                    </ion-select>\n\n                </ion-item>-->\n\n                    <h3 text-center>Maestro</h3>\n\n                    <ion-item>\n\n                            <ion-select [(ngModel)]="courses.teacher" name="teacher">\n\n                              <ion-option *ngFor="let item of teachers | async" value="{{item.name}}">\n\n                                  {{item.name}}\n\n                                </ion-option>\n\n                            </ion-select>\n\n                          </ion-item>\n\n                    <h3 text-center>Horario</h3>\n\n                    <ion-item>\n\n                            <ion-label>Horario</ion-label>\n\n                            <ion-select [(ngModel)]="courses.schedule" name="schedule" >\n\n                              <ion-option value="l y m 4:00pm a 5:30pm">L Y M 4:00PM a 5:30PM</ion-option>\n\n                              <ion-option value="l y m 5:30pm a 7:00pm">L Y M 5:30PM a 7:00PM</ion-option>\n\n                              <ion-option value="l y m 7:00pm a 8:30pm">L Y M 7:00PM a 8:30PM</ion-option>\n\n                              <ion-option value="l y m 8:30pm a 10:00pm">L Y M 8:30PM a 10:00PM</ion-option>\n\n                              <ion-option value="m y j 4:00pm a 5:30pm">M Y J 4:00PM a 5:30PM</ion-option>\n\n                              <ion-option value="m y j 5:30pm a 7:00pm">M Y J 5:30PM a 7:00PM</ion-option>\n\n                              <ion-option value="m y j 7:00pm a 8:30pm">M Y J 7:00PM a 8:30PM</ion-option>\n\n                              <ion-option value="m y j 8:30pm a 10:00pm">M Y J 8:30PM a 10:00PM</ion-option>\n\n                              <ion-option value="viernes 5:00pm A 8:00pm">VIERNES 5:00PM A 8:00PM</ion-option>\n\n                              <ion-option value="sabado 9:00am a 12:00pm">SABADO 9:00AM a 12:00PM</ion-option>\n\n                              <ion-option value="sabado 1:00pm a 4:00pm">SABADO 1:00PM a 4:00PM</ion-option>\n\n                              <ion-option value="sabado 4:00pm a 7:00pm">SABADO 4:00PM a 7:00PM</ion-option>\n\n                            </ion-select>\n\n                          </ion-item>\n\n                \n\n                          <h3 text-center>Aula</h3>\n\n                          <ion-item>\n\n                                  <ion-label>Aula</ion-label>\n\n                                  <ion-select [(ngModel)]="courses.classroom" name="classroom" >\n\n                                    <ion-option value="A1">A1</ion-option>\n\n                                    <ion-option value="A2">A2</ion-option>\n\n                                    <ion-option value="A3">A3</ion-option>\n\n                                    <ion-option value="A4">A4</ion-option>\n\n                                    <ion-option value="A5">A5</ion-option>\n\n                                    <ion-option value="A6">A6</ion-option>\n\n                                    <ion-option value="B1">B1</ion-option>\n\n                                    <ion-option value="B2">B2</ion-option>\n\n                                    <ion-option value="B3">B3</ion-option>\n\n                                  </ion-select>\n\n                                </ion-item>\n\n\n\n                    <button type="button" (click)="addCourses(courses)" ion-button>Agregar</button>\n\n\n\n                </div>\n\n\n\n    <ion-list *ngIf="show" >\n\n            <ion-item-divider  color="light">Cursos seleccionados</ion-item-divider>\n\n                   \n\n                            <button *ngFor="let cours of courses; index as i;" [attr.data-index]="i" (click)="removeCourse(i)" type="button" color="secondary"ion-button icon-end>\n\n                                    {{cours.name}}\n\n                                    <ion-icon name="remove-circle"></ion-icon>\n\n                                </button>\n\n                    \n\n                    \n\n            \n\n        </ion-list>\n\n\n\n    <ion-list>\n\n        <ion-item-divider color="light">Cursos actuales</ion-item-divider>\n\n                \n\n                <button *ngFor="let item of Student_courses | async" (click)="deleteCourse(currentUID,item.key)" type="button" color="danger"ion-button icon-end>\n\n                        {{item.name}}\n\n                        <ion-icon name="remove-circle"></ion-icon>\n\n                    </button>\n\n        \n\n    </ion-list>\n\n<br>\n\n    \n\n<hr>\n\n\n\n    <h3 text-center>Edad</h3>\n\n    <ion-item>\n\n        <input placeholder="Edad" [(ngModel)]="student.age" name="age" type="text">\n\n    </ion-item>\n\n    <h3 text-center>E-mail</h3>\n\n    <ion-item>\n\n        <input placeholder="E-mail" [(ngModel)]="student.email" name="email" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Genero</h3>\n\n    <ion-item>\n\n        <input placeholder="Genero" [(ngModel)]="student.genre" name="genre" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Telefono</h3>\n\n    <ion-item>\n\n        <input placeholder="Teléfono" [(ngModel)]="student.phone" name="phone" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Ocupación</h3>\n\n    <ion-item>\n\n        <input placeholder="Ocupación" [(ngModel)]="student.ocupation" name="ocupation" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Ultimo grado de estudios</h3>\n\n    <ion-item>\n\n        <input placeholder="Ultimo grado de estudios" [(ngModel)]="student.grade" name="grade" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Dirección</h3>\n\n    <ion-item>\n\n        <input placeholder="Dirección" [(ngModel)]="student.address" name="address" type="text">\n\n    </ion-item>\n\n    <h3 text-center>¿Cómo se enteró de nosotros?</h3>\n\n    <ion-item>\n\n        <input placeholder="¿Cómo se enteró de nosotros?" [(ngModel)]="student.advertising" name="advertising" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Observaciones médicas</h3>\n\n    <ion-item>\n\n        <input placeholder="Observaciones médicas" [(ngModel)]="student.medicalObservation" name="medicalObservation" type="text">\n\n    </ion-item>\n\n    \n\n    <h3 text-center>Tipo</h3>\n\n    <ion-item>\n\n        <input placeholder="Tipo" [(ngModel)]="student.type" name="type" type="text">\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <h1 text-center color="primary">DATOS DEL TUTOR</h1>\n\n    </ion-item>\n\n\n\n    <h3 text-center>Nombre del tutor</h3>\n\n    <ion-item>\n\n        <input placeholder="Nombre del tutor" [(ngModel)]="student.tutorName" name="tutorName" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Parentesco con alumno</h3>\n\n    <ion-item>\n\n        <input placeholder="Parentesco con alumno" [(ngModel)]="student.relationship" name="relationship" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Edad de tutor</h3>\n\n    <ion-item>\n\n        <input placeholder="Edad de tutor" [(ngModel)]="student.tutorAge" name="tutorAge" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Ocupación de tutor</h3>\n\n    <ion-item>\n\n        <input placeholder="Ocupación de tutor" [(ngModel)]="student.tutorOcupation" name="tutorOcupation" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Telefono de tutor</h3>\n\n    <ion-item>\n\n        <input placeholder="Telefono de tutor" [(ngModel)]="student.tutorPhone" name="tutorPhone" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Correo electrónico de tutor</h3>\n\n    <ion-item>\n\n        <input placeholder="Correo electrónico de tutor" [(ngModel)]="student.tutorEmail" name="tutorEmail" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Dirección de tutor</h3>\n\n    <ion-item>\n\n        <input placeholder="Dirección de tutor" [(ngModel)]="student.tutorAddress" name="tutorAddress" type="text">\n\n    </ion-item>\n\n    <h3 text-center>Fecha de inscripción</h3>\n\n    <ion-item>\n\n        <input [(ngModel)]="student.tutorRedDate" name="tutorRedDate" type="date">\n\n    </ion-item>\n\n    <h3 text-center>Fecha de inicio</h3>\n\n    <ion-item>\n\n        <input [(ngModel)]="student.tutorInitDate" name="tutorInitDate" type="date">\n\n    </ion-item>\n\n    <h3 text-center>Fecha de término</h3>\n\n    <ion-item>\n\n        <input [(ngModel)]="student.tutorFinalDate" name="tutorFinalDate" type="date">\n\n    </ion-item>\n\n    <h3 text-center>Costo</h3>\n\n\n\n    <ion-item>\n\n        <input placeholder="Dirección de tutor" [(ngModel)]="student.cost" name="cost" type="text">\n\n    </ion-item>\n\n\n\n    <h3 text-center>Muestra pedagógica</h3>\n\n\n\n    <ion-item>\n\n        <input placeholder="Dirección de tutor" [(ngModel)]="student.pedagogicalSample" name="pedagogicalSample" type="text">\n\n    </ion-item>\n\n\n\n    <h3 text-center>Comentarios</h3>\n\n\n\n    <ion-item>\n\n        <textarea rows=\'5\' data-min-rows=\'3\' [(ngModel)]="student.coments" name="coments" placeholder=\'Cuerpo de noticia\' required></textarea>\n\n    </ion-item>\n\n\n\n\n\n    <button type="button" ion-button block (click)="editStudent(student)"> Editar estudiante </button>\n\n</ion-content>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\CRM\estudiantes\student.crud.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__student_services__["a" /* StudentCRMService */]])
    ], StudentCrudComponent);
    return StudentCrudComponent;
}());

//# sourceMappingURL=student.crud.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//SERVICIO DEL CRUD

//NECESARIO PARA EL CRUD DE ANGULARFIRE

var CursosComponent = (function () {
    function CursosComponent(nav, viewCtrl, db, crud) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.crud = crud;
        this.listarCurso = this.crud.get();
    }
    CursosComponent.prototype.ngOnInit = function () { };
    CursosComponent.prototype.openCreatorCursoForm = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__template_component__["a" /* TemplateComponent */]);
        this.crud.currentId = "nuevo";
    };
    CursosComponent.prototype.OpenEditCursoForm = function (key) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__template_component__["a" /* TemplateComponent */]);
        this.crud.currentId = key;
    };
    CursosComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CursosComponent.prototype.getbyCourse = function (datos) {
        console.log("Valores Recibidos: ", datos.value.name);
        this.listarCurso = this.crud.searchbyCourse(datos.value.name);
    };
    CursosComponent.prototype.getbySchedule = function (schedule) {
        event.preventDefault();
        console.log("Valores Recibidos: ", schedule.value.schedule);
        this.listarCurso = this.crud.searchbySchedule(schedule.value.schedule);
    };
    CursosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cursos',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\CRM\cursos\cursos.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n    Cursos\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <button id="paddinBottom2" type="button" large block ion-button (click)="openCreatorCursoForm()"> Crear Nuevo Curso </button>\n  <!-- BUSQUEDAS POR CURSOS -->\n  <ion-item>\n    <ion-label>Busqueda por Curso</ion-label>\n    <ion-toggle color="secondary" [(ngModel)]="searchCurso" checked="false"></ion-toggle>\n  </ion-item>\n\n\n  <div *ngIf="searchCurso">\n    <form (ngSubmit)="getbyCourse(datos)" #datos="ngForm">\n    <ion-list>\n    <ion-item>\n      <ion-label>Instrumento</ion-label>\n      <ion-select name="name"\n                  [(ngModel)]="datos.name">\n        <ion-option value="guitarra">GUITARRA</ion-option>\n        <ion-option value="ukulele">UKULELE</ion-option>\n        <ion-option value="bajo electrico">BAJO ELECTRICO</ion-option>\n        <ion-option value="violin">VIOLIN</ion-option>\n        <ion-option value="saxofon">SAXOFON</ion-option>\n        <ion-option value="piano">PIANO</ion-option>\n        <ion-option value="bateria">BATERIA</ion-option>\n        <ion-option value="canto">CANTO</ion-option>\n        <ion-option value="dibujo y pintura">DIBUJO Y PINTURA</ion-option>\n\n      </ion-select>\n    </ion-item>\n\n  <ion-item>\n    <button ion-button block>Buscar</button>\n  </ion-item>\n</ion-list>\n</form>\n\n  </div>\n  <!--  FIN DE LAS BUSQUEDAS -->\n  <!-- BUSQUEDAS POR HORARIO -->\n  <ion-item>\n    <ion-label>Busqueda por Horario</ion-label>\n    <ion-toggle color="secondary" [(ngModel)]="searchHorario" checked="false"></ion-toggle>\n  </ion-item>\n\n\n  <div *ngIf="searchHorario">\n    <form (ngSubmit)="getbySchedule(schedule)" #schedule="ngForm">\n    <ion-list>\n    <ion-item>\n      <ion-label>Horario</ion-label>\n      <ion-select name="schedule"\n                  [(ngModel)]="schedule.schedule">\n        <ion-option value="l y m 4:00pm a 5:30pm">L Y M 4:00PM a 5:30PM</ion-option>\n        <ion-option value="l y m 5:30pm a 7:00pm">L Y M 5:30PM a 7:00PM</ion-option>\n        <ion-option value="l y m 7:00pm a 8:30pm">L Y M 7:00PM a 8:30PM</ion-option>\n        <ion-option value="l y m 8:30pm a 10:00pm">L Y M 8:30PM a 10:00PM</ion-option>\n        <ion-option value="m y j 4:00pm a 5:30pm">M Y J 4:00PM a 5:30PM</ion-option>\n        <ion-option value="m y j 5:30pm a 7:00pm">M Y J 5:30PM a 7:00PM</ion-option>\n        <ion-option value="m y j 7:00pm a 8:30pm">M Y J 7:00PM a 8:30PM</ion-option>\n        <ion-option value="m y j 8:30pm a 10:00pm">M Y J 8:30PM a 10:00PM</ion-option>\n        <ion-option value="viernes 5:00pm A 8:00pm">VIERNES 5:00PM A 8:00PM</ion-option>\n        <ion-option value="sabado 9:00am a 12:00pm">SABADO 9:00AM a 12:00PM</ion-option>\n        <ion-option value="sabado 1:00pm a 4:00pm">SABADO 1:00PM a 4:00PM</ion-option>\n        <ion-option value="sabado 4:00pm a 7:00pm">SABADO 4:00PM a 7:00PM</ion-option>\n      </ion-select>\n    </ion-item>\n\n  <ion-item>\n    <button ion-button block>Buscar</button>\n  </ion-item>\n</ion-list>\n</form>\n  </div>\n  <!--  FIN DE LAS BUSQUEDAS -->\n\n  <!-- para dar padding al contenido -->\n<h5 class="center">Registro & Control de Cursos</h5>\n<!--LISTA DE CURSOS -->\n<!-- BUSQUEDAS PARA NIÑOS -->\n<ion-item>\n  <ion-label> Niños </ion-label>\n  <ion-toggle color="secondary" [(ngModel)]="ninos" checked="false"></ion-toggle>\n</ion-item>\n<!-- BUSQUEDAS PARA ADOLESCENTES -->\n<ion-item>\n  <ion-label>Adolescentes</ion-label>\n  <ion-toggle color="secondary" [(ngModel)]="adolescentes" checked="false"></ion-toggle>\n</ion-item>\n<!-- BUSQUEDAS PARA ADULTOS -->\n<ion-item>\n  <ion-label>Adultos</ion-label>\n  <ion-toggle color="secondary" [(ngModel)]="adultos" checked="false"></ion-toggle>\n</ion-item>\n<!-- FIN DE LAS BUSQUEDAS-->\n<div *ngIf="ninos">\n<ion-list *ngFor="let item of listarCurso | async">\n  <!-- MUESTRA LA LISTA DE TODOS LOS NIÑOS -->\n  <div *ngIf="item.type == \'niños\';">\n    <ion-item-sliding>\n      <ion-item>\n        <h3> {{ item.spaces }} - {{ item.type | uppercase }} </h3>\n        <h3> {{ item.name | uppercase }} - {{ item.schedule | uppercase }} </h3>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="secondary" (click)="crud.recibirid(item.key)" type="button">\n          <ion-icon name="create"></ion-icon>\n          Editar\n        </button>\n        <button ion-button color="danger" (click)="crud.showConfirm(item.key)" type="button">\n          <ion-icon name="trash"></ion-icon>\n          Eliminar\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </div>\n</ion-list>\n</div>\n  <!-- FIN DE LAS LISTAS DE NIÑOS -->\n\n  <!-- MUESTRA LA LISTA DE TODOS LOS ADOLESCENTES -->\n  <div *ngIf="adolescentes">\n  <ion-list *ngFor="let item of listarCurso | async">\n    <div *ngIf="item.type == \'adolescentes\';">\n      <ion-item-sliding>\n        <ion-item>\n          <h3> {{ item.spaces }} - {{ item.type | uppercase }} </h3>\n          <h3> {{ item.name | uppercase }} - {{ item.schedule | uppercase }} </h3>\n\n        </ion-item>\n\n        <ion-item-options side="right">\n          <button ion-button color="secondary" (click)="crud.recibirid(item.key)" type="button">\n            <ion-icon name="create"></ion-icon>\n            Editar\n          </button>\n          <button ion-button color="danger" (click)="crud.showConfirm(item.key)" type="button">\n            <ion-icon name="trash"></ion-icon>\n            Eliminar\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </div>\n  </ion-list>\n  </div>\n  <!-- FIN DE LAS LISTAS DE ADOLESCENTES -->\n\n  <!-- MUESTRA LA LISTA DE TODOS LOS ADULTOS -->\n  <div *ngIf="adultos">\n  <ion-list *ngFor="let item of listarCurso | async">\n    <div *ngIf="item.type == \'adultos\';">\n      <ion-item-sliding>\n        <ion-item>\n          <h3> {{ item.spaces }} - {{ item.type | uppercase }} </h3>\n          <h3> {{ item.name | uppercase }} - {{ item.schedule | uppercase }} </h3>\n\n        </ion-item>\n\n        <ion-item-options side="right">\n          <button ion-button color="secondary" (click)="OpenEditCursoForm(item.key)" type="button">\n            <ion-icon name="create"></ion-icon>\n            Editar\n          </button>\n          <button ion-button color="danger" (click)="crud.showConfirm(item.key)" type="button">\n            <ion-icon name="trash"></ion-icon>\n            Eliminar\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </div>\n  </ion-list>\n  </div>\n  <!-- FIN DE LAS LISTAS DE ADULTOS -->\n\n</ion-content>\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\CRM\cursos\cursos.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__crud_service__["a" /* CrudService */]])
    ], CursosComponent);
    return CursosComponent;
}());

//# sourceMappingURL=cursos.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud_service__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//NECESARIO PARA RECIBIR PARAMETROS PROR URL

//NECESARIO PARA EL CRUD DE ANGULARFIRE

//SERVICIO DEL CRUD

var TemplateComponent = (function () {
    function TemplateComponent(db, crud, viewCtrl) {
        this.db = db;
        this.crud = crud;
        this.viewCtrl = viewCtrl;
        this.id = "nuevo"; //variable que guarda el id si es editar o es nuevo
        //HACE EL INSERT O EL UPDATE DEPENDIENDO SI ES NUEVO O YA EXISTE
        this.curso = db.list('courses').valueChanges();
        //ASIGNA EL ID
        this.id = this.crud.currentId;
        //OBTIENE EL REGISTRO POR ID
        this.listarCurso = this.crud.getbyId();
    }
    TemplateComponent.prototype.ngOnInit = function () { };
    TemplateComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TemplateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-template',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\CRM\cursos\template.component.html"*/'ame<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n    Crear Nuevo Curso\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<!-- FORMULARIO PARA CREAR-->\n\n<div *ngIf="id == \'nuevo\';">\n\n  <h5 class="center">INGRESE LOS DATOS DEL CURSO:</h5>\n\n  <hr>\n\n<form (ngSubmit)="crud.guardar(forma)" #forma="ngForm">\n\n<ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label>Nombre del Curso</ion-label>\n\n    <ion-select name="name"\n\n                [(ngModel)]="curso.name">\n\n      <ion-option value="guitarra">GUITARRA</ion-option>\n\n      <ion-option value="ukulele">UKULELE</ion-option>\n\n      <ion-option value="bajo electrico">BAJO ELECTRICO</ion-option>\n\n      <ion-option value="violin">VIOLIN</ion-option>\n\n      <ion-option value="saxofon">SAXOFON</ion-option>\n\n      <ion-option value="piano">PIANO</ion-option>\n\n      <ion-option value="bateria">BATERIA</ion-option>\n\n      <ion-option value="canto">CANTO</ion-option>\n\n      <ion-option value="dibujo y pintura">DIBUJO Y PINTURA</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <input placeholder="Cupos Disponibles" type="text" name="spaces" [(ngModel)]="curso.spaces">\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Tipo</ion-label>\n\n    <ion-select name="type"\n\n                [(ngModel)]="curso.type">>\n\n      <ion-option value="adultos">ADULTOS</ion-option>\n\n      <ion-option value="adolescentes">ADOLESCENTES</ion-option>\n\n      <ion-option value="niños">NIÑOS</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Horario</ion-label>\n\n    <ion-select name="schedule"\n\n                [(ngModel)]="curso.schedule">>\n\n      <ion-option value="l y m 4:00pm a 5:30pm">L Y M 4:00PM a 5:30PM</ion-option>\n\n      <ion-option value="l y m 5:30pm a 7:00pm">L Y M 5:30PM a 7:00PM</ion-option>\n\n      <ion-option value="l y m 7:00pm a 8:30pm">L Y M 7:00PM a 8:30PM</ion-option>\n\n      <ion-option value="l y m 8:30pm a 10:00pm">L Y M 8:30PM a 10:00PM</ion-option>\n\n      <ion-option value="m y j 4:00pm a 5:30pm">M Y J 4:00PM a 5:30PM</ion-option>\n\n      <ion-option value="m y j 5:30pm a 7:00pm">M Y J 5:30PM a 7:00PM</ion-option>\n\n      <ion-option value="m y j 7:00pm a 8:30pm">M Y J 7:00PM a 8:30PM</ion-option>\n\n      <ion-option value="m y j 8:30pm a 10:00pm">M Y J 8:30PM a 10:00PM</ion-option>\n\n      <ion-option value="viernes 5:00pm A 8:00pm">VIERNES 5:00PM A 8:00PM</ion-option>\n\n      <ion-option value="sabado 9:00am a 12:00pm">SABADO 9:00AM a 12:00PM</ion-option>\n\n      <ion-option value="sabado 1:00pm a 4:00pm">SABADO 1:00PM a 4:00PM</ion-option>\n\n      <ion-option value="sabado 4:00pm a 7:00pm">SABADO 4:00PM a 7:00PM</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n    <button type="submit" ion-button block> Crear Curso </button>\n\n\n\n</ion-list>\n\n</form>\n\n</div>\n\n<!-- FIN DEL FORMULARIO PARA CREAR -->\n\n\n\n\n\n<!-- FORMULARIO PARA EDITAR-->\n\n<div *ngIf="id != \'nuevo\';">\n\n  <h5 class="center">ACTUALIZAR LOS DATOS DEL CURSO:</h5>\n\n  <hr>\n\n  <div *ngFor="let item of listarCurso | async">\n\n<form (ngSubmit)="crud.guardar(forma)" #forma="ngForm">\n\n<ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label>Nombre del Curso</ion-label>\n\n    <ion-select name="name"\n\n                [(ngModel)]="item.name">\n\n      <ion-option value="guitarra">GUITARRA</ion-option>\n\n      <ion-option value="ukulele">UKULELE</ion-option>\n\n      <ion-option value="bajo electrico">BAJO ELECTRICO</ion-option>\n\n      <ion-option value="violin">VIOLIN</ion-option>\n\n      <ion-option value="saxofon">SAXOFON</ion-option>\n\n      <ion-option value="piano">PIANO</ion-option>\n\n      <ion-option value="bateria">BATERIA</ion-option>\n\n      <ion-option value="canto">CANTO</ion-option>\n\n      <ion-option value="dibujo y pintura">DIBUJO Y PINTURA</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <input placeholder="Cupos Disponibles" type="text" name="spaces" [(ngModel)]="item.spaces">\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Tipo</ion-label>\n\n    <ion-select name="type"\n\n                [(ngModel)]="item.type">\n\n      <ion-option value="adultos">ADULTOS</ion-option>\n\n      <ion-option value="adolescentes">ADOLESCENTES</ion-option>\n\n      <ion-option vapme="niños">NIÑOS</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Horario</ion-label>\n\n    <ion-select name="schedule"\n\n                [(ngModel)]="item.schedule">>\n\n      <ion-option value="l y m 4:00pm a 5:30pm">L Y M 4:00PM a 5:30PM</ion-option>\n\n      <ion-option value="l y m 5:30pm a 7:00pm">L Y M 5:30PM a 7:00PM</ion-option>\n\n      <ion-option value="l y m 7:00pm a 8:30pm">L Y M 7:00PM a 8:30PM</ion-option>\n\n      <ion-option value="l y m 8:30pm a 10:00pm">L Y M 8:30PM a 10:00PM</ion-option>\n\n      <ion-option value="m y j 4:00pm a 5:30pm">M Y J 4:00PM a 5:30PM</ion-option>\n\n      <ion-option value="m y j 5:30pm a 7:00pm">M Y J 5:30PM a 7:00PM</ion-option>\n\n      <ion-option value="m y j 7:00pm a 8:30pm">M Y J 7:00PM a 8:30PM</ion-option>\n\n      <ion-option value="m y j 8:30pm a 10:00pm">M Y J 8:30PM a 10:00PM</ion-option>\n\n      <ion-option value="viernes 5:00pm A 8:00pm">VIERNES 5:00PM A 8:00PM</ion-option>\n\n      <ion-option value="sabado 9:00am a 12:00pm">SABADO 9:00AM a 12:00PM</ion-option>\n\n      <ion-option value="sabado 1:00pm a 4:00pm">SABADO 1:00PM a 4:00PM</ion-option>\n\n      <ion-option value="sabado 4:00pm a 7:00pm">SABADO 4:00PM a 7:00PM</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n    <button type="submit" ion-button block> Actualizar Curso </button>\n\n\n\n</ion-list>\n\n</form>\n\n</div>\n\n</div>\n\n<!--  FIN DEL FORMULARIO PARA EDITAR>-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\CRM\cursos\template.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__crud_service__["a" /* CrudService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], TemplateComponent);
    return TemplateComponent;
}());

//# sourceMappingURL=template.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssitanceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssitanceService = (function () {
    function AssitanceService(http) {
        this.http = http;
    }
    /**
     * Opciones:
     * 1 = listar
     * 2 = insertar
     * 3 = modificar
     * 4 = eliminar
    */
    AssitanceService.prototype.retrieve = function (sql, option) {
        return this.http.get('http://centrodeformacionmusical.mx/www/config/Functions.php?sql=' + sql + '&opcion=' + option);
    };
    AssitanceService.prototype.retrieveSpecific = function (sql) {
    };
    AssitanceService.prototype.save = function () {
    };
    AssitanceService.prototype.edit = function () {
    };
    AssitanceService.prototype.delete = function () {
    };
    AssitanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AssitanceService);
    return AssitanceService;
}());

//# sourceMappingURL=assistance.service.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listComponent_list_assitance_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsistenceComponent = (function () {
    function AsistenceComponent(viewCtl, navCtl) {
        this.viewCtl = viewCtl;
        this.navCtl = navCtl;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__listComponent_list_assitance_component__["a" /* ListAssitanceComponent */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_1__listComponent_list_assitance_component__["a" /* ListAssitanceComponent */];
    }
    AsistenceComponent.prototype.ngOnInit = function () { };
    AsistenceComponent.prototype.dismiss = function () {
        this.navCtl.pop();
        this.viewCtl.dismiss();
    };
    AsistenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'assistence',
            template: "\n    <ion-tabs >\n    <ion-tab tabIcon=\"person\" tabTitle=\"Perfil\"  [root]=\"tab1\"></ion-tab>\n    <ion-tab  tabIcon=\"notifications-outline\"  [root]=\"tab2\"></ion-tab>\n  </ion-tabs>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]])
    ], AsistenceComponent);
    return AsistenceComponent;
}());

//# sourceMappingURL=assistence.component.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAssitanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_assistance_service__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estudiantes_student_services__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListAssitanceComponent = (function () {
    function ListAssitanceComponent(viewCtl, assisSvc, stdSrv) {
        this.viewCtl = viewCtl;
        this.assisSvc = assisSvc;
        this.stdSrv = stdSrv;
    }
    ListAssitanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sql = "SELECT * FROM horario ORDER BY `horario`.`id_horario` ASC";
        this.assisSvc.retrieve(sql, 1)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.horario = data;
        });
        this.students = this.stdSrv.getStudents();
        this.cursos = this.stdSrv.getCourses();
    };
    ListAssitanceComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    ListAssitanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ListAssitance',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\CRM\asistencia\components\listComponent\list-assitance.component.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            Asistencia\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>Estudiante</ion-label>\n\n                <ion-select [(ngModel)]="id">\n\n                    \n\n                        <ion-option *ngFor="let item of students | async;" value="{{item.uid}}">{{item.name + " " + item.lastName}}</ion-option>\n\n                </ion-select>\n\n        </ion-item>\n\n           <ion-item>\n\n                <ion-label>Horario</ion-label>\n\n                <ion-select [(ngModel)]="horarios">\n\n                        <ion-option *ngFor="let item of horario" value="{{item.id_horario}}">{{item.nombre + " " + item.horas}} </ion-option>\n\n                </ion-select>\n\n           </ion-item>\n\n           <ion-item>\n\n                <ion-label>Cursos</ion-label>\n\n                <ion-select [(ngModel)]="curso">\n\n                        <ion-option *ngFor="let item of cursos | async " value="{{item.id}}">{{item.name |  uppercase}} </ion-option>\n\n                </ion-select>\n\n           </ion-item>\n\n           <ion-item>\n\n               <input type="date">\n\n           </ion-item>\n\n\n\n            \n\n    </ion-list>\n\n        \n\n\n\n</ion-content>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\CRM\asistencia\components\listComponent\list-assitance.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_assistance_service__["a" /* AssitanceService */],
            __WEBPACK_IMPORTED_MODULE_3__estudiantes_student_services__["a" /* StudentCRMService */]])
    ], ListAssitanceComponent);
    return ListAssitanceComponent;
}());

//# sourceMappingURL=list-assitance.component.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activities_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActivitiesComponent = (function () {
    function ActivitiesComponent(navCtrl, actSrv, usrSrv, toastCrtl) {
        this.navCtrl = navCtrl;
        this.actSrv = actSrv;
        this.usrSrv = usrSrv;
        this.toastCrtl = toastCrtl;
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        this.currentHour = __WEBPACK_IMPORTED_MODULE_5_moment__().format('LT');
        this.activities = this.actSrv.retrieveActivities(this.currentHour);
    };
    ActivitiesComponent.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ActivitiesComponent.prototype.modal = function (uid, num) {
        var _this = this;
        console.log('myBtn' + num);
        var btns = document.getElementById('myBtn' + num);
        //let btns = document.getElementById("myBtn");
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        btns.addEventListener("click", function (e) { return _this.openModal(modal); });
        //span.addEventListener("click",(e:Event) => this.closeModal(modal));
        this.user = this.usrSrv.listUserByUID(uid);
        console.log(uid);
    };
    ActivitiesComponent.prototype.openModal = function (modal) {
        modal.style.display = "block";
    };
    ActivitiesComponent.prototype.closeModal = function (num) {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    };
    ActivitiesComponent.prototype.createToast = function () {
        var toast = this.toastCrtl.create({
            message: 'Por seguridad, los nombres de los usuarios serán encriptados y solo se podrán visualizar al darle click a su liga encriptada.',
            duration: 3000
        });
        toast.present();
    };
    ActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'activities-component',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\activitiesRecorder\components\activities.component.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Actividades diarias\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n      \n\n        <button ion-button icon-start color="light" (click)="goBack()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n<hr>\n\n\n\n<div>\n\n    <button type="button" (click)=" createToast()" ion-button > Información </button>\n\n</div>\n\n\n\n\n\n<div text-wrap class="cardsocial" *ngFor="let item of activities | async;index as i;" [attr.data-index]="i">\n\n  \n\n\n\n  \n\n        <p>\n\n          Actividades\n\n        </p>\n\n        <div>\n\n          El usuario <ion-badge  color="orange" id="myBtn{{i}}" (click)="modal(item.user,i)">{{item.user}}</ion-badge> con el correo <ion-badge color="secondary">{{item.email}}</ion-badge> ha <ion-badge color="secondary">{{item.activity}}</ion-badge>.\n\n           <div>\n\n                    <ion-icon name="calendar" item-start></ion-icon>\n\n                    Fecha\n\n                    <ion-badge item-end>{{item.date}}</ion-badge>\n\n                    <ion-icon  name="time" item-end></ion-icon>\n\n                      Hora\n\n                      <ion-badge color="danger" item-end>{{item.hour}}</ion-badge>\n\n                  </div>\n\n        </div>\n\n</div>\n\n\n\n      <!-- The Modal -->\n\n      <div id="myModal"  class="modal">\n\n      \n\n        <!-- Modal content -->\n\n        <div class="modal-content">\n\n          <span (click)="closeModal()" class="close">&times;</span>\n\n          <ion-item *ngFor="let item of user | async;index as i;" [attr.data-index]="i">\n\n                <ion-avatar item-start>\n\n                    <img src="{{item.imageURL}}" alt="">\n\n                </ion-avatar>\n\n                <p>{{item.name + " " +item.lastName + " " +item.lastName2}}</p>\n\n                <p>Nivel: {{item.accessLevel}}</p>\n\n          </ion-item>\n\n        </div>\n\n      </div>\n\n  </ion-content>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\activitiesRecorder\components\activities.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_activities_service__["a" /* ActivitiesService */],
            __WEBPACK_IMPORTED_MODULE_3__Users_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());

//# sourceMappingURL=activities.component.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(504);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_components_navbar_navbar__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_components_dashboard_dashboard__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_components_options_options__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_components_news_news_list_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_components_news_news_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_components_pageHandler_pageHandler_component__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_userprofile_profile__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_components_uploads_shared_upload_list_upload_list_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_components_uploads_shared_upload_form_upload_form_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_components_uploads_shared_upload_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_components_news_news_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_components_sort_reverse__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_components_modal_modal__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_components_news_news_list_service__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_announcements_announcements__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_announcements_announcement_crud__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_aboutus_aboutus__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_courses_courses__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcements_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_propects_prospect_button__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_propects_prospect_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_propects_prospect_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_propects_prospect_crud_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_Users_user_button__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_Users_user_crud_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_Users_user_modal_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_Users_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_students_students_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_students_students_services__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_students_qualification_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_students_classes_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_students_CourseDetail_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_teachers_groupAdmin_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_teachers_teachers_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_teachers_groupsDetails_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_teachers_groupForm_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_teachers_lessonForm_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_teachers_teachers_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_teachers_members_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_CRM_estudiantes_student_button__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_CRM_estudiantes_student_services__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_CRM_estudiantes_student_crud__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_CRM_estudiantes_studentCRM_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_userprofile_tutorRequest__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_directory_directory_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_aboutus_modals_mision_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_aboutus_modals_historia_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_aboutus_modals_reglamento_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_aboutus_modals_profesoresmodal_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_aboutus_modals_manual_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_CRM_cursos_crud_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_CRM_cursos_cursos_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_CRM_cursos_cursosbutton__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_CRM_cursos_template_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_invitation_invitation_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__ionic_native_fcm__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ionic_native_push__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__ionic_native_local_notifications__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__push_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ionic_native_onesignal__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_userprofile_profileTabs_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_tutor_tutor_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_invitation_invitation_service__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pages_CRM_asistencia_services_assistance_service__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_CRM_asistencia_components_frontview_assistence_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_CRM_asistencia_components_buttonview_button_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_CRM_asistencia_components_listComponent_list_assitance_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_activitiesRecorder_components_activities_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__pages_activitiesRecorder_components_activities_button__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__pages_activitiesRecorder_services_activities_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























































































var firebaseConfig = {
    apiKey: "AIzaSyDObZjIkysrMu1aT2AMFfaYaQD8E1hn12k",
    authDomain: "pcfm-5eeb9.firebaseapp.com",
    databaseURL: "https://pcfm-5eeb9.firebaseio.com",
    projectId: "pcfm-5eeb9",
    storageBucket: "pcfm-5eeb9.appspot.com",
    messagingSenderId: "205598390265"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_components_navbar_navbar__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_components_news_news_list_component__["a" /* NewsListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_components_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_components_news_news_component__["b" /* NewsFormPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["b" /* ModalRegister */],
                __WEBPACK_IMPORTED_MODULE_18__pages_components_pageHandler_pageHandler_component__["a" /* PageHandlerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_userprofile_profile__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_components_dashboard_dashboard__["a" /* dashboardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_components_options_options__["a" /* optionsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_components_uploads_shared_upload_list_upload_list_component__["a" /* UploadListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_components_uploads_shared_upload_form_upload_form_component__["a" /* UploadFormComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_components_sort_reverse__["a" /* ReversePipe */],
                __WEBPACK_IMPORTED_MODULE_25__pages_components_modal_modal__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_components_news_news_list_component__["b" /* UpdateNewsModal */],
                __WEBPACK_IMPORTED_MODULE_27__pages_announcements_announcements__["a" /* AnnouncementComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_announcements_announcement_crud__["b" /* AnnouncementCrudComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_aboutus_aboutus__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_courses_courses__["a" /* CoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_announcements_announcement_crud__["a" /* AnnouncementButton */],
                __WEBPACK_IMPORTED_MODULE_28__pages_announcements_announcement_crud__["c" /* AnnouncementModalCRUD */],
                __WEBPACK_IMPORTED_MODULE_33__pages_propects_prospect_button__["a" /* ProspectButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_propects_prospect_component__["a" /* ProspectModalComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_propects_prospect_crud_component__["a" /* ProspectCrudComponent */],
                __WEBPACK_IMPORTED_MODULE_58__pages_directory_directory_component__["a" /* DirectoryComponent */],
                __WEBPACK_IMPORTED_MODULE_59__pages_aboutus_modals_mision_component__["a" /* MisionComponent */],
                __WEBPACK_IMPORTED_MODULE_60__pages_aboutus_modals_historia_component__["a" /* HistoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_61__pages_aboutus_modals_reglamento_component__["a" /* ReglamentoComponent */],
                __WEBPACK_IMPORTED_MODULE_62__pages_aboutus_modals_profesoresmodal_component__["a" /* ProfesoresComponent */],
                __WEBPACK_IMPORTED_MODULE_63__pages_aboutus_modals_manual_component__["a" /* ManualComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_Users_user_button__["a" /* UserButton */],
                __WEBPACK_IMPORTED_MODULE_38__pages_Users_user_crud_component__["a" /* UserCrud */],
                __WEBPACK_IMPORTED_MODULE_39__pages_Users_user_modal_component__["a" /* UserModal */],
                __WEBPACK_IMPORTED_MODULE_41__pages_students_students_component__["a" /* StudentsComponent */],
                __WEBPACK_IMPORTED_MODULE_43__pages_students_qualification_component__["a" /* QualificationComponent */],
                __WEBPACK_IMPORTED_MODULE_44__pages_students_classes_component__["a" /* ClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_45__pages_students_CourseDetail_component__["a" /* CourseDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_46__pages_teachers_groupAdmin_component__["a" /* GroupAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_47__pages_teachers_teachers_component__["a" /* TeachersComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_teachers_groupsDetails_component__["a" /* GroupDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_49__pages_teachers_groupForm_component__["a" /* GroupFormComponent */],
                __WEBPACK_IMPORTED_MODULE_50__pages_teachers_lessonForm_component__["a" /* LessonFormComponent */],
                __WEBPACK_IMPORTED_MODULE_52__pages_teachers_members_component__["a" /* MemberComponent */],
                __WEBPACK_IMPORTED_MODULE_65__pages_CRM_cursos_cursos_component__["a" /* CursosComponent */],
                __WEBPACK_IMPORTED_MODULE_66__pages_CRM_cursos_cursosbutton__["a" /* CursosButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_67__pages_CRM_cursos_template_component__["a" /* TemplateComponent */],
                __WEBPACK_IMPORTED_MODULE_53__pages_CRM_estudiantes_student_button__["a" /* StudentButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_55__pages_CRM_estudiantes_student_crud__["a" /* StudentCrudComponent */],
                __WEBPACK_IMPORTED_MODULE_56__pages_CRM_estudiantes_studentCRM_component__["a" /* StudentCRMComponent */],
                __WEBPACK_IMPORTED_MODULE_68__pages_invitation_invitation_component__["a" /* InvitationComponent */],
                __WEBPACK_IMPORTED_MODULE_57__pages_userprofile_tutorRequest__["a" /* TutorRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_77__pages_userprofile_profileTabs_component__["a" /* ProfileTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_78__pages_tutor_tutor_component__["a" /* TutorComponent */],
                __WEBPACK_IMPORTED_MODULE_81__pages_CRM_asistencia_components_frontview_assistence_component__["a" /* AsistenceComponent */],
                __WEBPACK_IMPORTED_MODULE_82__pages_CRM_asistencia_components_buttonview_button_component__["a" /* ButtonAssitenceComponent */],
                __WEBPACK_IMPORTED_MODULE_83__pages_CRM_asistencia_components_listComponent_list_assitance_component__["a" /* ListAssitanceComponent */],
                __WEBPACK_IMPORTED_MODULE_84__pages_activitiesRecorder_components_activities_component__["a" /* ActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_85__pages_activitiesRecorder_components_activities_button__["a" /* ActivitiesButtonComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_69_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_70_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_71_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_components_navbar_navbar__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_components_news_news_list_component__["a" /* NewsListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_components_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_components_news_news_component__["b" /* NewsFormPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["b" /* ModalRegister */],
                __WEBPACK_IMPORTED_MODULE_18__pages_components_pageHandler_pageHandler_component__["a" /* PageHandlerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_userprofile_profile__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_components_dashboard_dashboard__["a" /* dashboardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_components_options_options__["a" /* optionsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_components_uploads_shared_upload_list_upload_list_component__["a" /* UploadListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_components_uploads_shared_upload_form_upload_form_component__["a" /* UploadFormComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_components_modal_modal__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_components_news_news_list_component__["b" /* UpdateNewsModal */],
                __WEBPACK_IMPORTED_MODULE_27__pages_announcements_announcements__["a" /* AnnouncementComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_announcements_announcement_crud__["b" /* AnnouncementCrudComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_courses_courses__["a" /* CoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_aboutus_aboutus__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_announcements_announcement_crud__["a" /* AnnouncementButton */],
                __WEBPACK_IMPORTED_MODULE_28__pages_announcements_announcement_crud__["c" /* AnnouncementModalCRUD */],
                __WEBPACK_IMPORTED_MODULE_33__pages_propects_prospect_button__["a" /* ProspectButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_propects_prospect_component__["a" /* ProspectModalComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_propects_prospect_crud_component__["a" /* ProspectCrudComponent */],
                __WEBPACK_IMPORTED_MODULE_58__pages_directory_directory_component__["a" /* DirectoryComponent */],
                __WEBPACK_IMPORTED_MODULE_59__pages_aboutus_modals_mision_component__["a" /* MisionComponent */],
                __WEBPACK_IMPORTED_MODULE_60__pages_aboutus_modals_historia_component__["a" /* HistoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_61__pages_aboutus_modals_reglamento_component__["a" /* ReglamentoComponent */],
                __WEBPACK_IMPORTED_MODULE_62__pages_aboutus_modals_profesoresmodal_component__["a" /* ProfesoresComponent */],
                __WEBPACK_IMPORTED_MODULE_63__pages_aboutus_modals_manual_component__["a" /* ManualComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_Users_user_button__["a" /* UserButton */],
                __WEBPACK_IMPORTED_MODULE_38__pages_Users_user_crud_component__["a" /* UserCrud */],
                __WEBPACK_IMPORTED_MODULE_39__pages_Users_user_modal_component__["a" /* UserModal */],
                __WEBPACK_IMPORTED_MODULE_41__pages_students_students_component__["a" /* StudentsComponent */],
                __WEBPACK_IMPORTED_MODULE_43__pages_students_qualification_component__["a" /* QualificationComponent */],
                __WEBPACK_IMPORTED_MODULE_44__pages_students_classes_component__["a" /* ClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_45__pages_students_CourseDetail_component__["a" /* CourseDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_46__pages_teachers_groupAdmin_component__["a" /* GroupAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_47__pages_teachers_teachers_component__["a" /* TeachersComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_teachers_groupsDetails_component__["a" /* GroupDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_49__pages_teachers_groupForm_component__["a" /* GroupFormComponent */],
                __WEBPACK_IMPORTED_MODULE_50__pages_teachers_lessonForm_component__["a" /* LessonFormComponent */],
                __WEBPACK_IMPORTED_MODULE_52__pages_teachers_members_component__["a" /* MemberComponent */],
                __WEBPACK_IMPORTED_MODULE_65__pages_CRM_cursos_cursos_component__["a" /* CursosComponent */],
                __WEBPACK_IMPORTED_MODULE_66__pages_CRM_cursos_cursosbutton__["a" /* CursosButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_67__pages_CRM_cursos_template_component__["a" /* TemplateComponent */],
                __WEBPACK_IMPORTED_MODULE_53__pages_CRM_estudiantes_student_button__["a" /* StudentButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_55__pages_CRM_estudiantes_student_crud__["a" /* StudentCrudComponent */],
                __WEBPACK_IMPORTED_MODULE_56__pages_CRM_estudiantes_studentCRM_component__["a" /* StudentCRMComponent */],
                __WEBPACK_IMPORTED_MODULE_68__pages_invitation_invitation_component__["a" /* InvitationComponent */],
                __WEBPACK_IMPORTED_MODULE_57__pages_userprofile_tutorRequest__["a" /* TutorRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_77__pages_userprofile_profileTabs_component__["a" /* ProfileTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_78__pages_tutor_tutor_component__["a" /* TutorComponent */],
                __WEBPACK_IMPORTED_MODULE_81__pages_CRM_asistencia_components_frontview_assistence_component__["a" /* AsistenceComponent */],
                __WEBPACK_IMPORTED_MODULE_82__pages_CRM_asistencia_components_buttonview_button_component__["a" /* ButtonAssitenceComponent */],
                __WEBPACK_IMPORTED_MODULE_83__pages_CRM_asistencia_components_listComponent_list_assitance_component__["a" /* ListAssitanceComponent */],
                __WEBPACK_IMPORTED_MODULE_84__pages_activitiesRecorder_components_activities_component__["a" /* ActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_85__pages_activitiesRecorder_components_activities_button__["a" /* ActivitiesButtonComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_31__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_70_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcements_service__["a" /* AnnouncementService */],
                __WEBPACK_IMPORTED_MODULE_22__pages_components_uploads_shared_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_23__pages_components_news_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_26__pages_components_news_news_list_service__["a" /* NewsListService */],
                __WEBPACK_IMPORTED_MODULE_72__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_73__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_75__push_service__["a" /* PushService */],
                __WEBPACK_IMPORTED_MODULE_74__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_76__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_35__pages_propects_prospect_service__["a" /* ProspectService */],
                __WEBPACK_IMPORTED_MODULE_40__pages_Users_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_42__pages_students_students_services__["a" /* StudentService */],
                __WEBPACK_IMPORTED_MODULE_51__pages_teachers_teachers_services__["a" /* TeacherService */],
                __WEBPACK_IMPORTED_MODULE_64__pages_CRM_cursos_crud_service__["a" /* CrudService */],
                __WEBPACK_IMPORTED_MODULE_54__pages_CRM_estudiantes_student_services__["a" /* StudentCRMService */],
                __WEBPACK_IMPORTED_MODULE_79__pages_invitation_invitation_service__["a" /* InvitationService */],
                __WEBPACK_IMPORTED_MODULE_80__pages_CRM_asistencia_services_assistance_service__["a" /* AssitanceService */],
                __WEBPACK_IMPORTED_MODULE_86__pages_activitiesRecorder_services_activities_service__["a" /* ActivitiesService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activitiesRecorder_services_activities_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeacherService = (function () {
    function TeacherService(db, afauth, alertCtl, actSrv) {
        this.db = db;
        this.afauth = afauth;
        this.alertCtl = alertCtl;
        this.actSrv = actSrv;
        this.currentTeacherName = afauth.auth.currentUser.uid;
        this.currentTeacherEmail = afauth.auth.currentUser.email;
        this.moment = __WEBPACK_IMPORTED_MODULE_3_moment__();
    }
    TeacherService.prototype.refGroupList = function () {
        return this.db.list('groups');
    };
    TeacherService.prototype.refGroupObj = function (key) {
        return this.db.object('groups/' + key);
    };
    TeacherService.prototype.listStudets = function () {
        return this.db.list('users', function (val) { return val.orderByChild("isStudent").equalTo(true).limitToFirst(30); }).valueChanges();
    };
    TeacherService.prototype.searchStudents = function (name) {
        this.actSrv.recordActivity(this.afauth.auth.currentUser.uid, this.afauth.auth.currentUser.email, "Buscado un alumno por el nombre: " + name, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        return this.db.list('students', function (val) { return val
            .orderByChild('name')
            .startAt(name); })
            .valueChanges();
    };
    TeacherService.prototype.addMember = function (groupkey, studentuid, uid) {
        this.actSrv.recordActivity(this.afauth.auth.currentUser.uid, this.afauth.auth.currentUser.email, "Agregado al alumno: " + studentuid + " en el grupo : " + groupkey, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        this.db.list("groups/" + groupkey).update("members", (_a = {},
            _a[studentuid] = true,
            _a));
        this.db.list("users/" + uid).update("/groups", (_b = {},
            _b[groupkey] = true,
            _b));
        var _a, _b;
    };
    TeacherService.prototype.deleteMember = function (groupkey, uid) {
        var _this = this;
        var confirm = this.alertCtl.create({
            title: 'Borrar integrante',
            message: '¿En realidad quieres borrar este integrante?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.db.list("groups/" + groupkey + "/members/").remove(uid);
                        _this.db.list("users/" + uid + "/groups/").remove(groupkey);
                        _this.actSrv.recordActivity(_this.afauth.auth.currentUser.uid, _this.afauth.auth.currentUser.email, "eliminado al: " + uid + " del grupo " + groupkey, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
                    }
                }
            ]
        });
        confirm.present();
    };
    TeacherService.prototype.saveGroup = function (name, course, memberuid) {
        var _this = this;
        this.refGroupList().push({
            name: name,
            teacher: this.currentTeacherName,
            course: course,
            date: this.moment.format("D, MMMM YYYY")
        }).then(function (val) {
            var object = _this.refGroupObj(val.key);
            object.update({
                groupkey: val.key
            });
            _this.addMembersToGroup(val.key, memberuid);
            var alert = _this.alertCtl.create({
                title: '¡Nuevo grupo!',
                subTitle: '¡Haz creado un grupo enhorabuena!',
                buttons: ['OK']
            });
            alert.present();
            _this.actSrv.recordActivity(_this.afauth.auth.currentUser.uid, _this.afauth.auth.currentUser.email, "Creado un grupo con el nombre: " + name + " del curso: " + course, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        });
    };
    TeacherService.prototype.deleteGroup = function (key) {
        var _this = this;
        var confirm = this.alertCtl.create({
            title: 'Borrar grupo',
            message: '¿En realidad quieres borrar este grupo?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.refGroupObj(key).remove();
                        _this.actSrv.recordActivity(_this.afauth.auth.currentUser.uid, _this.afauth.auth.currentUser.email, "Eliminado el grupo: " + key, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
                    }
                }
            ]
        });
        confirm.present();
    };
    TeacherService.prototype.addMembersToGroup = function (key, memberuid) {
        for (var index = 0; index < memberuid.length; index++) {
            var uidElement = memberuid[index];
            this.db.list("groups/" + key).update("members", (_a = {},
                _a[uidElement] = true,
                _a));
            this.db.list("users/" + [uidElement]).update("groups", (_b = {},
                _b[key] = true,
                _b));
            this.actSrv.recordActivity(this.afauth.auth.currentUser.uid, this.afauth.auth.currentUser.email, "agregado a: " + uidElement + "al grupo: " + key, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        }
        var _a, _b;
    };
    TeacherService.prototype.retrieveGroupData = function (key) {
        return this.db.list("groups", function (val) { return val.orderByChild("teacher").equalTo(key); }).valueChanges();
    };
    TeacherService.prototype.retriveGroupMembers = function (key, name) {
        return this.db.list("users", function (val) { return val.orderByChild("groups/" + key).equalTo(true); }).valueChanges();
    };
    TeacherService.prototype.retrieveLesson = function (groupkey) {
        return this.db.list("lessons/" + groupkey).valueChanges();
    };
    TeacherService.prototype.saveLesson = function (groupkey, name, textbody, url, date) {
        var _this = this;
        this.db.list("lessons/" + groupkey).push({
            name: name,
            createdAt: date,
            bodytext: textbody,
            url: url
        }).then(function (val) {
            _this.db.object("lessons/" + groupkey + "/" + val.key).update({
                key: val.key
            });
            var alert = _this.alertCtl.create({
                title: '¡Nuevo lección!',
                subTitle: '¡Haz creado una lección enhorabuena!',
                buttons: ['OK']
            });
            alert.present();
            _this.actSrv.recordActivity(_this.afauth.auth.currentUser.uid, _this.afauth.auth.currentUser.email, "creado la lección: " + name + " para el grupo: " + groupkey, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        });
    };
    TeacherService.prototype.deleteLesson = function (groupkey, lessonkey) {
        var _this = this;
        var confirm = this.alertCtl.create({
            title: 'Borrar lección',
            message: '¿En realidad quieres borrar esta lección?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.db.list("lessons/" + groupkey).remove(lessonkey);
                        _this.actSrv.recordActivity(_this.afauth.auth.currentUser.uid, _this.afauth.auth.currentUser.email, "eliminado la lección: " + lessonkey + " para el grupo: " + groupkey, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
                    }
                }
            ]
        });
        confirm.present();
    };
    TeacherService.prototype.editLesson = function (lessonkey, groupkey, name, textbody, url, date) {
        var _this = this;
        this.db.object("lessons/" + groupkey + "/" + lessonkey).update({
            name: name,
            createdAt: date,
            bodytext: textbody,
            url: url
        }).then(function (val) {
            var alert = _this.alertCtl.create({
                title: '¡Lección editada!',
                subTitle: '¡Haz editado una lección enhorabuena!',
                buttons: ['OK']
            });
            alert.present();
            _this.actSrv.recordActivity(_this.afauth.auth.currentUser.uid, _this.afauth.auth.currentUser.email, "editado la lección: " + lessonkey + " para el grupo: " + groupkey, __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        });
    };
    TeacherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__activitiesRecorder_services_activities_service__["a" /* ActivitiesService */]])
    ], TeacherService);
    return TeacherService;
}());

//# sourceMappingURL=teachers.services.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_components_dashboard_dashboard__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_userprofile_profile__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_announcements_announcements__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__push_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_aboutus_aboutus__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_courses_courses__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_directory_directory_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_invitation_invitation_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase_app__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_activitiesRecorder_services_activities_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { optionsPage } from '../pages/components/options/options';






//COMPONENTS -CARLOS








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, authServ, db, push, alertCtrl, pushServ, actSrv) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.authServ = authServ;
        this.db = db;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.pushServ = pushServ;
        this.actSrv = actSrv;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        __WEBPACK_IMPORTED_MODULE_17_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                this.date = __WEBPACK_IMPORTED_MODULE_20_moment__();
                console.log("Usuario:" + user.email);
                // User is signed in.
            }
            else {
                // No user is signed in.
            }
        });
        this.userpages = [
            { title: 'Últimas noticias', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'apps' },
            { title: 'Quienes somos', component: __WEBPACK_IMPORTED_MODULE_11__pages_aboutus_aboutus__["a" /* AboutUsComponent */], icon: 'contacts' },
            { title: 'Cursos', component: __WEBPACK_IMPORTED_MODULE_12__pages_courses_courses__["a" /* CoursesComponent */], icon: 'md-albums' },
            { title: 'Avisos', component: __WEBPACK_IMPORTED_MODULE_9__pages_announcements_announcements__["a" /* AnnouncementComponent */], icon: 'bulb' },
            { title: 'Directorio', component: __WEBPACK_IMPORTED_MODULE_13__pages_directory_directory_component__["a" /* DirectoryComponent */], icon: 'bookmarks' },
            { title: 'Acceder/Salir', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginComponent */], icon: 'log-in' }
        ];
        this.adminPages = [
            { title: 'Últimas noticias', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'apps' },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_8__pages_userprofile_profile__["a" /* ProfileComponent */], icon: 'person' },
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_7__pages_components_dashboard_dashboard__["a" /* dashboardPage */], icon: 'clipboard' },
            { title: 'Avisos', component: __WEBPACK_IMPORTED_MODULE_9__pages_announcements_announcements__["a" /* AnnouncementComponent */], icon: 'bulb' },
            { title: 'Quienes somos', component: __WEBPACK_IMPORTED_MODULE_11__pages_aboutus_aboutus__["a" /* AboutUsComponent */], icon: 'contacts' },
            { title: 'Cursos', component: __WEBPACK_IMPORTED_MODULE_12__pages_courses_courses__["a" /* CoursesComponent */], icon: 'md-albums' },
            { title: 'Directorio', component: __WEBPACK_IMPORTED_MODULE_13__pages_directory_directory_component__["a" /* DirectoryComponent */], icon: 'bookmarks' },
            { title: 'Invitación', component: __WEBPACK_IMPORTED_MODULE_14__pages_invitation_invitation_component__["a" /* InvitationComponent */], icon: 'mail' },
            { title: 'Acceder/Salir', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginComponent */], icon: 'log-in' }
        ];
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.pushsetup();
            var notificationOpenedCallback = function (jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            };
            window["plugins"].OneSignal
                .startInit('850f884b-f4e1-4ae0-a056-490643c0f762', '986806210217')
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.pushsetup = function () {
        var _this = this;
        var options = {
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
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            if (notification.additionalData.foreground) {
                var youralert = _this.alertCtrl.create({
                    title: 'New Push notification',
                    message: notification.message
                });
                youralert.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            //do whatever you want with the registration ID
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\cfm-mobileapp\src\app\app.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-menu  [content]="content">\n\n  <ion-header color="dark">\n\n    <ion-toolbar>\n\n      <ion-title>\n\n      </ion-title>\n\n      <!--<img class="logo" src="assets/imgs/CFM3.png" alt="">-->\n\n\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="dark">\n\n    <div class="menu">\n\n    <div *ngIf="afAuth.authState | async; let user; else showUserPages" >\n\n      <ion-list no-lines>\n\n          <ion-card color="dark" text-center class="hide-card">\n\n              <img src="assets/imgs/LOGO-CFM-BLANCO.png" class="custom-avatar"/>\n\n\n\n              <hr>\n\n              <div *ngIf="afAuth.authState | async; let user;">\n\n                  Hola {{ user.email }}!\n\n                </div>\n\n          </ion-card>\n\n        <button menuClose ion-item *ngFor="let p of adminPages" (click)="openPage(p)">\n\n          <ion-icon  name="{{p.icon}}"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <ng-template #showUserPages>\n\n      <ion-list>\n\n      <ion-card color="dark" text-center class="hide-card">\n\n          <img src="assets/imgs/LOGO-CFM-BLANCO.png" class="custom-avatar"/>\n\n          <hr>\n\n      </ion-card>\n\n        <button menuClose ion-item *ngFor="let p of userpages" (click)="openPage(p)">\n\n          <ion-icon  name="{{p.icon}}"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ng-template>\n\n\n\n      </div>\n\n  </ion-content>\n\n\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav   [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_18__app_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_19__pages_activitiesRecorder_services_activities_service__["a" /* ActivitiesService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 321,
	"./af.js": 321,
	"./ar": 322,
	"./ar-dz": 323,
	"./ar-dz.js": 323,
	"./ar-kw": 324,
	"./ar-kw.js": 324,
	"./ar-ly": 325,
	"./ar-ly.js": 325,
	"./ar-ma": 326,
	"./ar-ma.js": 326,
	"./ar-sa": 327,
	"./ar-sa.js": 327,
	"./ar-tn": 328,
	"./ar-tn.js": 328,
	"./ar.js": 322,
	"./az": 329,
	"./az.js": 329,
	"./be": 330,
	"./be.js": 330,
	"./bg": 331,
	"./bg.js": 331,
	"./bm": 332,
	"./bm.js": 332,
	"./bn": 333,
	"./bn.js": 333,
	"./bo": 334,
	"./bo.js": 334,
	"./br": 335,
	"./br.js": 335,
	"./bs": 336,
	"./bs.js": 336,
	"./ca": 337,
	"./ca.js": 337,
	"./cs": 338,
	"./cs.js": 338,
	"./cv": 339,
	"./cv.js": 339,
	"./cy": 340,
	"./cy.js": 340,
	"./da": 341,
	"./da.js": 341,
	"./de": 342,
	"./de-at": 343,
	"./de-at.js": 343,
	"./de-ch": 344,
	"./de-ch.js": 344,
	"./de.js": 342,
	"./dv": 345,
	"./dv.js": 345,
	"./el": 346,
	"./el.js": 346,
	"./en-au": 347,
	"./en-au.js": 347,
	"./en-ca": 348,
	"./en-ca.js": 348,
	"./en-gb": 349,
	"./en-gb.js": 349,
	"./en-ie": 350,
	"./en-ie.js": 350,
	"./en-nz": 351,
	"./en-nz.js": 351,
	"./eo": 352,
	"./eo.js": 352,
	"./es": 353,
	"./es-do": 354,
	"./es-do.js": 354,
	"./es-us": 355,
	"./es-us.js": 355,
	"./es.js": 353,
	"./et": 356,
	"./et.js": 356,
	"./eu": 357,
	"./eu.js": 357,
	"./fa": 358,
	"./fa.js": 358,
	"./fi": 359,
	"./fi.js": 359,
	"./fo": 360,
	"./fo.js": 360,
	"./fr": 361,
	"./fr-ca": 362,
	"./fr-ca.js": 362,
	"./fr-ch": 363,
	"./fr-ch.js": 363,
	"./fr.js": 361,
	"./fy": 364,
	"./fy.js": 364,
	"./gd": 365,
	"./gd.js": 365,
	"./gl": 366,
	"./gl.js": 366,
	"./gom-latn": 367,
	"./gom-latn.js": 367,
	"./gu": 368,
	"./gu.js": 368,
	"./he": 369,
	"./he.js": 369,
	"./hi": 370,
	"./hi.js": 370,
	"./hr": 371,
	"./hr.js": 371,
	"./hu": 372,
	"./hu.js": 372,
	"./hy-am": 373,
	"./hy-am.js": 373,
	"./id": 374,
	"./id.js": 374,
	"./is": 375,
	"./is.js": 375,
	"./it": 376,
	"./it.js": 376,
	"./ja": 377,
	"./ja.js": 377,
	"./jv": 378,
	"./jv.js": 378,
	"./ka": 379,
	"./ka.js": 379,
	"./kk": 380,
	"./kk.js": 380,
	"./km": 381,
	"./km.js": 381,
	"./kn": 382,
	"./kn.js": 382,
	"./ko": 383,
	"./ko.js": 383,
	"./ky": 384,
	"./ky.js": 384,
	"./lb": 385,
	"./lb.js": 385,
	"./lo": 386,
	"./lo.js": 386,
	"./lt": 387,
	"./lt.js": 387,
	"./lv": 388,
	"./lv.js": 388,
	"./me": 389,
	"./me.js": 389,
	"./mi": 390,
	"./mi.js": 390,
	"./mk": 391,
	"./mk.js": 391,
	"./ml": 392,
	"./ml.js": 392,
	"./mr": 393,
	"./mr.js": 393,
	"./ms": 394,
	"./ms-my": 395,
	"./ms-my.js": 395,
	"./ms.js": 394,
	"./mt": 396,
	"./mt.js": 396,
	"./my": 397,
	"./my.js": 397,
	"./nb": 398,
	"./nb.js": 398,
	"./ne": 399,
	"./ne.js": 399,
	"./nl": 400,
	"./nl-be": 401,
	"./nl-be.js": 401,
	"./nl.js": 400,
	"./nn": 402,
	"./nn.js": 402,
	"./pa-in": 403,
	"./pa-in.js": 403,
	"./pl": 404,
	"./pl.js": 404,
	"./pt": 405,
	"./pt-br": 406,
	"./pt-br.js": 406,
	"./pt.js": 405,
	"./ro": 407,
	"./ro.js": 407,
	"./ru": 408,
	"./ru.js": 408,
	"./sd": 409,
	"./sd.js": 409,
	"./se": 410,
	"./se.js": 410,
	"./si": 411,
	"./si.js": 411,
	"./sk": 412,
	"./sk.js": 412,
	"./sl": 413,
	"./sl.js": 413,
	"./sq": 414,
	"./sq.js": 414,
	"./sr": 415,
	"./sr-cyrl": 416,
	"./sr-cyrl.js": 416,
	"./sr.js": 415,
	"./ss": 417,
	"./ss.js": 417,
	"./sv": 418,
	"./sv.js": 418,
	"./sw": 419,
	"./sw.js": 419,
	"./ta": 420,
	"./ta.js": 420,
	"./te": 421,
	"./te.js": 421,
	"./tet": 422,
	"./tet.js": 422,
	"./th": 423,
	"./th.js": 423,
	"./tl-ph": 424,
	"./tl-ph.js": 424,
	"./tlh": 425,
	"./tlh.js": 425,
	"./tr": 426,
	"./tr.js": 426,
	"./tzl": 427,
	"./tzl.js": 427,
	"./tzm": 428,
	"./tzm-latn": 429,
	"./tzm-latn.js": 429,
	"./tzm.js": 428,
	"./uk": 430,
	"./uk.js": 430,
	"./ur": 431,
	"./ur.js": 431,
	"./uz": 432,
	"./uz-latn": 433,
	"./uz-latn.js": 433,
	"./uz.js": 432,
	"./vi": 434,
	"./vi.js": 434,
	"./x-pseudo": 435,
	"./x-pseudo.js": 435,
	"./yo": 436,
	"./yo.js": 436,
	"./zh-cn": 437,
	"./zh-cn.js": 437,
	"./zh-hk": 438,
	"./zh-hk.js": 438,
	"./zh-tw": 439,
	"./zh-tw.js": 439
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 645;

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_service__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(navCtrl, afAuth, authService) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.authService = authService;
        this.user = afAuth.auth.currentUser;
        var message = (this.user != null) ? "Usted ha iniciado sesión con: " + this.user.email : "Falló el inicio de sesion";
        console.log(message);
    }
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\navbar\navbar.html"*/''/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\navbar\navbar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__app_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return optionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var optionsPage = (function () {
    function optionsPage() {
    }
    optionsPage.prototype.ngOnInit = function () { };
    optionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-options',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\options\options.html"*/'<ion-content>\n\n  <div id="container">\n\n\n\n  </div>\n\n  <p>Estamos en desarrollo</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\options\options.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], optionsPage);
    return optionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHandlerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//


//

var PageHandlerComponent = (function () {
    function PageHandlerComponent(afAuth) {
        this.afAuth = afAuth;
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], icon: 'apps' },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginComponent */], icon: 'log-in' }
        ];
    }
    PageHandlerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pageHandler',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\pageHandler\pageHandler.component.html"*/'<ion-content>\n\n  <ion-list>\n\n    <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n      <ion-icon  name="{{p.icon}}"></ion-icon>\n\n      {{p.title}}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\pageHandler\pageHandler.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], PageHandlerComponent);
    return PageHandlerComponent;
}());

//# sourceMappingURL=pageHandler.component.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadListComponent = (function () {
    function UploadListComponent(upSvc) {
        this.upSvc = upSvc;
        this.showSpinner = true;
    }
    UploadListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploads = this.upSvc.getUploads();
        this.uploads.subscribe(function () { return _this.showSpinner = false; });
    };
    UploadListComponent.prototype.deleteUpload = function () {
        this.upSvc.deleteUpload(this.upload);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__upload__["a" /* Upload */])
    ], UploadListComponent.prototype, "upload", void 0);
    UploadListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'upload-list',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\uploads\shared\upload-list\upload-list.component.html"*/'<h3>File Uploads</h3>\n\n\n\n<div *ngFor="let upload of uploads | async">\n\n  <strong>{{upload.name}}</strong>\n\n<button (click)=\'deleteUpload()\' class="button is-danger is-small">Delete</button><br>\n\n</div>\n\n\n\n<loading-spinner *ngIf="showSpinner"></loading-spinner>\n\n\n\n<hr>\n\n\n\n<upload-form></upload-form>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\uploads\shared\upload-list\upload-list.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_service__["a" /* UploadService */]])
    ], UploadListComponent);
    return UploadListComponent;
}());

//# sourceMappingURL=upload-list.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFormComponent = (function () {
    function UploadFormComponent(upSvc) {
        this.upSvc = upSvc;
    }
    UploadFormComponent.prototype.detectFiles = function ($event) {
        this.selectedFiles = $event.target.files;
    };
    UploadFormComponent.prototype.uploadSingle = function () {
        var file = this.selectedFiles;
        if (file && file.length === 1) {
            this.currentUpload = new __WEBPACK_IMPORTED_MODULE_2__upload__["a" /* Upload */](file.item(0));
            this.upSvc.pushUpload(this.currentUpload);
        }
        else {
            console.error('No file found!');
        }
    };
    UploadFormComponent.prototype.uploadMulti = function () {
        var _this = this;
        var files = this.selectedFiles;
        if (!files || files.length === 0) {
            console.error('No Multi Files found!');
            return;
        }
        Array.from(files).forEach(function (file) {
            _this.currentUpload = new __WEBPACK_IMPORTED_MODULE_2__upload__["a" /* Upload */](file);
            _this.upSvc.pushUpload(_this.currentUpload);
        });
    };
    UploadFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'upload-form',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\uploads\shared\upload-form\upload-form.component.html"*/'\n\n<div *ngIf="currentUpload">\n\n  <progress class="progress is-success" min=1 max=100 value="{{ currentUpload?.progress }}"></progress>\n\n  Progress: {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete\n\n  <input type="hidden" id="url" value="{{currentUpload.url}}">\n\n  <input type="hidden" id="date" value="{{currentUpload.createdAt}}">\n\n</div>\n\n\n\n\n\n<div class="box">\n\n  <label>\n\n    <input type="file" class="button" (change)="detectFiles($event)">\n\n  </label>\n\n\n\n  <hr>\n\n<!--\n\n  <h3>Multiple File Upload</h3>\n\n\n\n  <label>\n\n    <input type="file" class="button" (change)="detectFiles($event)" multiple>\n\n  </label>\n\n  <button class="button is-primary"\n\n    [disabled]="!selectedFiles"\n\n    (click)="uploadMulti()">\n\n    Upload Multiple\n\n  </button>-->\n\n</div>\n\n<button type="button" ion-button block color="light"\n\n  [disabled]="!selectedFiles"\n\n  (click)="uploadSingle()">\n\n  Cargar \n\n</button>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\uploads\shared\upload-form\upload-form.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_service__["a" /* UploadService */]])
    ], UploadFormComponent);
    return UploadFormComponent;
}());

//# sourceMappingURL=upload-form.component.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (values) {
        if (!values)
            return values;
        return values.reverse();
    };
    ReversePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'reverse',
            pure: false
        })
    ], ReversePipe);
    return ReversePipe;
}());

//# sourceMappingURL=sort_reverse.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(viewCtl) {
        this.viewCtl = viewCtl;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\modal\modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ModalComponent);
    return ModalComponent;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsListService = (function () {
    function NewsListService() {
    }
    NewsListService.prototype.OpenModalUp = function () {
        console.log("Kk");
    };
    NewsListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NewsListService);
    return NewsListService;
}());

//# sourceMappingURL=news-list.service.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Announcement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

__WEBPACK_IMPORTED_MODULE_0_moment__["locale"]('es');
var date = __WEBPACK_IMPORTED_MODULE_0_moment__();
var Announcement = (function () {
    function Announcement() {
        this.createdAt = date.format("dddd, MMMM Do YYYY").toString();
        this.day = date.format("DDD");
    }
    return Announcement;
}());

//# sourceMappingURL=announcement.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prospect_component__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProspectButtonComponent = (function () {
    function ProspectButtonComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ProspectButtonComponent.prototype.ngOnInit = function () {
    };
    ProspectButtonComponent.prototype.openModalProspects = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__prospect_component__["a" /* ProspectModalComponent */]);
        modal.present();
    };
    ProspectButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'prospect-button',
            template: "\n<button type=\"button\"  (click)=\"openModalProspects()\" class=\"button_round\">Administrar prospectos</button>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ProspectButtonComponent);
    return ProspectButtonComponent;
}());

//# sourceMappingURL=prospect-button.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prospect; });
var Prospect = (function () {
    function Prospect() {
    }
    return Prospect;
}());

//# sourceMappingURL=prospect.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_modal_component__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserButton = (function () {
    function UserButton(MC) {
        this.MC = MC;
    }
    UserButton.prototype.ngOnInit = function () { };
    UserButton.prototype.OMU = function () {
        var modal = this.MC.create(__WEBPACK_IMPORTED_MODULE_2__user_modal_component__["a" /* UserModal */]);
        modal.present();
    };
    UserButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-button',
            template: "\n    <button type=\"button\" class=\"button_round\" (click)=\"OMU()\" >Administrar usuarios</button>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], UserButton);
    return UserButton;
}());

//# sourceMappingURL=user.button.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_activitiesRecorder_services_activities_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(firebaseAuth, alertCtrl, actSrv) {
        this.firebaseAuth = firebaseAuth;
        this.alertCtrl = alertCtrl;
        this.actSrv = actSrv;
        this.user = firebaseAuth.authState;
    }
    AuthService.prototype.signup = function (email, password) {
        var _this = this;
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
            _this.showAlert("Muchas gracias por registrarte", "Bienvenido");
            _this.actSrv.recordActivity(_this.firebaseAuth.auth.currentUser.uid, _this.firebaseAuth.auth.currentUser.email, "Registrado en CFM", __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            _this.showAlert(err.message, "Algo salió mal");
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
            _this.showAlert(_this.firebaseAuth.auth.currentUser.email, "Bienvenido: ");
            _this.actSrv.recordActivity(_this.firebaseAuth.auth.currentUser.uid, _this.firebaseAuth.auth.currentUser.email, "Iniciado sesión", __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            _this.showAlert(err.message, "Algo salió mal");
        });
    };
    AuthService.prototype.logout = function () {
        this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "Cerrado sesión", __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        this.firebaseAuth
            .auth
            .signOut();
    };
    AuthService.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__pages_activitiesRecorder_services_activities_service__["a" /* ActivitiesService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qualification_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_component__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentsComponent = (function () {
    function StudentsComponent(NavCtl, ModalCtl) {
        this.NavCtl = NavCtl;
        this.ModalCtl = ModalCtl;
        this.ButtonComponents = [
            { title: "Calificaciones", component: __WEBPACK_IMPORTED_MODULE_2__qualification_component__["a" /* QualificationComponent */], icon: 'book', color: "danger" },
            { title: "Clases", component: __WEBPACK_IMPORTED_MODULE_3__classes_component__["a" /* ClassesComponent */], icon: 'bookmark', color: "orange" }
        ];
    }
    StudentsComponent.prototype.ngOnInit = function () { };
    StudentsComponent.prototype.SetNav = function (item) {
        var modal = this.ModalCtl.create(item.component);
        modal.present();
    };
    StudentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'students-module',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\students\students.component.html"*/'\n\n<!--\n\n<ion-card>\n\n    <ion-card-content>\n\n      <img src="assets/img/img-icon.png" />\n\n    </ion-card-content>\n\n\n\n    <ion-item>\n\n      <button ion-button clear item-start>Like</button>\n\n      <button ion-button clear item-end>Comment</button>\n\n    </ion-item>\n\n</ion-card>\n\n-->\n\n<div *ngFor="let item of ButtonComponents">\n\n\n\n    <button (click)="SetNav(item)" type="button" class="button_round">\n\n        <ion-icon name="{{item.icon}}"></ion-icon>\n\n    {{item.title}}\n\n    </button>\n\n    \n\n</div>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\students\students.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], StudentsComponent);
    return StudentsComponent;
}());

//# sourceMappingURL=students.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherStudent; });
var TeacherStudent = (function () {
    function TeacherStudent() {
    }
    return TeacherStudent;
}());

//# sourceMappingURL=TeacherStudent.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teachers_groupAdmin_component__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeachersComponent = (function () {
    function TeachersComponent(NavCtl, ModalCtl) {
        this.NavCtl = NavCtl;
        this.ModalCtl = ModalCtl;
        this.ButtonComponents = [
            { title: "Administrar grupos", component: __WEBPACK_IMPORTED_MODULE_2__teachers_groupAdmin_component__["a" /* GroupAdminComponent */], icon: 'briefcase', color: "orange" }
        ];
    }
    TeachersComponent.prototype.ngOnInit = function () { };
    TeachersComponent.prototype.SetNav = function (item) {
        var modal = this.ModalCtl.create(item.component);
        modal.present();
    };
    TeachersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'teachers-module',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\teachers\teachers.component.html"*/'<div *ngFor="let item of ButtonComponents">\n\n        \n\n                <button (click)="SetNav(item)"  class="button_round" type="button" icon-left >\n\n                    <ion-icon name="{{item.icon}}"></ion-icon>\n\n                {{item.title}}\n\n                </button>\n\n                \n\n            </div>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\teachers\teachers.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], TeachersComponent);
    return TeachersComponent;
}());

//# sourceMappingURL=teachers.component.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studentCRM_component__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentButtonComponent = (function () {
    function StudentButtonComponent(modlCtl) {
        this.modlCtl = modlCtl;
    }
    StudentButtonComponent.prototype.ngOnInit = function () { };
    StudentButtonComponent.prototype.OpenStudents = function () {
        var modal = this.modlCtl.create(__WEBPACK_IMPORTED_MODULE_2__studentCRM_component__["a" /* StudentCRMComponent */]);
        modal.present();
    };
    StudentButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'student-button',
            template: "\n    <button type=\"button\" class=\"button_round\" (click)=\"OpenStudents()\" >Administrar estudiantes</button>\n\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], StudentButtonComponent);
    return StudentButtonComponent;
}());

//# sourceMappingURL=student.button.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Course; });
var Course = (function () {
    function Course() {
    }
    return Course;
}());

//# sourceMappingURL=curso.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursos_component__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CursosButtonComponent = (function () {
    function CursosButtonComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    CursosButtonComponent.prototype.ngOnInit = function () {
    };
    CursosButtonComponent.prototype.openModalCursos = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cursos_component__["a" /* CursosComponent */]);
        modal.present();
    };
    CursosButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cursos-button',
            template: "\n<button type=\"button\" class=\"button_round\" (click)=\"openModalCursos()\" >Administrar cursos</button>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CursosButtonComponent);
    return CursosButtonComponent;
}());

//# sourceMappingURL=cursosbutton.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorRequest__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileTabsComponent = (function () {
    function ProfileTabsComponent() {
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__profile__["a" /* ProfileComponent */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__tutorRequest__["a" /* TutorRequestComponent */];
    }
    ProfileTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <ion-tabs >\n      <ion-tab tabIcon=\"person\" tabTitle=\"Perfil\"  [root]=\"tab1\"></ion-tab>\n      <ion-tab  tabIcon=\"notifications-outline\"  [root]=\"tab2\"></ion-tab>\n    </ion-tabs>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], ProfileTabsComponent);
    return ProfileTabsComponent;
}());

//# sourceMappingURL=profileTabs.component.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_user_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutor__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TutorComponent = (function () {
    function TutorComponent(db, afauth, usrSrv, loadingCtrl, alertCtl) {
        this.db = db;
        this.afauth = afauth;
        this.usrSrv = usrSrv;
        this.loadingCtrl = loadingCtrl;
        this.alertCtl = alertCtl;
        this.members = [];
        this.membersuid = [];
        this.tutorStudents = db.list('tutorRequest/' + afauth.auth.currentUser.uid, function (val) { return val
            .orderByChild('accepted')
            .equalTo(true); }).valueChanges();
    }
    TutorComponent.prototype.ngOnInit = function () { };
    TutorComponent.prototype.getValueEachMember = function (uid, imageURL, name) {
        var memberItem = document.getElementById(uid);
        var currentMembers = new __WEBPACK_IMPORTED_MODULE_5__tutor__["a" /* Tutor */]();
        currentMembers.name = name;
        currentMembers.uid = uid;
        currentMembers.imageURL = imageURL;
        if (memberItem.checked) {
            this.members.push(currentMembers);
            this.membersuid.push(uid);
        }
        else {
            this.deleteMembers(uid);
        }
        console.log(this.members);
        console.log(this.membersuid);
    };
    TutorComponent.prototype.deleteMembers = function (id) {
        for (var index = 0; index < this.members.length; index++) {
            if (this.membersuid[index] == id) {
                this.membersuid.splice(index, 1);
            }
            if (this.members[index].uid == id) {
                this.members.splice(index, 1);
            }
        }
    };
    TutorComponent.prototype.getItems = function (ev) {
        var email = ev.target.value;
        if (email && email.trim() != '') {
            return this.students = this.usrSrv.searchUserByEmail(email);
        }
    };
    TutorComponent.prototype.sendInvitation = function () {
        var currentuid = this.afauth.auth.currentUser.uid;
        var email = this.afauth.auth.currentUser.email;
        this.usrSrv.sendInvitation(this.membersuid, currentuid, email);
        var loader = this.loadingCtrl.create({
            content: "Espere un momento porfavor...",
            duration: 1500
        });
        loader.present();
    };
    TutorComponent.prototype.findStudent = function (uid) {
        this.stud = this.db.list('students', function (val) { return val.orderByChild('uid')
            .equalTo(uid); }).valueChanges();
        this.courses = this.db.list('students/' + uid + '/courses/').valueChanges();
    };
    TutorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tutor',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\tutor\tutor.component.html"*/'\n\n    <div style="margin-top:20%;">\n\n\n\n            <ion-item>\n\n                    <ion-label> Buscar alumno</ion-label>\n\n                    <ion-toggle [(ngModel)]="requestInv"  checked="false"></ion-toggle>\n\n                  </ion-item>\n\n        \n\n\n\n        <ion-item *ngIf="requestInv" >\n\n                <ion-searchbar (keyup)="getItems($event)" ></ion-searchbar>\n\n\n\n                <ion-card>\n\n\n\n                        <ion-card-header>\n\n                         Alumnos\n\n                        </ion-card-header>\n\n                      \n\n                        <ion-card-content>\n\n                         <ion-item *ngFor="let item of students | async">\n\n                             <ion-avatar item-start>\n\n                                 <img src="{{item.imageURL}}" alt="">\n\n                             </ion-avatar>\n\n                            {{item.email}}\n\n                            <input type="checkbox" id="{{item.uid}}" (click)="getValueEachMember(item.uid,item.imageURL,item.name)" item-end color="secondary" > \n\n                         </ion-item>\n\n                        </ion-card-content>\n\n                      \n\n                      </ion-card>\n\n\n\n                      <ion-card>\n\n\n\n                            <ion-card-header>\n\n                             En lista\n\n                            </ion-card-header>\n\n                          \n\n                            <ion-card-content>\n\n                             <ion-item *ngFor="let item of members">\n\n                                    <ion-avatar item-start>\n\n                                            <img src="{{item.imageURL}}" alt="">\n\n                                        </ion-avatar>\n\n                                {{item.name}}\n\n                             </ion-item>\n\n                            </ion-card-content>\n\n                          \n\n                          </ion-card>\n\n                <button ion-button (click)="sendInvitation()" type="button">Enviar</button>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <p text-center>Alumnos:</p>\n\n            <ion-item *ngFor="let item of tutorStudents | async">\n\n                <button type="button" ion-button icon-start (click)="findStudent(item.uid)">\n\n                    \n\n                    <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n\n                   Identificador: {{item.uid}}\n\n                    </button>\n\n              \n\n            </ion-item>\n\n            <div *ngFor="let tut of stud | async">\n\n                    <ion-list>\n\n                            <ion-item>\n\n                              <ion-thumbnail item-start>\n\n                                <img src="{{tut.imageURL}}">\n\n                              </ion-thumbnail>\n\n                              <h2 text-wrap>{{tut.name + " " +tut.lastName + " " +tut.lastName2}}</h2>\n\n                              \n\n                            </ion-item>\n\n                            \n\n                            \n\n                      </ion-list>\n\n            </div>\n\n            <div *ngFor="let item of courses | async; index as i;" [attr.data-index]="i">\n\n                        <ion-list>\n\n\n\n                        <ion-item-divider color="light">Curso: {{i + 1}}</ion-item-divider>\n\n                        <ion-item>\n\n                            \n\n                            <ion-icon name="person" item-start></ion-icon>\n\n                            Maestro: \n\n                            <div item-end>{{ item.teacher | uppercase}} </div>  \n\n                          </ion-item>\n\n                  \n\n                  <ion-item >\n\n                        \n\n                        <ion-icon name="calendar" item-start></ion-icon>\n\n                        Horario:   <div text-wrap item-end>{{ item.schedule | uppercase}} </div> \n\n                      </ion-item>\n\n                      <ion-item>\n\n                           \n\n                            <ion-icon name="cube" item-start></ion-icon>\n\n                            Aula:   <div item-end>{{ item.classroom }} </div> \n\n                          </ion-item>\n\n                          <ion-item>\n\n                                \n\n                                <ion-icon name="paper" item-start></ion-icon>\n\n                                Curso:   <div item-end>{{ item.name | uppercase }} </div> \n\n                              </ion-item>\n\n                              \n\n                        </ion-list>\n\n                    </div>\n\n        </ion-item>\n\n    </div>'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\tutor\tutor.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__Users_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], TutorComponent);
    return TutorComponent;
}());

//# sourceMappingURL=tutor.component.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tutor; });
var Tutor = (function () {
    function Tutor() {
    }
    return Tutor;
}());

//# sourceMappingURL=tutor.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonAssitenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frontview_assistence_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonAssitenceComponent = (function () {
    function ButtonAssitenceComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ButtonAssitenceComponent.prototype.ngOnInit = function () { };
    ButtonAssitenceComponent.prototype.openModalAssitences = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__frontview_assistence_component__["a" /* AsistenceComponent */]);
    };
    ButtonAssitenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'button-assitence',
            template: "\n<button type=\"button\" class=\"button_round\" (click)=\"openModalAssitences()\" >Administrar asistencias</button>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]])
    ], ButtonAssitenceComponent);
    return ButtonAssitenceComponent;
}());

//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities_component__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivitiesButtonComponent = (function () {
    function ActivitiesButtonComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ActivitiesButtonComponent.prototype.ngOnInit = function () { };
    ActivitiesButtonComponent.prototype.OpenNav = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__activities_component__["a" /* ActivitiesComponent */]);
    };
    ActivitiesButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "activities-button",
            template: "\n    <button type=\"button\" class=\"button_round\" (click)=\"OpenNav()\" > Registro de actividad </button>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], ActivitiesButtonComponent);
    return ActivitiesButtonComponent;
}());

//# sourceMappingURL=activities.button.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activitiesRecorder_services_activities_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(firebaseAuth, db, alertCtrl, actSrv) {
        this.firebaseAuth = firebaseAuth;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.actSrv = actSrv;
        this.day = __WEBPACK_IMPORTED_MODULE_3_moment__();
        this.currentDay = Number(this.day.format('DDD'));
        __WEBPACK_IMPORTED_MODULE_3_moment__["locale"]('es');
    }
    UserService.prototype.listRef = function () {
        return this.db.list("users");
    };
    UserService.prototype.objectRef = function (key) {
        return this.db.object("users/" + key);
    };
    UserService.prototype.listUserByUID = function (uid) {
        return this.db.list("users/", function (val) { return val.orderByChild("uid").equalTo(uid); }).valueChanges();
    };
    UserService.prototype.searchUserByName = function (name) {
        this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "Buscado un usuario por el nombre: " + "'" + name + "'", __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        return this.db.list("users", function (val) { return val
            .orderByChild("name")
            .startAt(name); }).valueChanges(["child_added"]);
    };
    UserService.prototype.searchUserByEmail = function (email) {
        this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "Buscado un usuario por el correo: " + "'" + email + "'", __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        return this.db.list("users", function (val) { return val
            .orderByChild("email")
            .startAt(email).limitToFirst(1); }).valueChanges();
    };
    UserService.prototype.searchUserByProperty = function (node, data) {
        this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "Buscado un usuario en el nodo " + "'" + node + "'" + " por la propiedad: " + "'" + data + "'", __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        return this.db.list("users", function (val) { return val
            .orderByChild(node)
            .equalTo(data); }).valueChanges();
    };
    UserService.prototype.getUsers = function () {
        return this.db.list("users", function (val) { return val
            .orderByChild("name")
            .limitToFirst(50); }).valueChanges();
    };
    UserService.prototype.editUsers = function (item) {
        this.objectRef(item.uid).update(item);
        var alert = this.alertCtrl.create({
            title: 'Editar',
            subTitle: ' Se ha editado un usuario',
            buttons: ['OK']
        });
        alert.present();
        this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "Editado al usuario con el nombre: " + "'" + item.name + "'", __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
    };
    UserService.prototype.deleteUsers = function (item) {
        this.listRef().remove(item.uid);
        this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "Eliminado al usuario : " + "'" + item.name + "'", __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
    };
    UserService.prototype.showConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Borrar usuario',
            message: '¿En realidad quiere borrar este usuario?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.deleteUsers(item);
                    }
                }
            ]
        });
        confirm.present();
    };
    UserService.prototype.saveStudent = function (user) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Crear estudiante',
            message: '¿En realidad quiere hacer a este usuario estudiante?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.createStudent(user);
                    }
                }
            ]
        });
        confirm.present();
        this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "Creado al usuario al estudiante: " + "'" + user.name + "'", __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
    };
    UserService.prototype.createStudent = function (user) {
        this.db.list('students').update(user.uid, {
            name: user.name,
            lastName: user.lastName,
            lastName2: user.lastName2,
            imageURL: user.imageURL,
            email: user.email,
            uid: user.uid,
            enrollment: "N/A",
            birthday: "N/A",
            age: "N/A",
            course: user.course,
            genre: "N/A",
            phone: user.phone,
            ocupation: user.ocupation,
            address: "N/A",
            advertising: user.advertising,
            medicalObservation: "N/A",
            teacher: "",
            type: "",
            tutorName: "N/A",
            tutorRelationship: "N/A",
            tutorAge: "N/A",
            tutorOcupation: "N/A",
            tutorPosition: "N/A",
            tutorPhone: "N/A",
            tutorEmail: "N/A",
            tutorAddress: "N/A",
            tutorRegDate: "N/A",
            tutorInitDate: "N/A",
            tutorFinalDate: "N/A",
            cost: "N/A",
            registration: "N/A",
            pedagogicalSample: "N/A",
            coments: "N/A"
        });
        this.db.object("users/" + user.uid).update({
            isStudent: true
        });
    };
    UserService.prototype.sendInvitation = function (uid, sender, email) {
        for (var index = 0; index < uid.length; index++) {
            var uidElement = uid[index];
            this.db.list("users/" + sender).update("students/", (_a = {},
                _a[uidElement] = true,
                _a));
            this.db.list("users/" + uidElement).update("requests/" + sender, {
                accepted: false,
                date: this.day.format('dddd, MMMM D YYYY'),
                type: 'tutorRequest',
                email: email,
                sender: sender,
                uid: uidElement,
            });
            this.db.object("tutorRequest/" + sender + "/" + uidElement + '/').update({
                accepted: false,
                date: this.day.format('dddd, MMMM D YYYY'),
                type: 'tutorRequest',
                email: email,
                uid: uidElement,
            });
            this.actSrv.recordActivity(this.firebaseAuth.auth.currentUser.uid, this.firebaseAuth.auth.currentUser.email, "enviado una invitación al usuario: " + "'" + uid[index] + "'", __WEBPACK_IMPORTED_MODULE_3_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_3_moment__().format('LT'));
        }
        var _a;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__activitiesRecorder_services_activities_service__["a" /* ActivitiesService */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_push_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, params, afDB, modalCtrl, push) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.afDB = afDB;
        this.modalCtrl = modalCtrl;
        this.push = push;
        this.items = afDB.list('news', function (val) { return val.limitToLast(5); }).valueChanges(['child_added']).map(function (arr) { return arr.reverse(); });
        ;
    }
    HomePage.prototype.OpenModal = function (key) {
        var modal = this.modalCtrl.create(ModalContentPage, { key: key });
        console.log(key);
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\home\home.html"*/'  <ion-content class="bgcontainer" padding>\n\n    <div id="container">\n\n    </div>\n\n<div  class="head">\n\n  <h1 >BIENVENIDOS</h1>\n\n</div>\n\n\n\n<div *ngFor="let item of items | async ">\n\n  <img   src="{{item.imageURL}}"/>\n\n  <ion-item class="bgcontainer">\n\n    <h2>\n\n      {{item.title}}\n\n    </h2>\n\n    <p style="text-align:justify" >\n\n      {{item.textBody}}\n\n    </p>\n\n    <ion-row>\n\n       <ion-col>\n\n         <button ion-button icon-left color="dark" clear small>\n\n           <ion-icon name="md-calendar"></ion-icon>\n\n           <div>{{item.createdAt}}</div>\n\n         </button>\n\n       </ion-col>\n\n     </ion-row>\n\n    <button (click)="OpenModal(item.key)" ion-button color="green" small> Ver más</button>\n\n  </ion-item>\n\n</div>\n\n</ion-content>\n\n<ion-footer class="bgcontainer center bgverde">\n\n    <p class="textblack">Seguimos mejorando nuestra App.</p>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__app_push_service__["a" /* PushService */]])
    ], HomePage);
    return HomePage;
}());

var ModalContentPage = (function () {
    //new;
    function ModalContentPage(platform, params, viewCtrl, afDB) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        var k = this.params.get('key');
        this.items = afDB.list('news', function (value) { return value.orderByChild('key').equalTo(k); }).valueChanges();
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Descripci\u00F3n\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-card *ngFor=\"let item of items | async\">\n<ion-item>\n    <ion-avatar item-start>\n      <img src=\"{{item.creatorPhotoURL}}\">\n    </ion-avatar>\n    <ion-card-title text-wrap id=\"ti\">\n      {{item.title}}\n      </ion-card-title>\n</ion-item>\n\n  <img src=\"{{item.imageURL}}\">\n\n  <ion-card-content id=\"cardcontent\">\n  <p>{{item.textBody}}</p>\n  </ion-card-content>\n\n        <ion-row>\n           <ion-col>\n             <button ion-button icon-left color=\"danger\" clear small>\n               <ion-icon name=\"md-calendar\"></ion-icon>\n               <div>{{item.createdAt}}</div>\n             </button>\n           </ion-col>\n           <ion-col>\n             <button ion-button icon-left color=\"danger\" clear small>\n               <ion-icon name=\"person\"></ion-icon>\n               <div>{{item.uploadFor}}</div>\n             </button>\n           </ion-col>\n         </ion-row>\n</ion-card>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_push__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PushService = (function () {
    function PushService(push, alertCtrl, localNotifications) {
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.localNotifications = localNotifications;
    }
    PushService.prototype.createNotification = function (data) {
        this.localNotifications.schedule([{
                id: 2,
                title: data.title,
                text: data.text,
                icon: 'http://example.com/icon.png'
            }]);
        console.log(data);
    };
    PushService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], PushService);
    return PushService;
}());

//# sourceMappingURL=push.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_components_users_user__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activitiesRecorder_services_activities_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//


//



//import * as firebase from 'firebase/app';
var LoginComponent = (function () {
    function LoginComponent(navCtrl, params, modalCtrl, afAuth, authServ, loadingCtrl, actSrv, formBuilder) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.authServ = authServ;
        this.loadingCtrl = loadingCtrl;
        this.actSrv = actSrv;
        this.formBuilder = formBuilder;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    LoginComponent.prototype.Open = function (action) {
        var modal = this.modalCtrl.create(ModalRegister, { action: action });
        modal.present();
        console.log(action);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    //user:User;
    LoginComponent.prototype.submitForm = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_3_moment__();
        var user = new __WEBPACK_IMPORTED_MODULE_4__pages_components_users_user__["a" /* User */]();
        user.email = this.loginForm.value.email;
        user.password = this.loginForm.value.password;
        //this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
        this.authServ.login(user.email, user.password);
        this.presentLoading();
    };
    LoginComponent.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Espere porfavor...",
            duration: 1500
        });
        loader.present();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\login\login.html"*/'\n\n<ion-content padding id="form">\n\n  <div *ngIf="this.afAuth.authState  | async; let user; else showLogin">\n\n\n\n      <ion-badge text-wrap color="secondary"><p>Usted ya ha iniciado sesión con: {{user.email}}</p></ion-badge>\n\n      <ion-item>\n\n        <button type="button" name="button"ion-button block (click)="authServ.logout()">Cerrar sesión</button>\n\n      </ion-item>\n\n  </div>\n\n\n\n  <ng-template #showLogin>\n\n  <form [formGroup]="loginForm">\n\n  <ion-list>\n\n<ion-row>\n\n    <ion-col col-12>\n\n  <ion-item>\n\n    <input autocorrect="on"  type="text" placeholder="Correo"formControlName="email" >\n\n  </ion-item>\n\n  </ion-col>\n\n  <ion-col col-12>\n\n  <ion-item>\n\n    <input autocorrect="on"  type="password" placeholder="Contraseña" formControlName="password" >\n\n  </ion-item>\n\n</ion-col>\n\n</ion-row>\n\n  <button type="button" ion-button outline block (click)="submitForm()" >Entrar</button>\n\n</ion-list>\n\n<button type="button" ion-button outline block (click)="Open(\'registro\')" >Registrarte</button>\n\n\n\n<button type="button" ion-button outline block color="danger" (click)="Open(\'recuperacion\')">¿Olvidaste tú contraseña?</button>\n\n\n\n</form>\n\n\n\n</ng-template>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__app_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__activitiesRecorder_services_activities_service__["a" /* ActivitiesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());

var ModalRegister = (function () {
    function ModalRegister(platform, params, viewCtrl, alertCtrl, authServ, db, afAuth, loadingCtrl, actSrv, formBuilder) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.authServ = authServ;
        this.db = db;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.actSrv = actSrv;
        this.formBuilder = formBuilder;
        this.action = params.get('action');
        this.registerForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastName2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    ModalRegister.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ;
    ModalRegister.prototype.logForm = function () {
        var _this = this;
        //la variable está en el template del modal   
        this.submitAttempt = true;
        if (this.registerForm.valid) {
            var user_1 = new __WEBPACK_IMPORTED_MODULE_4__pages_components_users_user__["a" /* User */]();
            user_1.name = this.registerForm.value.name.trim();
            user_1.lastName = this.registerForm.value.lastName.trim();
            user_1.lastName2 = this.registerForm.value.lastName2.trim();
            user_1.email = this.registerForm.value.email.trim();
            user_1.password = this.registerForm.value.password.trim();
            //this.authServ.signup(user.email,user.password);
            this.afAuth.auth.createUserWithEmailAndPassword(user_1.email, user_1.password).then(function (val) {
                var itemRef = _this.db.object('users/' + _this.afAuth.auth.currentUser.uid);
                itemRef.update({
                    name: user_1.name,
                    lastName: user_1.lastName,
                    lastName2: user_1.lastName2,
                    age: 'N/A',
                    email: user_1.email.toLowerCase(),
                    password: user_1.password,
                    accessLevel: 'user',
                    advertising: 'N/A',
                    invitation: false,
                    isStudent: false,
                    status: 'active',
                    ocupation: 'N/A',
                    phone: 'N/A',
                    course: 'N/A',
                    observation: 'N/A',
                    grade: 'N/A',
                    tutor: 'N/A',
                    relationship: 'N/A',
                    tutorAge: 'N/A',
                    tutorEmail: 'N/A',
                    uid: _this.afAuth.auth.currentUser.uid,
                    imageURL: 'https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2Findice.png?alt=media&token=8080adfa-8bb4-4d4c-8a2b-ddac12c08a2a'
                });
                _this.presentLoading();
                _this.viewCtrl.dismiss();
            });
        }
    };
    ModalRegister.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Espere porfavor...",
            duration: 1500
        });
        loader.present();
    };
    ModalRegister.prototype.recuperar = function (correo) {
        var _this = this;
        this.afAuth.auth.sendPasswordResetEmail(correo.toLowerCase()).then(function (val) {
            console.log(val);
            var alert = _this.alertCtrl.create({
                title: 'Exito',
                subTitle: 'Se te ha enviado un correo de validación.',
                buttons: [{
                        text: 'Ok',
                        handler: function (data) {
                            _this.dismiss();
                        }
                    }]
            });
            alert.present();
        }).catch(function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Se ha producido el siguiente evento con el código de error: ' + "'" + err.code + "'",
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    ModalRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Registro\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-list no-lines *ngIf=\"action == 'registro' \" >\n\n<p text-center *ngIf=\"submitAttempt\" style=\"color: #ea6153;\">Por favor rellene todo los campos correctamente.</p>\n\n<form  [formGroup]=\"registerForm\">\n<ion-row>\n\n<ion-col col-12>\n\n<ion-item>\n  <input autocorrect=\"on\" placeholder=\"Nombre\" type=\"text\"  formControlName=\"name\"  >\n</ion-item>\n\n</ion-col>\n\n<ion-col col-12>\n<ion-item>\n  <input autocorrect=\"on\" placeholder=\"Apellido paterno\" type=\"text\"  formControlName=\"lastName\" >\n</ion-item>\n</ion-col>\n\n<ion-col col-12>\n<ion-item>\n  <input autocorrect=\"on\" placeholder=\"Apellido materno\" type=\"text\"  formControlName=\"lastName2\" >\n</ion-item>\n</ion-col>\n\n<ion-col col-12>\n<ion-item>\n  <input autocorrect=\"on\" placeholder=\"e-mail\" type=\"text\"  formControlName=\"email\" >\n</ion-item>\n</ion-col>\n\n<ion-col col-12>\n<ion-item>\n  <input autocorrect=\"on\" placeholder=\"Contrase\u00F1a\" type=\"password\"  formControlName=\"password\" >\n  <p text-wrap *ngIf=\"submitAttempt\" style=\"color: #ea6153;\">Recuerda que tu contrase\u00F1a debe tener al menos 8 car\u00E1cteres, n\u00FAmeros y car\u00E1cteres especiales.</p>\n\n</ion-item>\n</ion-col>\n\n</ion-row>\n\n<ion-item>\n  <button type=\"button\" (click)=\"logForm()\" ion-button block>Registrar</button>\n</ion-item>\n</form>\n\n</ion-list>\n<ion-list no-lines *ngIf=\"action == 'recuperacion' \" >\n<ion-row>\n\n<ion-col col-12>\n\n<ion-item>\n  <input [(ngModel)]=\"correo\" autocorrect=\"on\" placeholder=\"ejemplo@ejemplo.com\" type=\"text\"   >\n  <label text-center>Correo de recuperaci\u00F3n</label>\n  <button type=\"button\" ion-button (click)=\"recuperar(correo)\" block>Enviar </button>\n</ion-item>\n\n</ion-col>\n</ion-row>\n\n</ion-list>\n\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__app_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__activitiesRecorder_services_activities_service__["a" /* ActivitiesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ModalRegister);
    return ModalRegister;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentCRMService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activitiesRecorder_services_activities_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentCRMService = (function () {
    function StudentCRMService(db, afauth, alrtCtl, actSrv) {
        this.db = db;
        this.afauth = afauth;
        this.alrtCtl = alrtCtl;
        this.actSrv = actSrv;
    }
    StudentCRMService.prototype.getStudents = function () {
        return this.db.list("students", function (val) { return val.limitToFirst(50); }).valueChanges();
    };
    StudentCRMService.prototype.getCourses = function () {
        return this.db.list('course').valueChanges();
    };
    StudentCRMService.prototype.searchByProperty = function (property, node) {
        return this.db.list("students", function (val) { return val.orderByChild(node.trim())
            .startAt(property.trim()); }).valueChanges();
    };
    StudentCRMService.prototype.searchByName = function (name) {
        return this.db.list("students", function (val) { return val.orderByChild("name")
            .startAt(name); }).valueChanges();
    };
    StudentCRMService.prototype.setImageUrl = function (imageURL, uid) {
        this.db.object('students/' + uid.uid).update({
            imageURL: imageURL
        });
        var alrt = this.alrtCtl.create({
            title: 'Actualizaste una foto de estudiante.',
            message: 'Recarga al estudiante para ver el cambio.',
            buttons: ['OK']
        });
        alrt.present();
        this.actSrv.recordActivity(this.afauth.auth.currentUser.uid, this.afauth.auth.currentUser.email, "editado a: " + uid + "con la imagen: " + imageURL, __WEBPACK_IMPORTED_MODULE_5_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_5_moment__().format('LT'));
    };
    StudentCRMService.prototype.editStudent = function (uid, courses) {
        var _this = this;
        var confirm = this.alrtCtl.create({
            title: 'Editar estudiante',
            message: '¿En realidad quiere editar este estudiante?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.db.object('students/' + uid.uid).update({
                            name: uid.name,
                            lastName: uid.lastName,
                            lastName2: uid.lastName2,
                            imageURL: uid.imageURL,
                            email: uid.email,
                            enrollment: uid.enrollment,
                            age: uid.age,
                            course: uid.course,
                            genre: uid.genre,
                            phone: uid.phone,
                            schedule: uid.schedule,
                            classroom: uid.classroom,
                            ocupation: uid.ocupation,
                            address: uid.address,
                            advertising: uid.advertising,
                            medicalObservation: uid.medicalObservation,
                            teacher: uid.teacher,
                            type: uid.type,
                            tutorName: uid.tutorName,
                            tutorRelationship: uid.tutorRelationship,
                            tutorAge: uid.tutorAge,
                            tutorOcupation: uid.tutorOcupation,
                            tutorPosition: uid.tutorPosition,
                            tutorPhone: uid.tutorPhone,
                            tutorEmail: uid.tutorEmail,
                            tutorAddress: uid.tutorAddress,
                            tutorRegDate: uid.tutorRegDate,
                            tutorInitDate: uid.tutorInitDate,
                            tutorFinalDate: uid.tutorFinalDate,
                            cost: uid.cost,
                            registration: uid.registration,
                            pedagogicalSample: uid.pedagogicalSample,
                            coments: uid.coments
                        });
                        for (var index = 0; index < courses.length; index++) {
                            var element = courses[index];
                            _this.db.list('students/' + uid.uid + '/courses/').push({
                                name: element.name,
                                schedule: element.schedule,
                                teacher: element.teacher,
                                classroom: element.classroom,
                                id_course: element.id_course
                            }).then(function (val) {
                                _this.db.object('students/' + uid.uid + '/courses/' + val.key).update({
                                    key: val.key
                                });
                                _this.actSrv.recordActivity(_this.afauth.auth.currentUser.uid, _this.afauth.auth.currentUser.email, "editado al estudiante: " + uid, __WEBPACK_IMPORTED_MODULE_5_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_5_moment__().format('LT'));
                            });
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    StudentCRMService.prototype.listCourses = function () {
        return this.db.list('course').valueChanges();
    };
    StudentCRMService.prototype.listStudentCourses = function (uid) {
        return this.db.list('students/' + uid + "/courses").valueChanges();
    };
    StudentCRMService.prototype.eraseStudent = function (uid, key) {
        var _this = this;
        var confirm = this.alrtCtl.create({
            title: 'Borrar estudiante',
            message: '¿En realidad quiere borrar este estudiante?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.db.list("students").remove(uid);
                        _this.db.object("users/" + uid).update({
                            isStudent: false
                        });
                        _this.actSrv.recordActivity(_this.afauth.auth.currentUser.uid, _this.afauth.auth.currentUser.email, "eliminado al estudiante: " + uid, __WEBPACK_IMPORTED_MODULE_5_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_5_moment__().format('LT'));
                    }
                }
            ]
        });
        confirm.present();
    };
    StudentCRMService.prototype.eraseStudentCourse = function (uid, key) {
        var _this = this;
        var confirm = this.alrtCtl.create({
            title: 'Borrar curso',
            message: '¿En realidad quiere borrar este curso?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.db.list("students/" + uid + "/courses/" + key).remove();
                        _this.actSrv.recordActivity(_this.afauth.auth.currentUser.uid, _this.afauth.auth.currentUser.email, "eliminado el curso: " + key, __WEBPACK_IMPORTED_MODULE_5_moment__().format("L"), __WEBPACK_IMPORTED_MODULE_5_moment__().format('LT'));
                    }
                }
            ]
        });
        confirm.present();
    };
    StudentCRMService.prototype.listTeachers = function () {
        return this.db.list('users', function (val) { return val.orderByChild('accessLevel')
            .equalTo('teacher'); }).valueChanges();
    };
    StudentCRMService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__activitiesRecorder_services_activities_service__["a" /* ActivitiesService */]])
    ], StudentCRMService);
    return StudentCRMService;
}());

//# sourceMappingURL=student.services.js.map

/***/ })

},[485]);
//# sourceMappingURL=main.js.map