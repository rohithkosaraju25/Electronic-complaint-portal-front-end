import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-get-complaints-by-products',
  templateUrl: './get-complaints-by-products.component.html',
  styleUrls: ['./get-complaints-by-products.component.css']
})
export class GetComplaintsByProductsComponent implements OnInit {
  productCategoryName:string;
  complaint:Complaint;
  complaints: Complaint[];
  adminId: number;

  constructor(private adminService : AdminService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadComplaintsData();

}

reloadComplaintsData() {
  this.productCategoryName=this.route.snapshot.params['productCategoryName'];
  this.adminService.getComplaintsByProducts(this.productCategoryName).subscribe(
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
  this.router.navigate(['admin/adminHome',this.adminId])
}

}
