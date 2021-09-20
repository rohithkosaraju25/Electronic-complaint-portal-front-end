import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-get-by-product-category-name',
  templateUrl: './get-by-product-category-name.component.html',
  styleUrls: ['./get-by-product-category-name.component.css']
})
export class GetByProductCategoryNameComponent implements OnInit {

  productCategoryName : string;
  products : Product[];
  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadProductData();
  }
  reloadProductData(){
    this.productCategoryName=this.route.snapshot.params['productCategoryName'];
    console.log(this.productCategoryName);
    this.productService.getByProductCategoryName(this.productCategoryName).subscribe(
      result =>{
        this.products =result;
      }
    );
  }
  productDetails(id : string){
    this.router.navigate(['product/productmodelNumber',id])
  }
 
   updateProductWarranty(modelNumber:string){
    this.router.navigate(['product/updateWarranty',modelNumber])
   }

}
