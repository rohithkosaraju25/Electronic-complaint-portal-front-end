import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Engineer } from 'src/app/models/engineer';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-get-engineers-by-product',
  templateUrl: './get-engineers-by-product.component.html',
  styleUrls: ['./get-engineers-by-product.component.css']
})
export class GetEngineersByProductComponent implements OnInit {

  engineer:Engineer;
  productCategoryName:string;
  product :Product;
  engineers :Engineer[];
  constructor(private productService : ProductService,private router : Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadEngineersData();
  }

  reloadEngineersData() {
    this.productCategoryName=this.route.snapshot.params['productCategoryName'];
    this.productService.getEngineersByProduct(this.productCategoryName).subscribe(
      engineers => {
        this.engineers = engineers;
         console.log(engineers);
      }
    );
  }
  
  goToAdminHomePage(){
    alert("You want to logout");
    this.router.navigate([''])
  }
  

}
