import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-change-complaint-status-eng',
  templateUrl: './change-complaint-status-eng.component.html',
  styleUrls: ['./change-complaint-status-eng.component.css']
})
export class ChangeComplaintStatusEngComponent implements OnInit {

  statusList:any = ['RESOLVED', 'RESOLVE ONLINE', 'RESOLVE AT HOME']
  complaint : Complaint = new Complaint();
  complaintId : number;
  submitted = false;
  status : string;
  custStatus : FormControl;
  changeStatusForm : FormGroup;
  engineerId : number;
  
  constructor(private router:Router,private route:ActivatedRoute,private engineerService :EngineerService) { }
  ngOnInit(): void {
     this.complaint = new Complaint();
     this.complaintId = this.route.snapshot.params['complaintId'];
     this.engineerId=this.route.snapshot.params['engineerId'];
     this.custStatus = new FormControl();
     this.changeStatusForm = new FormGroup({
       'status':this.custStatus
     });
     this.engineerService.getComplaintByComplaintId(this.complaintId).
     subscribe(selectedComplaint=>{
        console.log(selectedComplaint);
      this.complaint = selectedComplaint;
     },error=>console.log(error)); 
}

changeStatus(status : string){
 console.log(this.complaintId);
 console.log(status);
  this.engineerService.changeComplaintStatus(this.complaintId,status).subscribe(
    complaint => {
      this.complaint= complaint;
      this.goToComplaintDetails(this.complaint.complaintId);
      
    }, error => console.log(error)
  ); 
}
goToComplaintDetails(complaintId:number){
  this.router.navigate(['engineer/complaintId',complaintId]);
}

submit(){
  console.log("form value",this.changeStatusForm.value);
  console.log(this.custStatus);
  this.changeStatus(this.changeStatusForm.value);

   }

   goToEngineerHomePage(){
    this.router.navigate(['engineer/engineerHome',this.engineerId]);
  }
}
