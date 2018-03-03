import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ActivitiesService {

    constructor(
        private db:AngularFireDatabase
    ) { }

    retrieveActivities(hour:string){
        return this.db.list('activities',
        val => val.limitToLast(50))
        .valueChanges(['child_added'])
        .map((arr) => { 
            return arr.reverse();
        });
    }

    recordActivity(uid,email,activity,date,hour){
        this.db.list('activities').push({
            activity:activity,
            date:date,
            email:email,
            user:uid,
            hour:hour
        });
    }

    
}