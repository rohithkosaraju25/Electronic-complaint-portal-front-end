import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/models/complaint';
import { EngineerService } from 'src/app/services/engineer.service';


@Component({
  selector: 'app-get-open-complaints-order-by-priority',
  templateUrl: './get-open-complaints-order-by-priority.component.html',
  styleUrls: ['./get-open-complaints-order-by-priority.component.css']
})
export class GetOpenComplaintsOrderByPriorityComponent implements OnInit {

  engineerId : number;
  complaints : Complaint[];
 

  constructor(private router:Router,private route:ActivatedRoute,private engineerService :EngineerService) { }

  ngOnInit(): void {
    this.engineerId = this.route.snapshot.params['engineerId'];
    this.reloadComplaintData();
  }

  reloadComplaintData() {
    this.engineerService.getOpenComplaintsOrderByPriority(this.engineerId).subscribe(
      complaints => {
        this.complaints = complaints
      } 
    );
  }
  
  complaintDetails(id : number){
    this.router.navigate(['engineer/complaintId',id])
  }
  
  changeComplaintStatus(id :number){
    this.router.navigate(['engineer/changestatus',id])
  }

  goToEngineerHomePage(){
    this.router.navigate(['engineer/engineerHome',this.engineerId]);
  }
}
