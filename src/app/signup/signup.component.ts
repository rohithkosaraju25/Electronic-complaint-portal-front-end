import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client';
import { ClientServiceService } from '../services/client-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private formgroup: FormGroup;
  client : Client = new Client();
  submitted = false;
  form: FormGroup = new FormGroup({});

  constructor(private clientService : ClientServiceService,private route : ActivatedRoute,private router : Router,private fb: FormBuilder) { 
    this.form = fb.group({  
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
    }) 
  }

get f(){  
    return this.form.controls;  
  }  
  ngOnInit(): void {
    this.form = this.fb.group({
      phoneNumber: ['', [ Validators.required,
       Validators.pattern("^[0-9]*$"),
       Validators.minLength(10), Validators.maxLength(10)]]
   });
  }

  clientSignup(){
    this.clientService.saveclient(this.client).subscribe(
      client => {
        this.client=client;
        
        
      }, error => console.log(error)
    );
    alert("You successfully registered as client!!!");
   
  }

 
  onSubmit(){
    this.submitted = true;
    this.clientSignup();
    if (this.form.invalid) {
      return;
  }
  }

}
