import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-get-client-by-client-id',
  templateUrl: './get-client-by-client-id.component.html',
  styleUrls: ['./get-client-by-client-id.component.css']
})
export class GetClientByClientIdComponent implements OnInit {

    clientId : string;
    client : Client;
    constructor(private clientService:ClientServiceService,private router:Router,private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.reloadProductData();
    }
    reloadProductData(){
      this.clientId=this.route.snapshot.params['clientId'];
      console.log(this.clientId);
      this.clientService.getClientByCLientId(this.clientId).subscribe(
        result =>{
          this.client =result;
        }
      );
    }
    gotoFindByClient(clientId : string){
        this.router.navigate(['clientId',clientId]);
    }
   
    
  
  


}
