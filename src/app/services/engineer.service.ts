import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {

  constructor(private httpclient:HttpClient) { }
  baseURL = "http://localhost:8091/engineer";
 
  getAllOpenComplaints(engineerId:number):Observable<any>{
    console.log("view all open complaints URL is calling here");
    return this.httpclient.get('http://localhost:8091/engineer/opencomplaints/' + engineerId);
  }

  getResolvedComplaints(engineerId:number):Observable<any>{
    console.log("view all resolved complaints URL is calling here");
    return this.httpclient.get('http://localhost:8091/engineer/resolvedcomplaints/' + engineerId);
  }

  getOpenComplaintsByDate(engineerId:number, date:any):Observable<any>{
    console.log("view all resolved complaints by date URL is calling here");
    console.log("In service class" + engineerId + date);
    // date = new Date();
    // let params=new HttpParams().set('date',date)
    // return this.httpclient.get(`http://localhost:8085/engineer/resolvedcomplaints/${engineerId}/date` , date);
    // console.log(`http://localhost:8085/engineer/resolvedcomplaints/${engineerId}/date?date=` + date);
    return this.httpclient.get(`http://localhost:8091/engineer/opencomplaints/date/${engineerId}?date=` + date);
  }

  getComplaints(engineerId:number, status:any):Observable<any>{
    console.log("view  complaints by status URL is calling here");
    let params=new HttpParams().set('status',status)
    return this.httpclient.get('http://localhost:8091/engineer/complaints/' + engineerId +'/status?status='+ status);
  }

  changeComplaintStatus(complaintId:number, status:any):Observable<any>{
    console.log("view all complaints by status URL is calling here");
    
    return this.httpclient.put(`http://localhost:8091/engineer/changeStatus/${complaintId}` , status);
  }
  
  getOpenComplaintsOrderByPriority(engineerId:number):Observable<any>{
    console.log("view all complaints by status URL is calling here");
    return this.httpclient.get('http://localhost:8091/engineer/opencomplaints/priority/' + engineerId);
  }

  login(engineerId:any,password:string):Observable<any>{
    engId : Number;
    let params=new HttpParams()
      .set('engineerId',engineerId)
      .set('password',password);
    return  this.httpclient.get(this.baseURL+'/signIn',{params});
  }

  getComplaintByComplaintId(complaintId : any) : Observable<any>{
    return this.httpclient.get("http://localhost:8091/engineer/complaintId/"+complaintId);
  }

  getComplaintByEngineerId(engineerId : number) : Observable<any> {
    return this.httpclient.get("http://localhost:8091/engineer/complaintId/engineerId/"+engineerId)
  }
}
