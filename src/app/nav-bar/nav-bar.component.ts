import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  login: boolean = false;
  ngOnInit() {
    this.router.events.subscribe(e => {
      if(e instanceof NavigationStart) {
        this.login = e.url !== '/login';
      }
    });
  }


  logout() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/login"]);
      return;
    }

    localStorage.clear();
    this.authService.isLoggedIn = false;
    this.router.navigate(["/"]);
  }
}
