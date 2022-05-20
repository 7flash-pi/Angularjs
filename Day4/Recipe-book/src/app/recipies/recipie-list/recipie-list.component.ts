import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies:Recipie[]=[  
   new Recipie("A Test",
   "a test Recipie",
   "https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540")];

  constructor() { }

  ngOnInit(): void {
  }

}
``