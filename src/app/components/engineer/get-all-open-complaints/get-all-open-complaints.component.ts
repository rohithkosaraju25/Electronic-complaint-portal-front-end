import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { EngineerService } from 'src/app/services/engineer.service';


@Component({
  selector: 'app-get-all-open-complaints',
  templateUrl: './get-all-open-complaints.component.html',
  styleUrls: ['./get-all-open-complaints.component.css']
})
export class GetAllOpenComplaintsComponent implements OnInit {

  engineerId : number;
  complaints : Complaint[];
 

  constructor(private router:Router,private route:ActivatedRoute,private engineerService :EngineerService) { }

  ngOnInit(): void {
    this.engineerId = this.route.snapshot.params['engineerId'];
    this.reloadComplaintData();
  }

  reloadComplaintData() {
    this.engineerService.getAllOpenComplaints(this.engineerId).subscribe(
      complaints => {
        this.complaints = complaints
      } 
    );
  }
  
  complaintDetails(id : number){
    this.router.navigate(['engineer/complaintId',id])
  }
  
  changeComplaintStatus(id :number){
    this.router.navigate(['engineer/changeStatus',id])
    
  }

  goToEngineerHomePage(){
    this.router.navigate(['engineer/engineerHome',this.engineerId]);
  }
}
