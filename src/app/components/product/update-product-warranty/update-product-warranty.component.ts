import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-update-product-warranty',
  templateUrl: './update-product-warranty.component.html',
  styleUrls: ['./update-product-warranty.component.css']
})
export class UpdateProductWarrantyComponent implements OnInit {

  modelNumber:string;
  product:Product;
  warrantyYears :number;
  submitted=false;
  
 
  constructor(private router:Router,private route:ActivatedRoute,private productService :ProductService) { }

  ngOnInit(): void {
    this.product = new Product();
    this.modelNumber = this.route.snapshot.params['modelNumber'];
    this.productService.findByModelNumber(this.modelNumber).
    subscribe(selectedProduct=>{
       console.log(selectedProduct);
       
     this.product = selectedProduct;
     console.log(this.product.modelNumber);
    },error=>console.log(error)); 
  }
  updateProductWarranty(warrantyYears : number):void{
    console.log(this.warrantyYears);
    console.log(this.modelNumber);
     this.productService.updateProductWarranty(this.modelNumber,this.warrantyYears).subscribe(
       product => {
         this.product = product;
         console.log(product);
         console.log(this.modelNumber);
         this.goToProductDetails(this.modelNumber);
         console.log(this.modelNumber);
       }, error => console.log(error)
     ); 
   }
   goToProductDetails(modelNumber:string){
     this.router.navigate(['product/modelNumber',modelNumber]);
   }
   
   submit(data :number){
     this.submitted=true;
     this.warrantyYears=data;
     this.updateProductWarranty(data['warrantyYears']);
     
   
      }
}

