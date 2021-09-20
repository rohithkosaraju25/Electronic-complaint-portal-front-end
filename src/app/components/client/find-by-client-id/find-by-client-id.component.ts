import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientServiceService } from 'src/app/services/client-service.service';


@Component({
  selector: 'app-find-by-client-id',
  templateUrl: './find-by-client-id.component.html',
  styleUrls: ['./find-by-client-id.component.css']
})
export class FindByClientIdComponent implements OnInit {

  clientId : string;
  client : Client;
  constructor(private clientService : ClientServiceService,private route : ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.client= new Client();
    console.log(this.client.clientId);
  }
  gotoGetClientByClientId(clientId : string){
    this.router.navigate(['clientId',clientId]);
  }
  onSubmit(){
    this.gotoGetClientByClientId(this.client.clientId);
  }

}
