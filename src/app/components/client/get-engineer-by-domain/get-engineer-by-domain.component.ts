import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Engineer } from 'src/app/models/engineer';
import { ClientServiceService } from 'src/app/services/client-service.service';



@Component({
  selector: 'app-get-engineer-by-domain',
  templateUrl: './get-engineer-by-domain.component.html',
  styleUrls: ['./get-engineer-by-domain.component.css']
})
export class GetEngineerByDomainComponent implements OnInit {

  domain: string;
  engineers : Engineer[];
  
  constructor(private clientService : ClientServiceService, private router : Router,private route : ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.domain = this.route.snapshot.params['domain'];
  //   console.log(this.domain);
  //   this.clientService.getEngineerByDomain(this.domain).subscribe(
  //     selectedEngineer => {
  //       console.log(selectedEngineer);
  //       this.domain=selectedEngineer;
  //     },error => console.log(error)
  //   );
  // }
  ngOnInit(): void {
    this.reloadEngineerData();
  }
  reloadEngineerData() {
    this.domain = this.route.snapshot.params['domain'];
    this.clientService.getEngineerByDomain(this.domain).subscribe(
      engineers => {
        this.engineers = engineers
      }
    );
  }
   engineerDetails(domain:string){
     this.router.navigate(['engineer/domain',this.domain])
   }

}
