import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Engineer } from 'src/app/models/engineer';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-add-engineer',
  templateUrl: './add-engineer.component.html',
  styleUrls: ['./add-engineer.component.css']
})
export class AddEngineerComponent implements OnInit {
  engineer : Engineer = new Engineer();
  engineerId : number;
  submitted = false;
  constructor(private adminService : AdminService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  addEngineer():void{
    this.adminService.addEngineer(this.engineer).subscribe(
      result=>{
        console.log(result);
        this.engineer=result;
        /*const engineerId=this.route.snapshot.paramMap.get('engineerId');
        console.log(engineerId);
        this.adminService.getEngineerById(engineerId).subscribe(
       addEngineer=>{
       this.engineer=addEngineer;
       console.log('engineer',this.engineer);
      }
    );*/
   this.goToEngineerDetails(this.engineer.engineerId);
  },error=>console.log(error)
  );
}

goToEngineerDetails(engineerId:number) {
  this.router.navigate(['admin/engineerId',engineerId]);
}


  onSubmit(){
   this.submitted=true;
   this.addEngineer();
  }
}
