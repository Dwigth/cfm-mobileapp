webpackJsonp([0],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
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

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdateNewsModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_service__ = __webpack_require__(157);
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
            selector: 'app-news-list',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\news\news-list.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Noticia\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<form>\n\n<ion-item *ngFor="let users of user | async">\n\n<input type="hidden" id="name" value="{{users.name  +  users.lastName}}">\n\n<input type="hidden" id="photoURL" value="{{users.imageURL}}">\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label floating>Titulo</ion-label>\n\n  <ion-input type="text" required [(ngModel)]="news.title"  name="title"></ion-input>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <textarea rows=\'5\' data-min-rows=\'3\' [(ngModel)]="news.textBody" name="textBody" placeholder=\'Cuerpo de noticia\' required></textarea>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <upload-form></upload-form>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <button type="submit" ion-button color="danger" (click)="updateNew()" block>Actualizar</button>\n\n</ion-item>\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\news\news-list.component.html"*/,
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
            template: "\n\n  <ion-content>\n  <div id=\"container\">\n  </div>\n  <ion-list>\n    <ion-item *ngFor=\"let item of news | async\">\n      <ion-thumbnail item-start>\n        <img src=\"{{item.imageURL}}\">\n      </ion-thumbnail>\n      <h2>{{item.title}}</h2>\n      <p>{{item.createdAt}}</p>\n      <button ion-button (click)=\"openNavDetailsPage(item)\" clear item-end>Editar</button>\n      <button ion-button (click)=\"this.newSvc.deleteNews(item)\" clear item-end>Eliminar</button>\n    </ion-item>\n  </ion-list>\n  </ion-content>\n"
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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(19);
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
    }
    NewsService.prototype.createNews = function (news) {
        var _this = this;
        var itemRef = this.db.list('news');
        var addNews = itemRef.push({
            title: news.title,
            imageURL: news.imageURL,
            textBody: news.textBody,
            createdAt: news.createdAt,
            uploadFor: news.uploadFor,
            creatorPhotoURL: news.creatorPhotoURL
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
        var updateNews = itemRef.update({
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
        var deleteNew = itemRef.remove().then(function (value) {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], NewsService);
    return NewsService;
}());

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(630);
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnnouncementCrudComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AnnouncementModalCRUD; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcements_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__announcement__ = __webpack_require__(660);
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
            selector: 'announcement-crud',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\announcements\announcement-crud.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Avisos\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<form *ngIf="isEditing == false; else edit">\n\n<ion-item>\n\n  <ion-label floating>Título</ion-label>\n\n  <ion-input type="text" required [(ngModel)]="announcement.title" name="title" #titu></ion-input>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="announcement.body" name = "body"></textarea>\n\n</ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Aviso Destacado</ion-label>\n\n    <ion-toggle [(ngModel)]="announcement.destacado" name="destacado" checked="false"></ion-toggle>\n\n  </ion-item>\n\n\n\n<ion-item >\n\n  <button type="submit" ion-button color="danger" (click)="CreateAnnouncement()" block>Registrar</button>\n\n</ion-item>\n\n\n\n</form>\n\n\n\n<ng-template #edit>\n\n  <form>\n\n  <ion-item>\n\n    <ion-label floating>Título</ion-label>\n\n    <ion-input type="text" required [(ngModel)]="item.title" name="title" #titu></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="item.body" name = "body"></textarea>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Aviso Destacado</ion-label>\n\n    <ion-toggle [(ngModel)]="item.destacado" name="destacado" checked="false"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item>\n\n<button type="submit" ion-button color="secondary" (click)="editAnnouncement()" block>Editar</button>\n\n</ion-item>\n\n</form>\n\n</ng-template>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\announcements\announcement-crud.html"*/,
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(262);
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






var ProspectService = (function () {
    function ProspectService(db, http, afAuth) {
        this.db = db;
        this.http = http;
        this.afAuth = afAuth;
        this.prospects = [];
        var day = __WEBPACK_IMPORTED_MODULE_5_moment__();
        this.currentDay = Number(day.format('DDD'));
        __WEBPACK_IMPORTED_MODULE_5_moment__["locale"]('es');
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
        var date = __WEBPACK_IMPORTED_MODULE_5_moment__();
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
        console.log(name);
        return this.db.list("prospects", function (val) {
            return val.orderByChild("name").equalTo(name);
        }).valueChanges();
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
        console.log(this.currentDay);
        return this.db.list('prospects', function (val) { return val.orderByChild('day').equalTo(_this.currentDay); }).valueChanges();
    };
    ProspectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ProspectService);
    return ProspectService;
}());

//# sourceMappingURL=prospect.service.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 220:
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
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(19);
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
            selector: 'app-dashboard',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\dashboard\dashboard.html"*/'\n\n<ion-content>\n\n  <div id="container">\n\n\n\n  </div>\n\n\n\n  <div *ngFor="let item of user | async">\n\n\n\n    <ion-item *ngIf="item.accessLevel == \'user\' ;">\n\n      <p>Ingresa a la academia para poder visualizar esta sección.</p>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="item.accessLevel == \'admin\'; else student">\n\n      <app-news></app-news>\n\n      <announcement-button></announcement-button>\n\n      <prospect-button></prospect-button>\n\n      <button  ion-button large block> Administrar usuarios </button>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="item.accessLevel == \'coordi\'; else student">\n\n      <app-news></app-news>\n\n      <announcement-button></announcement-button>\n\n      <prospect-button></prospect-button>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="item.accessLevel == \'master\'; else student">\n\n      <p>Pronto habrá una sección para maestro.</p>\n\n    </ion-item>\n\n\n\n\n\n    <ng-template #student *ngIf="item.accessLevel == \'student\'">\n\n      <button  ion-button color="secondary"  outline block> Calificaciones </button>\n\n    </ng-template>\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], dashboardPage);
    return dashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(19);
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
            selector: 'app-profile',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\userprofile\profile.html"*/'\n\n<ion-content>\n\n  <div id="container">\n\n  </div>\n\n  <ion-list *ngFor="let item of users | async">\n\n\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img  src="{{item.imageURL}}">\n\n          <input type="hidden" id="urlcurrent" value="{{item.imageURL}}">\n\n        </ion-avatar>\n\n        <h2>Nombre: {{item.name + \' \' + item.lastName | uppercase}} </h2>\n\n\n\n        <p>Posición: <ion-note id="pos">{{item.accessLevel}}</ion-note> </p>\n\n      </ion-item>\n\n        <ion-list no-border>\n\n\n\n          <ion-list-header>\n\n            Información\n\n          </ion-list-header>\n\n\n\n          <ion-item>\n\n            <ion-icon name=\'mail\' item-start></ion-icon>\n\n            E-mail\n\n            <ion-note item-end>\n\n            {{item.email}}\n\n            </ion-note>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-toggle [(ngModel)]="phone" name="phone" checked="false"></ion-toggle>\n\n            <ion-label>\n\n              Telefono\n\n            </ion-label>\n\n            <ion-icon name=\'call\' item-start></ion-icon>\n\n          </ion-item>\n\n          <div *ngIf="phone != true; else phoneNumber">\n\n\n\n          </div>\n\n          <ng-template #phoneNumber>\n\n            <ion-item>\n\n              <ion-icon name=\'call\' item-start></ion-icon>\n\n              <ion-input value="{{item.phone}}" readonly></ion-input>\n\n\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name=\'call\' item-start></ion-icon>\n\n              <ion-input id="phone" type="text" [(ngModel)]="userUpdate.phone" name="phone" placeholder="Agregar: "></ion-input>\n\n            </ion-item>\n\n          </ng-template>\n\n\n\n          <ion-item>\n\n            <ion-icon name=\'alert\' item-start></ion-icon>\n\n            Estatus\n\n            <ion-note id="pos" item-end>\n\n            {{item.status}}\n\n            </ion-note>\n\n          </ion-item>\n\n\n\n<!-- -->\n\n          <ion-item>\n\n            <ion-label>\n\n              Último grado de estudios\n\n            </ion-label>\n\n            <ion-toggle [(ngModel)]="grade" name="grade" checked="false"></ion-toggle>\n\n            <ion-icon name=\'school\' item-start></ion-icon>\n\n          </ion-item>\n\n\n\n          <div *ngIf="grade != true; else lastGrade">\n\n\n\n          </div>\n\n          <ng-template #lastGrade>\n\n            <ion-item>\n\n              <ion-icon name=\'school\' item-start></ion-icon>\n\n              <ion-input  value="{{item.grade}}" readonly> </ion-input>\n\n\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name=\'school\' item-start></ion-icon>\n\n              <ion-input id="grade" type="text" [(ngModel)]="userUpdate.grade" name="grade" placeholder="Actualizar: "></ion-input>\n\n            </ion-item>\n\n\n\n          </ng-template>\n\n<!-- -->\n\n<!-- -->\n\n          <ion-item>\n\n            <ion-label>\n\n              Edad\n\n            </ion-label>\n\n            <ion-toggle [(ngModel)]="age" name="age" checked="false"></ion-toggle>\n\n            <ion-icon name=\'body\' item-start></ion-icon>\n\n          </ion-item>\n\n\n\n          <div *ngIf="age != true; else ageU">\n\n\n\n          </div>\n\n          <ng-template #ageU>\n\n            <ion-item>\n\n              <ion-icon name=\'body\' item-start></ion-icon>\n\n              <ion-input  value="{{item.age}}" readonly> </ion-input>\n\n\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name=\'body\' item-start></ion-icon>\n\n              <ion-input id="age"type="text" [(ngModel)]="userUpdate.age" name="age" placeholder="Actualizar: "></ion-input>\n\n            </ion-item>\n\n\n\n          </ng-template>\n\n<!-- -->\n\n<!-- -->\n\n          <ion-item>\n\n            <ion-label>\n\n              Ocupación\n\n            </ion-label>\n\n            <ion-toggle [(ngModel)]="ocupation" checked="false"></ion-toggle>\n\n            <ion-icon name=\'folder\' item-start></ion-icon>\n\n          </ion-item>\n\n\n\n          <div *ngIf="ocupation != true; else ocupationU">\n\n\n\n          </div>\n\n          <ng-template #ocupationU>\n\n            <ion-item>\n\n                <ion-icon name=\'folder\' item-start></ion-icon>\n\n                <ion-input  value="{{item.ocupation}}" readonly> </ion-input>\n\n\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name=\'folder\' item-start></ion-icon>\n\n              <ion-input id="ocupation" type="text" [(ngModel)]="userUpdate.ocupation" name="ocupation" placeholder="Actualizar: "></ion-input>\n\n            </ion-item>\n\n\n\n          </ng-template>\n\n<!-- -->\n\n\n\n          <ion-item>\n\n            <ion-icon name=\'create\' item-start></ion-icon>\n\n\n\n      <ion-label>¿Cómo se enteró de la escuela?</ion-label>\n\n            <ion-select [(ngModel)]="userUpdate.advertising" name="advertising" item-end>\n\n              <ion-option value="redes">Redes sociales</ion-option>\n\n              <ion-option value="conocido">Conocido</ion-option>\n\n              <ion-option value="cartel">Cartel</ion-option>\n\n            </ion-select>\n\n\n\n\n\n          </ion-item>\n\n          <input type="hidden"name="key" id="key" value="{{item.key}}">\n\n          <input type="hidden"name="actPhone" id="actPhone" value="{{item.phone}}">\n\n            <input type="hidden"name="actGrade" id="actGrade" value="{{item.grade}}">\n\n            <input type="hidden"name="actAge" id="actAge" value="{{item.age}}">\n\n            <input type="hidden"name="actOcupation" id="actOcupation" value="{{item.ocupation}}">\n\n        </ion-list>\n\n\n\n        <ion-item>\n\n          <label>Cargar foto de perfil</label>\n\n        <upload-form></upload-form>\n\n        </ion-item>\n\n\n\n        <button type="button" ion-button block (click)="UpdateInfo()" > Actualizar información</button>\n\n  </ion-list>\n\n  <!--<ion-list *ngFor="let item of admin | async;">\n\n    <p *ngIf="item.accessLevel == \'admin\'; else op">\n\n    Administrador op\n\n    {{item.name}}\n\n  </p>\n\n\n\n  <ng-template #op>kk</ng-template>\n\n</ion-list>-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\userprofile\profile.html"*/,
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

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__announcements_service__ = __webpack_require__(155);
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

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_mision_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_historia_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_reglamento_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_profesoresmodal_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_manual_component__ = __webpack_require__(441);
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
            selector: 'aboutus',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\aboutus\aboutus.html"*/'<ion-content id="paddinBottom">\n\n  <ion-list id="paddinBottom2">\n\n    <button ion-item (click)="presentModal(1)">\n\n      <ion-icon name="book" item-start></ion-icon>\n\n    Misión, Visión, Objetivos\n\n    </button>\n\n    <button ion-item (click)="presentModal(2)">\n\n      <ion-icon name="calendar" item-start></ion-icon>\n\n    Historia de la Escuela\n\n    </button>\n\n    <button ion-item (click)="presentModal(3)">\n\n      <ion-icon name="clipboard" item-start></ion-icon>\n\n    Reglamento\n\n    </button>\n\n    <button ion-item (click)="presentModal(4)">\n\n      <ion-icon name="briefcase" item-start></ion-icon>\n\n    Profesores\n\n    </button>\n\n    <button ion-item (click)="presentModal(5)">\n\n      <ion-icon  name="bookmarks" item-start></ion-icon>\n\n    Manual de Bienvenida\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\aboutus\aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'app-mision',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\aboutus\modals\mision.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<h1>MISION WORKS!</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\aboutus\modals\mision.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], MisionComponent);
    return MisionComponent;
}());

//# sourceMappingURL=mision.component.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'app-historia',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\aboutus\modals\historia.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-card>\n\n    <ion-slides id="sliderabout">\n\n      <ion-slide>\n\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%2Fabout.png?alt=media&token=16ea3d70-b133-4c81-a9d0-e80d5ca8f9a8" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%2Fabout1.jpg?alt=media&token=ebd0d5ce-4f23-4d73-bad9-ed6c9a7521f7" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%2Fabout3.jpg?alt=media&token=16bd308d-72c6-4463-a8d2-3e1202bb2760" alt="">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img class="imgabout" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%2Fabout4.jpg?alt=media&token=3b72c181-ebce-4f8e-91b5-adddc0f16f3d" alt="">\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <ion-card-header>\n\n      {{title}}\n\n    </ion-card-header>\n\n    <ion-card-content style="text-align:justify" text-wrap>\n\n      {{info}}\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-item>\n\n      <button (click)="presentModal()" ion-button full round>Organigrama</button>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\aboutus\modals\historia.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], HistoriaComponent);
    return HistoriaComponent;
}());

//# sourceMappingURL=historia.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglamentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'app-reglamento',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\aboutus\modals\reglamento.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<h1>REGLAMENTO WORKS!</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\aboutus\modals\reglamento.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ReglamentoComponent);
    return ReglamentoComponent;
}());

//# sourceMappingURL=reglamento.component.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ProfesoresComponent);
    return ProfesoresComponent;
}());

//# sourceMappingURL=profesoresmodal.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ManualComponent);
    return ManualComponent;
}());

//# sourceMappingURL=manual.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'courses',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\courses\courses.html"*/'<ion-content class="card-background-page">\n\n\n\n  <ion-card>\n\n    <img (click)="info(1)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FBajo.jpeg?alt=media&token=441babe6-e811-48b0-8202-f4d1b24234ef"/>\n\n    <div class="card-title">Bajo</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img (click)="info(2)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FBateria.jpeg?alt=media&token=23bca4a9-db4e-4c81-a76c-d64648749deb"/>\n\n    <div class="card-title">Bateria</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img (click)="info(3)"  src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FCanto.jpeg?alt=media&token=1abb58ea-482c-4c4c-a5e5-b434d00eb4a0"/>\n\n    <div class="card-title">Canto</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img (click)="info(4)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FDibujo.jpeg?alt=media&token=20d789a6-4198-410c-a66a-834016b41b1e"/>\n\n    <div class="card-title">Dibujo</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img (click)="info(5)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FGuitarra.jpeg?alt=media&token=4280c386-864b-4bd3-9d6c-d82f73aee3da"/>\n\n    <div class="card-title">Guitarra eléctrica/acústica</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img (click)="info(6)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FPiano.jpeg?alt=media&token=40ccc3a3-6f7f-4a31-ae2a-87c8e688141a"/>\n\n    <div class="card-title">Piano</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img (click)="info(7)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FSaxofon.jpeg?alt=media&token=39897f08-fbf3-4dae-90c8-4b655ce25916"/>\n\n    <div class="card-title">Saxofon</div>\n\n    <div class="card-subtitle">Adultos y jovenes</div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img (click)="info(8)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FUkelele.jpeg?alt=media&token=a225e5f0-f54b-468b-8577-4b5ed360b54d"/>\n\n    <div class="card-title">Ukelele</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img (click)="info(9)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FViolin.jpeg?alt=media&token=0fdb42db-efc4-4e4f-8a8f-8d31c2b893dd"/>\n\n    <div class="card-title">Violín</div>\n\n    <div class="card-subtitle">Adultos y niños</div>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CoursesComponent);
    return CoursesComponent;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 443:
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
    }
    DirectoryComponent.prototype.ngOnInit = function () { };
    DirectoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-directory',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\directory\directory.component.html"*/'<ion-content id="paddinBottom">\n\n<ion-card id="directorio">\n\n  <img src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/uploads%2Fredessociales.png?alt=media&token=2d3705f7-b3e9-4271-a85e-73d9773113db"/>\n\n  <ion-card-header>\n\n    <div>\n\n    <ion-segment [(ngModel)]="menu">\n\n      <ion-segment-button value="contacto">\n\n        Contacto\n\n      </ion-segment-button>\n\n      <ion-segment-button value="sociales">\n\n        Social Media\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    <div [ngSwitch]="menu">\n\n      <ion-list *ngSwitchCase="\'sociales\'">\n\n        <ion-item>\n\n          <h1>Siguenos en nuestras <br> <small>Redes sociales:</small></h1>\n\n          <br>\n\n          <a href="https://www.facebook.com/CFM.EscueladeMusica/">\n\n            <ion-item>\n\n            <ion-icon name="logo-facebook" item-start></ion-icon>\n\n              Facebook\n\n              <ion-badge item-end>+23,000</ion-badge><br><small right>Seguidores</small>\n\n          </ion-item>\n\n          </a>\n\n          <a href="https://twitter.com/CFMvillahermosa">\n\n            <ion-item>\n\n              <ion-icon name="logo-twitter" item-start></ion-icon>\n\n                Twitter\n\n                <ion-badge item-end>+100</ion-badge><br><small right>Seguidores</small>\n\n            </ion-item>\n\n          </a>\n\n\n\n            <a href="https://www.instagram.com/cfm.escuelademusica/">\n\n              <ion-item>\n\n                <ion-icon name="logo-instagram" item-start></ion-icon>\n\n                  Instagram\n\n                  <ion-badge item-end>+400</ion-badge><br><small right>Seguidores</small>\n\n              </ion-item>\n\n            </a>\n\n\n\n            <a href="https://www.youtube.com/channel/UChTSs5IFNN5a0W5m8oTkP9w">\n\n              <ion-item>\n\n                <ion-icon name="logo-youtube" item-start></ion-icon>\n\n                  Youtube\n\n                  <ion-badge item-end>+50</ion-badge><br><small right>Seguidores</small>\n\n              </ion-item>\n\n            </a>\n\n          </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list *ngSwitchCase="\'contacto\'">\n\n        <ion-item>\n\n          <h1>Datos de Contacto:</h1>\n\n        </ion-item>\n\n      <a href="https://api.whatsapp.com/send?phone=529934431765">\n\n        <ion-item>\n\n          <ion-icon name="logo-whatsapp" item-start></ion-icon>\n\n            99 34 43 17 65\n\n            <ion-badge item-end>Enviar Mensaje</ion-badge><small><br>Extensión +52</small>\n\n        </ion-item>\n\n      </a>\n\n      <a href=”tel:3154810”>\n\n      <ion-item>\n\n        <ion-icon name="call" item-start></ion-icon>\n\n          3 15 48 10\n\n          <ion-badge item-end>¡Llamanos!</ion-badge><small><br>Extensión +993</small>\n\n      </ion-item>\n\n      </a>\n\n      <a href="mailto:centrodeformacionmusicalmx@gmail.com">\n\n        <ion-item>\n\n        <ion-icon name="mail" item-start></ion-icon>\n\n            Correo Corporativo: <br> <small>centrodeformacionmusicalmx@gmail.com</small>\n\n\n\n        </ion-item>\n\n      </a>\n\n      <a href="http://centrodeformacionmusical.mx/">\n\n        <ion-item>\n\n        <ion-icon name="laptop" item-start></ion-icon>\n\n            <button ion-button full round>Abrir Sitio Web</button>\n\n            <small class="center">centrodeformacionmusical.mx</small>\n\n        </ion-item>\n\n      </a>\n\n      <a href="https://goo.gl/maps/uYG7gWY9gaM2">\n\n        <ion-item>\n\n        <ion-icon name="navigate" item-start></ion-icon>\n\n            <button ion-button full round>Abrir en Google Maps</button>\n\n            <small class="center">Av. Heroico Colegio Militar N.125</small>\n\n            <small class="center">Colonia Atasta</small>\n\n        </ion-item>\n\n      </a>\n\n      </ion-list>\n\n    </div>\n\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\directory\directory.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], DirectoryComponent);
    return DirectoryComponent;
}());

//# sourceMappingURL=directory.component.js.map

/***/ }),

/***/ 445:
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

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_push_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_list_component__ = __webpack_require__(156);
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
            selector: 'app-news',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\news\news.component.html"*/'<button type="button" ion-button large block color="primary" (click)="OpenModal()" outline name="" value="">Crear noticia</button>\n\n<button type="button" ion-button large block color="primary" (click)="Op()" outline>Listar noticias creadas</button>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\news\news.component.html"*/,
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
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Noticia\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<form >\n<ion-item *ngFor=\"let users of user | async\">\n<input type=\"hidden\" id=\"name\" value=\"{{users.name  +  users.lastName}}\">\n<input type=\"hidden\" id=\"photoURL\" value=\"{{users.imageURL}}\">\n</ion-item>\n<ion-item>\n  <ion-label floating>Titulo</ion-label>\n  <ion-input type=\"text\" required [(ngModel)]=\"news.title\" name=\"title\"></ion-input>\n</ion-item>\n\n<ion-item>\n  <textarea rows='5' data-min-rows='3' [(ngModel)]=\"news.textBody\" name=\"textBody\" placeholder='Cuerpo de noticia' required></textarea>\n</ion-item>\n\n<ion-item>\n  <upload-form></upload-form>\n</ion-item>\n\n<ion-item>\n  <button type=\"submit\" ion-button color=\"danger\" block (click)=\"uploadNew()\">Registrar</button>\n</ion-item>\n</form>\n</ion-content>\n"
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

/***/ 456:
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

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prospect_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prospect_crud_component__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        this.list = this.prosSrv.get();
    }
    ProspectModalComponent.prototype.ngOnInit = function () { };
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
        this.prosSrv.deleteProspect(item);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\propects\prospect.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Prospectos\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-item>\n\n<button type="button" large block ion-button (click)="openCreatorProspectForm()"> Crear prospecto </button>\n\n</ion-item>\n\n<!--d-->\n\n<!--sss-->\n\n\n\n<ion-searchbar (ionInput)="getItems($event)" ></ion-searchbar>\n\n\n\n<ion-item>\n\n  <ion-label>Busqueda avanzada</ion-label>\n\n  <ion-toggle color="secondary" [(ngModel)]="advSrch" checked="false"></ion-toggle>\n\n</ion-item>\n\n\n\n<div *ngIf="advSrch">\n\n  <ion-item>\n\n    <ion-label>Buscar por:</ion-label>\n\n    <ion-select [(ngModel)]="properties.property">\n\n      <ion-option value="attended">Atendió</ion-option>\n\n      <ion-option value="age">Edad </ion-option>\n\n      <ion-option value="state">Estado </ion-option>\n\n      <ion-option value="status">Estatus </ion-option>\n\n      <ion-option value="course">Curso</ion-option>\n\n      <ion-option value="source">Fuente</ion-option>\n\n      <ion-option value="lastname">Apellido paterno</ion-option>\n\n      <ion-option value="lastname2">Apellido materno</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Cuando sea:</ion-label>\n\n    <ion-input [(ngModel)]="properties.textProperty" placeholder="De acuardo a..."> </ion-input>\n\n  </ion-item>\n\n\n\n<ion-item>\n\n  <button type="button" (click)="searchProspectByProperty()" ion-button block>Buscar</button>\n\n</ion-item>\n\n\n\n</div>\n\n\n\n<!--Resultados de busqueda-->\n\n<ion-list>\n\n<ion-item-group >\n\n<ion-item-divider style="text-align:center;" color="light">Prospectos del día</ion-item-divider>\n\n<ion-item-sliding *ngFor="let item of list  | async">\n\n  <ion-item >\n\n      <p>{{item.name + " " + item.lastname +" " +item.phone}}</p>\n\n  </ion-item>\n\n\n\n<ion-item-options  side="right">\n\n    <button (click)="editProspect(item)" ion-button color="secondary">\n\n      <ion-icon name="open"></ion-icon>\n\n      Editar\n\n    </button>\n\n    <button (click)="deleteProspect(item)" ion-button  color="danger">\n\n      <ion-icon name="trash"></ion-icon>\n\n      Eliminar\n\n    </button>\n\n  </ion-item-options>\n\n\n\n</ion-item-sliding>\n\n</ion-item-group>\n\n</ion-list>\n\n<!--\n\n<form *ngIf="isEditing == false; else edit">\n\n<ion-item>\n\n  <ion-label floating>Título</ion-label>\n\n  <ion-input type="text" required [(ngModel)]="announcement.title" name="title" #titu></ion-input>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="announcement.body" name = "body"></textarea>\n\n</ion-item>\n\n\n\n<ion-item >\n\n  <button type="submit" ion-button color="danger" (click)="CreateAnnouncement()" block>Registrar</button>\n\n</ion-item>\n\n</form>\n\n\n\n<ng-template #edit>\n\n  <form>\n\n  <ion-item>\n\n    <ion-label floating>Título</ion-label>\n\n    <ion-input type="text" required [(ngModel)]="item.title" name="title" #titu></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="item.body" name = "body"></textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n<button type="submit" ion-button color="secondary" (click)="editAnnouncement()" block>Editar</button>\n\n</ion-item>\n\n</form>\n\n</ng-template>\n\n-->\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\propects\prospect.component.html"*/
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

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectCrudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prospect_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prospect__ = __webpack_require__(663);
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
        console.log(this.params.get("item"));
        console.log(this.params.get('isEditing'));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\propects\prospect-crud.component.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Prospectos\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n<!--Si no va a editar-->\n\n  <ion-list *ngIf="isEditing == false; else editing">\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nombre</ion-label>\n\n      <ion-input [(ngModel)]="currentProspect.name" name="name" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Apellido paterno</ion-label>\n\n      <ion-input [(ngModel)]="currentProspect.lastname" name="lastname" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Apellido Materno</ion-label>\n\n      <ion-input [(ngModel)]="currentProspect.lastname2" name="lastname2" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Edad</ion-label>\n\n      <ion-input [(ngModel)]="currentProspect.age" name="age" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Estado</ion-label>\n\n      <ion-select [(ngModel)]="currentProspect.state" name="state">\n\n        <ion-option value="si">Si</ion-option>\n\n        <ion-option value="nn">No</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Telefono</ion-label>\n\n      <ion-input [(ngModel)]="currentProspect.phone" name="phone" type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Estatus</ion-label>\n\n      <ion-select [(ngModel)]="currentProspect.status" name="status">\n\n        <ion-option value="debil">Débil</ion-option>\n\n        <ion-option value="interesado">Interesado</ion-option>\n\n        <ion-option value="inscrito">Inscrito</ion-option>\n\n        <ion-option value="muerto">Muerto</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Atendió</ion-label>\n\n      <ion-select [(ngModel)]="currentProspect.attended" name="attended">\n\n        <ion-option *ngFor="let item of coordi | async" value="{{item.name}}">{{item.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Cursos</ion-label>\n\n      <ion-select [(ngModel)]="currentProspect.course" name="course">\n\n        <ion-option *ngFor="let item of cursos;" value="{{item}}">{{item}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <textarea rows=\'5\' [(ngModel)]="currentProspect.coment" name="coment" data-min-rows=\'3\' name="coment" placeholder=\'Comentario...\' required></textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Fuente</ion-label>\n\n      <ion-select [(ngModel)]="currentProspect.source" name="source">\n\n        <ion-option value="inboxfb">INBOX FB</ion-option>\n\n        <ion-option value="whatsapp">WHATSAPP</ion-option>\n\n        <ion-option value="comentariofb">COMENTARIO</ion-option>\n\n        <ion-option value="database">BASE DE DATOS</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n        <ion-icon name="logo-usd" item-start></ion-icon>\n\n          Precio\n\n        <ion-input [(ngModel)]="currentProspect.price" name="price" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n\n\n      <button type="button" ion-button block (click)="createNewProspect()" > Crear prospecto </button>\n\n\n\n  </ion-list>\n\n\n\n<ng-template #editing>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Nombre</ion-label>\n\n        <ion-input [(ngModel)]="item.name" name="name" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Apellido paterno</ion-label>\n\n        <ion-input [(ngModel)]="item.lastname" name="lastname" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Apellido Materno</ion-label>\n\n        <ion-input [(ngModel)]="item.lastname2" name="lastname2" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Edad</ion-label>\n\n        <ion-input [(ngModel)]="item.age" name="age" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Estado</ion-label>\n\n        <ion-select [(ngModel)]="item.state" name="state">\n\n          <ion-option value="si">Si</ion-option>\n\n          <ion-option value="nn">No</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Telefono</ion-label>\n\n        <ion-input [(ngModel)]="item.phone" name="phone" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Estatus</ion-label>\n\n        <ion-select [(ngModel)]="item.status" name="status">\n\n          <ion-option value="debil">Débil</ion-option>\n\n          <ion-option value="interesado">Interesado</ion-option>\n\n          <ion-option value="inscrito">Inscrito</ion-option>\n\n          <ion-option value="muerto">Muerto</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Atendió</ion-label>\n\n        <ion-select [(ngModel)]="item.attended" name="attended">\n\n          <ion-option *ngFor="let item of coordi | async" value="{{item.name}}">{{item.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Cursos</ion-label>\n\n        <ion-select [(ngModel)]="item.course" name="course">\n\n          <ion-option *ngFor="let item of cursos;" value="{{item}}">{{item}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <textarea rows=\'5\' [(ngModel)]="item.coment" name="coment" data-min-rows=\'3\' name="coment" placeholder=\'Comentario...\' required></textarea>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Fuente</ion-label>\n\n        <ion-select [(ngModel)]="item.source" name="source">\n\n          <ion-option value="inboxfb">INBOX FB</ion-option>\n\n          <ion-option value="whatsapp">WHATSAPP</ion-option>\n\n          <ion-option value="comentariofb">COMENTARIO</ion-option>\n\n          <ion-option value="database">BASE DE DATOS</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n          <ion-icon name="logo-usd" item-start></ion-icon>\n\n            Precio\n\n          <ion-input [(ngModel)]="item.price" name="price" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n\n\n        <button type="button" ion-button block (click)="editCurrentProspect(item)" > Editar prospecto </button>\n\n\n\n</ng-template>\n\n\n\n  <!--Si va a editar-->\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\propects\prospect-crud.component.html"*/,
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

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(478);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_components_navbar_navbar__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_components_dashboard_dashboard__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_components_options_options__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_components_news_news_list_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_components_news_news_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_components_pageHandler_pageHandler_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_userprofile_profile__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_components_uploads_shared_upload_list_upload_list_component__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_components_uploads_shared_upload_form_upload_form_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_components_uploads_shared_upload_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_components_news_news_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_components_sort_reverse__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_components_modal_modal__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_components_news_news_list_service__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_fcm__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_push__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_local_notifications__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__push_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_announcements_announcements__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcement_crud__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_aboutus_aboutus__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_courses_courses__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_onesignal__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_directory_directory_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_aboutus_modals_mision_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_aboutus_modals_historia_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_aboutus_modals_reglamento_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_aboutus_modals_profesoresmodal_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_aboutus_modals_manual_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_angularfire2__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_announcements_announcements_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_propects_prospect_button__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_propects_prospect_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_propects_prospect_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_propects_prospect_crud_component__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//components



































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
                __WEBPACK_IMPORTED_MODULE_31__pages_announcements_announcements__["a" /* AnnouncementComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcement_crud__["b" /* AnnouncementCrudComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_aboutus_aboutus__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_courses_courses__["a" /* CoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcement_crud__["a" /* AnnouncementButton */],
                __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcement_crud__["c" /* AnnouncementModalCRUD */],
                __WEBPACK_IMPORTED_MODULE_47__pages_propects_prospect_button__["a" /* ProspectButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_propects_prospect_component__["a" /* ProspectModalComponent */],
                __WEBPACK_IMPORTED_MODULE_50__pages_propects_prospect_crud_component__["a" /* ProspectCrudComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_directory_directory_component__["a" /* DirectoryComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_aboutus_modals_mision_component__["a" /* MisionComponent */],
                __WEBPACK_IMPORTED_MODULE_38__pages_aboutus_modals_historia_component__["a" /* HistoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_aboutus_modals_reglamento_component__["a" /* ReglamentoComponent */],
                __WEBPACK_IMPORTED_MODULE_40__pages_aboutus_modals_profesoresmodal_component__["a" /* ProfesoresComponent */],
                __WEBPACK_IMPORTED_MODULE_41__pages_aboutus_modals_manual_component__["a" /* ManualComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_42_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_43_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_44_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
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
                __WEBPACK_IMPORTED_MODULE_31__pages_announcements_announcements__["a" /* AnnouncementComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcement_crud__["b" /* AnnouncementCrudComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_courses_courses__["a" /* CoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_aboutus_aboutus__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcement_crud__["a" /* AnnouncementButton */],
                __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcement_crud__["c" /* AnnouncementModalCRUD */],
                __WEBPACK_IMPORTED_MODULE_47__pages_propects_prospect_button__["a" /* ProspectButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_propects_prospect_component__["a" /* ProspectModalComponent */],
                __WEBPACK_IMPORTED_MODULE_50__pages_propects_prospect_crud_component__["a" /* ProspectCrudComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_directory_directory_component__["a" /* DirectoryComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_aboutus_modals_mision_component__["a" /* MisionComponent */],
                __WEBPACK_IMPORTED_MODULE_38__pages_aboutus_modals_historia_component__["a" /* HistoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_aboutus_modals_reglamento_component__["a" /* ReglamentoComponent */],
                __WEBPACK_IMPORTED_MODULE_40__pages_aboutus_modals_profesoresmodal_component__["a" /* ProfesoresComponent */],
                __WEBPACK_IMPORTED_MODULE_41__pages_aboutus_modals_manual_component__["a" /* ManualComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_45__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_43_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_46__pages_announcements_announcements_service__["a" /* AnnouncementService */],
                __WEBPACK_IMPORTED_MODULE_22__pages_components_uploads_shared_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_23__pages_components_news_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_26__pages_components_news_news_list_service__["a" /* NewsListService */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_30__push_service__["a" /* PushService */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_49__pages_propects_prospect_service__["a" /* ProspectService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_components_dashboard_dashboard__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_userprofile_profile__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_announcements_announcements__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__push_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_aboutus_aboutus__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_courses_courses__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_directory_directory_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_onesignal__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase_app__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_auth_service__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//COMPONENTS -CARLOS

//





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, authServ, db, push, alertCtrl, pushServ, oneSignal) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.authServ = authServ;
        this.db = db;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.pushServ = pushServ;
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        var user = afAuth.auth.currentUser;
        __WEBPACK_IMPORTED_MODULE_17_firebase_app__["auth"]().onAuthStateChanged(function (user) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\cfm-mobileapp\src\app\app.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-menu  [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n      </ion-title>\n\n      <img class="logo" src="assets/imgs/CFM3.png" alt="">\n\n      <div *ngIf="afAuth.authState | async; let user;">\n\n        Hola {{ user.email }}!\n\n      </div>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="dark">\n\n    <div id="menu">\n\n    <div *ngIf="afAuth.authState | async; let user; else showUserPages" >\n\n      <ion-list >\n\n        <button menuClose ion-item *ngFor="let p of adminPages" (click)="openPage(p)">\n\n          <ion-icon  name="{{p.icon}}"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <ng-template #showUserPages>\n\n      <ion-list>\n\n        <button menuClose ion-item *ngFor="let p of userpages" (click)="openPage(p)">\n\n          <ion-icon  name="{{p.icon}}"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ng-template>\n\n\n\n      </div>\n\n  </ion-content>\n\n\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav   [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_18__app_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_onesignal__["a" /* OneSignal */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 618:
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

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 317,
	"./af.js": 317,
	"./ar": 318,
	"./ar-dz": 319,
	"./ar-dz.js": 319,
	"./ar-kw": 320,
	"./ar-kw.js": 320,
	"./ar-ly": 321,
	"./ar-ly.js": 321,
	"./ar-ma": 322,
	"./ar-ma.js": 322,
	"./ar-sa": 323,
	"./ar-sa.js": 323,
	"./ar-tn": 324,
	"./ar-tn.js": 324,
	"./ar.js": 318,
	"./az": 325,
	"./az.js": 325,
	"./be": 326,
	"./be.js": 326,
	"./bg": 327,
	"./bg.js": 327,
	"./bm": 328,
	"./bm.js": 328,
	"./bn": 329,
	"./bn.js": 329,
	"./bo": 330,
	"./bo.js": 330,
	"./br": 331,
	"./br.js": 331,
	"./bs": 332,
	"./bs.js": 332,
	"./ca": 333,
	"./ca.js": 333,
	"./cs": 334,
	"./cs.js": 334,
	"./cv": 335,
	"./cv.js": 335,
	"./cy": 336,
	"./cy.js": 336,
	"./da": 337,
	"./da.js": 337,
	"./de": 338,
	"./de-at": 339,
	"./de-at.js": 339,
	"./de-ch": 340,
	"./de-ch.js": 340,
	"./de.js": 338,
	"./dv": 341,
	"./dv.js": 341,
	"./el": 342,
	"./el.js": 342,
	"./en-au": 343,
	"./en-au.js": 343,
	"./en-ca": 344,
	"./en-ca.js": 344,
	"./en-gb": 345,
	"./en-gb.js": 345,
	"./en-ie": 346,
	"./en-ie.js": 346,
	"./en-nz": 347,
	"./en-nz.js": 347,
	"./eo": 348,
	"./eo.js": 348,
	"./es": 349,
	"./es-do": 350,
	"./es-do.js": 350,
	"./es-us": 351,
	"./es-us.js": 351,
	"./es.js": 349,
	"./et": 352,
	"./et.js": 352,
	"./eu": 353,
	"./eu.js": 353,
	"./fa": 354,
	"./fa.js": 354,
	"./fi": 355,
	"./fi.js": 355,
	"./fo": 356,
	"./fo.js": 356,
	"./fr": 357,
	"./fr-ca": 358,
	"./fr-ca.js": 358,
	"./fr-ch": 359,
	"./fr-ch.js": 359,
	"./fr.js": 357,
	"./fy": 360,
	"./fy.js": 360,
	"./gd": 361,
	"./gd.js": 361,
	"./gl": 362,
	"./gl.js": 362,
	"./gom-latn": 363,
	"./gom-latn.js": 363,
	"./gu": 364,
	"./gu.js": 364,
	"./he": 365,
	"./he.js": 365,
	"./hi": 366,
	"./hi.js": 366,
	"./hr": 367,
	"./hr.js": 367,
	"./hu": 368,
	"./hu.js": 368,
	"./hy-am": 369,
	"./hy-am.js": 369,
	"./id": 370,
	"./id.js": 370,
	"./is": 371,
	"./is.js": 371,
	"./it": 372,
	"./it.js": 372,
	"./ja": 373,
	"./ja.js": 373,
	"./jv": 374,
	"./jv.js": 374,
	"./ka": 375,
	"./ka.js": 375,
	"./kk": 376,
	"./kk.js": 376,
	"./km": 377,
	"./km.js": 377,
	"./kn": 378,
	"./kn.js": 378,
	"./ko": 379,
	"./ko.js": 379,
	"./ky": 380,
	"./ky.js": 380,
	"./lb": 381,
	"./lb.js": 381,
	"./lo": 382,
	"./lo.js": 382,
	"./lt": 383,
	"./lt.js": 383,
	"./lv": 384,
	"./lv.js": 384,
	"./me": 385,
	"./me.js": 385,
	"./mi": 386,
	"./mi.js": 386,
	"./mk": 387,
	"./mk.js": 387,
	"./ml": 388,
	"./ml.js": 388,
	"./mr": 389,
	"./mr.js": 389,
	"./ms": 390,
	"./ms-my": 391,
	"./ms-my.js": 391,
	"./ms.js": 390,
	"./mt": 392,
	"./mt.js": 392,
	"./my": 393,
	"./my.js": 393,
	"./nb": 394,
	"./nb.js": 394,
	"./ne": 395,
	"./ne.js": 395,
	"./nl": 396,
	"./nl-be": 397,
	"./nl-be.js": 397,
	"./nl.js": 396,
	"./nn": 398,
	"./nn.js": 398,
	"./pa-in": 399,
	"./pa-in.js": 399,
	"./pl": 400,
	"./pl.js": 400,
	"./pt": 401,
	"./pt-br": 402,
	"./pt-br.js": 402,
	"./pt.js": 401,
	"./ro": 403,
	"./ro.js": 403,
	"./ru": 404,
	"./ru.js": 404,
	"./sd": 405,
	"./sd.js": 405,
	"./se": 406,
	"./se.js": 406,
	"./si": 407,
	"./si.js": 407,
	"./sk": 408,
	"./sk.js": 408,
	"./sl": 409,
	"./sl.js": 409,
	"./sq": 410,
	"./sq.js": 410,
	"./sr": 411,
	"./sr-cyrl": 412,
	"./sr-cyrl.js": 412,
	"./sr.js": 411,
	"./ss": 413,
	"./ss.js": 413,
	"./sv": 414,
	"./sv.js": 414,
	"./sw": 415,
	"./sw.js": 415,
	"./ta": 416,
	"./ta.js": 416,
	"./te": 417,
	"./te.js": 417,
	"./tet": 418,
	"./tet.js": 418,
	"./th": 419,
	"./th.js": 419,
	"./tl-ph": 420,
	"./tl-ph.js": 420,
	"./tlh": 421,
	"./tlh.js": 421,
	"./tr": 422,
	"./tr.js": 422,
	"./tzl": 423,
	"./tzl.js": 423,
	"./tzm": 424,
	"./tzm-latn": 425,
	"./tzm-latn.js": 425,
	"./tzm.js": 424,
	"./uk": 426,
	"./uk.js": 426,
	"./ur": 427,
	"./ur.js": 427,
	"./uz": 428,
	"./uz-latn": 429,
	"./uz-latn.js": 429,
	"./uz.js": 428,
	"./vi": 430,
	"./vi.js": 430,
	"./x-pseudo": 431,
	"./x-pseudo.js": 431,
	"./yo": 432,
	"./yo.js": 432,
	"./zh-cn": 433,
	"./zh-cn.js": 433,
	"./zh-hk": 434,
	"./zh-hk.js": 434,
	"./zh-tw": 435,
	"./zh-tw.js": 435
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
webpackContext.id = 624;

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_service__ = __webpack_require__(67);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__app_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ 627:
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

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHandlerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(27);
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

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(456);
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

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(456);
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
            selector: 'upload-form',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\uploads\shared\upload-form\upload-form.component.html"*/'\n\n<div *ngIf="currentUpload">\n\n  <progress class="progress is-success" min=1 max=100 value="{{ currentUpload?.progress }}"></progress>\n\n  Progress: {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete\n\n  <input type="hidden" id="url" value="{{currentUpload.url}}">\n\n  <input type="hidden" id="date" value="{{currentUpload.createdAt}}">\n\n</div>\n\n\n\n\n\n<div class="box">\n\n  <h3>Cargar una imagen</h3>\n\n\n\n  <label>\n\n    <input type="file" class="button" (change)="detectFiles($event)">\n\n  </label>\n\n\n\n  <hr>\n\n<!--\n\n  <h3>Multiple File Upload</h3>\n\n\n\n  <label>\n\n    <input type="file" class="button" (change)="detectFiles($event)" multiple>\n\n  </label>\n\n  <button class="button is-primary"\n\n    [disabled]="!selectedFiles"\n\n    (click)="uploadMulti()">\n\n    Upload Multiple\n\n  </button>-->\n\n</div>\n\n<button ion-button block color="light"\n\n  [disabled]="!selectedFiles"\n\n  (click)="uploadSingle()">\n\n  Cargar imagen\n\n</button>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\uploads\shared\upload-form\upload-form.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_service__["a" /* UploadService */]])
    ], UploadFormComponent);
    return UploadFormComponent;
}());

//# sourceMappingURL=upload-form.component.js.map

/***/ }),

/***/ 656:
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

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
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

var ModalComponent = (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\components\modal\modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Noticia\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n<form >\n\n<ion-item *ngFor="let users of user | async">\n\n<input type="hidden" id="name" value="{{users.name  +  users.lastName}}">\n\n<input type="hidden" id="photoURL" value="{{users.imageURL}}">\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label floating>Titulo</ion-label>\n\n  <ion-input type="text" required [(ngModel)]="news.title" name="title"></ion-input>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <textarea rows=\'5\' data-min-rows=\'3\' [(ngModel)]="news.textBody" name="textBody" placeholder=\'Cuerpo de noticia\' required></textarea>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <upload-form></upload-form>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <button type="submit" ion-button color="danger" block>Registrar</button>\n\n</ion-item>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\components\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 658:
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

/***/ 660:
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

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prospect_component__ = __webpack_require__(457);
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

/***/ 663:
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(27);
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

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_push_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(19);
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
        this.items = afDB.list('news').valueChanges();
    }
    HomePage.prototype.OpenModal = function (key) {
        var modal = this.modalCtrl.create(ModalContentPage, { key: key });
        console.log(key);
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\home\home.html"*/'  <ion-content padding>\n\n    <div id="container">\n\n    </div>\n\n<div  class="head">\n\n  <h1 >NOTICIAS</h1>\n\n</div>\n\n\n\n<div  *ngFor="let item of items | async | reverse">\n\n  <img  src="{{item.imageURL}}"/>\n\n  <ion-item>\n\n    <h2>\n\n      {{item.title}}\n\n    </h2>\n\n    <p style="text-align:justify" text-wrap>\n\n      {{item.textBody}}\n\n    </p>\n\n    <ion-row>\n\n       <ion-col>\n\n         <button ion-button icon-left color="dark" clear small>\n\n           <ion-icon name="md-calendar"></ion-icon>\n\n           <div>{{item.createdAt}}</div>\n\n         </button>\n\n       </ion-col>\n\n     </ion-row>\n\n    <button (click)="OpenModal(item.key)" ion-button color="green" small> Ver más</button>\n\n  </ion-item>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\home\home.html"*/
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

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_push__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_components_users_user__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(19);
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


var LoginComponent = (function () {
    function LoginComponent(navCtrl, params, modalCtrl, afAuth, authServ) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.authServ = authServ;
        this.user = {
            email: '',
            password: '',
        };
        var user = this.afAuth.auth.currentUser;
    }
    LoginComponent.prototype.Open = function () {
        var modal = this.modalCtrl.create(ModalRegister);
        modal.present();
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    //user:User;
    LoginComponent.prototype.submitForm = function () {
        var user = new __WEBPACK_IMPORTED_MODULE_2__pages_components_users_user__["a" /* User */]();
        user.email = this.user.email;
        user.password = this.user.password;
        this.authServ.login(user.email, user.password);
        console.log(this.user);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',template:/*ion-inline-start:"C:\cfm-mobileapp\src\pages\login\login.html"*/'\n\n<ion-content padding id="form">\n\n  <div *ngIf="this.afAuth.authState  | async; let user; else showLogin">\n\n      <p>Usted ya ha iniciado sesión con: {{user.email}}</p>\n\n      <ion-item>\n\n        <button type="button" name="button"ion-button block (click)="authServ.logout()">Cerrar sesión</button>\n\n      </ion-item>\n\n  </div>\n\n\n\n  <ng-template #showLogin>\n\n  <form (ngSubmit)="submitForm()">\n\n  <ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label floating >Correo</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.email" name="email" required></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Contraseña</ion-label>\n\n    <ion-input type="password" [(ngModel)]="user.password" name="password" required></ion-input>\n\n  </ion-item>\n\n\n\n  <button type="submit" ion-button outline block >Entrar</button>\n\n</ion-list>\n\n<button type="button" ion-button outline block (click)="Open()" >Registrarte</button>\n\n</form>\n\n</ng-template>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\cfm-mobileapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__app_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());

var ModalRegister = (function () {
    //new;
    function ModalRegister(platform, params, viewCtrl, alertCtrl, authServ, db, afAuth) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.authServ = authServ;
        this.db = db;
        this.afAuth = afAuth;
        this.user = {
            name: '',
            lastName: '',
            email: '',
            password: '',
        };
        var user = this.afAuth.auth.currentUser;
    }
    ModalRegister.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    //user:User;
    ModalRegister.prototype.logForm = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__pages_components_users_user__["a" /* User */]();
        user.name = this.user.name;
        user.lastName = this.user.lastName;
        user.email = this.user.email;
        user.password = this.user.password;
        this.authServ.signup(user.email, user.password);
        var itemRef = this.db.list('users');
        var promise = itemRef.push({
            name: user.name,
            lastName: user.lastName,
            age: 'N/A',
            email: user.email,
            password: user.password,
            accessLevel: 'user',
            advertising: 'N/A',
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
            imageURL: 'https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2Findice.png?alt=media&token=8080adfa-8bb4-4d4c-8a2b-ddac12c08a2a'
        }).then(function (value) {
            console.log(value.key);
            var s = _this.db.object('users/' + value.key);
            s.update({ key: value.key });
        });
    };
    ModalRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Registro\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-list>\n<form (ngSubmit)=\"logForm()\">\n<ion-item>\n  <ion-label floating>Nombre</ion-label>\n  <ion-input type=\"text\" required [(ngModel)]=\"user.name\" name=\"name\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label floating>Apellido</ion-label>\n  <ion-input type=\"text\" required [(ngModel)]=\"user.lastName\" name=\"lastName\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label floating>Correo</ion-label>\n  <ion-input type=\"email\" required [(ngModel)]=\"user.email\" name=\"email\"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Contrase\u00F1a</ion-label>\n  <ion-input type=\"password\" required [(ngModel)]=\"user.password\" name=\"password\"></ion-input>\n</ion-item>\n\n<ion-item>\n  <button type=\"submit\" ion-button block>Registrar</button>\n</ion-item>\n</form>\n</ion-list>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__app_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ModalRegister);
    return ModalRegister;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[459]);
//# sourceMappingURL=main.js.map