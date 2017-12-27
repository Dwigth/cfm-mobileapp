import * as moment from 'moment';
moment.locale('es');
let date = moment();

export class Upload {
  $key:string;
  file:File;
  name:string;
  url:string;
  progress:number;
  createdAt:string = date.format("dddd, MMMM Do YYYY, h:mm:ss a").toString();
  uploadFor:string;
  constructor(file:File){
    this.file = file;
  }
}
