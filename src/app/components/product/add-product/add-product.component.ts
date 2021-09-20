import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product : Product=new Product();
  modelNumber :string;
  submitted=false;
  constructor(private productService:ProductService,private router :Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
  }
  addProduct():void{
    this.productService.addProduct(this.product).subscribe(
      result=>{
        this.product=result;
        console.log(result);
        this.goToProductDetails(this.product.modelNumber);
      },error=>console.log(error)
    );
  }
  goToProductDetails(modelNumber:string)
  {
    this.router.navigate(['product/modelNumber',modelNumber]);
  }
  onSubmit(){
    this.submitted=true;
    this.addProduct();
  }



}
