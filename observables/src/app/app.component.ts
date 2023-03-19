import { Component, OnInit } from '@angular/core';
import { Restaurent } from './restaurent';
import { AppserviceService } from './services/appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';
  restaurent:Restaurent[]=[];

  constructor(private appSer:AppserviceService){}

  ngOnInit(): void {
    this.appSer.myObservable.subscribe((val: any) =>{
      console.log(val);
    })
    
    this.appSer.fetchRestaurent().subscribe((rest) =>{
      this.restaurent=rest;
    })

  }
  
}
