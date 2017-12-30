import { Injectable } from '@angular/core';
import { Push} from '@ionic-native/push';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AlertController } from 'ionic-angular';

@Injectable()
export class PushService {

  constructor(
    public push:Push,
    public alertCtrl:AlertController,
    private localNotifications: LocalNotifications ) {

}

createNotification(data){
  this.localNotifications.schedule([{
   id: 2,
   title: data.title,
   text: data.text,
   icon: 'http://example.com/icon.png'
}]);
console.log(data)
}
}
