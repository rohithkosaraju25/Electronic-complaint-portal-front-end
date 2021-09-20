import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-complaint-details-eng',
  templateUrl: './complaint-details-eng.component.html',
  styleUrls: ['./complaint-details-eng.component.css']
})
export class ComplaintDetailsEngComponent implements OnInit {
  complaintId : number;
  complaint : Complaint;
  engineerId : number;
  constructor(private route : ActivatedRoute,private router : Router,private engineerService : EngineerService) { }

  ngOnInit(): void {
    // this.complaint = new Complaint();
    this.complaintId = this.route.snapshot.params['complaintId'];
    this.engineerId = this.route.snapshot.params['engineerId'];
    console.log("id in compo " + this.complaintId);
    this.engineerService.getComplaintByComplaintId(this.complaintId).subscribe(
      selectedComplaint =>{
        console.log(selectedComplaint);
        this.complaint = selectedComplaint;
      }, error =>console.log(error));
  }

  goToHomePage(){
    console.log(this.engineerId);
    this.router.navigate(['home']);
  }
}
