import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private httpClient:HttpClient) { }
 
  getDetail(jsonObj:any):Observable<any>{
    console.log("HI"+jsonObj);
     let url="http://localhost:8080/generateJsonpath/";
    return this.httpClient.post<any>(url,jsonObj);
   }
}
