import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientServiceService } from 'src/app/services/client-service.service';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  client : Client;
  clientId : string;
  constructor(private clientService : ClientServiceService,private router: Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.client = new Client();
    this.clientId = this.route.snapshot.params['clientId'];
    this.clientService.getClientByCLientId(this.clientId).subscribe(
      selectedClient =>{
        this.client=selectedClient;
        console.log(this.client);
      },error=>console.log(error)
    );
  }
  goToClientHome(){
    this.router.navigate['client/clientHome'];
  }
  goToHomePage(){
    alert("You want to logout");
    this.router.navigate([''])
  }

}
