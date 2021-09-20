import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-get-product-complaints',
  templateUrl: './get-product-complaints.component.html',
  styleUrls: ['./get-product-complaints.component.css']
})
export class GetProductComplaintsComponent implements OnInit {

  // productCategoryName :string;
  // complaints : Complaint[];
  // product : Product;
  // constructor(private productService : ProductService,private router : Router,private route : ActivatedRoute) { }

   ngOnInit(): void {
  //   this.productCategoryName=this.route.snapshot.params['productCatgeoryName'];
  //   this.productService.getProductComplaints(this.productCategoryName).subscribe(
  //     selectedComplaint =>{
  //       console.log(selectedComplaint);
  //       this.complaints=selectedComplaint;
  //     },error =>console.log(error)
  //   );
   }
  
}
