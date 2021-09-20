import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-get-complaints-by-productcategory',
  templateUrl: './get-complaints-by-productcategory.component.html',
  styleUrls: ['./get-complaints-by-productcategory.component.css']
})
export class GetComplaintsByProductcategoryComponent implements OnInit {

  productCategoryName:string;
  complaint:Complaint;
  complaints: Complaint[];
  product: Product;
  form: any;
  submitted = false;
  

  constructor(private adminService : AdminService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.product=new Product();
  }

  goToGetComplaintsByProducts(productCategoryName:string){
    console.log("line30");
    console.log(productCategoryName);
    this.router.navigate(['admin/productCategoryName',productCategoryName]);
  }


  submit(){
    this.submitted=true;
    console.log(this.productCategoryName);
  }

  

}
