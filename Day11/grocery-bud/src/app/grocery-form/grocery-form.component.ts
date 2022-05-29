import { Component, ElementRef, OnInit } from '@angular/core';
import { groceryList } from '../grocery-list.model';

@Component({
  selector: 'app-grocery-form',
  templateUrl: './grocery-form.component.html',
  styleUrls: ['./grocery-form.component.css']
})
export class GroceryFormComponent implements OnInit {
  public grocerylist:groceryList[];
  inputRef:ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.inputRef);
  }

}
