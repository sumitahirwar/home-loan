import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  login: boolean = true;
  ngOnInit() {}

  toggleLogin() {
    this.login = !this.login;
  }

  logout() {
    if(!this.authService.isLoggedIn ){
      this.router.navigate(["/login"]);
      return ;
    }

    localStorage.clear();
    this.authService.isLoggedIn = false;
    this.router.navigate(["/"]);
  }
}
