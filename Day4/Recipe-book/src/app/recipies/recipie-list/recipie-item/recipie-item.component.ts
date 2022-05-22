import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipie } from '../../recipies.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  @Input() recipie : Recipie;
  @Output() recipieSelected=new EventEmitter<void>();
  constructor() { }

  ngOnInit(){
  }

  onSelected(){
    this.recipieSelected.emit();
  }
}
