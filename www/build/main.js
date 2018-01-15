webpackJsonp([0],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
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




var AnnouncementService = (function () {
    function AnnouncementService(db, alertCtrl) {
        this.db = db;
        this.alertCtrl = alertCtrl;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], AnnouncementService);
    return AnnouncementService;
}());

//# sourceMappingURL=announcements.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdateNewsModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_service__ = __webpack_require__(159);
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
            selector: 'app-news-list',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/news/news-list.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Noticias\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<form>\n<ion-item *ngFor="let users of user | async">\n<input type="hidden" id="name" value="{{users.name  +  users.lastName}}">\n<input type="hidden" id="photoURL" value="{{users.imageURL}}">\n</ion-item>\n\n<ion-item>\n  <input placeholder="Titulo" type="text" required [(ngModel)]="news.title"  name="title">\n</ion-item>\n\n<ion-item>\n  <textarea rows=\'5\' data-min-rows=\'3\' [(ngModel)]="news.textBody" name="textBody" placeholder=\'Cuerpo de noticia\' required></textarea>\n</ion-item>\n\n<ion-item>\n  <upload-form></upload-form>\n</ion-item>\n\n<ion-item>\n  <button type="button" ion-button color="danger" (click)="updateNew()" block>Actualizar</button>\n</ion-item>\n\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/news/news-list.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], UpdateNewsModal);
    return UpdateNewsModal;
}());

//# sourceMappingURL=news-list.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(16);
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
    function NewsService(db, alertCtrl, lclPushNot) {
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.lclPushNot = lclPushNot;
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
        }).catch(function (err) {
            _this.showAlert("Erro tipo: " + err, "Error al actualizar");
        });
    };
    NewsService.prototype.deleteNews = function (news) {
        var _this = this;
        var itemRef = this.db.object('news/' + news.key);
        itemRef.remove().then(function (value) {
            _this.showAlert("Presione 'OK' para continuar.", "Exito al eliminar elemento: " + value);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], NewsService);
    return NewsService;
}());

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(642);
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnnouncementCrudComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AnnouncementModalCRUD; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcements_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__announcement__ = __webpack_require__(671);
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
            selector: 'announcement-crud',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/announcements/announcement-crud.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Avisos\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<form *ngIf="isEditing == false; else edit">\n<ion-item>\n  <input type="text" placeholder="Titulo" required [(ngModel)]="announcement.title" name="title" #titu>\n</ion-item>\n\n<ion-item>\n  <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="announcement.body" name = "body"></textarea>\n</ion-item>\n\n\n  <ion-item>\n    <ion-label>Aviso Destacado</ion-label>\n    <ion-toggle [(ngModel)]="announcement.destacado" name="destacado" checked="false"></ion-toggle>\n  </ion-item>\n\n<ion-item >\n  <button type="submit" ion-button color="danger" (click)="CreateAnnouncement()" block>Registrar</button>\n</ion-item>\n\n</form>\n\n<ng-template #edit>\n  <form>\n  <ion-item>\n    <input type="text" required [(ngModel)]="item.title" name="title" #titu>\n  </ion-item>\n\n  <ion-item>\n    <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="item.body" name = "body"></textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Aviso Destacado</ion-label>\n    <ion-toggle [(ngModel)]="item.destacado" name="destacado" checked="false"></ion-toggle>\n  </ion-item>\n  <ion-item>\n<button type="submit" ion-button color="secondary" (click)="editAnnouncement()" block>Editar</button>\n</ion-item>\n</form>\n</ng-template>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/announcements/announcement-crud.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
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
            template: "\n<button type=\"button\" ion-button large block color=\"primary\" outline (click)=\"OpenModal ()\">Administrar avisos</button>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__announcements_service__["a" /* AnnouncementService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], AnnouncementModalCRUD);
    return AnnouncementModalCRUD;
}());

//# sourceMappingURL=announcement-crud.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(264);
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







var ProspectService = (function () {
    function ProspectService(db, http, afAuth, alertCtrl) {
        this.db = db;
        this.http = http;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
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
        var date = __WEBPACK_IMPORTED_MODULE_6_moment__();
        this.refLis().push({
            name: prospect.name,
            lastname: prospect.lastname,
            lastname2: prospect.lastname2,
            age: prospect.age,
            state: prospect.state,
            phone: prospect.phone,
            status: prospect.status,
            attended: prospect.attended,
            course: prospect.course,
            date: date.format("MMMM D YYYY").toString(),
            coment: prospect.coment,
            source: prospect.source,
            price: prospect.price,
            day: Number(date.format("DDD"))
            //checkbox:prospect.checkbox
        }).then(function (val) {
            _this.refObj(val.key).update({
                key: val.key
            });
        });
    };
    ProspectService.prototype.getProspect = function () {
        //  this.db.list('prospects')
    };
    ProspectService.prototype.searchProspectByProperty = function (n, property) {
        var result;
        return result = this.db.list("prospects", function (val) { return val.orderByChild(property).equalTo(n).limitToFirst(50); }).valueChanges();
    };
    ProspectService.prototype.searchByName = function (name) {
        //console.log(name)
        return this.db.list("prospects", function (val) {
            return val.orderByChild("name") //.equalTo(name)
                .startAt(name.trim());
        }
        //.endAt(name.trim())
        ).valueChanges();
    };
    ProspectService.prototype.editProspect = function (item) {
        this.refObj(item.key).update({
            name: item.name,
            lastname: item.lastname,
            lastname2: item.lastname2,
            age: item.age,
            state: item.state,
            phone: item.phone,
            status: item.status,
            attended: item.attended,
            course: item.course,
            coment: item.coment,
            source: item.source,
            price: item.price
        });
    };
    ProspectService.prototype.deleteProspect = function (item) {
        this.refObj(item.key).remove();
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
    ProspectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], ProspectService);
    return ProspectService;
}());

//# sourceMappingURL=prospect.service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(16);
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



var UserService = (function () {
    function UserService(db, alertCtrl) {
        this.db = db;
        this.alertCtrl = alertCtrl;
    }
    UserService.prototype.listRef = function () {
        return this.db.list("users");
    };
    UserService.prototype.objectRef = function (key) {
        return this.db.object("users/" + key);
    };
    UserService.prototype.searchUserByName = function (name) {
        return this.db.list("users", function (val) { return val
            .orderByChild("name")
            .startAt(name); }).valueChanges(["child_added"]);
    };
    UserService.prototype.searchUserByProperty = function (node, data) {
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
        console.log(item);
        this.objectRef(item.key).update(item);
    };
    UserService.prototype.deleteUsers = function (item) {
        this.listRef().remove(item.key);
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
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 181:
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
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 222:
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
webpackEmptyAsyncContext.id = 222;

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
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
    dashboardPage.prototype.ngOnInit = function () { };
    dashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/dashboard/dashboard.html"*/'\n<ion-content>\n  <div id="container">\n\n  </div>\n\n  <div *ngFor="let item of user | async">\n\n    <ion-item *ngIf="item.accessLevel == \'user\' ;" text-wrap>\n      <p>Ingresa a la academia para poder visualizar esta sección.</p>\n    </ion-item>\n\n    <ion-item *ngIf="item.accessLevel == \'admin\';">\n      <app-news></app-news>\n      <announcement-button></announcement-button>\n      <prospect-button></prospect-button>\n      <user-button></user-button>\n    </ion-item>\n\n\n    <ion-item *ngIf="item.accessLevel == \'coordi\';">\n      <app-news></app-news>\n      <announcement-button></announcement-button>\n      <prospect-button></prospect-button>\n      <user-button></user-button>\n    </ion-item>\n\n    <ion-item *ngIf="item.accessLevel == \'teacher\';" text-wrap>\n      <teachers-module></teachers-module>\n    </ion-item>       \n\n\n    <ion-item *ngIf="item.accessLevel == \'student\';">\n     <students-module></students-module>\n    </ion-item>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], dashboardPage);
    return dashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(16);
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
    function ProfileComponent(autServ, db, afAuth, alertCtrl) {
        this.autServ = autServ;
        this.db = db;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.userUpdate = {
            imageURL: '',
            phone: '',
            ocupation: '',
            grade: '',
            age: '',
            advertising: '',
            key: ''
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
        this.userUpdate.key = document.getElementById('key').value;
        var item = this.db.object('users/' + this.userUpdate.key);
        var actPhone = document.getElementById('actPhone').value;
        var actGrade = document.getElementById('actGrade').value;
        var actAge = document.getElementById('actAge').value;
        var actOcupation = document.getElementById('actOcupation').value;
        var phone = (this.userUpdate.phone == '') ? actPhone : this.userUpdate.phone;
        var grade = (this.userUpdate.grade == '') ? actGrade : this.userUpdate.grade;
        var age = (this.userUpdate.age == '') ? actAge : this.userUpdate.age;
        var ocupation = (this.userUpdate.ocupation == '') ? actOcupation : this.userUpdate.ocupation;
        var imageURL = document.getElementById('url');
        var currentImage = document.getElementById('urlcurrent').value;
        this.userUpdate.phone = phone;
        this.userUpdate.grade = grade;
        this.userUpdate.age = age;
        this.userUpdate.ocupation = ocupation;
        this.userUpdate.imageURL = (imageURL != null) ? imageURL.value : currentImage;
        item.update({
            imageURL: this.userUpdate.imageURL,
            phone: this.userUpdate.phone,
            ocupation: this.userUpdate.ocupation,
            grade: this.userUpdate.grade,
            age: this.userUpdate.age,
            advertising: this.userUpdate.advertising
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/userprofile/profile.html"*/'\n<ion-content>\n  <div id="container">\n  </div>\n  <ion-list *ngFor="let item of users | async">\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img  src="{{item.imageURL}}">\n          <input type="hidden" id="urlcurrent" value="{{item.imageURL}}">\n        </ion-avatar>\n        <h2 text-wrap > {{item.name + \' \' + item.lastName + \' \'+ item.lastName2 | uppercase}} </h2>\n        \n        <p>Posición: <ion-badge color="orange"><ion-note id="pos">{{item.accessLevel}}</ion-note></ion-badge> </p> \n      </ion-item>\n        <ion-list no-border>\n\n          <ion-list-header>\n            Información\n          </ion-list-header>\n\n          <ion-item>\n            <ion-icon name=\'mail\' item-start></ion-icon>\n            E-mail\n            <ion-note item-end>\n            {{item.email}}\n            </ion-note>\n          </ion-item>\n\n          <ion-item>\n            <ion-toggle [(ngModel)]="phone" name="phone" checked="false"></ion-toggle>\n            <ion-label>\n              Telefono\n            </ion-label>\n            <ion-icon name=\'call\' item-start></ion-icon>\n          </ion-item>\n          <div *ngIf="phone != true; else phoneNumber">\n\n          </div>\n          <ng-template #phoneNumber>\n            <ion-item>\n              <ion-icon name=\'call\' item-start></ion-icon>\n              <input value="{{item.phone}}" readonly>\n\n            </ion-item>\n            <ion-item>\n              <ion-icon name=\'call\' item-start></ion-icon>\n              <input id="phone" type="text" [(ngModel)]="userUpdate.phone" name="phone" placeholder="Agregar: ">\n            </ion-item>\n          </ng-template>\n\n          <ion-item>\n            <ion-icon name=\'alert\' item-start></ion-icon>\n            Estatus\n            <ion-badge item-end color="green"> <ion-note id="pos" item-end>\n            {{item.status}}\n            </ion-note></ion-badge>\n          </ion-item>\n\n<!-- -->\n          <ion-item>\n            <ion-label>\n              Último grado de estudios\n            </ion-label>\n            <ion-toggle [(ngModel)]="grade" name="grade" checked="false"></ion-toggle>\n            <ion-icon name=\'school\' item-start></ion-icon>\n          </ion-item>\n\n          <div *ngIf="grade != true; else lastGrade">\n\n          </div>\n          <ng-template #lastGrade>\n            <ion-item>\n              <ion-icon name=\'school\' item-start></ion-icon>\n              <input  value="{{item.grade}}" readonly> \n\n            </ion-item>\n            <ion-item>\n              <ion-icon name=\'school\' item-start></ion-icon>\n              <input id="grade" type="text" [(ngModel)]="userUpdate.grade" name="grade" placeholder="Actualizar: ">\n            </ion-item>\n\n          </ng-template>\n<!-- -->\n<!-- -->\n          <ion-item>\n            <ion-label>\n              Edad\n            </ion-label>\n            <ion-toggle [(ngModel)]="age" name="age" checked="false"></ion-toggle>\n            <ion-icon name=\'body\' item-start></ion-icon>\n          </ion-item>\n\n          <div *ngIf="age != true; else ageU">\n\n          </div>\n          <ng-template #ageU>\n            <ion-item>\n              <ion-icon name=\'body\' item-start></ion-icon>\n              <input  value="{{item.age}}" readonly>\n            </ion-item>\n            <ion-item>\n              <ion-icon name=\'body\' item-start></ion-icon>\n              <input id="age"type="text" [(ngModel)]="userUpdate.age" name="age" placeholder="Actualizar: ">\n            </ion-item>\n\n          </ng-template>\n<!-- -->\n<!-- -->\n          <ion-item>\n            <ion-label>\n              Ocupación\n            </ion-label>\n            <ion-toggle [(ngModel)]="ocupation" checked="false"></ion-toggle>\n            <ion-icon name=\'folder\' item-start></ion-icon>\n          </ion-item>\n\n          <div *ngIf="ocupation != true; else ocupationU">\n\n          </div>\n          <ng-template #ocupationU>\n            <ion-item>\n                <ion-icon name=\'folder\' item-start></ion-icon>\n                <input  value="{{item.ocupation}}" readonly> \n\n            </ion-item>\n            <ion-item>\n              <ion-icon name=\'folder\' item-start></ion-icon>\n              <input id="ocupation" type="text" [(ngModel)]="userUpdate.ocupation" name="ocupation" placeholder="Actualizar: ">\n            </ion-item>\n\n          </ng-template>\n<!-- -->\n\n          <ion-item>\n            <ion-icon name=\'create\' item-start></ion-icon>\n\n      <ion-label>¿Cómo se enteró de la escuela?</ion-label>\n            <ion-select [(ngModel)]="userUpdate.advertising" name="advertising" item-end>\n              <ion-option value="redes">Redes sociales</ion-option>\n              <ion-option value="conocido">Conocido</ion-option>\n              <ion-option value="cartel">Cartel</ion-option>\n            </ion-select>\n\n\n\n          </ion-item>\n          <input type="hidden"name="key" id="key" value="{{item.key}}">\n          <input type="hidden"name="actPhone" id="actPhone" value="{{item.phone}}">\n            <input type="hidden"name="actGrade" id="actGrade" value="{{item.grade}}">\n            <input type="hidden"name="actAge" id="actAge" value="{{item.age}}">\n            <input type="hidden"name="actOcupation" id="actOcupation" value="{{item.ocupation}}">\n        </ion-list>\n\n       \n        <ion-list *ngIf="item.isStudent == false && item.accessLevel == \'user\'">\n            <ion-item>\n                <input type="text" placeholder="Introduzca código de acceso" > \n              <button ion-button outline item-end icon-left>\n                <ion-icon name="md-send"></ion-icon>\n                Enviar\n              </button>\n            </ion-item>\n          </ion-list>\n\n        <ion-item>\n          <label>Cargar foto de perfil</label>\n        <upload-form></upload-form>\n        </ion-item>\n\n       \n\n        <button type="button" ion-button block (click)="UpdateInfo()" > Actualizar información</button>\n  </ion-list>\n  <!--<ion-list *ngFor="let item of admin | async;">\n    <p *ngIf="item.accessLevel == \'admin\'; else op">\n    Administrador op\n    {{item.name}}\n  </p>\n\n  <ng-template #op>kk</ng-template>\n</ion-list>-->\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/userprofile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__announcements_service__ = __webpack_require__(157);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/announcements/announcements.html"*/'  <ion-content padding >\n    <div id="container">\n    </div>\n\n\n    <ion-item-group>\n      <ion-item-divider  color="light">DESTACADOS</ion-item-divider>\n      <ion-item *ngFor="let it of destacado | async" >\n        <div *ngIf="it.destacado != false">\n          <ion-item color="dark">\n            <ion-icon name="warning" color="yellow"></ion-icon>\n            {{it.title}}\n            </ion-item>\n          <p></p>\n          <ion-item>\n          <p style="text-align:justify" text-wrap>{{it.body}}</p>\n        </ion-item>\n          <ion-item>\n          <ion-icon name="calendar" item-start></ion-icon>\n          <ion-badge item-end color="danger">{{it.createdAt}}</ion-badge>\n        </ion-item>\n        </div>\n      </ion-item>\n    </ion-item-group>\n\n      <ion-item-group>\n        <ion-item-divider  color="light">Hoy</ion-item-divider>\n        <ion-item *ngFor="let item of message | async" >\n    <div *ngIf="item.destacado == false">\n          <ion-item color="dark">\n            <ion-icon name="warning" color="yellow"></ion-icon>\n            {{item.title}}\n          </ion-item>\n          <br>\n          <ion-item>\n          <p style="text-align:justify" text-wrap>{{item.body}}</p>\n          </ion-item>\n          <ion-item>\n          <ion-icon name="calendar" item-start></ion-icon>\n          <ion-badge item-end color="danger">{{item.createdAt}}</ion-badge>\n        </ion-item>\n    </div>\n        </ion-item>\n      </ion-item-group>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/announcements/announcements.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__announcements_service__["a" /* AnnouncementService */]])
    ], AnnouncementComponent);
    return AnnouncementComponent;
}());

//# sourceMappingURL=announcements.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_mision_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_historia_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_reglamento_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_profesoresmodal_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_manual_component__ = __webpack_require__(443);
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
            selector: 'aboutus',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/aboutus.html"*/'<ion-content id="paddinBottom">\n  <ion-list id="paddinBottom2">\n    <!--<button ion-item (click)="presentModal(1)">\n      <ion-icon name="book" item-start></ion-icon>\n    Misión, Visión, Objetivos\n  </button>-->\n    <button ion-item (click)="presentModal(2)">\n      <ion-icon name="calendar" item-start></ion-icon>\n    Historia de la Escuela\n    </button>\n    <button ion-item (click)="presentModal(3)">\n      <ion-icon name="clipboard" item-start></ion-icon>\n    Reglamento\n    </button>\n    <!--<button ion-item (click)="presentModal(4)">\n      <ion-icon name="briefcase" item-start></ion-icon>\n    Profesores\n  </button>-->\n    <!--<button ion-item (click)="presentModal(5)">\n      <ion-icon  name="bookmarks" item-start></ion-icon>\n    Manual de Bienvenida\n  </button>-->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 439:
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
            selector: 'app-mision',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/modals/mision.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content id="paddinBottom">\n<ion-card>\n  <ion-card-header>\n    Misión:\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n  <ion-card-header>\n    Visión:\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n<ion-card-header>\n  Objetivos:\n</ion-card-header>\n<ion-card-content>\n  The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n</ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/modals/mision.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], MisionComponent);
    return MisionComponent;
}());

//# sourceMappingURL=mision.component.js.map

/***/ }),

/***/ 440:
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
            selector: 'app-historia',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/modals/historia.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<ion-card>\n    <ion-slides id="sliderabout">\n      <ion-slide>\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2F4.jpg?alt=media&token=b25e23f8-3c14-4191-ac72-ecd1f472e034" alt="">\n      </ion-slide>\n      <ion-slide>\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2F3.jpg?alt=media&token=14096253-e032-465a-9ffd-955a3607ca7c" alt="">\n      </ion-slide>\n      <ion-slide>\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fabout2.jpg?alt=media&token=27caf2d0-28a7-488d-927e-8c29d999f59b" alt="">\n      </ion-slide>\n      <ion-slide>\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fabout.jpg?alt=media&token=f4814395-d994-4fff-be8e-8066b8716929" alt="">\n      </ion-slide>\n      <ion-slide>\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fabout1.jpg?alt=media&token=598d74be-ab34-4dc7-aca2-f5d0aecfb020" alt="">\n      </ion-slide>\n      <ion-slide>\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fabout3.jpg?alt=media&token=dda619b4-af65-4385-a10c-29d829e54fc5" alt="">\n      </ion-slide>\n      <ion-slide>\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fabout4.jpg?alt=media&token=dc596d1c-91a5-47e6-9313-7767c26c32b2" alt="">\n      </ion-slide>\n    </ion-slides>\n    <ion-card-header>\n      {{title}}\n    </ion-card-header>\n    <ion-card-content style="text-align:justify" text-wrap>\n      {{info}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/modals/historia.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], HistoriaComponent);
    return HistoriaComponent;
}());

//# sourceMappingURL=historia.component.js.map

/***/ }),

/***/ 441:
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
            selector: 'app-reglamento',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/modals/reglamento.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id="paddinBottom">\n<ion-card>\n  <ion-card-header class="center">\n    Estatutos, Reglamentos <br> y Disposiciones Generales\n  </ion-card-header>\n  <ion-card-content class="justify">\n    El centro de Formación Musical, tiene entre sus facultades encauzar las aptitudes artísticas y académicas tanto de niños, jóvenes y adultos, enfocándose así a su formación y desarrollo tanto musical como académico.\nEl presente Reglamento tiene como propósito promover el orden, dentro de un marco educativo, que permita regular el óptimo desarrollo de las actividades musicales y académicas impartidas en la escuela. El cumplimiento de estas normas contribuirá de manera positiva al desarrollo de un ambiente cordial y armónico en la comunidad CFM y además para para la vigilancia y control integral de los bienes muebles e inmuebles que son patrimonio de la Escuela de Música, por lo que es de importancia general y de observancia obligatoria para los alumnos, profesores y personal que forman parte del CFM y Mr. NERD así como para el cuidado de las relaciones afectivas de la #Familia CFM.\n  </ion-card-content>\n  <a  href="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/Reglamento%20Academico%2FReglamento%20CFM.pdf?alt=media&token=22fd1c61-f2fd-4b1c-b613-501735b66702" download="Reglamento">\n  <button ion-button full >Descargar en PDF <ion-icon name="md-download" > </ion-icon></button>\n  </a>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/modals/reglamento.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ReglamentoComponent);
    return ReglamentoComponent;
}());

//# sourceMappingURL=reglamento.component.js.map

/***/ }),

/***/ 442:
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
            selector: 'app-profesores',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/modals/profesoresmodal.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 class="center">Profesores CFM</h2>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%2Fjoaquin.jpg?alt=media&token=6fb53bd0-8854-4342-ad15-a9b7ec354aa8">\n      </ion-avatar>\n      <h2>Joaquin</h2>\n      <p>#ProfesorCFM</p>\n    </ion-item>\n\n    <img src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%2Fjoaquin2.png?alt=media&token=774c09e8-35e8-4a41-8c71-4992ba76952a">\n\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="contact"></ion-icon>\n          <div>Posición: Profesor</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="musical-notes"></ion-icon>\n          <div>Bajo Eléctrico, Guitarra, Ukulele</div>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/modals/profesoresmodal.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ProfesoresComponent);
    return ProfesoresComponent;
}());

//# sourceMappingURL=profesoresmodal.component.js.map

/***/ }),

/***/ 443:
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
            selector: 'app-manual',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/modals/manual.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<h1>MANUAL WORKS!</h1>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/aboutus/modals/manual.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ManualComponent);
    return ManualComponent;
}());

//# sourceMappingURL=manual.component.js.map

/***/ }),

/***/ 444:
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
            selector: 'courses',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/courses/courses.html"*/'<ion-content class="card-background-page">\n\n  <ion-card>\n    <img (click)="info(1)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FBajo.jpg?alt=media&token=21bf3b0d-4624-4a9f-9dcb-ac1ad7d9edee"/>\n    <div class="card-title">Bajo</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n\n  <ion-card>\n    <img (click)="info(2)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FBateria.jpg?alt=media&token=1ad35a67-6dda-4ffd-8c23-e0502f43f620"/>\n    <div class="card-title">Bateria</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n\n  <ion-card>\n    <img (click)="info(3)"  src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FCanto.jpg?alt=media&token=d729267a-3d76-417e-aa5b-da4e88428d36"/>\n    <div class="card-title">Canto</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n\n  <ion-card>\n    <img (click)="info(4)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FDibujo.jpg?alt=media&token=da39d1ae-5e5e-4dbd-81ad-425521cc8bd1"/>\n    <div class="card-title">Dibujo</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n  <ion-card>\n    <img (click)="info(5)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FGuitarra.jpg?alt=media&token=b919dec1-5365-40d5-a550-6a4195e9ee83"/>\n    <div class="card-title">Guitarra eléctrica/acústica</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n  <ion-card>\n    <img (click)="info(6)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FPiano.jpg?alt=media&token=8b0ffe2e-fff9-4582-8e6a-eb9b4e18b2ab"/>\n    <div class="card-title">Piano</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n  <ion-card>\n    <img (click)="info(7)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FSaxofon.jpg?alt=media&token=3067a003-6eb3-4e62-9965-06f0bab64639"/>\n    <div class="card-title">Saxofon</div>\n    <div class="card-subtitle">Adultos y jovenes</div>\n  </ion-card>\n  <ion-card>\n    <img (click)="info(8)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FUkelele.jpg?alt=media&token=871a679f-d02f-489a-b8cc-a47646ed7526"/>\n    <div class="card-title">Ukelele</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n  <ion-card>\n    <img (click)="info(9)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%20op%2FViolin.jpg?alt=media&token=5d829e04-1d30-479d-860d-5d2d5dd56cfa"/>\n    <div class="card-title">Violín</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/courses/courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CoursesComponent);
    return CoursesComponent;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 445:
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
            selector: 'app-directory',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/directory/directory.component.html"*/'<ion-content id="paddinBottom">\n<ion-card id="directorio">\n  <img src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%20op%2Fredessociales.png?alt=media&token=26900c31-9bd1-4340-aac1-39d31c015d88"/>\n  <ion-card-header>\n    <div>\n    <ion-segment [(ngModel)]="menu">\n      <ion-segment-button value="contacto">\n        Contacto\n      </ion-segment-button>\n      <ion-segment-button value="sociales">\n        Social Media\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  </ion-card-header>\n  <ion-card-content>\n    <div [ngSwitch]="menu">\n      <ion-list *ngSwitchCase="\'sociales\'">\n        <ion-item>\n          <h1>Siguenos en nuestras <br> <small>Redes sociales:</small></h1>\n          <br>\n          <a href="https://www.facebook.com/CFM.EscueladeMusica/">\n            <ion-item>\n            <ion-icon name="logo-facebook" item-start></ion-icon>\n              Facebook\n              <ion-badge item-end>+23,000</ion-badge><br><small right>Seguidores</small>\n          </ion-item>\n          </a>\n          <a href="https://twitter.com/CFMvillahermosa">\n            <ion-item>\n              <ion-icon name="logo-twitter" item-start></ion-icon>\n                Twitter\n                <ion-badge item-end>+100</ion-badge><br><small right>Seguidores</small>\n            </ion-item>\n          </a>\n\n            <a href="https://www.instagram.com/cfm.escuelademusica/">\n              <ion-item>\n                <ion-icon name="logo-instagram" item-start></ion-icon>\n                  Instagram\n                  <ion-badge item-end>+400</ion-badge><br><small right>Seguidores</small>\n              </ion-item>\n            </a>\n\n            <a href="https://www.youtube.com/channel/UChTSs5IFNN5a0W5m8oTkP9w">\n              <ion-item>\n                <ion-icon name="logo-youtube" item-start></ion-icon>\n                  Youtube\n                  <ion-badge item-end>+50</ion-badge><br><small right>Seguidores</small>\n              </ion-item>\n            </a>\n          </ion-item>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'contacto\'">\n        <ion-item>\n          <h1>Datos de Contacto:</h1>\n        </ion-item>\n      <a href="https://api.whatsapp.com/send?phone=529934431765">\n        <ion-item>\n          <ion-icon name="logo-whatsapp" item-start></ion-icon>\n            99 34 43 17 65\n            <ion-badge item-end>Enviar Mensaje</ion-badge><small><br>Extensión +52</small>\n        </ion-item>\n      </a>\n      <a href=”tel:3154810”>\n      <ion-item>\n        <ion-icon name="call" item-start></ion-icon>\n          3 15 48 10\n          <ion-badge item-end>¡Llamanos!</ion-badge><small><br>Extensión +993</small>\n      </ion-item>\n      </a>\n      <a href="mailto:centrodeformacionmusicalmx@gmail.com">\n        <ion-item>\n        <ion-icon name="mail" item-start></ion-icon>\n            Correo Corporativo: <br> <small>centrodeformacionmusicalmx@gmail.com</small>\n\n        </ion-item>\n      </a>\n      <a href="http://centrodeformacionmusical.mx/">\n        <ion-item>\n        <ion-icon name="laptop" item-start></ion-icon>\n            <button ion-button full round>Abrir Sitio Web</button>\n            <small class="center">centrodeformacionmusical.mx</small>\n        </ion-item>\n      </a>\n      <a href="https://goo.gl/maps/uYG7gWY9gaM2">\n        <ion-item>\n        <ion-icon name="navigate" item-start></ion-icon>\n            <button ion-button full round>Abrir en Google Maps</button>\n            <small class="center">Av. Heroico Colegio Militar N.125</small>\n            <small class="center">Colonia Atasta</small>\n        </ion-item>\n      </a>\n      </ion-list>\n    </div>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/directory/directory.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], DirectoryComponent);
    return DirectoryComponent;
}());

//# sourceMappingURL=directory.component.js.map

/***/ }),

/***/ 446:
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

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_push_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_list_component__ = __webpack_require__(158);
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
            selector: 'app-news',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/news/news.component.html"*/'<button type="button" ion-button large block color="primary" (click)="OpenModal()" outline name="" value="">Crear noticia</button>\n<button type="button" ion-button large block color="primary" (click)="Op()" outline>Listar noticias creadas</button>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/news/news.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__app_push_service__["a" /* PushService */]])
    ], NewsFormPage);
    return NewsFormPage;
}());

//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ 457:
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

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prospect_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prospect_crud_component__ = __webpack_require__(459);
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
        console.log(this.advSrch);
    };
    ProspectModalComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProspectModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/propects/prospect.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Prospectos\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item>\n<button type="button" large block ion-button (click)="openCreatorProspectForm()"> Crear prospecto </button>\n</ion-item>\n<!--d-->\n\n\n\n<!--sss-->\n<ion-searchbar (keyup)="getItems($event)" ></ion-searchbar>\n\n<ion-item >\n  <ion-label  >Estadística del día</ion-label>\n  <div class="chart-container" style="position: relative; height:40vh; width:80vw">\n      <canvas id="chart"></canvas>\n  </div>\n</ion-item>\n\n\n\n\n\n<ion-item>\n  <ion-label>Busqueda avanzada</ion-label>\n  <ion-toggle color="secondary" [(ngModel)]="advSrch" checked="false"></ion-toggle>\n</ion-item>\n\n\n<div *ngIf="advSrch">\n  <ion-item>\n    <ion-label>Buscar por:</ion-label>\n    <ion-select  [(ngModel)]="properties.property">\n      <ion-option value="attended">Atendió</ion-option>\n      <ion-option value="age">Edad </ion-option>\n      <ion-option value="state">Estado </ion-option>\n      <ion-option value="status">Estatus </ion-option>\n      <ion-option value="course">Curso</ion-option>\n      <ion-option value="source">Fuente</ion-option>\n      <ion-option value="lastname">Apellido paterno</ion-option>\n      <ion-option value="lastname2">Apellido materno</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item >\n    <label>Cuando sea:</label>\n    <input [(ngModel)]="properties.textProperty" placeholder="De acuerdo a...">\n  </ion-item>\n\n<ion-item>\n  <button type="button" (click)="searchProspectByProperty()" ion-button block>Buscar</button>\n</ion-item>\n\n</div>\n\n<!--Resultados de busqueda-->\n<ion-list>\n<ion-item-group >\n<ion-item-divider style="text-align:center;" color="light">Prospectos del día</ion-item-divider>\n<ion-item-sliding *ngFor="let item of list | async; index as i;" [attr.data-index]="i">\n  <ion-item >\n      <p>{{ i+1 + ". "+ item.name + " " + item.lastname +" " +item.phone}}</p>\n  </ion-item>\n\n<ion-item-options  side="right">\n    <button (click)="editProspect(item)" ion-button color="secondary">\n      <ion-icon name="open"></ion-icon>\n      Editar\n    </button>\n    <button (click)="deleteProspect(item)" ion-button  color="danger">\n      <ion-icon name="trash"></ion-icon>\n      Eliminar\n    </button>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-item-group>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/propects/prospect.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__prospect_service__["a" /* ProspectService */]])
    ], ProspectModalComponent);
    return ProspectModalComponent;
}());

//# sourceMappingURL=prospect.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectCrudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prospect_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prospect__ = __webpack_require__(674);
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
            selector: "prospect-crud",template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/propects/prospect-crud.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Prospectos\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<!--Si no va a editar-->\n  <ion-list *ngIf="isEditing == false; else editing">\n\n    <ion-item>\n      <input placeholder="Nombre" [(ngModel)]="currentProspect.name" name="name" type="text">\n    </ion-item>\n\n    <ion-item>\n      <input placeholder="Apellido paterno" [(ngModel)]="currentProspect.lastname" name="lastname" type="text">\n    </ion-item>\n\n    <ion-item>\n      <input placeholder="Apellido Materno"  [(ngModel)]="currentProspect.lastname2" name="lastname2" type="text">\n    </ion-item>\n\n    <ion-item>\n      <input placeholder="Edad" [(ngModel)]="currentProspect.age" name="age" type="text">\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Estado</ion-label>\n      <ion-select [(ngModel)]="currentProspect.state" name="state">\n        <ion-option value="si">Si</ion-option>\n        <ion-option value="nn">No</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <input placeholder="Telefono" [(ngModel)]="currentProspect.phone" name="phone" type="text">\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Estatus</ion-label>\n      <ion-select [(ngModel)]="currentProspect.status" name="status">\n        <ion-option value="debil">Débil</ion-option>\n        <ion-option value="interesado">Interesado</ion-option>\n        <ion-option value="inscrito">Inscrito</ion-option>\n        <ion-option value="muerto">Muerto</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Atendió</ion-label>\n      <ion-select [(ngModel)]="currentProspect.attended" name="attended">\n        <ion-option *ngFor="let item of coordi | async" value="{{item.name}}">{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Cursos</ion-label>\n      <ion-select [(ngModel)]="currentProspect.course" name="course">\n        <ion-option *ngFor="let item of cursos;" value="{{item}}">{{item}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <textarea rows=\'5\' [(ngModel)]="currentProspect.coment" name="coment" data-min-rows=\'3\' name="coment" placeholder=\'Comentario...\' required></textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Fuente</ion-label>\n      <ion-select [(ngModel)]="currentProspect.source" name="source">\n        <ion-option value="inboxfb">INBOX FB</ion-option>\n        <ion-option value="whatsapp">WHATSAPP</ion-option>\n        <ion-option value="comentariofb">COMENTARIO</ion-option>\n        <ion-option value="database">BASE DE DATOS</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n        <ion-icon name="logo-usd" item-start></ion-icon>\n          Precio\n        <input [(ngModel)]="currentProspect.price" name="price" type="text">\n      </ion-item>\n\n\n      <button type="button" ion-button block (click)="createNewProspect()" > Crear prospecto </button>\n\n  </ion-list>\n\n<ng-template #editing>\n\n      <ion-item>\n        <input  placeholder="Nombre" [(ngModel)]="item.name" name="name" type="text">\n      </ion-item>\n\n      <ion-item>\n        <input placeholder="Apellido paterno"  [(ngModel)]="item.lastname" name="lastname" type="text">\n      </ion-item>\n\n      <ion-item>\n        <input  placeholder="Apellido materno" [(ngModel)]="item.lastname2" name="lastname2" type="text">\n      </ion-item>\n\n      <ion-item>\n        <input placeholder="Edad" [(ngModel)]="item.age" name="age" type="text">\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Estado</ion-label>\n        <ion-select [(ngModel)]="item.state" name="state">\n          <ion-option value="si">Si</ion-option>\n          <ion-option value="nn">No</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <input placeholder="Telefono" [(ngModel)]="item.phone" name="phone" type="text">\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Estatus</ion-label>\n        <ion-select [(ngModel)]="item.status" name="status">\n          <ion-option value="debil">Débil</ion-option>\n          <ion-option value="interesado">Interesado</ion-option>\n          <ion-option value="inscrito">Inscrito</ion-option>\n          <ion-option value="muerto">Muerto</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Atendió</ion-label>\n        <ion-select [(ngModel)]="item.attended" name="attended">\n          <ion-option *ngFor="let item of coordi | async" value="{{item.name}}">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Cursos</ion-label>\n        <ion-select [(ngModel)]="item.course" name="course">\n          <ion-option *ngFor="let item of cursos;" value="{{item}}">{{item}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-item>\n        <textarea rows=\'5\' [(ngModel)]="item.coment" name="coment" data-min-rows=\'3\' name="coment" placeholder=\'Comentario...\' required></textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Fuente</ion-label>\n        <ion-select [(ngModel)]="item.source" name="source">\n          <ion-option value="inboxfb">INBOX FB</ion-option>\n          <ion-option value="whatsapp">WHATSAPP</ion-option>\n          <ion-option value="comentariofb">COMENTARIO</ion-option>\n          <ion-option value="database">BASE DE DATOS</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-item>\n          <ion-icon name="logo-usd" item-start></ion-icon>\n            Precio\n          <input [(ngModel)]="item.price" name="price" type="text">\n        </ion-item>\n\n\n        <button type="button" ion-button block (click)="editCurrentProspect(item)" > Editar prospecto </button>\n\n</ng-template>\n\n  <!--Si va a editar-->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/propects/prospect-crud.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__prospect_service__["a" /* ProspectService */]])
    ], ProspectCrudComponent);
    return ProspectCrudComponent;
}());

//# sourceMappingURL=prospect-crud.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_crud_component__ = __webpack_require__(461);
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
    UserModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/Users/user.modal.component.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Usuarios\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancelar</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  <ion-item>\n  <!--<button type="button" large block ion-button (click)="openCreatorProspectForm()"> Crear usuario </button>-->\n  </ion-item>\n  <!--d-->\n  \n  \n  \n  <!--sss-->\n  <ion-searchbar (keyup)="getItems($event)" ></ion-searchbar>\n  \n <!-- <ion-item >\n    <ion-label  >Estadística del día</ion-label>\n    <div class="chart-container" style="position: relative; height:40vh; width:80vw">\n        <canvas id="chart"></canvas>\n    </div>\n  </ion-item>\n-->\n  \n  <ion-item>\n    <ion-label>Busqueda avanzada</ion-label>\n    <ion-toggle color="secondary" [(ngModel)]="advSrch" checked="false"></ion-toggle>\n  </ion-item>\n  \n  \n  <div *ngIf="advSrch">\n    <ion-item>\n      <ion-label>Buscar por:</ion-label>\n      <ion-select  [(ngModel)]="properties.property">\n        <ion-option value="accessLevel">Nivel de acceso</ion-option>\n        <ion-option value="course">Curso </ion-option>\n        <ion-option value="email">E-mail</ion-option>\n        <ion-option value="age">Edad </ion-option>\n        <ion-option value="phone">Telefono</ion-option>\n        <ion-option value="tutor">Tutor</ion-option>\n        <ion-option value="lastName">Apellido paterno</ion-option>\n        <ion-option value="lastName2">Apellido materno</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item >\n      <label>Cuando sea:</label>\n      <input [(ngModel)]="properties.textProperty" placeholder="De acuerdo a...">\n    </ion-item>\n  \n  <ion-item>\n    <button type="button" (click)="searchProspectByProperty()" ion-button block>Buscar</button>\n  </ion-item>\n  \n  </div>\n  \n  <!--Resultados de busqueda-->\n  <ion-list>\n  <ion-item-group >\n  <ion-item-divider style="text-align:center;" color="light">Usuarios</ion-item-divider>\n  <ion-item-sliding *ngFor="let item of list | async; index as i;" [attr.data-index]="i">\n    <ion-item >\n        <p>{{ i+1 + ". "+ item.name + " " + item.lastName +" " +item.lastName2}}</p>\n    </ion-item>\n  \n  <ion-item-options  side="right">\n      <button (click)="editProspect(item)" ion-button color="secondary">\n        <ion-icon name="open"></ion-icon>\n        Ver\n      </button>\n      <button (click)="deleteProspect(item)" ion-button  color="danger">\n        <ion-icon name="trash"></ion-icon>\n        Eliminar\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n  </ion-item-group>\n  </ion-list>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/Users/user.modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], UserModal);
    return UserModal;
}());

//# sourceMappingURL=user.modal.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCrud; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(167);
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
    };
    UserCrud.prototype.ngOnInit = function () { };
    UserCrud.prototype.dismiss = function () {
        this.vCtrl.dismiss();
    };
    UserCrud = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-crud',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/Users/user.crud.component.html"*/'<ion-header>\n        <ion-toolbar>\n          <ion-title>\n            Usuario : {{item.name}}\n          </ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancelar</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n<ion-content>\n\n      <ion-item>\n        <input placeholder="Nombre" [(ngModel)]="item.name" name="name" type="text">\n      </ion-item>\n\n      <ion-item>\n        \n        <input placeholder="Apellido paterno" [(ngModel)]="item.lastName" name="lastname" type="text">\n      </ion-item>\n\n      <ion-item>\n        \n        <input placeholder="Apellido materno" [(ngModel)]="item.lastName2" name="lastname2" type="text">\n      </ion-item>\n\n      <ion-item>\n        \n        <input placeholder="Edad" [(ngModel)]="item.age" name="age" type="text">\n      </ion-item>\n\n      <ion-item>\n        \n        <input placeholder="Telefono" [(ngModel)]="item.phone" name="phone" type="text">\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Estatus</ion-label>\n        <ion-select [(ngModel)]="item.accessLevel" name="accessLevel">\n          <ion-option value="admin">Administrador</ion-option>\n          <ion-option value="coordi">Coordinador</ion-option>          \n          <ion-option value="teacher">Maestro</ion-option>\n          <ion-option value="student">Estudiante</ion-option>\n          <ion-option value="user">Usuario</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n\n        <button type="button" ion-button block (click)="editCurrentUser(item)" > Editar prospecto </button>\n</ion-content>'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/Users/user.crud.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], UserCrud);
    return UserCrud;
}());

//# sourceMappingURL=user.crud.component.js.map

/***/ }),

/***/ 462:
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
            selector: 'qualification-name',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/students/qualification.component.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n          Calificaciones\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n    <body>\n    <ion-content >\n      <div class="container"></div>\n      <div *ngFor="let item of qualifications;index as i;" [attr.data-index]="i">\n\n      <ion-card >\n          <ion-item>\n              <h2>Batería</h2>\n              <p>November 5, 1955</p>\n            </ion-item>\n\n        <ion-card-content>\n        <div class="row header" >\n          <div class="col">{{item.atribute}}: </div>\n          <div class="col">{{item.score}}</div>\n        </div>\n      </ion-card-content>\n  </ion-card>\n  \n</div>\n\n    </ion-content>\n  </body>'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/students/qualification.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], QualificationComponent);
    return QualificationComponent;
}());

//# sourceMappingURL=qualification.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CourseDetail_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__students_services__ = __webpack_require__(465);
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
    ClassesComponent.prototype.DisplayDetails = function (lessonkey) {
        this.Nav.push(__WEBPACK_IMPORTED_MODULE_2__CourseDetail_component__["a" /* CourseDetailComponent */], { lessonkey: lessonkey });
    };
    ClassesComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    ClassesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'classes-name',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/students/classes.component.html"*/'<ion-header>\n        <ion-toolbar>\n          <ion-title>\n              Clases\n          </ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n            \n            <ion-card>\n                    <ion-card-header>\n                     Cursos\n                    </ion-card-header>\n                  \n                    <ion-list *ngFor="let item of groups | async">\n                      <button (click)="DisplayDetails()" ion-item>\n                        <ion-icon name="cart" item-start></ion-icon>\n                        {{item.name}}\n                      </button>\n                    </ion-list>\n                  </ion-card>\n\n      </ion-content>'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/students/classes.component.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__students_services__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__students_services__["a" /* StudentService */]) === "function" && _d || Object])
    ], ClassesComponent);
    return ClassesComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=classes.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailComponent; });
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


var CourseDetailComponent = (function () {
    function CourseDetailComponent(viewCtl) {
        this.viewCtl = viewCtl;
    }
    CourseDetailComponent.prototype.ngOnInit = function () { };
    CourseDetailComponent.prototype.dismiss = function () {
        this.viewCtl.dismiss();
    };
    CourseDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'courseDetail-name',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/students/courseDetail.component.html"*/'<ion-header>\n        <ion-toolbar>\n          <ion-title>\n              Detalles de grupo: \n          </ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n            \n            <ion-card text-wrap>\n                    <ion-item>\n                      <ion-avatar item-start>\n                        <img src="img/marty-avatar.png">\n                      </ion-avatar>\n                      <h2>Marty McFly</h2>\n                      <p>November 5, 1955</p>\n                    </ion-item>\n                  \n                    <ion-card-content>\n                      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n                    </ion-card-content>\n                  \n                    <ion-row>\n                      <ion-col>\n                        <button ion-button icon-left clear small>\n                          <ion-icon name="thumbs-up"></ion-icon>\n                          <div>12 Likes</div>\n                        </button>\n                      </ion-col>\n                      <ion-col>\n                        <button ion-button icon-left clear small>\n                          <ion-icon name="md-cloud-download"></ion-icon>\n                          <div>Recurso compartido</div>\n                        </button>\n                      </ion-col>\n                      <ion-col center text-center>\n                        <ion-note>\n                          11h ago\n                        </ion-note>\n                      </ion-col>\n                    </ion-row>\n                  \n                  </ion-card>\n\n      </ion-content>'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/students/courseDetail.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());

//# sourceMappingURL=CourseDetail.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(21);
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
    StudentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], StudentService);
    return StudentService;
}());

//# sourceMappingURL=students.services.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teachers_groupsDetails_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teachers_groupForm_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teachers_services__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teachers_members_component__ = __webpack_require__(470);
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
            selector: 'gp-admin',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/groupAdmin.component.html"*/'<ion-header>\n        <ion-toolbar>\n          <ion-title>\n              Grupos \n          </ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n          <ion-buttons end>\n                <button (click)="OpenCreateGroupForm()" ion-button >\n                        <ion-icon name="add-circle" ></ion-icon>\n                      </button>\n              </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n            \n            <ion-card text-wrap *ngFor="let item of groups | async" >\n                    <ion-item>\n                      <h2>{{item.name }}</h2>\n                      <h4>Materia: {{item.course}} </h4>\n                      <p >{{item.date}}</p>\n                      <p hidden  >{{item.groupkey}}</p>\n                    </ion-item>\n                  \n                    <ion-card-content>\n                        <ion-list>\n                            <ion-list-header>\n                                <button ion-button (click)="openMembers(item.groupkey,item.name)" >Integrantes</button>\n                              </ion-list-header>\n\n                            <ion-item-sliding *ngFor="let member of groupMembers | async" >\n                                <ion-item>\n                                  <ion-avatar  item-start>\n                                    <img src="{{member.imageURL}}">\n                                  </ion-avatar>\n                                  <h2>{{member.name}}</h2>\n                                </ion-item>\n                                <ion-item-options side="right">\n                                  <button ion-button color="danger">\n                                    <ion-icon name="trash"></ion-icon>\n                                    Borrar\n                                  </button>\n                                </ion-item-options>\n                              </ion-item-sliding>\n                          </ion-list>\n                    </ion-card-content>\n                  \n                    <ion-row>\n                        <ion-col>\n                          <button (click)="this.tchSrv.deleteGroup(item.groupkey)" ion-button icon-left clear >\n                              <ion-icon color="danger" name="trash"></ion-icon>\n                          </button>\n                        </ion-col>\n                        <ion-col>\n                            <button (click)="OpenDetails(item.groupkey)" ion-button icon-right clear >\n                                Lecciones\n                                <ion-icon name="md-arrow-round-forward"></ion-icon>\n                            </button>\n                          </ion-col>\n                      </ion-row>\n\n                      \n\n                    </ion-card>\n\n\n      </ion-content>'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/groupAdmin.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__teachers_services__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], GroupAdminComponent);
    return GroupAdminComponent;
}());

//# sourceMappingURL=groupAdmin.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teachers_lessonForm_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teachers_services__ = __webpack_require__(53);
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
            selector: 'group-details',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/groupsDetails.component.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n          Lecciones agregadas\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end>\n            <button (click)="OpenLessonCreator(groupkey)" ion-button >\n                    <ion-icon name="add-circle" ></ion-icon>\n                  </button>\n          </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n        \n        <ion-card *ngFor="let item of lessons | async" text-wrap>\n           \n                <ion-item>\n                  <h2>{{item.name}}</h2>\n                  <p>{{item.createdAt}}</p>\n                </ion-item>\n              \n                <ion-card-content text-wrap>\n                  {{item.bodytext}}\n                </ion-card-content>\n              \n                <ion-row>\n                    <ion-col>\n                      <button (click)="this.tchSrv.deleteLesson(groupkey,item.key)" ion-button icon-left clear small>\n                          <ion-icon color="danger" name="trash"></ion-icon>\n                      </button>\n                    </ion-col>\n\n                    <ion-col>\n                            <a  href="{{item.url}}" download="{{item.name}}">\n                              <button ion-button icon-left clear small >\n                                Recurso Compartido \n                                \n                                <ion-icon name="md-cloud-download"></ion-icon>\n                              </button>\n                              </a>\n                          \n                       \n                      </ion-col>\n                    \n                      <ion-col>\n                          <button (click)="Edit(item.key)" ion-button icon-left clear small>\n                            <ion-icon name="build"></ion-icon>\n                            <div>Editar</div>\n                          </button>\n                        </ion-col>\n\n                  </ion-row>\n              </ion-card>\n\n  </ion-content>'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/groupsDetails.component.html"*/
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

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teachers_services__ = __webpack_require__(53);
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
            selector: 'lesson-form',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/lessonForm.component.html"*/'<ion-header>\n        <ion-toolbar>\n          <ion-title *ngIf="!edit;else editTitle">\n              Crear lección\n          </ion-title>\n          <ng-template #editTitle>\n              <ion-title >\n                  Editar lección\n              </ion-title>\n          </ng-template>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n            \n            <form [formGroup]="lessonForm">\n                    <ion-list no-lines>\n                  <ion-row>\n                      <ion-col col-12>\n                    <ion-item>\n                      <input autocorrect="on"  type="text" placeholder="Nombre de lección" formControlName="name" >\n                    </ion-item>\n                    </ion-col>\n                  <ion-col col-12>\n                      <h2 text-center>Contenido de lección</h2>\n                  </ion-col>\n                <ion-col col-12>\n                    <ion-card>\n                        <ion-card-header>\n                                \n                        </ion-card-header>\n                        \n                        <ion-card-content>\n                                <ion-item>\n                                        <textarea rows=\'5\' data-min-rows=\'3\' formControlName="body" placeholder=\'Cuerpo de lección\' required></textarea>\n                                      </ion-item>\n\n                                <upload-form>\n                                </upload-form>\n                    </ion-card-content>\n\n                    </ion-card>\n                    </ion-col>\n\n                  </ion-row>\n                  </ion-list>\n                  <button  *ngIf="!edit;else editButton" type="button" (click)="saveLesson()" ion-button outline block >Crear lección</button>\n                  <ng-template #editButton>\n                      <button  type="button" (click)="editLesson(lessonkey)" ion-button outline block >Editar lección</button>\n                  </ng-template>\n                  </form>\n    \n      </ion-content>'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/lessonForm.component.html"*/
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

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teachers_services__ = __webpack_require__(53);
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
        this.members = [];
        this.membersuid = [];
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
            this.tchSrv.saveGroup(this.groupForm.value.name, this.groupForm.value.course, this.members, this.membersuid);
            this.viewCtl.dismiss();
        }
    };
    GroupFormComponent.prototype.getValueEachMember = function (id, uid) {
        var memberItem = document.getElementById(id);
        if (memberItem.checked) {
            this.members.push(id);
            this.membersuid.push(uid);
        }
        else {
            this.deleteMembers(id);
        }
        this.displayMembers();
    };
    GroupFormComponent.prototype.displayMembers = function () {
        console.log(this.members);
        console.log(this.membersuid);
    };
    GroupFormComponent.prototype.deleteMembers = function (id) {
        for (var index = 0; index < this.members.length; index++) {
            if (this.members[index] == id) {
                this.membersuid.splice(index, 1);
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
            selector: 'GroupForm',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/groupForm.component.html"*/'<ion-header>\n        <ion-toolbar>\n          <ion-title>\n              Crear grupo\n          </ion-title>\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n            \n            <form [formGroup]="groupForm">\n                    <ion-list no-lines>\n                  <ion-row>\n                      <ion-col col-12>\n                    <ion-item>\n                      <input autocorrect="on"  type="text" placeholder="Nombre grupo ej: Bateria-S1, etc... " formControlName="name" >\n                    </ion-item>\n                    </ion-col>\n                    <ion-col col-12>\n                      <ion-item>\n                        <ion-label>Materia</ion-label>\n                        <ion-select formControlName="course">\n                          <ion-option value="bajo">BAJO</ion-option>\n                          <ion-option value="bateria">BATERIA</ion-option>\n                          <ion-option value="canto">CANTO</ion-option>\n                          <ion-option value="dibujo">DIBUJO</ion-option>\n                          <ion-option value="guitarra">GUITARRA</ion-option>\n                          <ion-option value="piano">PIANO</ion-option>\n                          <ion-option value="saxofon">SAXOFON</ion-option>\n                          <ion-option value="ukulele">UKULELE</ion-option>\n                          <ion-option value="violin">VIOLIN</ion-option>\n                        </ion-select>\n                      </ion-item>\n                      </ion-col>\n                  <ion-col col-12>\n                      <h2 text-center>Integrantes</h2>\n                  </ion-col>\n                <ion-col col-12>\n\n                   \n\n                    </ion-col>\n\n                  </ion-row>\n                  </ion-list>\n                </form>\n\n                <ion-card>\n                    <ion-card-header>\n                            <ion-searchbar (keyup)="getItems($event)" ></ion-searchbar>\n                    </ion-card-header>\n                    \n                    <ion-card-content>\n                    <ion-list no-lines>\n                            <ion-item *ngFor="let item of students | async;  i as index" text-wrap>\n                              <p id="{{item.uid}}"></p>\n                              <ion-avatar item-start>\n                                    <img src="{{item.imageURL}}">\n                              </ion-avatar>\n                              <ion-label>{{item.name +" " + item.lastName + " " + item.lastName2}}</ion-label>\n                              <input type="checkbox" id="{{item.key}}" (click)="getValueEachMember(item.key,item.uid)" item-end color="secondary" > \n                            </ion-item>\n                    </ion-list>\n                </ion-card-content>\n\n                </ion-card>\n\n                  <button type="button" (click)="createGroup()" ion-button outline block >Crear grupo</button>\n                  \n    \n      </ion-content>'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/groupForm.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__teachers_services__["a" /* TeacherService */]])
    ], GroupFormComponent);
    return GroupFormComponent;
}());

//# sourceMappingURL=groupForm.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teachers_services__ = __webpack_require__(53);
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
            selector: 'member-name',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/member.component.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n          Integrantes \n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end>\n            <button (click)="openSearch()" ion-button >\n                    <ion-icon *ngIf="!search; else remove"  name="add-circle" ></ion-icon>\n                    <ng-template #remove >\n                        <ion-icon color="danger"  name="md-remove" ></ion-icon>\n                    </ng-template>\n                  </button>\n          </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n        \n        <ion-card text-wrap >\n                <ion-card-content>\n                    <ion-list>\n                        <ion-list-header>\n                                <ion-searchbar *ngIf="search" (keyup)="getItems($event)"></ion-searchbar>\n                          </ion-list-header>\n                          <h2 text-center>Integrantes actuales</h2>\n                        <ion-item-sliding *ngFor="let item of groupMembers | async" >\n                            <ion-item>\n                              <ion-avatar  item-start>\n                                <img src="{{item.imageURL}}">\n                              </ion-avatar>\n                              <h2>{{item.name + " " +item.lastName  +" " + item.lastName2}}</h2>\n                            </ion-item>\n                            <ion-item-options side="right">\n                              <button (click)="deleteMember(id,item.key)" ion-button color="danger">\n                                <ion-icon name="trash"></ion-icon>\n                                Borrar\n                              </button>\n                            </ion-item-options>\n                          </ion-item-sliding>\n                      </ion-list>\n                      <p>Deslice hacia la izquierda para ver opciones</p>\n                </ion-card-content>\n                </ion-card>\n\n                <ion-card text-wrap *ngIf="search">\n                        <ion-list-header no-lines>\n                                Resultados de busqueda:\n                          </ion-list-header>\n                        <ion-card-content>\n                            <ion-list no-lines>\n\n                                <ion-item-sliding *ngFor="let item of members | async" >\n                                    <ion-item>\n                                      <ion-avatar  item-start>\n                                        <img src="{{item.imageURL}}">\n                                      </ion-avatar>\n                                      <h2>{{item.name + " " +item.lastName  +" " + item.lastName2}}</h2>\n                                    </ion-item>\n                                    <ion-item-options side="right">\n                                      <button (click)="addMember(id,item.uid,item.key)" ion-button color="primary" clear>\n                                        <ion-icon name="add-circle"></ion-icon>\n                                      </button>\n                                    </ion-item-options>\n                                  </ion-item-sliding>\n                              </ion-list>\n                              <p>Deslice hacia la izquierda para ver opciones</p>\n                        </ion-card-content>\n                        </ion-card>\n  </ion-content>'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/member.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__teachers_services__["a" /* TeacherService */]])
    ], MemberComponent);
    return MemberComponent;
}());

//# sourceMappingURL=members.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(490);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_components_navbar_navbar__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_components_dashboard_dashboard__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_components_options_options__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_components_news_news_list_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_components_news_news_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_components_pageHandler_pageHandler_component__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_userprofile_profile__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_components_uploads_shared_upload_list_upload_list_component__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_components_uploads_shared_upload_form_upload_form_component__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_components_uploads_shared_upload_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_components_news_news_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_components_sort_reverse__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_components_modal_modal__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_components_news_news_list_service__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_announcements_announcements__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_announcements_announcement_crud__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_aboutus_aboutus__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_courses_courses__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcements_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_propects_prospect_button__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_propects_prospect_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_propects_prospect_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_propects_prospect_crud_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_Users_user_button__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_Users_user_crud_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_Users_user_modal_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_Users_user_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_students_students_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_students_students_services__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_students_qualification_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_students_classes_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_students_CourseDetail_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_teachers_groupAdmin_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_teachers_teachers_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_teachers_groupsDetails_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_teachers_groupForm_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_teachers_lessonForm_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_teachers_teachers_services__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_teachers_members_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_directory_directory_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_aboutus_modals_mision_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_aboutus_modals_historia_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_aboutus_modals_reglamento_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_aboutus_modals_profesoresmodal_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_aboutus_modals_manual_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_angularfire2__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61_angularfire2_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_fcm__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ionic_native_push__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_local_notifications__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__push_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_onesignal__ = __webpack_require__(679);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//components - Dwigth




















































//COMPONENT - CARLOS






//services








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
                __WEBPACK_IMPORTED_MODULE_53__pages_directory_directory_component__["a" /* DirectoryComponent */],
                __WEBPACK_IMPORTED_MODULE_54__pages_aboutus_modals_mision_component__["a" /* MisionComponent */],
                __WEBPACK_IMPORTED_MODULE_55__pages_aboutus_modals_historia_component__["a" /* HistoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_56__pages_aboutus_modals_reglamento_component__["a" /* ReglamentoComponent */],
                __WEBPACK_IMPORTED_MODULE_57__pages_aboutus_modals_profesoresmodal_component__["a" /* ProfesoresComponent */],
                __WEBPACK_IMPORTED_MODULE_58__pages_aboutus_modals_manual_component__["a" /* ManualComponent */],
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
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_59_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_60_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_61_angularfire2_auth__["b" /* AngularFireAuthModule */],
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
                __WEBPACK_IMPORTED_MODULE_53__pages_directory_directory_component__["a" /* DirectoryComponent */],
                __WEBPACK_IMPORTED_MODULE_54__pages_aboutus_modals_mision_component__["a" /* MisionComponent */],
                __WEBPACK_IMPORTED_MODULE_55__pages_aboutus_modals_historia_component__["a" /* HistoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_56__pages_aboutus_modals_reglamento_component__["a" /* ReglamentoComponent */],
                __WEBPACK_IMPORTED_MODULE_57__pages_aboutus_modals_profesoresmodal_component__["a" /* ProfesoresComponent */],
                __WEBPACK_IMPORTED_MODULE_58__pages_aboutus_modals_manual_component__["a" /* ManualComponent */],
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
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_31__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_60_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcements_service__["a" /* AnnouncementService */],
                __WEBPACK_IMPORTED_MODULE_22__pages_components_uploads_shared_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_23__pages_components_news_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_26__pages_components_news_news_list_service__["a" /* NewsListService */],
                __WEBPACK_IMPORTED_MODULE_62__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_63__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_65__push_service__["a" /* PushService */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_66__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_35__pages_propects_prospect_service__["a" /* ProspectService */],
                __WEBPACK_IMPORTED_MODULE_40__pages_Users_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_42__pages_students_students_services__["a" /* StudentService */],
                __WEBPACK_IMPORTED_MODULE_51__pages_teachers_teachers_services__["a" /* TeacherService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(104);
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
    function TeacherService(db, afauth, alertCtl) {
        this.db = db;
        this.afauth = afauth;
        this.alertCtl = alertCtl;
        this.currentTeacherName = afauth.auth.currentUser.uid;
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
        return this.db.list('students', function (val) { return val
            .orderByChild("name")
            .startAt(name); })
            .valueChanges();
    };
    TeacherService.prototype.addMember = function (groupkey, studentuid, studentkey) {
        this.db.list("groups/" + groupkey).update("members", (_a = {},
            _a[studentuid] = true,
            _a));
        this.db.list("users/" + studentkey).update("/groups", (_b = {},
            _b[groupkey] = true,
            _b));
        var _a, _b;
    };
    TeacherService.prototype.deleteMember = function (groupkey, studentkey) {
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
                        _this.db.list("groups/" + groupkey + "/members/").remove(studentkey);
                        _this.db.list("users/" + studentkey + "/groups/").remove(groupkey);
                    }
                }
            ]
        });
        confirm.present();
    };
    TeacherService.prototype.saveGroup = function (name, course, members, memberuid) {
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
            _this.addMembersToGroup(val.key, members, memberuid);
            var alert = _this.alertCtl.create({
                title: '¡Nuevo grupo!',
                subTitle: '¡Haz creado un grupo enhorabuena!',
                buttons: ['OK']
            });
            alert.present();
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
                    }
                }
            ]
        });
        confirm.present();
    };
    TeacherService.prototype.addMembersToGroup = function (key, member, memberuid) {
        for (var index = 0; index < member.length; index++) {
            var element = member[index];
            var uidElement = memberuid[index];
            this.db.list("groups/" + key).update("members", (_a = {},
                _a[uidElement] = true,
                _a));
            this.db.list("users/" + [element]).update("groups", (_b = {},
                _b[key] = true,
                _b));
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
        });
    };
    TeacherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], TeacherService);
    return TeacherService;
}());

//# sourceMappingURL=teachers.services.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_components_dashboard_dashboard__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_userprofile_profile__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_announcements_announcements__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__push_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_aboutus_aboutus__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_courses_courses__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_directory_directory_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_app__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_auth_service__ = __webpack_require__(68);
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
    function MyApp(platform, statusBar, splashScreen, afAuth, authServ, db, push, alertCtrl, pushServ) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.authServ = authServ;
        this.db = db;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.pushServ = pushServ;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        __WEBPACK_IMPORTED_MODULE_16_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/app/app.html"*/'\n<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu  [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n      </ion-title>\n      <img class="logo" src="assets/imgs/CFM3.png" alt="">\n      <div *ngIf="afAuth.authState | async; let user;">\n        Hola {{ user.email }}!\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="dark">\n    <div id="menu">\n    <div *ngIf="afAuth.authState | async; let user; else showUserPages" >\n      <ion-list >\n        <button menuClose ion-item *ngFor="let p of adminPages" (click)="openPage(p)">\n          <ion-icon  name="{{p.icon}}"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n    </div>\n\n    <ng-template #showUserPages>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of userpages" (click)="openPage(p)">\n          <ion-icon  name="{{p.icon}}"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ng-template>\n\n      </div>\n  </ion-content>\n\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav   [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_17__app_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__push_service__["a" /* PushService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 630:
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

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 319,
	"./af.js": 319,
	"./ar": 320,
	"./ar-dz": 321,
	"./ar-dz.js": 321,
	"./ar-kw": 322,
	"./ar-kw.js": 322,
	"./ar-ly": 323,
	"./ar-ly.js": 323,
	"./ar-ma": 324,
	"./ar-ma.js": 324,
	"./ar-sa": 325,
	"./ar-sa.js": 325,
	"./ar-tn": 326,
	"./ar-tn.js": 326,
	"./ar.js": 320,
	"./az": 327,
	"./az.js": 327,
	"./be": 328,
	"./be.js": 328,
	"./bg": 329,
	"./bg.js": 329,
	"./bm": 330,
	"./bm.js": 330,
	"./bn": 331,
	"./bn.js": 331,
	"./bo": 332,
	"./bo.js": 332,
	"./br": 333,
	"./br.js": 333,
	"./bs": 334,
	"./bs.js": 334,
	"./ca": 335,
	"./ca.js": 335,
	"./cs": 336,
	"./cs.js": 336,
	"./cv": 337,
	"./cv.js": 337,
	"./cy": 338,
	"./cy.js": 338,
	"./da": 339,
	"./da.js": 339,
	"./de": 340,
	"./de-at": 341,
	"./de-at.js": 341,
	"./de-ch": 342,
	"./de-ch.js": 342,
	"./de.js": 340,
	"./dv": 343,
	"./dv.js": 343,
	"./el": 344,
	"./el.js": 344,
	"./en-au": 345,
	"./en-au.js": 345,
	"./en-ca": 346,
	"./en-ca.js": 346,
	"./en-gb": 347,
	"./en-gb.js": 347,
	"./en-ie": 348,
	"./en-ie.js": 348,
	"./en-nz": 349,
	"./en-nz.js": 349,
	"./eo": 350,
	"./eo.js": 350,
	"./es": 351,
	"./es-do": 352,
	"./es-do.js": 352,
	"./es-us": 353,
	"./es-us.js": 353,
	"./es.js": 351,
	"./et": 354,
	"./et.js": 354,
	"./eu": 355,
	"./eu.js": 355,
	"./fa": 356,
	"./fa.js": 356,
	"./fi": 357,
	"./fi.js": 357,
	"./fo": 358,
	"./fo.js": 358,
	"./fr": 359,
	"./fr-ca": 360,
	"./fr-ca.js": 360,
	"./fr-ch": 361,
	"./fr-ch.js": 361,
	"./fr.js": 359,
	"./fy": 362,
	"./fy.js": 362,
	"./gd": 363,
	"./gd.js": 363,
	"./gl": 364,
	"./gl.js": 364,
	"./gom-latn": 365,
	"./gom-latn.js": 365,
	"./gu": 366,
	"./gu.js": 366,
	"./he": 367,
	"./he.js": 367,
	"./hi": 368,
	"./hi.js": 368,
	"./hr": 369,
	"./hr.js": 369,
	"./hu": 370,
	"./hu.js": 370,
	"./hy-am": 371,
	"./hy-am.js": 371,
	"./id": 372,
	"./id.js": 372,
	"./is": 373,
	"./is.js": 373,
	"./it": 374,
	"./it.js": 374,
	"./ja": 375,
	"./ja.js": 375,
	"./jv": 376,
	"./jv.js": 376,
	"./ka": 377,
	"./ka.js": 377,
	"./kk": 378,
	"./kk.js": 378,
	"./km": 379,
	"./km.js": 379,
	"./kn": 380,
	"./kn.js": 380,
	"./ko": 381,
	"./ko.js": 381,
	"./ky": 382,
	"./ky.js": 382,
	"./lb": 383,
	"./lb.js": 383,
	"./lo": 384,
	"./lo.js": 384,
	"./lt": 385,
	"./lt.js": 385,
	"./lv": 386,
	"./lv.js": 386,
	"./me": 387,
	"./me.js": 387,
	"./mi": 388,
	"./mi.js": 388,
	"./mk": 389,
	"./mk.js": 389,
	"./ml": 390,
	"./ml.js": 390,
	"./mr": 391,
	"./mr.js": 391,
	"./ms": 392,
	"./ms-my": 393,
	"./ms-my.js": 393,
	"./ms.js": 392,
	"./mt": 394,
	"./mt.js": 394,
	"./my": 395,
	"./my.js": 395,
	"./nb": 396,
	"./nb.js": 396,
	"./ne": 397,
	"./ne.js": 397,
	"./nl": 398,
	"./nl-be": 399,
	"./nl-be.js": 399,
	"./nl.js": 398,
	"./nn": 400,
	"./nn.js": 400,
	"./pa-in": 401,
	"./pa-in.js": 401,
	"./pl": 402,
	"./pl.js": 402,
	"./pt": 403,
	"./pt-br": 404,
	"./pt-br.js": 404,
	"./pt.js": 403,
	"./ro": 405,
	"./ro.js": 405,
	"./ru": 406,
	"./ru.js": 406,
	"./sd": 407,
	"./sd.js": 407,
	"./se": 408,
	"./se.js": 408,
	"./si": 409,
	"./si.js": 409,
	"./sk": 410,
	"./sk.js": 410,
	"./sl": 411,
	"./sl.js": 411,
	"./sq": 412,
	"./sq.js": 412,
	"./sr": 413,
	"./sr-cyrl": 414,
	"./sr-cyrl.js": 414,
	"./sr.js": 413,
	"./ss": 415,
	"./ss.js": 415,
	"./sv": 416,
	"./sv.js": 416,
	"./sw": 417,
	"./sw.js": 417,
	"./ta": 418,
	"./ta.js": 418,
	"./te": 419,
	"./te.js": 419,
	"./tet": 420,
	"./tet.js": 420,
	"./th": 421,
	"./th.js": 421,
	"./tl-ph": 422,
	"./tl-ph.js": 422,
	"./tlh": 423,
	"./tlh.js": 423,
	"./tr": 424,
	"./tr.js": 424,
	"./tzl": 425,
	"./tzl.js": 425,
	"./tzm": 426,
	"./tzm-latn": 427,
	"./tzm-latn.js": 427,
	"./tzm.js": 426,
	"./uk": 428,
	"./uk.js": 428,
	"./ur": 429,
	"./ur.js": 429,
	"./uz": 430,
	"./uz-latn": 431,
	"./uz-latn.js": 431,
	"./uz.js": 430,
	"./vi": 432,
	"./vi.js": 432,
	"./x-pseudo": 433,
	"./x-pseudo.js": 433,
	"./yo": 434,
	"./yo.js": 434,
	"./zh-cn": 435,
	"./zh-cn.js": 435,
	"./zh-hk": 436,
	"./zh-hk.js": 436,
	"./zh-tw": 437,
	"./zh-tw.js": 437
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
webpackContext.id = 636;

/***/ }),

/***/ 637:
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_service__ = __webpack_require__(68);
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
            selector: 'app-navbar',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/navbar/navbar.html"*/''/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/navbar/navbar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__app_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ 639:
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
            selector: 'app-options',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/options/options.html"*/'<ion-content>\n  <div id="container">\n\n  </div>\n  <p>Estamos en desarrollo</p>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/options/options.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], optionsPage);
    return optionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHandlerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(21);
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
            selector: 'app-pageHandler',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/pageHandler/pageHandler.component.html"*/'<ion-content>\n  <ion-list>\n    <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n      <ion-icon  name="{{p.icon}}"></ion-icon>\n      {{p.title}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/pageHandler/pageHandler.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], PageHandlerComponent);
    return PageHandlerComponent;
}());

//# sourceMappingURL=pageHandler.component.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(457);
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
            selector: 'upload-list',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/uploads/shared/upload-list/upload-list.component.html"*/'<h3>File Uploads</h3>\n\n<div *ngFor="let upload of uploads | async">\n  <strong>{{upload.name}}</strong>\n<button (click)=\'deleteUpload()\' class="button is-danger is-small">Delete</button><br>\n</div>\n\n<loading-spinner *ngIf="showSpinner"></loading-spinner>\n\n<hr>\n\n<upload-form></upload-form>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/uploads/shared/upload-list/upload-list.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_service__["a" /* UploadService */]])
    ], UploadListComponent);
    return UploadListComponent;
}());

//# sourceMappingURL=upload-list.component.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(457);
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
            selector: 'upload-form',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/uploads/shared/upload-form/upload-form.component.html"*/'\n<div *ngIf="currentUpload">\n  <progress class="progress is-success" min=1 max=100 value="{{ currentUpload?.progress }}"></progress>\n  Progress: {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete\n  <input type="hidden" id="url" value="{{currentUpload.url}}">\n  <input type="hidden" id="date" value="{{currentUpload.createdAt}}">\n</div>\n\n\n<div class="box">\n  <h3>Cargar una imagen/archivo/pdf</h3>\n\n  <label>\n    <input type="file" class="button" (change)="detectFiles($event)">\n  </label>\n\n  <hr>\n<!--\n  <h3>Multiple File Upload</h3>\n\n  <label>\n    <input type="file" class="button" (change)="detectFiles($event)" multiple>\n  </label>\n  <button class="button is-primary"\n    [disabled]="!selectedFiles"\n    (click)="uploadMulti()">\n    Upload Multiple\n  </button>-->\n</div>\n<button type="button" ion-button block color="light"\n  [disabled]="!selectedFiles"\n  (click)="uploadSingle()">\n  Cargar imagen\n</button>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/uploads/shared/upload-form/upload-form.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_service__["a" /* UploadService */]])
    ], UploadFormComponent);
    return UploadFormComponent;
}());

//# sourceMappingURL=upload-form.component.js.map

/***/ }),

/***/ 668:
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

/***/ 669:
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
            selector: 'app-modal',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/modal/modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/components/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalComponent);
    return ModalComponent;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 670:
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

/***/ 671:
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

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prospect_component__ = __webpack_require__(458);
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
            template: "\n<button type=\"button\" ion-button large block color=\"primary\" (click)=\"openModalProspects()\" outline>Administrar prospectos</button>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ProspectButtonComponent);
    return ProspectButtonComponent;
}());

//# sourceMappingURL=prospect-button.js.map

/***/ }),

/***/ 674:
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

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_modal_component__ = __webpack_require__(460);
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
    function UserButton(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    UserButton.prototype.ngOnInit = function () { };
    UserButton.prototype.openModalUser = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__user_modal_component__["a" /* UserModal */]);
        modal.present();
    };
    UserButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-button',
            template: "\n    <button type=\"button\" ion-button large block color=\"primary\" (click)=\"openModalUser()\" outline>Administrar usuarios</button>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], UserButton);
    return UserButton;
}());

//# sourceMappingURL=user.button.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qualification_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_component__ = __webpack_require__(463);
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
            selector: 'students-module',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/students/students.component.html"*/'\n<!--\n<ion-card>\n    <ion-card-content>\n      <img src="assets/img/img-icon.png" />\n    </ion-card-content>\n\n    <ion-item>\n      <button ion-button clear item-start>Like</button>\n      <button ion-button clear item-end>Comment</button>\n    </ion-item>\n</ion-card>\n-->\n<div *ngFor="let item of ButtonComponents">\n\n    <button (click)="SetNav(item)" type="button" ion-button block icon-left color="{{item.color}}">\n        <ion-icon name="{{item.icon}}"></ion-icon>\n    {{item.title}}\n    </button>\n    \n</div>'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/students/students.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], StudentsComponent);
    return StudentsComponent;
}());

//# sourceMappingURL=students.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teachers_groupAdmin_component__ = __webpack_require__(466);
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
            selector: 'teachers-module',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/teachers.component.html"*/'<div *ngFor="let item of ButtonComponents">\n        \n                <button (click)="SetNav(item)" type="button" ion-button block icon-left color="{{item.color}}">\n                    <ion-icon name="{{item.icon}}"></ion-icon>\n                {{item.title}}\n                </button>\n                \n            </div>'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/teachers/teachers.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], TeachersComponent);
    return TeachersComponent;
}());

//# sourceMappingURL=teachers.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(21);
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
    function AuthService(firebaseAuth, alertCtrl) {
        this.firebaseAuth = firebaseAuth;
        this.alertCtrl = alertCtrl;
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
            _this.showAlert("Funcionó", "Excelente");
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            _this.showAlert(err.message, "Algo salió mal");
        });
    };
    AuthService.prototype.logout = function () {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_push_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(90);
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
        this.items = afDB.list('news', function (val) { return val.limitToLast(5); }).valueChanges();
    }
    HomePage.prototype.OpenModal = function (key) {
        var modal = this.modalCtrl.create(ModalContentPage, { key: key });
        console.log(key);
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/home/home.html"*/'  <ion-content padding>\n    <div id="container">\n    </div>\n<div  class="head">\n  <h1 >NOTICIAS</h1>\n</div>\n\n<div  *ngFor="let item of items | async ">\n  <img  src="{{item.imageURL}}"/>\n  <ion-item>\n    <h2>\n      {{item.title}}\n    </h2>\n    <p style="text-align:justify" text-wrap>\n      {{item.textBody}}\n    </p>\n    <ion-row>\n       <ion-col>\n         <button ion-button icon-left color="dark" clear small>\n           <ion-icon name="md-calendar"></ion-icon>\n           <div>{{item.createdAt}}</div>\n         </button>\n       </ion-col>\n     </ion-row>\n    <button (click)="OpenModal(item.key)" ion-button color="green" small> Ver más</button>\n  </ion-item>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_push__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(145);
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

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_components_users_user__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(16);
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
    function LoginComponent(navCtrl, params, modalCtrl, afAuth, authServ, formBuilder) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.authServ = authServ;
        this.formBuilder = formBuilder;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    LoginComponent.prototype.Open = function () {
        var modal = this.modalCtrl.create(ModalRegister);
        modal.present();
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    //user:User;
    LoginComponent.prototype.submitForm = function () {
        var user = new __WEBPACK_IMPORTED_MODULE_3__pages_components_users_user__["a" /* User */]();
        user.email = this.loginForm.value.email;
        user.password = this.loginForm.value.password;
        //this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
        this.authServ.login(user.email, user.password);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',template:/*ion-inline-start:"/Users/Lari/Projects/cfm-mobileapp/src/pages/login/login.html"*/'\n<ion-content padding id="form">\n  <div *ngIf="this.afAuth.authState  | async; let user; else showLogin">\n\n      <ion-badge text-wrap color="secondary"><p>Usted ya ha iniciado sesión con: {{user.email}}</p></ion-badge>\n      <ion-item>\n        <button type="button" name="button"ion-button block (click)="authServ.logout()">Cerrar sesión</button>\n      </ion-item>\n  </div>\n\n  <ng-template #showLogin>\n  <form [formGroup]="loginForm">\n  <ion-list>\n<ion-row>\n    <ion-col col-12>\n  <ion-item>\n    <input autocorrect="on"  type="text" placeholder="Correo"formControlName="email" >\n  </ion-item>\n  </ion-col>\n  <ion-col col-12>\n  <ion-item>\n    <input autocorrect="on"  type="password" placeholder="Contraseña" formControlName="password" >\n  </ion-item>\n</ion-col>\n</ion-row>\n  <button type="button" ion-button outline block (click)="submitForm()" >Entrar</button>\n</ion-list>\n<button type="button" ion-button outline block (click)="Open()" >Registrarte</button>\n</form>\n</ng-template>\n</ion-content>\n'/*ion-inline-end:"/Users/Lari/Projects/cfm-mobileapp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__app_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());

var ModalRegister = (function () {
    function ModalRegister(platform, params, viewCtrl, alertCtrl, authServ, db, afAuth, formBuilder) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.authServ = authServ;
        this.db = db;
        this.afAuth = afAuth;
        this.formBuilder = formBuilder;
        this.registerForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*')])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastName2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
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
            var user_1 = new __WEBPACK_IMPORTED_MODULE_3__pages_components_users_user__["a" /* User */]();
            user_1.name = this.registerForm.value.name.trim();
            user_1.lastName = this.registerForm.value.lastName.trim();
            user_1.lastName2 = this.registerForm.value.lastName2.trim();
            user_1.email = this.registerForm.value.email.trim();
            user_1.password = this.registerForm.value.password.trim();
            //this.authServ.signup(user.email,user.password);
            this.afAuth.auth.createUserWithEmailAndPassword(user_1.email, user_1.password).then(function (val) {
                var itemRef = _this.db.list('users');
                itemRef.push({
                    name: user_1.name,
                    lastName: user_1.lastName,
                    lastName2: user_1.lastName2,
                    age: 'N/A',
                    email: user_1.email,
                    password: user_1.password,
                    accessLevel: 'user',
                    advertising: 'N/A',
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
                }).then(function (value) {
                    var updateQuery = _this.db.object('users/' + value.key);
                    updateQuery.update({
                        key: value.key
                    });
                });
                _this.viewCtrl.dismiss();
            });
        }
    };
    ModalRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Registro\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-list no-lines>\n\n<p *ngIf=\"submitAttempt\" style=\"color: #ea6153;\">Por favor rellene todo los campos correctamente.</p>\n\n<form  [formGroup]=\"registerForm\">\n<ion-row>\n\n<ion-col col-12>\n\n<ion-item>\n  <input autocorrect=\"on\" placeholder=\"Nombre\" type=\"text\"  formControlName=\"name\"  >\n</ion-item>\n\n</ion-col>\n\n<ion-col col-12>\n<ion-item>\n  <input autocorrect=\"on\" placeholder=\"Apellido paterno\" type=\"text\"  formControlName=\"lastName\" >\n</ion-item>\n</ion-col>\n\n<ion-col col-12>\n<ion-item>\n  <input autocorrect=\"on\" placeholder=\"Apellido materno\" type=\"text\"  formControlName=\"lastName2\" >\n</ion-item>\n</ion-col>\n\n<ion-col col-12>\n<ion-item>\n  <input autocorrect=\"on\" placeholder=\"e-mail\" type=\"text\"  formControlName=\"email\" >\n</ion-item>\n</ion-col>\n\n<ion-col col-12>\n<ion-item>\n  <input autocorrect=\"on\" placeholder=\"Contrase\u00F1a\" type=\"password\"  formControlName=\"password\" >\n</ion-item>\n</ion-col>\n\n</ion-row>\n\n<ion-item>\n  <button type=\"button\" (click)=\"logForm()\" ion-button block>Registrar</button>\n</ion-item>\n</form>\n\n</ion-list>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__app_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ModalRegister);
    return ModalRegister;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[471]);
//# sourceMappingURL=main.js.map