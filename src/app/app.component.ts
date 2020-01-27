import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit() {
    const logData = localStorage.getItem("isLoggedIn");
    /** check if user is already logged in (local session)*/
    if (logData === "true") {
      this.authService.isLoggedIn = true;
      this.router.navigate(["/home"]);
    }
  }
}
