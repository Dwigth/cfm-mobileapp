import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AssitanceService } from '../../services/assistance.service';
import { Response } from '@angular/http/src/static_response';
import * as moment from 'moment';
import { StudentCRMService } from '../../../estudiantes/student.services';
@Component({
    selector: 'ListAssitance',
    templateUrl: 'list-assitance.component.html'
})

export class ListAssitanceComponent implements OnInit {
    horario;
    cursos;
    students;
    constructor(
        private viewCtl:ViewController,
        private assisSvc:AssitanceService,
        private stdSrv:StudentCRMService) { }

    ngOnInit() {
        let sql = "SELECT * FROM horario ORDER BY `horario`.`id_horario` ASC";
        this.assisSvc.retrieve(sql,1)
        .map((response) => response.json())
        .subscribe((data) => {
            this.horario = data;
        });
        this.students = this.stdSrv.getStudents();
        this.cursos = this.stdSrv.getCourses();
     }

    dismiss(){
        this.viewCtl.dismiss();
    }
}