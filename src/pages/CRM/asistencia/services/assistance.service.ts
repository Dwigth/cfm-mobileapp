import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AssitanceService {

    constructor(
        private http:Http
    ) {}
    /** 
     * Opciones:
     * 1 = listar
     * 2 = insertar
     * 3 = modificar
     * 4 = eliminar
    */
    retrieve(sql:string,option:number){
        return this.http.get('http://centrodeformacionmusical.mx/www/config/Functions.php?sql='+sql+'&opcion='+option);
    }

    retrieveSpecific(sql){

    }

    save(){

    }

    edit(){

    }

    delete(){

    }

}