import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-get-complaints-by-status-eng',
  templateUrl: './get-complaints-by-status-eng.component.html',
  styleUrls: ['./get-complaints-by-status-eng.component.css']
})
export class GetComplaintsByStatusEngComponent implements OnInit {

  status:string;
  complaint:Complaint;
  complaints: Complaint[];
  adminId: number;
  engineerId : number;
  
  constructor(private engineerService : EngineerService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadComplaintsData();

}

reloadComplaintsData() {
  this.status=this.route.snapshot.params['status'];
  this.engineerId=this.route.snapshot.params['engineerId'];
  this.engineerService.getComplaints(this.engineerId, this.status).subscribe(
  complaints => {
      this.complaints = complaints;
       console.log(complaints);
    }
  );
}
complaintDetails(complaintId:number){
  this.router.navigate(['engineer/complaintId',complaintId]);
}

goToEngineerHomePage(){
  this.router.navigate(['engineer/engineerHome',this.engineerId]);
}

changeComplaintStatus(id :number){
  this.router.navigate(['engineer/changestatus',id])
  
}

}
