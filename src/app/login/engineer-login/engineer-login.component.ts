import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Engineer } from 'src/app/models/engineer';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-engineer-login',
  templateUrl: './engineer-login.component.html',
  styleUrls: ['./engineer-login.component.css']
})
export class EngineerLoginComponent implements OnInit {

  engineerId : number;
  password : string;
  engineer : Engineer;
  submitted = false;
  constructor(private engineerService : EngineerService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.engineer = new Engineer();
  }
  engineerSignIn(password : any){
    console.log("id");
    console.log(this.engineer.engineerId);
    console.log("password");
    console.log(this.engineer.password);
    this.engineerService.login(this.engineer.engineerId,this.engineer.password).subscribe(
      result=>{
        console.log("Result")
        console.log(result);
        this.goToEngineerHomePage(this.engineerId);
        console.log("home");
      },error =>{console.log(error)}
    );
  }
  goToEngineerHomePage(id:number){
    console.log("reaching though");
    id = this.engineer.engineerId;
    console.log(id);
    this.router.navigate(['engineer/engineerHome',id])
  }
  onSubmit(){
    this.submitted = true;
    this.engineerSignIn(this.password);
  }


}
