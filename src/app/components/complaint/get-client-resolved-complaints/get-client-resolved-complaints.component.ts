import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { ComplaintService } from 'src/app/services/complaint.service';


@Component({
  selector: 'app-get-client-resolved-complaints',
  templateUrl: './get-client-resolved-complaints.component.html',
  styleUrls: ['./get-client-resolved-complaints.component.css']
})
export class GetClientResolvedComplaintsComponent implements OnInit {

  clientId : string;
  complaints : Complaint[];
  constructor(private complaintService:ComplaintService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadComplaintData();
  }

  reloadComplaintData() {
    this.clientId = this.route.snapshot.params['clientId'];
    console.log("here",this.clientId);
    this.complaintService.getClientResolvedComplaints(this.clientId).subscribe(
      complaints => {
        this.complaints = complaints
        console.log(complaints);
      }
    );
  }//reload close

  complaintDetails(id : number){
    this.router.navigate(['complaint/complaintId',id])
  }
  
  changeStatus(id : number){
    this.router.navigate(['complaint/changestatus',id])
  }

  getEngineerDetails(id:number){
    this.router.navigate(['complaint/engineer/complaintId',id])
  }

  goToHomePage(){
    alert("You want to logout");
    this.router.navigate([''])
  }

  goToClientHomePage(){
    this.router.navigate(['client/clientHome']);
  }


}
