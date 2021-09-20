import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { Product } from 'src/app/models/product';
import { ComplaintService } from 'src/app/services/complaint.service';


@Component({
  selector: 'app-get-product-by-complaint-id',
  templateUrl: './get-product-by-complaint-id.component.html',
  styleUrls: ['./get-product-by-complaint-id.component.css']
})
export class GetProductByComplaintIdComponent implements OnInit {
  complaintId : number;
  complaint : Complaint;
  product : Product;
  clientId: String;

  constructor(private complaintService : ComplaintService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.complaintId = this.route.snapshot.params['complaintId'];
    this.complaintService.getProductByComplaintId(this.complaintId).subscribe(
      selectedProduct => {
        console.log(selectedProduct);
        this.product=selectedProduct;
        this.clientId = this.product.clientId;
        console.log(this.clientId);
      },error => console.log(error)
    );
  }

  goToHomePage(){
    alert("you are Logging out!!")
    this.router.navigate(['']);
  }

  goToClientHomePage(){
    this.router.navigate(['client/clientHome']);
  }

}
