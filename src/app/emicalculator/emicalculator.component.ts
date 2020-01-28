import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {

  constructor() { 
   
  }
  principal:number=undefined;
  rate:number=undefined;
  time:number=undefined;
  si:number=undefined;
  amt:number=undefined;
  mon:number=undefined;

  ngOnInit() {
  }
  simpleInterest(){
     this.time=this.time*12;
    this.si=(this.principal*this.rate*this.time)/(100*12);
    this.amt=this.si+this.principal;
    this.mon=this.amt/12;
    
  }

}
