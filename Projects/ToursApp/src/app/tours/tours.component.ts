import { Component, OnInit } from '@angular/core';
import { ToursService } from '../services/tours.service';
import { toursData } from './tours.model';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

   constructor(private toursService:ToursService){}

  toursData:toursData;
  readMore:boolean=false;

  ngOnInit(): void {
    this.getTourData();
  }

  getTourData(){
    this.toursService.getToursData()
    .subscribe({
      next:(response)=>{
        this.toursData=response;
      }
    })

  }

  deleteTours(id:string){
    const newTours=this.toursData?.filter((tour)=> tour.id!=id);
    this.toursData=newTours;

  }
  setreadMore(){
    this.readMore= !this.readMore;
  }

}
