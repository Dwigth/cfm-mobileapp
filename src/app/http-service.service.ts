import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpServiceService {

  constructor(public http: HttpClient) { }

  postNotification(data:any){
    //this.http.post('https://fcm.googleapis.com/fcm/send';
  }

}
