import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {

  modelNumber:string;
  product: Product;

  constructor(private productService : ProductService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.product=new Product();
    console.log(this.product.modelNumber);
  }

  goToFindByModelNumber(modelNumber:string){
    this.router.navigate(['product/modelNumber',modelNumber]);
      }
    onSubmit(){
      this.goToFindByModelNumber(this.product.modelNumber);
    }

  

}
