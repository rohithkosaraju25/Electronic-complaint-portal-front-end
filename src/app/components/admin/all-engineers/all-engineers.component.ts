import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Engineer } from 'src/app/models/engineer';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-all-engineers',
  templateUrl: './all-engineers.component.html',
  styleUrls: ['./all-engineers.component.css']
})
export class AllEngineersComponent implements OnInit {

  engineers : Engineer[];
  engineeer : Engineer;
 

  constructor(private adminService : AdminService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadEngineerData();
  }

  reloadEngineerData(){
    this.adminService.getAllEngineers().subscribe(
      selectedEngineers=>{
        this.engineers=selectedEngineers;
        console.log(selectedEngineers);
      }
    );
  }

  removeEngineer(engineerId : number){
    this.router.navigate(['admin/remove',engineerId]);
  }
  getEngineerDetails(id:number){
    this.router.navigate(['admin/engineerId',id]);
  }

  goToAdminHomePage(){
    alert("You want to logout");
    this.router.navigate([''])
  }

}
