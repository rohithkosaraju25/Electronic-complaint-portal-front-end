import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { EngineerService } from 'src/app/services/engineer.service';


@Component({
  selector: 'app-engineer-homepage',
  templateUrl: './engineer-homepage.component.html',
  styleUrls: ['./engineer-homepage.component.css']
})
export class EngineerHomepageComponent implements OnInit {

  complaintId : number;
  engineerId : number;
  complaint : Complaint;
  complaints : Complaint[];
  status : String;
  date : Date;
  constructor(private route:ActivatedRoute,private router : Router,private engineerService :EngineerService) { }


  ngOnInit(): void {
    this.engineerId = this.route.snapshot.params['engineerId'];
    this.complaint = new Complaint();
    console.log(this.engineerId);
    console.log(this.complaint.status);
    this.reloadComplaintData();
  }
  
  reloadComplaintData() {
    this.engineerService.getAllOpenComplaints(this.engineerId).subscribe(
      complaints => {
        this.complaints = complaints;
      }
    );
  }
  gotoResolvedComplaints(){
    console.log(this.engineerId);
    this.router.navigate(['engineer/resolvedcomplaints/',this.engineerId]);
  }
  gotoResolvedComplaintsByDate(){
    this.router.navigate(['engineer/opencomplaints/date',this.engineerId])
  }
  gotoComplaintsByStatus(status : string) {
    console.log("id is " + this.engineerId);
    console.log("status is " + this.status);
    this.router.navigate(['engineer/complaints/',this.engineerId]);
  }

  gotoOpenComplaintsByPriority(){
    this.router.navigate(['engineer/opencomplaints/priority/', this.engineerId]);
  }

 
  goToHomePage(){
    alert('Logging out');
    this.router.navigate['home'];
  }

  complaintDetails(id : number){
    this.router.navigate(['engineer/complaintId',id])
  }
  
  changeComplaintStatus(id :number){
    this.router.navigate(['engineer/changestatus',id])
    
  }

  goToEngineerHomePage(){
    this.router.navigate(['engineer/engineerHome',this.engineerId]);
  }
}
