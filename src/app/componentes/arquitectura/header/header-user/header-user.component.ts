import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-user',
  templateUrl: 'header-user.component.html',
})
export class HeaderUserComponent implements OnInit {

  fecha : any;

  constructor() {  }

  ngOnInit() {
    this.startTime();
    setInterval(() => {this.startTime();}, 1000);
  }

  startTime(){
    var today=new Date();
    this.fecha = today;
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();

    m=this.checkTime(m);
    s=this.checkTime(s);
    document.getElementById('reloj').innerHTML="";
  }

  checkTime(i){
    if (i<10){
       i="0" + i;
     }
    return i;
  }

}
