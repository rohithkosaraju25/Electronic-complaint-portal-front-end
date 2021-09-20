import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-replace-engineer-from-complaint',
  templateUrl: './replace-engineer-from-complaint.component.html',
  styleUrls: ['./replace-engineer-from-complaint.component.css']
})
export class ReplaceEngineerFromComplaintComponent implements OnInit {

  complaint : Complaint = new Complaint();
  complaintId : number;
  submitted = false;
  engineerId : number;

  constructor(private adminService : AdminService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.complaint = new Complaint();
    this.complaintId = this.route.snapshot.params['complaintId'];
    this.replaceEngineer();
  }
  replaceEngineer(){
    this.adminService.replaceEngineerFromComplaint(this.complaintId).subscribe(
      updatedComplaint =>{
        this.complaint = updatedComplaint;
        console.log(updatedComplaint);
      }
    );
  }

  goToComplaintDetails(){
      this.router.navigate(['admin/complaintId',this.complaintId]);
  }

  goToAdminHomePage(){
    alert("You want to logout");
    this.router.navigate([''])
  }

}
