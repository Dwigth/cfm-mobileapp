import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList  } from 'angularfire2/database';
import { Upload } from './upload';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  basePath = 'uploads';
  uploadsRef: AngularFireList<Upload>;
  uploads: Observable<Upload[]>;

  constructor(private db: AngularFireDatabase) { }

//Obtener archivos cargados
    getUploads() {
    //
      this.uploads = this.db.list(this.basePath).snapshotChanges().map((actions) => {
        return actions.map((a) => {
          const data = a.payload.val();
          const $key = a.payload.key;
          return { $key, ...data };
        });
      });
      return this.uploads;
    }

    deleteUpload(upload: Upload) {
      this.deleteFileData(upload.$key)
      .then( () => {
        this.deleteFileStorage(upload.name);
      })
      .catch((error) => console.log(error));
    }

    // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
    pushUpload(upload: Upload) {
      const storageRef = firebase.storage().ref();
      //obtenemos la referencia de firebase storage
      const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
      //se hace el proceso que nos permite monitorear y manejar la carga
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) =>  {
          // carga en progreso
          const snap = snapshot;
          upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100
        },
        (error) => {
          // carga fallida
          console.log(error);
        },
        () => {
          // carga exitosa
          if (uploadTask.snapshot.downloadURL) {
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            this.saveFileData(upload);
            return;
          } else {
            console.error('No download URL!');
          }
        },
      );
    }

    // Escribe los detalles de la carga en la base de datos
    private saveFileData(upload: Upload) {
      this.db.list(`${this.basePath}/`).push(upload);
    }

    // Elimina los datos de la base de datos
    private deleteFileData(key: string) {
      return this.db.list(`${this.basePath}/`).remove(key);
    }

    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    private deleteFileStorage(name: string) {
      const storageRef = firebase.storage().ref();
      storageRef.child(`${this.basePath}/${name}`).delete();
  }

  public getCurrentFileURL(upload: Upload){
    console.log(upload.url)
    return upload.url;
  }
}
