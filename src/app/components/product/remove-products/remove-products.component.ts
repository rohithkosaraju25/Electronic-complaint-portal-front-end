import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-remove-products',
  templateUrl: './remove-products.component.html',
  styleUrls: ['./remove-products.component.css']
})
export class RemoveProductsComponent implements OnInit {
  adminId:string;
  product:Product;
  products :Product[];
  productCategoryName:string;
  submitted= false;
  constructor(private router:Router,private route:ActivatedRoute,private productService :ProductService) { }

  ngOnInit(): void {
    this.product=new Product();
  }
  removeProducts(productCategoryName:string)
  {
    console.log(productCategoryName);
   // this.productCategoryName = this.route.snapshot.params['productCategoryName'];
    this.productService.deleteByProductCategoryName(productCategoryName).subscribe(
      products=>{
        this.products=products;
        //this.reloadProductData();
      },error =>console.log(error)
    );
    alert("product deleted succesfully");
  }
    
  goToAdminHomePage(){
    this.router.navigate(['admin/adminHome',this.adminId]);
}

submit(){
  this.submitted=true;
  console.log(this.productCategoryName);
}
  
}
