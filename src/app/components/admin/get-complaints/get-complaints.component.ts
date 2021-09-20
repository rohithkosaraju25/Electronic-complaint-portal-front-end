import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-get-complaints',
  templateUrl: './get-complaints.component.html',
  styleUrls: ['./get-complaints.component.css']
})
export class GetComplaintsComponent implements OnInit {
  statusList:any = ['CLOSED','OPEN']
  productCategoryName:string;
  complaint:Complaint;
  complaints: Complaint[];
  status:string;
  submitted = false;
  product: any;

  constructor(private adminService : AdminService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.reloadComplaintData();
  }

  reloadComplaintData() {
    this.status=this.route.snapshot.params['status'];
    this.productCategoryName=this.route.snapshot.params['productCategoryName'];
    this.adminService.getComplaints(this.status,this.productCategoryName).subscribe(
    complaints => {
        this.complaints = complaints;
         console.log(complaints);
      }
    );
  }

complaintDetails(complaintId:number){
  this.router.navigate(['admin/complaintId',complaintId]);
}
  
goToAdminHomePage(){
  alert("You want to logout");
  this.router.navigate([''])
}

}
