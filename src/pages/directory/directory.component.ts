import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: 'directory.component.html',
})
export class DirectoryComponent implements OnInit {
  menu;
  constructor() {
    this.menu = 'contacto';
  }
  
  ngOnInit() {}
}
