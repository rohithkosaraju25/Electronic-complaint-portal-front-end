import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import { Observable } from 'rxjs';
import { Complaint } from '../models/complaint';


@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }
  baseURL = 'http://localhost:8091/complaint';

  bookComplaint(complaint : Complaint) :Observable<any> {
    return this.http.post("http://localhost:8091/complaint/bookComplaint",complaint);
  }
  changeComplaintStatus(complaintId : number, status : string) : Observable<any>{
    // return this.http.put(`http://localhost:8091/complaint/changeStatus/${complaintId}?status=${status}`,status);
      return this.http.put(`http://localhost:8091/complaint/changeStatus/${complaintId}`,status);
    // let params=new HttpParams()
    // .set('status',status);
    // return this.http.put(`http://localhost:8091/complaint/changeStatus/${complaintId}`,{params});
  }
  getClientAllComplaints(clientId:string) : Observable<any>{
    return this.http.get("http://localhost:8091/complaint/client/"+clientId);
  }
  getClientAllOpenComplaints(clientId:string) : Observable<any>{
    return this.http.get("http://localhost:8091/complaint/open/client/"+clientId);
  }
  getEngineerbyComplaintId(complaintId:number) : Observable<any>{
    return this.http.get("http://localhost:8091/complaint/engineer/complaintId/"+complaintId);
  }
  getProductByComplaintId(complaintId:number) : Observable<any>{
    return this.http.get("http://localhost:8091/complaint/product/complaintId/"+complaintId);
  }

  getComplaintByComplaintId(complaintId : number) : Observable<any>{
    return this.http.get("http://localhost:8091/complaint/complaintId/"+complaintId);
  }

  getClientActiveComplaints(clientId : string) : Observable<any>{
    return this.http.get("http://localhost:8091/complaint/active/client/"+clientId);
  }
  requestForReplacementOfEngineer(complaintId : number) : Observable<any>{
    return this.http.put(this.baseURL+'/requestStatus/'+`${complaintId}`,complaintId);
  }
  getClientRequestedForReplacementComplaints(clientId : string) : Observable<any>{
    return this.http.get(this.baseURL+'/requested/replacement/client/'+`${clientId}`);
  }
  getClientResolvedComplaints(clientId : string) : Observable<any>{
    return this.http.get("http://localhost:8091/complaint/resolved/client/"+clientId);
  }
  getClientonGoingComplaints(clientId : string) : Observable<any>{
    return this.http.get("http://localhost:8091/complaint/onGoing/client/"+clientId);
  }
}

