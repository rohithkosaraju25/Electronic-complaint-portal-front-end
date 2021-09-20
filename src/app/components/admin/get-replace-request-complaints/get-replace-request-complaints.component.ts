import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-get-replace-request-complaints',
  templateUrl: './get-replace-request-complaints.component.html',
  styleUrls: ['./get-replace-request-complaints.component.css']
})
export class GetReplaceRequestComplaintsComponent implements OnInit {

  complaints : Complaint[];
  complaint : Complaint;
  constructor(private adminService : AdminService,private router:Router) { }

  ngOnInit(): void {
    this.reloadComplaintData();
  }

  reloadComplaintData(){
    this.adminService.getComplaintsByRequestStatus().subscribe(
      selectedComplaints=>{
        this.complaints=selectedComplaints;
        console.log(selectedComplaints);
      }
    );
  }
  complaintDetails(id : number){
    this.router.navigate(['admin/complaintId',id]);
  }
  replaceEngineer(complaintId : number){
    this.router.navigate(['admin/replace/engineer/complaintId',complaintId]);
  }
  getEngineerDetails(id:number){
    this.router.navigate(['admin/engineerId',id]);
  }

  goToAdminHomePage(){
    alert("You want to logout");
    this.router.navigate([''])
  }
}
