import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  baseURL = "http://localhost:8091/product"

  getProductsByClientId(clientId : string) : Observable<any>{
    return this.http.get(this.baseURL+'/clientId/'+`${clientId}`);
  }

  findByModelNumber(modelNumber : string) : Observable<any>{
    return this.http.get(this.baseURL+"/modelNumber/"+`${modelNumber}`);
  }

  addProduct(product : any) :Observable<any>{
    return this.http.post("http://localhost:8091/product/addProduct",product);
  }

  deleteByProductCategoryName(productCategoryName :any) :Observable<any>{
     console.log(productCategoryName);
     let params=new HttpParams().set('productCategoryName',productCategoryName);
     return this.http.delete("http://localhost:8091/product/deletebyCategory",{params});
  }
  getByProductCategoryName(productCategoryName:string):Observable<any>{
    return this.http.get("http://localhost:8091/product/categoryName/"+productCategoryName);
  }
  updateProductWarranty(modelNumber:any,warrantyYears:any):Observable<any>{
    // let params=new HttpParams().set('warrantyYears',warrantyYears);
    return this.http.put('http://localhost:8091/product/updateWarranty/'+modelNumber+'?warrantyYears='+warrantyYears,warrantyYears);
  }
  getProductComplaints(productCategoryName:string):Observable<any>{
    return this.http.get("http://localhost:8091/product/productCatgeoryName/complaint/"+productCategoryName);
  }
  getEngineersByProduct(productCategoryName:string):Observable<any>{
    return this.http.get("http://localhost:8091/product/productCategoryName/engineer/"+productCategoryName);
  }
  
}
