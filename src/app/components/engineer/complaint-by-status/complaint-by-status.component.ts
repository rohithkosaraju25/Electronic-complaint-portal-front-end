import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { EngineerService } from 'src/app/services/engineer.service';


@Component({
  selector: 'app-complaint-by-status',
  templateUrl: './complaint-by-status.component.html',
  styleUrls: ['./complaint-by-status.component.css']
})
export class ComplaintByStatusComponent implements OnInit {
  
  statusList:any = ['CLOSED', 'OPEN', 'RESOLVED', 'RESOLVE AT HOME', 'RESOLVE ONLINE']
  complaint:Complaint;
  complaints: Complaint[];
  engineerId : number;
  submitted = false;
  status : string;
  custStatus : FormControl;
  changeStatusForm : FormGroup;
  
  constructor(private router:Router,private route:ActivatedRoute,private engineerService :EngineerService) { }

  ngOnInit(): void {
    this.engineerId = this.route.snapshot.params['engineerId'];
    this.complaint=new Complaint();
  }

  goToGetComplaintsByStatus(status:string){
    console.log("line30");
    console.log(status);
    this.router.navigate(['engineer/complaints', this.engineerId, 'status',status]);
  }


  submit(){
    this.submitted=true;
    console.log(this.status);
  }

  goToEngineerHomePage(){
    this.router.navigate(['engineer/engineerHome',this.engineerId]);
  }
}
