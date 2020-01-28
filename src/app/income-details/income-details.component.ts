import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-income-details",
  templateUrl: "./income-details.component.html",
  styleUrls: ["./income-details.component.css"]
})
export class IncomeDetailsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(["/home"]);
  }
}
