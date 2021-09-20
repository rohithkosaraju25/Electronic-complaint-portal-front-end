import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Engineer } from "src/app/models/engineer";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";


@Component({
  selector: 'app-get-engineers-by-product-category-name',
  templateUrl: './get-engineers-by-product-category-name.component.html',
  styleUrls: ['./get-engineers-by-product-category-name.component.css']
})

export class GetEngineersByProductCategoryNameComponent implements OnInit {

  engineers:Engineer[];
  engineer :Engineer;
  product:Product;
  productCategoryName:string;
  constructor(private productService :ProductService,private route:ActivatedRoute,private router :Router) { }


  ngOnInit(): void {
    this.engineer=new Engineer();
    this.product=new Product();
    console.log(this.product.productCategoryName);
  }
  goToGetEngineersByProduct(productCategoryName:string){
    this.router.navigate(['product/productCategoryName/engineer',productCategoryName]);
  }
  onSubmit(){
    this.goToGetEngineersByProduct(this.product.productCategoryName);
  }

}