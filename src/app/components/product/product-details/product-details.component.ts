import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  modelNumber : string;
  product : Product;
  constructor(private prodcutService : ProductService,private route : ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.product=new Product();
    this.modelNumber = this.route.snapshot.params['modelNumber'];
    this.prodcutService.findByModelNumber(this.modelNumber).subscribe(
      selectedProduct=>{
        this.product=selectedProduct;
      },error =>console.log(error));
  }

  goToHomePage(){
    alert("You want to logout");
    this.router.navigate([''])
  }

}