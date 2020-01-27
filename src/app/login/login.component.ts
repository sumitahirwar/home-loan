import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  addForm: FormGroup;
  url: string = "http://localhost:9081/homeloan";
  emailId: string;
  password: string;
  result: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}
  loginCustomer(): void {
    alert("login");
    /**for testing purpose hardcoded */
    if (this.emailId === "test@test.com" && this.password === "test") {
      localStorage.setItem("isLoggedIn", "true");
      this.router.navigate(["/home"]);
      this.authService.isLoggedIn = true;
    }

    let url = this.url + "/" + this.emailId + "/" + this.password;
    alert(url);
    this.http.get(url).subscribe(data => {
      alert("Successfull");
      /** below line to store the user log data and to redirect to home page */
      localStorage.setItem("isLoggedIn", "true");
      this.result = data;
      this.router.navigate(["/home"]);
      this.authService.isLoggedIn = true;
    });
  }
}
