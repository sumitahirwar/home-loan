import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  constructor(private router:Router) {
   }

  ngOnInit() {
  }

  applyNow() {
    this.router.navigate(['/income-details'])
  }
}
