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
  inpRest:Restaurent={
    id:8,
    name:"roll Center",
    address:"phulwari" ,
    email:"rollCenter@gmail.com"
    };

   updateId;

   updateData={
    name:'Roll Center new',
    address:"sushil plaza",
    email:"newrollCenter@gmail.com"
   }

  constructor(private appSer:AppserviceService){}

  ngOnInit(): void {
    this.appSer.myObservable.subscribe((val: any) =>{
      console.log(val);
    })
    
    this.appSer.fetchRestaurent().subscribe((rest) =>{
      this.restaurent=rest;
    })

  }

  addRest(data){
    this.appSer.addRestaurent(data).subscribe();
  }

  updateRest(){
    this.appSer.updateRestaurent(this.updateId,this.updateData).subscribe();
  }
  
  deleteRest(){
    this.appSer.deleteRestaurent(this.updateId).subscribe();
    
  }
}
