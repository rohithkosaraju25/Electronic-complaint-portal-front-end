import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {

  productCategoryName:string;
  product: Product;

  constructor(private productService : ProductService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.product=new Product();
    console.log(this.product.productCategoryName);
  }

  goToGetByProductCategoryName(productCategoryName:string){
    console.log("printing")
    console.log(productCategoryName);
    this.router.navigate(['product/categoryName',productCategoryName]);
      }
    onSubmit(){
      this.goToGetByProductCategoryName(this.product.productCategoryName);
    }
 


}
