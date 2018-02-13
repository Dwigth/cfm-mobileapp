import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AssitanceService } from '../../services/assistance.service';
import { Response } from '@angular/http/src/static_response';

@Component({
    selector: 'ListAssitance',
    templateUrl: 'list-assitance.component.html'
})

export class ListAssitanceComponent implements OnInit {
    cursos;
    constructor(
        private viewCtl:ViewController,
        private assisSvc:AssitanceService) { }

    ngOnInit() {
        let sql = "SELECT * FROM horario ORDER BY `horario`.`id_horario` ASC";
        this.assisSvc.retrieve(sql,1)
        .map((response) => response.json())
        .subscribe((data) => {
            this.cursos = data;
        });
     }

    dismiss(){
        this.viewCtl.dismiss();
    }
}