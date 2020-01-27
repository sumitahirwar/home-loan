import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  addForm:FormGroup;
    url:string="http://localhost:9081/homeloan";
    emailId:string;
    password:string;
    result:any;
  

  constructor(private http:HttpClient) { }
  
  ngOnInit() {
  }
  loginCustomer():void{
    alert('login');
    let url=this.url+"/"+this.emailId+"/"+this.password;
    alert(url);
    this.http.get(url).subscribe(data=>{
      alert('Successfull');
      this.result=data;
    })
}
}
