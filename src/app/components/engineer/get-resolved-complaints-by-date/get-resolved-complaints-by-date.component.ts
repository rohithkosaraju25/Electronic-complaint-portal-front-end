import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { EngineerService } from 'src/app/services/engineer.service';


@Component({
  selector: 'app-get-resolved-complaints-by-date',
  templateUrl: './get-resolved-complaints-by-date.component.html',
  styleUrls: ['./get-resolved-complaints-by-date.component.css']
})
export class GetResolvedComplaintsByDateComponent implements OnInit {
  
  engineerId : number;
  complaints : Complaint[];
  date : String;
  submitted = false;
  complaint : Complaint = new Complaint();
  startDate : Date;
  endDate : Date;
 

  constructor(private router:Router,private route:ActivatedRoute,private engineerService :EngineerService) { }

  ngOnInit(): void {
    this.engineerId = this.route.snapshot.params['engineerId'];
  }

  reloadComplaintData() {
    this.engineerService.getOpenComplaintsByDate(this.engineerId, this.date).subscribe(
      complaints => {
        this.complaints = complaints
      } 
    );
  }
  
  getResolvedByDate(date:String) : void {
    console.log("Date is here");
    console.log(date);
    console.log("Eng is " + this.engineerId);
    this.engineerService.getOpenComplaintsByDate(this.engineerId,date).subscribe(
      complaints => {
        this.complaints= complaints;
        this.complaintList(this.engineerId);
        // this.engineerService.getComplaintByEngineerId(this.engineerId);
        // this.complaintDetails(this.complaint.complaintId);
      }, error => console.log(error)
    );
  } 

  complaintList(id:number){
    this.router.navigate(['engineer/opencomplaints', id]);
  }
  // complaintDetails(id : number){
  //   console.log("entered complaintDetails");
  //   this.router.navigate(['complaintId',id])
  // }
  
  changeComplaintStatus(id :number){
    this.router.navigate(['engineer/changestatus',id])
  }

  goToEngineerHomePage(){
    this.router.navigate(['engineer/engineerHome',this.engineerId]);
  }
}
