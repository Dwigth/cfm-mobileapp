import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
    selector: 'qualification-name',
    templateUrl: 'qualification.component.html'
})

export class QualificationComponent implements OnInit {
    qualifications;
    constructor(
        public viewCtl:ViewController
    ) { 
        this.qualifications = [
            {atribute: "Lectura" , score: 9},
            {atribute: "Instrumento" , score: 9},
            {atribute: "Ejecucion" , score: 9},
            {atribute: "Lectura" , score: 9},
            {atribute: "Lectura" , score: 9},
        ]
    }

    ngOnInit() { }
    dismiss(){
        this.viewCtl.dismiss();
    }
}
