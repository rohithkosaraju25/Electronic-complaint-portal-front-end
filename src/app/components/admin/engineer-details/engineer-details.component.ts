import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Engineer } from 'src/app/models/engineer';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-engineer-details',
  templateUrl: './engineer-details.component.html',
  styleUrls: ['./engineer-details.component.css']
})
export class EngineerDetailsComponent implements OnInit {
  engineerId : number;
  engineer : Engineer;

  constructor(private adminService : AdminService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.engineer = new Engineer();
    this.engineerId = this.route.snapshot.params['engineerId'];
    this.adminService.getEngineerById(this.engineerId).subscribe(
      selectedEngineer =>{
        console.log(selectedEngineer);
        this.engineer = selectedEngineer;
      }, error =>console.log(error));
  }

  goToAdminHomePage(){
    alert("You want to logout");
    this.router.navigate([''])
  }


}
