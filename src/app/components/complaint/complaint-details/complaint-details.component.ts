import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { ComplaintService } from 'src/app/services/complaint.service';


@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {
  complaintId : number;
  complaint : Complaint;
  constructor(private route : ActivatedRoute,private router : Router,private complaintService : ComplaintService) { }

  ngOnInit(): void {
    this.complaint = new Complaint();
    this.complaintId = this.route.snapshot.params['complaintId'];
    this.complaintService.getComplaintByComplaintId(this.complaintId).subscribe(
      selectedComplaint =>{
        console.log(selectedComplaint);
        this.complaint = selectedComplaint;
      }, error =>console.log(error));
  }

  goToHomePage(){
    alert("You want to logout");
    this.router.navigate([''])
  }

  goToClientHomePage(){
    this.router.navigate(['client/clientHome']);
  }

}
