import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Engineer } from 'src/app/models/engineer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-remove-engineer',
  templateUrl: './remove-engineer.component.html',
  styleUrls: ['./remove-engineer.component.css']
})
export class RemoveEngineerComponent implements OnInit {
 
  engineerId:number;
  engineer:Engineer=new Engineer();
  submitted= false;
  engineers: Engineer[];

  constructor(private adminService : AdminService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.engineer = new Engineer();
    this.engineerId = this.route.snapshot.params['engineerId'];
    this.removeEngineer();
  }


   removeEngineer(){
     console.log(this.engineerId);
     this.adminService.removeEngineer(this.engineerId).subscribe(
       engineers=>{
         this.engineer=engineers;
       },
     );
   }

   goToAllEngineers(){
    this.router.navigate(['admin/allEngineerDetails']);
}
goToAdminHomePage(){
  alert("You want to logout");
  this.router.navigate([''])
}

}

