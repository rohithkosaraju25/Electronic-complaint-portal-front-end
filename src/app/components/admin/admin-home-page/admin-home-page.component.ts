import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { Complaint } from 'src/app/models/complaint';
import { Engineer } from 'src/app/models/engineer';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {
  adminId : string;
  admin : Admin;
  complaint :Complaint;
  engineer :Engineer;
  complaints : Complaint[];
  engineerId:number;
  complaintId:string;
  productCategoryName:string;
  product: Product;
  status: string;
  engineers:Engineer[];

  constructor(private adminService : AdminService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.complaint = new Complaint();
    this.adminId = this.route.snapshot.params['adminId'];
    this.product= new Product();
   
  }

  goToAddEngineer(){
    this.router.navigate(['admin/addEngineer']);
  }

  goToAllEngineersComponent(){
    this.router.navigate(['admin/allEngineerDetails'])

  }
  
  goToReplaceRequestComplaints(){
     this.router.navigate(['admin/requestedForReplacement'])
  }
  
  goToChangeDomain(){
     this.router.navigate(['admin/changedomain'])
  }
  goToGetComplaintByCategory(){
    this.router.navigate(['admin/complaints/productByCategoryName']);
  }

  goToGetComplaintsByProductcategoryComponent(){
    this.router.navigate(['admin/complaints/productByCategoryName']);
  }
  
  goToHomePage(){
    alert('Logging out');
    this.router.navigate['home'];
  }

  goToAdminHomePage(){
    alert("You want to logout");
    this.router.navigate(['admin/adminHome',this.adminId])
  }

  goToAddProduct(){
    this.router.navigate(['product/addProduct']);
  }

  goToRemoveProducts(){
    this.router.navigate(['product/deletebyCategory']);
  }

  goToGetEngineersByProductCategoryName(){
    this.router.navigate(['product/engineers/productCategoryName']);
  }

  goToGetProduct(){
    this.router.navigate(['product/getproduct/productCategoryName']);
  }

  goToFindProduct(){
    this.router.navigate(['product/modelNumber']);
  }

}
