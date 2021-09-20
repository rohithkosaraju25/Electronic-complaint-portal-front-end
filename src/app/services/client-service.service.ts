import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http:HttpClient) { }

  baseURL = 'http://localhost:8091/client';

  signIn(clientId:string,password:string):Observable<any>{
    let params=new HttpParams()
      .set('clientId',clientId)
      .set('password',password);
      return this.http.get("http://localhost:8091/client/signIn",{params});
  }

  saveclient(client:Client):Observable<any>{
    return this.http.post("http://localhost:8091/client/saveclient",client);

  }

  getll():Observable<any>{
    return this.http.get("http://localhost:8091/client/allclient");
 }

 getClientByCLientId(clientId:string) : Observable<any>{
  return this.http.get(this.baseURL+'/details/clientId/'+`${clientId}`);
 }

  getEngineerbyEngineerId(engineerId: any) : Observable<any>{
    return this.http.get("http://localhost:8091/client/engineerId/"+engineerId);
  }
  getEngineerByDomain(domain: String): Observable<any> {
    return this.http.get("http://localhost:8091/client/engineerdomain/"+domain);
  }

  
}
