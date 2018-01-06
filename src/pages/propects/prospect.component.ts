import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from "ionic-angular";
import { ProspectService } from "./prospect.service";
import { Observable } from "rxjs/Observable";
import { Prospect } from "./prospect";
import { ProspectCrudComponent } from './prospect-crud.component'
//import { Chart } from 'chart.js'

@Component({
  templateUrl: 'prospect.component.html'
})
export class ProspectModalComponent implements OnInit {
list:Observable<any[]>;
//
advSrch:boolean;
statistic:boolean;
properties = {
property:'',
textProperty:''
}

coordis = [];

  constructor(
    public nav:NavController,
    public params:NavParams,
    public viewCtrl:ViewController,
    public prosSrv:ProspectService) {

    this.list = this.prosSrv.get();
  }

  ngOnInit() {
  }



getItems(ev:any){
  this.list = this.prosSrv.get();
  let item = ev.target.value;
  if (item && item.trim() != '') {
    return this.list = this.prosSrv.searchByName(item);
  }
}

openCreatorProspectForm(){
this.nav.push(ProspectCrudComponent,{isEditing:false});
}

editProspect(item:Prospect){
this.nav.push(ProspectCrudComponent,{isEditing:true,item:item});
}

deleteProspect(item:Prospect){
this.prosSrv.showConfirm(item);
}

assigProperty(ev:any){
  console.log(ev.target.value)
  //this.properties.property = ev;
}

searchProspectByProperty(){
  console.log(this.properties)
  this.list = this.prosSrv.searchProspectByProperty(this.properties.textProperty,this.properties.property);
  this.advSrch = false;
  console.log(this.advSrch)
}

  dismiss(){
    this.viewCtrl.dismiss();
  }

/*  DeployChart(){
    let currentCanvas = document.getElementById('chart');
    let chart = new Chart(currentCanvas,  {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}*/

}
