import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { Product } from 'src/app/models/product';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ComplaintService } from 'src/app/services/complaint.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-client-home-page',
  templateUrl: './client-home-page.component.html',
  styleUrls: ['./client-home-page.component.css']
})
export class ClientHomePageComponent implements OnInit {

  clientId : string;
  complaint :Complaint;
  product : Product;
  products : Product[];
  complaints : Complaint[];
  token: string;
  constructor(private route:ActivatedRoute,private router : Router,private complaintService : ComplaintService,private productService :ProductService,private loginService :AuthenticationService) { 
    
  }

  ngOnInit(): void {
    this.complaint = new Complaint();
    this.product= new Product();
    this.clientId = this.loginService.isUserLoggedIn();
    // this.clientId = this.route.snapshot.params['clientId'];
    console.log(this.clientId);
    this.reloadComplaintData();
    this.reloadProductData();
  }

  reloadComplaintData() {
    this.complaintService.getClientAllComplaints(this.clientId).subscribe(
      complaints => {
        this.complaints = complaints;
      }
    );
  }
  reloadProductData(){
    this.productService.getProductsByClientId(this.clientId).subscribe(
      products=>{
        this.products=products;
      }
    );
  }
  goToActiveComplaints(){
    console.log(this.clientId);
    this.router.navigate(['complaint/active/client',this.clientId]);
  }
  goTobookComplaint(){
    this.router.navigate(['complaint/bookComplaint']);
  }

  goToAllComplaints(){
    this.router.navigate(['complaint/client',this.clientId]);
  }
  goToAllproducts(){
    this.router.navigate(['product/clientId',this.clientId]);
  }
  goToHomePage(){
    this.loginService.logOut();
  }

  complaintDetails(id : number){
    this.router.navigate(['complaint/complaintId',id])
  }

  productDetails(modelNumber : string){
    this.router.navigate(['product/modelNumber',modelNumber]);
  }

  goToClientDetails(){
    this.router.navigate(['client/details/clientId',this.clientId]);
  }

  goToAllOpenComplaints(){
    this.router.navigate(['complaint/open/client',this.clientId]);
  }
  goToRequestComplaints(){
    this.router.navigate(['complaint/active/client',this.clientId]);
  }
  goToRequestStatus(){
    this.router.navigate(['complaint/requested/replacement/client',this.clientId]);
  }
  goToResolvedComplaints(){
    this.router.navigate(['complaint/resolved/client',this.clientId]);
  }
  goToonGoingComplaints(){
    this.router.navigate(['complaint/onGoing/client',this.clientId]);
  }

}
