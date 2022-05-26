import { Component, OnInit } from '@angular/core';
import { RecipieService } from './recipie.service';
import { Recipie } from './recipies.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers:[RecipieService]
})
export class RecipiesComponent implements OnInit {
  recipieSelected:Recipie;

  constructor(private recipieService:RecipieService) { }

  ngOnInit() {
    this.recipieService.recipieSelected.subscribe(
        (recipie:Recipie) =>{
          this.recipieSelected=recipie;
        }
    )
  }

}
