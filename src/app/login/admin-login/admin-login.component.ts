import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminId : number;
  password : string;
  admin : Admin;
  submitted = false;

  constructor(private adminService : AdminService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.admin = new Admin();
  }
  adminSignIn(){
    console.log(this.admin.adminId);
    this.adminService.signIn(this.admin.adminId,this.admin.password).subscribe(
      result=>{
        console.log(result);
        this.goToAdminHomePage(this.admin.adminId);
        console.log("home");
      },error =>{console.log(error)}
    );
  }
  goToAdminHomePage(id:number){
    console.log("reaching though");
    this.router.navigate(['admin/adminHome',id])
  }
  onSubmit(){
    this.submitted = true;
    this.adminSignIn();
  }
}