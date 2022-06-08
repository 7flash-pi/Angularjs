import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toursData } from '../tours/tours.model';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor(private http:HttpClient) { }

  getToursData():Observable<toursData>{
    return this.http.get<toursData>(environment.toursBaseUrl);
  }
}
