import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup,FormControl ,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  url:string="http://localhost:9081/homeloan";
  constructor(private http:HttpClient,private formBuilder: FormBuilder) { }
  

  addForm=new FormGroup ({
    // firstName: new FormControl('', Validators.required),
     customerName:new FormControl('',[Validators.required,Validators.minLength(6)]),
      gender:new FormControl('',[Validators.required]),
      emailId:new FormControl(' ',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(6)]),
      phoneNo:new FormControl(' ',[Validators.required, Validators.minLength(10)]),
      address:new FormControl('',[Validators.required]),
     adhaarNo:new FormControl(' ',[Validators.required, Validators.minLength(12)]),
      panNo:new FormControl('',[Validators.required]),
      age:new FormControl(' ',[Validators.required, Validators.minLength(3)]),
      nationality:new FormControl('',[Validators.required]),
     
 });
   ngOnInit() {
 console.log(this.addForm.get('customerName'))
 console.log(this.addForm)
 
   }
 addCustomer():void{
  
   console.log(this.addForm.get('customerName'))
   console.log(this.addForm)
   this.submitted= true;
   this.http.post(this.url,this.addForm.value).subscribe(data=>
    {
      alert('customer is added');
    })
    
   
 }
 }
 