import { Component,  Input, OnInit} from '@angular/core';

import { RecipieService } from '../../recipie.service';

import { Recipie } from '../../recipies.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  @Input() recipie : Recipie;

  constructor(private recipieService:RecipieService) { }

  ngOnInit(){
  }

  onSelected(){
    this.recipieService.recipieSelected.emit(this.recipie);
  }
}
