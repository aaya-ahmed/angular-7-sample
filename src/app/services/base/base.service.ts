import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BaseService<T,Tpaged> {
  baseUrl:string=environment.baseUrl;
  controller:string="";

  constructor(private http:HttpClient) { }
  post(data:any){
    return this.http.post(`${this.baseUrl}${this.controller}`,data);
  }
  put(data:any){
    return this.http.put(`${this.baseUrl}${this.controller}`,data);
  }
  delete(id:number){
    return this.http.delete(`${this.baseUrl}${this.controller}/${id}`);
  }
  getList(): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}${this.controller}`);
  }
  getPaged(pageNumber:number): Observable<Tpaged> {
    return this.http.get<Tpaged>(`${this.baseUrl}${this.controller}?page=${pageNumber}`);
  }
  getById(id:number): Observable<{data:T}> {
    return this.http.get<{data:T}>(`${this.baseUrl}${this.controller}/${id}`);
  }
}
