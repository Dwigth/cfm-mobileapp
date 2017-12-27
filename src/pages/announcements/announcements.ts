import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from './announcements.service'
import { Observable } from 'rxjs/observable';


@Component({
  templateUrl: 'announcements.html',
})
export class AnnouncementComponent implements OnInit {
  message:Observable<any[]>;
constructor(public msgService: AnnouncementService) {
  
  this.message =  this.msgService.getAnnouncementsByDate();

}

ngOnInit() {
}

}
