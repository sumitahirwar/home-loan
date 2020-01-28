import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-eligibility',
  templateUrl: './check-eligibility.component.html',
  styleUrls: ['./check-eligibility.component.css']
})
export class CheckEligibilityComponent implements OnInit {

  constructor() { }
  principal:number=undefined;
  rate:number=undefined;
  time:number=undefined;
  si:number=undefined;
  amt:number=undefined;
  mon:number=undefined;
  annual:number=undefined;
  total:number=undefined;
  n:number=undefined;


  ngOnInit() {
  }
simpleInterest(){
    
    this.time=this.time*12;
    this.si=(this.principal*this.rate*this.time)/(100*12);
    this.amt=this.si+this.principal;
    this.mon=this.amt/12;
    this.n=12;
    this.total=((40/100)*this.annual)*this.n;
    

   
  }

}
