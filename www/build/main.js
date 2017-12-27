webpackJsonp([0],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
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
        var itemRef = this.refLis().valueChanges(['child_added']);
        return itemRef;
    };
    AnnouncementService.prototype.editAnnouncement = function (Announcement) {
        var _this = this;
        this.refObj(Announcement.key).update({
            title: Announcement.title,
            body: Announcement.body,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(29);
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
            selector: 'app-news-list',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/components/news/news-list.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Noticia\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<form>\n<ion-item *ngFor="let users of user | async">\n<input type="hidden" id="name" value="{{users.name  +  users.lastName}}">\n<input type="hidden" id="photoURL" value="{{users.imageURL}}">\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Titulo</ion-label>\n  <ion-input type="text" required [(ngModel)]="news.title"  name="title"></ion-input>\n</ion-item>\n\n<ion-item>\n  <textarea rows=\'5\' data-min-rows=\'3\' [(ngModel)]="news.textBody" name="textBody" placeholder=\'Cuerpo de noticia\' required></textarea>\n</ion-item>\n\n<ion-item>\n  <upload-form></upload-form>\n</ion-item>\n\n<ion-item>\n  <button type="submit" ion-button color="danger" (click)="updateNew()" block>Actualizar</button>\n</ion-item>\n\n</form>\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/components/news/news-list.component.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__news_service__["a" /* NewsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _f || Object])
    ], NewsListComponent);
    return NewsListComponent;
    var _a, _b, _c, _d, _e, _f;
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__news_service__["a" /* NewsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _g || Object])
    ], UpdateNewsModal);
    return UpdateNewsModal;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=news-list.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(623);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcements_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__announcement__ = __webpack_require__(653);
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
        this.annserv.createAnnouncements(annoucement);
    };
    AnnouncementCrudComponent.prototype.editAnnouncement = function () {
        this.annserv.editAnnouncement(this.item);
    };
    AnnouncementCrudComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'announcement-crud',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/announcements/announcement-crud.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Avisos\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<form *ngIf="isEditing == false; else edit">\n<ion-item>\n  <ion-label floating>Título</ion-label>\n  <ion-input type="text" required [(ngModel)]="announcement.title" name="title" #titu></ion-input>\n</ion-item>\n\n<ion-item>\n  <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="announcement.body" name = "body"></textarea>\n</ion-item>\n\n<ion-item >\n  <button type="submit" ion-button color="danger" (click)="CreateAnnouncement()" block>Registrar</button>\n</ion-item>\n</form>\n\n<ng-template #edit>\n  <form>\n  <ion-item>\n    <ion-label floating>Título</ion-label>\n    <ion-input type="text" required [(ngModel)]="item.title" name="title" #titu></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="item.body" name = "body"></textarea>\n  </ion-item>\n  <ion-item>\n<button type="submit" ion-button color="secondary" (click)="editAnnouncement()" block>Editar</button>\n</ion-item>\n</form>\n</ng-template>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/announcements/announcement-crud.html"*/,
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

/***/ 177:
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
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 219:
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
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(29);
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
            selector: 'app-dashboard',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/components/dashboard/dashboard.html"*/'\n<ion-content>\n  <div id="container">\n\n  </div>\n\n  <div *ngFor="let item of user | async">\n\n    <ion-item *ngIf="item.accessLevel == \'user\';">\n      <p>Ingresa a la academia para poder visualizar esta sección.</p>\n    </ion-item>\n\n    <ion-item *ngIf="item.accessLevel == \'admin\'; else student">\n      <app-news></app-news>\n      <announcement-button></announcement-button>\n      <prospect-button></prospect-button>\n      <button  ion-button large block> Administrar usuarios </button>\n    </ion-item>\n\n\n\n    <ng-template #student *ngIf="item.accessLevel == \'student\'">\n      <button  ion-button color="secondary"  outline block> Calificaciones </button>\n    </ng-template>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/components/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], dashboardPage);
    return dashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(29);
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
            selector: 'app-profile',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/userprofile/profile.html"*/'\n<ion-content>\n  <div id="container">\n  </div>\n  <ion-list *ngFor="let item of users | async">\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img  src="{{item.imageURL}}">\n          <input type="hidden" id="urlcurrent" value="{{item.imageURL}}">\n        </ion-avatar>\n        <h2>Nombre: {{item.name + \' \' + item.lastName | uppercase}} </h2>\n\n        <p>Posición: <ion-note id="pos">{{item.accessLevel}}</ion-note> </p>\n      </ion-item>\n        <ion-list no-border>\n\n          <ion-list-header>\n            Información\n          </ion-list-header>\n\n          <ion-item>\n            <ion-icon name=\'mail\' item-start></ion-icon>\n            E-mail\n            <ion-note item-end>\n            {{item.email}}\n            </ion-note>\n          </ion-item>\n\n          <ion-item>\n            <ion-toggle [(ngModel)]="phone" name="phone" checked="false"></ion-toggle>\n            <ion-label>\n              Telefono\n            </ion-label>\n            <ion-icon name=\'call\' item-start></ion-icon>\n          </ion-item>\n          <div *ngIf="phone != true; else phoneNumber">\n\n          </div>\n          <ng-template #phoneNumber>\n            <ion-item>\n              <ion-icon name=\'call\' item-start></ion-icon>\n              <ion-input value="{{item.phone}}" readonly></ion-input>\n\n            </ion-item>\n            <ion-item>\n              <ion-icon name=\'call\' item-start></ion-icon>\n              <ion-input id="phone" type="text" [(ngModel)]="userUpdate.phone" name="phone" placeholder="Agregar: "></ion-input>\n            </ion-item>\n          </ng-template>\n\n          <ion-item>\n            <ion-icon name=\'alert\' item-start></ion-icon>\n            Estatus\n            <ion-note id="pos" item-end>\n            {{item.status}}\n            </ion-note>\n          </ion-item>\n\n<!-- -->\n          <ion-item>\n            <ion-label>\n              Último grado de estudios\n            </ion-label>\n            <ion-toggle [(ngModel)]="grade" name="grade" checked="false"></ion-toggle>\n            <ion-icon name=\'school\' item-start></ion-icon>\n          </ion-item>\n\n          <div *ngIf="grade != true; else lastGrade">\n\n          </div>\n          <ng-template #lastGrade>\n            <ion-item>\n              <ion-icon name=\'school\' item-start></ion-icon>\n              <ion-input  value="{{item.grade}}" readonly> </ion-input>\n\n            </ion-item>\n            <ion-item>\n              <ion-icon name=\'school\' item-start></ion-icon>\n              <ion-input id="grade" type="text" [(ngModel)]="userUpdate.grade" name="grade" placeholder="Actualizar: "></ion-input>\n            </ion-item>\n\n          </ng-template>\n<!-- -->\n<!-- -->\n          <ion-item>\n            <ion-label>\n              Edad\n            </ion-label>\n            <ion-toggle [(ngModel)]="age" name="age" checked="false"></ion-toggle>\n            <ion-icon name=\'body\' item-start></ion-icon>\n          </ion-item>\n\n          <div *ngIf="age != true; else ageU">\n\n          </div>\n          <ng-template #ageU>\n            <ion-item>\n              <ion-icon name=\'body\' item-start></ion-icon>\n              <ion-input  value="{{item.age}}" readonly> </ion-input>\n\n            </ion-item>\n            <ion-item>\n              <ion-icon name=\'body\' item-start></ion-icon>\n              <ion-input id="age"type="text" [(ngModel)]="userUpdate.age" name="age" placeholder="Actualizar: "></ion-input>\n            </ion-item>\n\n          </ng-template>\n<!-- -->\n<!-- -->\n          <ion-item>\n            <ion-label>\n              Ocupación\n            </ion-label>\n            <ion-toggle [(ngModel)]="ocupation" checked="false"></ion-toggle>\n            <ion-icon name=\'folder\' item-start></ion-icon>\n          </ion-item>\n\n          <div *ngIf="ocupation != true; else ocupationU">\n\n          </div>\n          <ng-template #ocupationU>\n            <ion-item>\n                <ion-icon name=\'folder\' item-start></ion-icon>\n                <ion-input  value="{{item.ocupation}}" readonly> </ion-input>\n\n            </ion-item>\n            <ion-item>\n              <ion-icon name=\'folder\' item-start></ion-icon>\n              <ion-input id="ocupation" type="text" [(ngModel)]="userUpdate.ocupation" name="ocupation" placeholder="Actualizar: "></ion-input>\n            </ion-item>\n\n          </ng-template>\n<!-- -->\n\n          <ion-item>\n            <ion-icon name=\'create\' item-start></ion-icon>\n\n      <ion-label>¿Cómo se enteró de la escuela?</ion-label>\n            <ion-select [(ngModel)]="userUpdate.advertising" name="advertising" item-end>\n              <ion-option value="redes">Redes sociales</ion-option>\n              <ion-option value="conocido">Conocido</ion-option>\n              <ion-option value="cartel">Cartel</ion-option>\n            </ion-select>\n\n\n          </ion-item>\n          <input type="hidden"name="key" id="key" value="{{item.key}}">\n          <input type="hidden"name="actPhone" id="actPhone" value="{{item.phone}}">\n            <input type="hidden"name="actGrade" id="actGrade" value="{{item.grade}}">\n            <input type="hidden"name="actAge" id="actAge" value="{{item.age}}">\n            <input type="hidden"name="actOcupation" id="actOcupation" value="{{item.ocupation}}">\n        </ion-list>\n\n        <ion-item>\n          <label>Cargar foto de perfil</label>\n        <upload-form></upload-form>\n        </ion-item>\n\n        <button type="button" ion-button block (click)="UpdateInfo()" > Actualizar información</button>\n  </ion-list>\n  <!--<ion-list *ngFor="let item of admin | async;">\n    <p *ngIf="item.accessLevel == \'admin\'; else op">\n    Administrador op\n    {{item.name}}\n  </p>\n\n  <ng-template #op>kk</ng-template>\n</ion-list>-->\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/userprofile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 315:
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
    }
    AnnouncementComponent.prototype.ngOnInit = function () {
    };
    AnnouncementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/announcements/announcements.html"*/'  <ion-content padding >\n    <div id="container">\n    </div>\n      <ion-item-group>\n        <ion-item-divider  color="light">Hoy</ion-item-divider>\n        <ion-item *ngFor="let item of message | async" >\n\n          <ion-item color="dark">\n            <ion-icon name="warning" color="yellow"></ion-icon>\n            {{item.title}}\n          </ion-item>\n          <p style="text-align:justify" text-wrap>{{item.body}}</p>\n          <ion-item>\n          <ion-icon name="calendar" item-start></ion-icon>\n          <ion-badge item-end color="danger">{{item.createdAt}}</ion-badge>\n        </ion-item>\n        </ion-item>\n      </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/announcements/announcements.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__announcements_service__["a" /* AnnouncementService */]])
    ], AnnouncementComponent);
    return AnnouncementComponent;
}());

//# sourceMappingURL=announcements.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
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

var AboutUsComponent = (function () {
    function AboutUsComponent() {
        this.title = "¿Quiénes somos?";
        this.info = "En tanto proyecto pedagógico, nos caracteriza el máximo nivel del profesorado que capacitamos en Centros de valía en el país, las regulaciones del cupo por academia para garantizar una enseñanza personalizada, el empeño de una formación integral que favorecemos con la coordinación de diversos cursos en otras vertientes artísticas diferentes de la música, la búsqueda de un alumnado que en su proceso de aprendizaje también devenga en experiencia mediante la realización de espectáculos, y un fuerte compromiso social que se mani esta con las promociones para distintos miembros de la familia del estudiante, así como mediante el otorgamiento de becas de matrícula y residencia a algunos casos sociales que así lo ameriten.";
    }
    AboutUsComponent.prototype.ngOnInit = function () { };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'aboutus',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/aboutus/aboutus.html"*/'<ion-content>\n  <img src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2F3.png?alt=media&token=14bd6bef-c74f-45e2-aaae-c645f2911353" alt="">\n  <ion-card>\n    <ion-card-header>\n      {{title}}\n    </ion-card-header>\n    <ion-card-content style="text-align:justify" text-wrap>\n      {{info}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/aboutus/aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'courses',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/courses/courses.html"*/'<ion-content class="card-background-page">\n\n  <ion-card>\n    <img (click)="info(1)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FBajo.jpeg?alt=media&token=441babe6-e811-48b0-8202-f4d1b24234ef"/>\n    <div class="card-title">Bajo</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n\n  <ion-card>\n    <img (click)="info(2)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FBateria.jpeg?alt=media&token=23bca4a9-db4e-4c81-a76c-d64648749deb"/>\n    <div class="card-title">Bateria</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n\n  <ion-card>\n    <img (click)="info(3)"  src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FCanto.jpeg?alt=media&token=1abb58ea-482c-4c4c-a5e5-b434d00eb4a0"/>\n    <div class="card-title">Canto</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n\n  <ion-card>\n    <img (click)="info(4)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FDibujo.jpeg?alt=media&token=20d789a6-4198-410c-a66a-834016b41b1e"/>\n    <div class="card-title">Dibujo</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n  <ion-card>\n    <img (click)="info(5)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FGuitarra.jpeg?alt=media&token=4280c386-864b-4bd3-9d6c-d82f73aee3da"/>\n    <div class="card-title">Guitarra eléctrica/acústica</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n  <ion-card>\n    <img (click)="info(6)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FPiano.jpeg?alt=media&token=40ccc3a3-6f7f-4a31-ae2a-87c8e688141a"/>\n    <div class="card-title">Piano</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n  <ion-card>\n    <img (click)="info(7)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FSaxofon.jpeg?alt=media&token=39897f08-fbf3-4dae-90c8-4b655ce25916"/>\n    <div class="card-title">Saxofon</div>\n    <div class="card-subtitle">Adultos y jovenes</div>\n  </ion-card>\n  <ion-card>\n    <img (click)="info(8)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FUkelele.jpeg?alt=media&token=a225e5f0-f54b-468b-8577-4b5ed360b54d"/>\n    <div class="card-title">Ukelele</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n  <ion-card>\n    <img (click)="info(9)" src="https://firebasestorage.googleapis.com/v0/b/pcfm-5eeb9.appspot.com/o/resources%2FViolin.jpeg?alt=media&token=0fdb42db-efc4-4e4f-8a8f-8d31c2b893dd"/>\n    <div class="card-title">Violín</div>\n    <div class="card-subtitle">Adultos y niños</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/courses/courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CoursesComponent);
    return CoursesComponent;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 438:
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

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news__ = __webpack_require__(438);
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
            selector: 'app-news',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/components/news/news.component.html"*/'<button type="button" ion-button large block color="primary" (click)="OpenModal()" outline name="" value="">Crear noticia</button>\n<button type="button" ion-button large block color="primary" (click)="Op()" outline>Listar noticias creadas</button>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/components/news/news.component.html"*/,
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

/***/ 449:
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

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prospect_service__ = __webpack_require__(451);
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
    //
    function ProspectModalComponent(nav, params, viewCtrl, prosSrv) {
        this.nav = nav;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.prosSrv = prosSrv;
        this.prospects = [];
        //this.list = this.prosSrv.getProspect();
    }
    ProspectModalComponent.prototype.ngOnInit = function () { };
    ProspectModalComponent.prototype.getItems = function (ev) {
        var _this = this;
        this.prosSrv.getProspectbyHttp().subscribe(function (data) { return _this.prospects = data; });
        this.prospects = this.prosSrv.get();
        var item = ev.target.value;
        if (item && item.trim() != '') {
            //return this.list = this.prosSrv.searchByName(item);
        }
    };
    ProspectModalComponent.prototype.createProspect = function () {
    };
    ProspectModalComponent.prototype.editProspect = function (item) {
    };
    ProspectModalComponent.prototype.deleteProspect = function (item) {
    };
    ProspectModalComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProspectModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/propects/prospect.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Prospectos\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item>\n<button type="button" large block ion-button > Crear prospecto </button>\n</ion-item>\n\n<ion-searchbar (ionInput)="getItems($event)" ></ion-searchbar>\n<ion-list>\n<ion-item-group >\n<ion-item-divider style="text-align:center;" color="light">Prospectos</ion-item-divider>\n<ion-item-sliding *ngFor="let item of prospects"  >\n  <ion-item >\n      <p>{{item}}</p>\n  </ion-item>\n\n<ion-item-options  side="right">\n    <button ion-button color="secondary">\n      <ion-icon name="open"></ion-icon>\n      Editar\n    </button>\n    <button ion-button  color="danger">\n      <ion-icon name="trash"></ion-icon>\n      Eliminar\n    </button>\n  </ion-item-options>\n\n</ion-item-sliding>\n</ion-item-group>\n</ion-list>\n<!--\n<form *ngIf="isEditing == false; else edit">\n<ion-item>\n  <ion-label floating>Título</ion-label>\n  <ion-input type="text" required [(ngModel)]="announcement.title" name="title" #titu></ion-input>\n</ion-item>\n\n<ion-item>\n  <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="announcement.body" name = "body"></textarea>\n</ion-item>\n\n<ion-item >\n  <button type="submit" ion-button color="danger" (click)="CreateAnnouncement()" block>Registrar</button>\n</ion-item>\n</form>\n\n<ng-template #edit>\n  <form>\n  <ion-item>\n    <ion-label floating>Título</ion-label>\n    <ion-input type="text" required [(ngModel)]="item.title" name="title" #titu></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <textarea rows=\'5\' data-min-rows=\'3\' placeholder=\'Cuerpo de aviso\' required [(ngModel)]="item.body" name = "body"></textarea>\n  </ion-item>\n  <ion-item>\n<button type="submit" ion-button color="secondary" (click)="editAnnouncement()" block>Editar</button>\n</ion-item>\n</form>\n</ng-template>\n-->\n\n\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/propects/prospect.component.html"*/
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

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(261);
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
    function ProspectService(db, http) {
        this.db = db;
        this.http = http;
        this.prospects = [];
    }
    ProspectService.prototype.refLis = function () {
        return this.db.list('prospects');
    };
    ProspectService.prototype.refObj = function (itemkey) {
        return this.db.object('prospects/' + itemkey);
    };
    ProspectService.prototype.createProspect = function (prospect) {
        var _this = this;
        this.refLis().push({
            id: prospect.id,
            nombre: prospect.nombre,
            apellidoPaterno: prospect.apellidoPaterno,
            apellioMaterno: prospect.apellioMaterno,
            edad: prospect.edad,
            estado: prospect.estado,
            telefono: prospect.telefono,
            estatus: prospect.estatus,
            atendio: prospect.atendio,
            curso: prospect.curso,
            fecha: prospect.fecha,
            comentario: prospect.comentario,
            fuente: prospect.fuente,
            precio: prospect.precio,
            checkbox: prospect.checkbox
        }).then(function (val) {
            _this.refObj(val.key).update({
                key: val.key
            });
        });
    };
    ProspectService.prototype.getProspect = function () {
        return this.db.list("prospects", function (val) { return val.orderByChild("nombre").limitToFirst(20); }).valueChanges();
    };
    ProspectService.prototype.searchProspectByProperty = function (n, property) {
        var result;
        return result = this.db.list("prospects", function (val) { return val.orderByChild(property).equalTo(n); }).valueChanges();
    };
    ProspectService.prototype.searchByName = function (name) {
        console.log(name);
        return this.db.list("prospects", function (val) {
            return val.orderByChild("nombre").equalTo(name);
        }).valueChanges();
    };
    ProspectService.prototype.editProspect = function () {
    };
    ProspectService.prototype.deleteProspect = function (item) {
    };
    ProspectService.prototype.getItems = function (ev) {
        var _this = this;
        //this.list = this.prosSrv.getProspect();
        this.name$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
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
    ProspectService.prototype.getProspectbyHttp = function () {
        return this.http.get("https://pcfm-5eeb9.firebaseio.com/users")
            .map(function (res) { return res.json(); });
    };
    ProspectService.prototype.get = function () {
        return this.prospects;
    };
    ProspectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], ProspectService);
    return ProspectService;
}());

//# sourceMappingURL=prospect.service.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(471);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_components_navbar_navbar__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_components_dashboard_dashboard__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_components_options_options__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_components_news_news_list_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_components_news_news_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_components_pageHandler_pageHandler_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_userprofile_profile__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_components_uploads_shared_upload_list_upload_list_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_components_uploads_shared_upload_form_upload_form_component__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_components_uploads_shared_upload_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_components_news_news_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_components_sort_reverse__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_components_modal_modal__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_components_news_news_list_service__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_fcm__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_push__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_local_notifications__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__push_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_announcements_announcements__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_announcements_announcement_crud__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_aboutus_aboutus__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_courses_courses__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_onesignal__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angularfire2__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_angularfire2_auth__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_announcements_announcements_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_propects_prospect_button__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_propects_prospect_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_propects_prospect_service__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_propects_prospect_crud_component__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//components



































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
                __WEBPACK_IMPORTED_MODULE_41__pages_propects_prospect_button__["a" /* ProspectButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_42__pages_propects_prospect_component__["a" /* ProspectModalComponent */],
                __WEBPACK_IMPORTED_MODULE_44__pages_propects_prospect_crud_component__["a" /* ProspectCrudComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_36_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_37_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_38_angularfire2_auth__["b" /* AngularFireAuthModule */],
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
                __WEBPACK_IMPORTED_MODULE_41__pages_propects_prospect_button__["a" /* ProspectButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_42__pages_propects_prospect_component__["a" /* ProspectModalComponent */],
                __WEBPACK_IMPORTED_MODULE_44__pages_propects_prospect_crud_component__["a" /* ProspectCrudComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_39__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_37_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_40__pages_announcements_announcements_service__["a" /* AnnouncementService */],
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
                __WEBPACK_IMPORTED_MODULE_43__pages_propects_prospect_service__["a" /* ProspectService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_components_dashboard_dashboard__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_userprofile_profile__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_announcements_announcements__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__push_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_aboutus_aboutus__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_courses_courses__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_app__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_auth_service__ = __webpack_require__(67);
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
            { title: 'Acceder/Salir', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginComponent */], icon: 'log-in' }
        ];
        this.adminPages = [
            { title: 'Últimas noticias', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'apps' },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_8__pages_userprofile_profile__["a" /* ProfileComponent */], icon: 'person' },
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_7__pages_components_dashboard_dashboard__["a" /* dashboardPage */], icon: 'clipboard' },
            { title: 'Avisos', component: __WEBPACK_IMPORTED_MODULE_9__pages_announcements_announcements__["a" /* AnnouncementComponent */], icon: 'bulb' },
            { title: 'Quienes somos', component: __WEBPACK_IMPORTED_MODULE_11__pages_aboutus_aboutus__["a" /* AboutUsComponent */], icon: 'contacts' },
            { title: 'Cursos', component: __WEBPACK_IMPORTED_MODULE_12__pages_courses_courses__["a" /* CoursesComponent */], icon: 'md-albums' },
            { title: 'Acceder/salir', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginComponent */], icon: 'log-in' }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/app/app.html"*/'\n<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu  [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n      </ion-title>\n      <img class="logo" src="assets/imgs/CFM3.png" alt="">\n      <div *ngIf="afAuth.authState | async; let user;">\n        Hola {{ user.email }}!\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="dark">\n    <div id="menu">\n    <div *ngIf="afAuth.authState | async; let user; else showUserPages" >\n      <ion-list >\n        <button menuClose ion-item *ngFor="let p of adminPages" (click)="openPage(p)">\n          <ion-icon  name="{{p.icon}}"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n    </div>\n\n    <ng-template #showUserPages>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of userpages" (click)="openPage(p)">\n          <ion-icon  name="{{p.icon}}"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ng-template>\n\n      </div>\n  </ion-content>\n\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav   [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_17__app_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__["a" /* OneSignal */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 611:
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

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 316,
	"./af.js": 316,
	"./ar": 317,
	"./ar-dz": 318,
	"./ar-dz.js": 318,
	"./ar-kw": 319,
	"./ar-kw.js": 319,
	"./ar-ly": 320,
	"./ar-ly.js": 320,
	"./ar-ma": 321,
	"./ar-ma.js": 321,
	"./ar-sa": 322,
	"./ar-sa.js": 322,
	"./ar-tn": 323,
	"./ar-tn.js": 323,
	"./ar.js": 317,
	"./az": 324,
	"./az.js": 324,
	"./be": 325,
	"./be.js": 325,
	"./bg": 326,
	"./bg.js": 326,
	"./bm": 327,
	"./bm.js": 327,
	"./bn": 328,
	"./bn.js": 328,
	"./bo": 329,
	"./bo.js": 329,
	"./br": 330,
	"./br.js": 330,
	"./bs": 331,
	"./bs.js": 331,
	"./ca": 332,
	"./ca.js": 332,
	"./cs": 333,
	"./cs.js": 333,
	"./cv": 334,
	"./cv.js": 334,
	"./cy": 335,
	"./cy.js": 335,
	"./da": 336,
	"./da.js": 336,
	"./de": 337,
	"./de-at": 338,
	"./de-at.js": 338,
	"./de-ch": 339,
	"./de-ch.js": 339,
	"./de.js": 337,
	"./dv": 340,
	"./dv.js": 340,
	"./el": 341,
	"./el.js": 341,
	"./en-au": 342,
	"./en-au.js": 342,
	"./en-ca": 343,
	"./en-ca.js": 343,
	"./en-gb": 344,
	"./en-gb.js": 344,
	"./en-ie": 345,
	"./en-ie.js": 345,
	"./en-nz": 346,
	"./en-nz.js": 346,
	"./eo": 347,
	"./eo.js": 347,
	"./es": 348,
	"./es-do": 349,
	"./es-do.js": 349,
	"./es-us": 350,
	"./es-us.js": 350,
	"./es.js": 348,
	"./et": 351,
	"./et.js": 351,
	"./eu": 352,
	"./eu.js": 352,
	"./fa": 353,
	"./fa.js": 353,
	"./fi": 354,
	"./fi.js": 354,
	"./fo": 355,
	"./fo.js": 355,
	"./fr": 356,
	"./fr-ca": 357,
	"./fr-ca.js": 357,
	"./fr-ch": 358,
	"./fr-ch.js": 358,
	"./fr.js": 356,
	"./fy": 359,
	"./fy.js": 359,
	"./gd": 360,
	"./gd.js": 360,
	"./gl": 361,
	"./gl.js": 361,
	"./gom-latn": 362,
	"./gom-latn.js": 362,
	"./gu": 363,
	"./gu.js": 363,
	"./he": 364,
	"./he.js": 364,
	"./hi": 365,
	"./hi.js": 365,
	"./hr": 366,
	"./hr.js": 366,
	"./hu": 367,
	"./hu.js": 367,
	"./hy-am": 368,
	"./hy-am.js": 368,
	"./id": 369,
	"./id.js": 369,
	"./is": 370,
	"./is.js": 370,
	"./it": 371,
	"./it.js": 371,
	"./ja": 372,
	"./ja.js": 372,
	"./jv": 373,
	"./jv.js": 373,
	"./ka": 374,
	"./ka.js": 374,
	"./kk": 375,
	"./kk.js": 375,
	"./km": 376,
	"./km.js": 376,
	"./kn": 377,
	"./kn.js": 377,
	"./ko": 378,
	"./ko.js": 378,
	"./ky": 379,
	"./ky.js": 379,
	"./lb": 380,
	"./lb.js": 380,
	"./lo": 381,
	"./lo.js": 381,
	"./lt": 382,
	"./lt.js": 382,
	"./lv": 383,
	"./lv.js": 383,
	"./me": 384,
	"./me.js": 384,
	"./mi": 385,
	"./mi.js": 385,
	"./mk": 386,
	"./mk.js": 386,
	"./ml": 387,
	"./ml.js": 387,
	"./mr": 388,
	"./mr.js": 388,
	"./ms": 389,
	"./ms-my": 390,
	"./ms-my.js": 390,
	"./ms.js": 389,
	"./mt": 391,
	"./mt.js": 391,
	"./my": 392,
	"./my.js": 392,
	"./nb": 393,
	"./nb.js": 393,
	"./ne": 394,
	"./ne.js": 394,
	"./nl": 395,
	"./nl-be": 396,
	"./nl-be.js": 396,
	"./nl.js": 395,
	"./nn": 397,
	"./nn.js": 397,
	"./pa-in": 398,
	"./pa-in.js": 398,
	"./pl": 399,
	"./pl.js": 399,
	"./pt": 400,
	"./pt-br": 401,
	"./pt-br.js": 401,
	"./pt.js": 400,
	"./ro": 402,
	"./ro.js": 402,
	"./ru": 403,
	"./ru.js": 403,
	"./sd": 404,
	"./sd.js": 404,
	"./se": 405,
	"./se.js": 405,
	"./si": 406,
	"./si.js": 406,
	"./sk": 407,
	"./sk.js": 407,
	"./sl": 408,
	"./sl.js": 408,
	"./sq": 409,
	"./sq.js": 409,
	"./sr": 410,
	"./sr-cyrl": 411,
	"./sr-cyrl.js": 411,
	"./sr.js": 410,
	"./ss": 412,
	"./ss.js": 412,
	"./sv": 413,
	"./sv.js": 413,
	"./sw": 414,
	"./sw.js": 414,
	"./ta": 415,
	"./ta.js": 415,
	"./te": 416,
	"./te.js": 416,
	"./tet": 417,
	"./tet.js": 417,
	"./th": 418,
	"./th.js": 418,
	"./tl-ph": 419,
	"./tl-ph.js": 419,
	"./tlh": 420,
	"./tlh.js": 420,
	"./tr": 421,
	"./tr.js": 421,
	"./tzl": 422,
	"./tzl.js": 422,
	"./tzm": 423,
	"./tzm-latn": 424,
	"./tzm-latn.js": 424,
	"./tzm.js": 423,
	"./uk": 425,
	"./uk.js": 425,
	"./ur": 426,
	"./ur.js": 426,
	"./uz": 427,
	"./uz-latn": 428,
	"./uz-latn.js": 428,
	"./uz.js": 427,
	"./vi": 429,
	"./vi.js": 429,
	"./x-pseudo": 430,
	"./x-pseudo.js": 430,
	"./yo": 431,
	"./yo.js": 431,
	"./zh-cn": 432,
	"./zh-cn.js": 432,
	"./zh-hk": 433,
	"./zh-hk.js": 433,
	"./zh-tw": 434,
	"./zh-tw.js": 434
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
webpackContext.id = 617;

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-list',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(29);
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
            selector: 'app-navbar',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/components/navbar/navbar.html"*/''/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/components/navbar/navbar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__app_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ 620:
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
            selector: 'app-options',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/components/options/options.html"*/'<ion-content>\n  <div id="container">\n\n  </div>\n  <p>Estamos en desarrollo</p>\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/components/options/options.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], optionsPage);
    return optionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHandlerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(29);
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
            selector: 'app-pageHandler',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/components/pageHandler/pageHandler.component.html"*/'<ion-content>\n  <ion-list>\n    <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n      <ion-icon  name="{{p.icon}}"></ion-icon>\n      {{p.title}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/components/pageHandler/pageHandler.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], PageHandlerComponent);
    return PageHandlerComponent;
}());

//# sourceMappingURL=pageHandler.component.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(449);
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
            selector: 'upload-list',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/components/uploads/shared/upload-list/upload-list.component.html"*/'<h3>File Uploads</h3>\n\n<div *ngFor="let upload of uploads | async">\n  <strong>{{upload.name}}</strong>\n<button (click)=\'deleteUpload()\' class="button is-danger is-small">Delete</button><br>\n</div>\n\n<loading-spinner *ngIf="showSpinner"></loading-spinner>\n\n<hr>\n\n<upload-form></upload-form>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/components/uploads/shared/upload-list/upload-list.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_service__["a" /* UploadService */]])
    ], UploadListComponent);
    return UploadListComponent;
}());

//# sourceMappingURL=upload-list.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__(449);
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
            selector: 'upload-form',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/components/uploads/shared/upload-form/upload-form.component.html"*/'\n<div *ngIf="currentUpload">\n  <progress class="progress is-success" min=1 max=100 value="{{ currentUpload?.progress }}"></progress>\n  Progress: {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete\n  <input type="hidden" id="url" value="{{currentUpload.url}}">\n  <input type="hidden" id="date" value="{{currentUpload.createdAt}}">\n</div>\n\n\n<div class="box">\n  <h3>Cargar una imagen</h3>\n\n  <label>\n    <input type="file" class="button" (change)="detectFiles($event)">\n  </label>\n\n  <hr>\n<!--\n  <h3>Multiple File Upload</h3>\n\n  <label>\n    <input type="file" class="button" (change)="detectFiles($event)" multiple>\n  </label>\n  <button class="button is-primary"\n    [disabled]="!selectedFiles"\n    (click)="uploadMulti()">\n    Upload Multiple\n  </button>-->\n</div>\n<button ion-button block color="danger"\n  [disabled]="!selectedFiles"\n  (click)="uploadSingle()">\n  Cargar imagen\n</button>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/components/uploads/shared/upload-form/upload-form.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_service__["a" /* UploadService */]])
    ], UploadFormComponent);
    return UploadFormComponent;
}());

//# sourceMappingURL=upload-form.component.js.map

/***/ }),

/***/ 649:
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

/***/ 650:
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
            selector: 'app-modal',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/components/modal/modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Noticia\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<form >\n<ion-item *ngFor="let users of user | async">\n<input type="hidden" id="name" value="{{users.name  +  users.lastName}}">\n<input type="hidden" id="photoURL" value="{{users.imageURL}}">\n</ion-item>\n<ion-item>\n  <ion-label floating>Titulo</ion-label>\n  <ion-input type="text" required [(ngModel)]="news.title" name="title"></ion-input>\n</ion-item>\n\n<ion-item>\n  <textarea rows=\'5\' data-min-rows=\'3\' [(ngModel)]="news.textBody" name="textBody" placeholder=\'Cuerpo de noticia\' required></textarea>\n</ion-item>\n\n<ion-item>\n  <upload-form></upload-form>\n</ion-item>\n\n<ion-item>\n  <button type="submit" ion-button color="danger" block>Registrar</button>\n</ion-item>\n</form>\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/components/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 651:
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

/***/ 653:
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

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prospect_component__ = __webpack_require__(450);
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

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectCrudComponent; });
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

var ProspectCrudComponent = (function () {
    function ProspectCrudComponent() {
    }
    ProspectCrudComponent.prototype.ngOnInit = function () { };
    ProspectCrudComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/propects/prospect-crud.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Prospectos\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancelar</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <p>word</p>\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/propects/prospect-crud.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ProspectCrudComponent);
    return ProspectCrudComponent;
}());

//# sourceMappingURL=prospect-crud.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(29);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-home',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/home/home.html"*/'  <ion-content padding>\n    <div id="container">\n    </div>\n<div  class="head">\n  <h1 >NOTICIAS</h1>\n</div>\n\n<div  *ngFor="let item of items | async | reverse">\n  <img  src="{{item.imageURL}}"/>\n  <ion-item>\n    <h2>\n      {{item.title}}\n    </h2>\n    <p style="text-align:justify" text-wrap>\n      {{item.textBody}}\n    </p>\n    <ion-row>\n       <ion-col>\n         <button ion-button icon-left color="dark" clear small>\n           <ion-icon name="md-calendar"></ion-icon>\n           <div>{{item.createdAt}}</div>\n         </button>\n       </ion-col>\n     </ion-row>\n    <button (click)="OpenModal(item.key)" ion-button color="green" small> Ver más</button>\n  </ion-item>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/home/home.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_components_users_user__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(29);
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
            selector: 'app-login',template:/*ion-inline-start:"/home/dwigth/cfm-mobileapp/src/pages/login/login.html"*/'\n<ion-content padding id="form">\n  <div *ngIf="this.afAuth.authState  | async; let user; else showLogin">\n      <p>Usted ya ha iniciado sesión con: {{user.email}}</p>\n      <ion-item>\n        <button type="button" name="button"ion-button block (click)="authServ.logout()">Cerrar sesión</button>\n      </ion-item>\n  </div>\n\n  <ng-template #showLogin>\n  <form (ngSubmit)="submitForm()">\n  <ion-list>\n\n  <ion-item>\n    <ion-label floating >Correo</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email" name="email" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Contraseña</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password" name="password" required></ion-input>\n  </ion-item>\n\n  <button type="submit" ion-button outline block >Entrar</button>\n</ion-list>\n<button type="button" ion-button outline block (click)="Open()" >Registrarte</button>\n</form>\n</ng-template>\n</ion-content>\n'/*ion-inline-end:"/home/dwigth/cfm-mobileapp/src/pages/login/login.html"*/,
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

},[452]);
//# sourceMappingURL=main.js.map