import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Restaurent } from '../restaurent';


@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  url="http://localhost:3000/restaurent";

  constructor(private httpClient:HttpClient) { }
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

  fetchRestaurent=new Observable( (observer) =>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.httpClient.get(this.url).pipe(
      map((data) => {
        return data;
      })
   )
  })
  
}
