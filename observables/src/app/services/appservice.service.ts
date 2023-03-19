import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { map, catchError ,tap } from 'rxjs/operators';
import { Restaurent } from '../restaurent';


@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  url="http://localhost:3000/restaurent";

  // simple observable
  constructor(private http:HttpClient) { }
  myObservable= new Observable((observer) => {
    console.log('observable starts');
    observer.next("1");
    observer.next("2");
    observer.next("3");
    observer.next("4");
    console.log("observable completed");
    observer.complete();
    observer.next("5");
    
  })

  // observable with get Request
  fetchRestaurent(): Observable<Restaurent[]> {
    return this.http.get<Restaurent[]>(this.url).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
    );
  }

  //observable with post Request
  addRestaurent(data:Restaurent):Observable<any>{
    return  this.http.post<Restaurent>(this.url,data);
  }

  //observable with put request
 updateRestaurent(id:number,data:any):Observable<any>{
    return this.http.put(`${this.url}/${id}`,data);
  }

  //observable with delete
  deleteRestaurent(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

  
  
}
