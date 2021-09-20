import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { ComplaintService } from 'src/app/services/complaint.service';


@Component({
  selector: 'app-get-client-active-compalints',
  templateUrl: './get-client-active-compalints.component.html',
  styleUrls: ['./get-client-active-compalints.component.css']
})
export class GetClientActiveCompalintsComponent implements OnInit {

  clientId : string;
  complaints : Complaint[];
  constructor(private complaintService:ComplaintService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadComplaintData();
  }

  reloadComplaintData() {
    this.clientId = this.route.snapshot.params['clientId'];
    this.complaintService.getClientActiveComplaints(this.clientId).subscribe(
      complaints => {
        this.complaints = complaints
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

  goToReplaceEngineer(id : number){
    this.router.navigate(['complaint/requeststatus',id]);
  }

  goToHomePage(){
    alert("You want to logout");
    this.router.navigate([''])
  }

  goToClientHomePage(){
    this.router.navigate(['client/clientHome']);
  }


}
