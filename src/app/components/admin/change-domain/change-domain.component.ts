import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Engineer } from 'src/app/models/engineer';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-change-domain',
  templateUrl: './change-domain.component.html',
  styleUrls: ['./change-domain.component.css']
})
export class ChangeDomainComponent implements OnInit {

  newdomainList:any = ['TV','Mobile','AC','Washing_Machine']
  engineer : Engineer = new Engineer();
  engineerId : number;
  submitted = false;
  domain : string;
  custDomain : FormControl;
  changeDomainForm : FormGroup

  constructor(private adminService : AdminService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.engineer = new Engineer();
}

changeDomain(){
console.log(this.engineer.engineerId);
console.log(this.engineer.domain);
 this.adminService.changeDomain(this.engineer.engineerId,this.engineer.domain).subscribe(
   engineer => {
     this.engineer= engineer;
     this.goToEngineerDetails(this.engineer.engineerId);
     
   }, error => console.log(error)
 ); 
}
goToEngineerDetails(engineerId:number){
 this.router.navigate(['admin/engineerId',engineerId]);
}

submit(){
 
 this.changeDomain();

  }
}
