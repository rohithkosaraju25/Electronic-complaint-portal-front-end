import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  clientId: string;
  invalidLogin = false
  //clientId : string;
  password : string;
  client : Client;
  submitted = false;
  constructor(private clientService : ClientServiceService
    ,private route : ActivatedRoute
    ,private router : Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
    this.client = new Client();
  }
  clientSignIn(){
    console.log(this.client.clientId);
    this.clientId = this.client.clientId;
    this.password = this.client.password;
    this.clientService.signIn(this.client.clientId,this.client.password).subscribe(
      result=>{
        console.log(result);
        this.checkLogin();
        console.log("home");
      },error =>{console.log(error)}
    );
  }
 /*  goToClientHomePage(id:string){
    console.log("reaching though");
    id = this.client.clientId;
    console.log(id);
    this.router.navigate(['clientHome',id])
  } */
  onSubmit(){
    this.submitted = true;
    this.clientSignIn();
  }

  checkLogin() {
    console.log("HEllo")
    if (this.loginservice.authenticate(this.clientId, this.password)
    ) {
      console.log("HEllo")
      this.router.navigate(['client/clientHome'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
