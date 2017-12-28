import * as moment from 'moment';
moment.locale('es');
let date = moment();

export class Announcement{
    title:string;
    body:string;
    destacado:string;
    createdAt:string = date.format("dddd, MMMM Do YYYY").toString();
    day = date.format("DDD");
    key:string;
}
