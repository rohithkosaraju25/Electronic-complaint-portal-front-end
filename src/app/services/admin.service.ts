import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../models/complaint';
import { Engineer } from '../models/engineer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }
  baseURL = 'http://localhost:8091/admin';
 
  addEngineer(engineer:Engineer) : Observable<any>{
    return this.http.post("http://localhost:8091/admin/addEngineer",engineer);
}

changeDomain(engineerId:number,domain:any) : Observable<any>{
  // let params=new HttpParams()
  //     .set("engineerId",engineerId)
  //     .set('newDomain',domain);
  //     console.log(params);
    // return this.http.put('http://localhost:8091/admin/changedomain',{params});
    return this.http.put('http://localhost:8091/admin/changedomain?engineerId='+engineerId+'&newDomain='+domain,domain);
}

getAllEngineers() : Observable<any>{
  return this.http.get("http://localhost:8091/admin/allEngineerDetails");
}


removeEngineer(engineerId:number) : Observable<any>{
    return this.http.delete("http://localhost:8091/admin/remove/"+engineerId);
}

getComplaintsByProducts(productCategoryName:string) : Observable<any>{
    return this.http.get("http://localhost:8091/admin/productCategoryName/"+productCategoryName);
}

getComplaints(status:any,productCategoryName:any) : Observable<any>{
    return this.http.get(`http://localhost:8091/admin/status/${status}/productCategoryName/${productCategoryName}`);
}

  getComplaintsByRequestStatus() : Observable<any>{
    return this.http.get("http://localhost:8091/admin/requestedForReplacement");
  }


replaceEngineerFromComplaint(complaintId:any) : Observable<any>{
  // let params=new HttpParams()
  //     .set('complaintId',complaintId);
  //   return this.http.put('http://localhost:8091/admin/replace/engineer',{params});
  return this.http.put('http://localhost:8091/admin/replace/engineer/complaintId/'+`${complaintId}`,complaintId);
}

getEngineerById(engineerId : any) : Observable<any>{
    return this.http.get("http://localhost:8091/admin/engineerId/"+engineerId);
  }

  getComplaintByComplaintId(complaintId : any) : Observable<any>{
    return this.http.get("http://localhost:8091/admin/complaintId/"+complaintId);
  }

  signIn(adminId:any,password:string):Observable<any>{
    let params=new HttpParams()
      .set('adminId',adminId)
      .set('password',password);
    return  this.http.get('http://localhost:8091/admin/adminSignIn',{params});
  }
}
