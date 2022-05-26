import { Component,  OnInit, } from '@angular/core';
import { RecipieService } from '../recipie.service';
import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {



  recipies:Recipie[]=[];

  constructor(private recipieService:RecipieService) { }

  ngOnInit() {
    this.recipies=this.recipieService.getRecipies();
  }
  

}
``