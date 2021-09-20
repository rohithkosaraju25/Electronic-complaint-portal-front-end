import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { ComplaintService } from 'src/app/services/complaint.service';


@Component({
  selector: 'app-change-complaint-status',
  templateUrl: './change-complaint-status.component.html',
  styleUrls: ['./change-complaint-status.component.css']
})
export class ChangeComplaintStatusComponent implements OnInit {

  statusList:any = ['CLOSED']
  complaint : Complaint = new Complaint();
  complaintId : number;
  submitted = false;
  status : string;
  custStatus : FormControl;
  changeStatusForm : FormGroup;
  
  constructor(private router:Router,private route:ActivatedRoute,private complaintService :ComplaintService) { }
  ngOnInit(): void {
     this.complaint = new Complaint();
     this.complaintId = this.route.snapshot.params['complaintId'];
     this.custStatus = new FormControl();
     this.changeStatusForm = new FormGroup({
       'status':this.custStatus
     });
     this.complaintService.getComplaintByComplaintId(this.complaintId).
     subscribe(selectedComplaint=>{
        console.log(selectedComplaint);
      this.complaint = selectedComplaint;
     },error=>console.log(error)); 
}

changeStatus(status : string){
 console.log(this.complaintId);
 console.log(status);
  this.complaintService.changeComplaintStatus(this.complaintId,status).subscribe(
    complaint => {
      this.complaint= complaint;
      this.goToComplaintDetails(this.complaint.complaintId);
      
    }, error => console.log(error)
  ); 
}
goToComplaintDetails(complaintId:number){
  this.router.navigate(['complaint/complaintId',complaintId]);
}

submit(){
  console.log("form value",this.changeStatusForm.value);
  console.log(this.custStatus);
  alert("status changed to CLOSED successfully");
  this.changeStatus(this.changeStatusForm.value);

   }

   goToClientHomePage(){
    this.router.navigate(['client/clientHome']);
  }
}
