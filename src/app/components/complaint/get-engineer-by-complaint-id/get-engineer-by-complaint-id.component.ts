import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { Engineer } from 'src/app/models/engineer';
import { ComplaintService } from 'src/app/services/complaint.service';


@Component({
  selector: 'app-get-engineer-by-complaint-id',
  templateUrl: './get-engineer-by-complaint-id.component.html',
  styleUrls: ['./get-engineer-by-complaint-id.component.css']
})
export class GetEngineerByComplaintIdComponent implements OnInit {
  complaintId : number;
  complaint : Complaint = new Complaint();
  engineer : Engineer;
  constructor(private complaintService : ComplaintService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
   // this.complaint= new Complaint();
    this.complaintId = this.route.snapshot.params['complaintId'];
    this.complaintService.getEngineerbyComplaintId(this.complaintId).subscribe(
    selectedEngineer => {
      console.log(selectedEngineer);
      this.engineer = selectedEngineer;
    },error => console.log(error)
    );
  }

  goToHomePage(){
    alert("You want to logout");
    this.router.navigate([''])
  }
  
  goToClientHomePage(){
    this.router.navigate(['client/clientHome']);
  }
 
}
