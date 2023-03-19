import { Component, OnInit } from '@angular/core';
import { AppserviceService } from './services/appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';

  constructor(private appSer:AppserviceService){}

  ngOnInit(): void {
    this.appSer.myObservable.subscribe((val) =>{
      console.log(val);
    })
    
    this.appSer.fetchRestaurent.subscribe((val) =>{
      console.log(val);
    })
  }
  
}
