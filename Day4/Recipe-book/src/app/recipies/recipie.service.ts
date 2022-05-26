import { EventEmitter } from "@angular/core";
import { Recipie } from "./recipies.model";

export class RecipieService{

    recipieSelected=new EventEmitter<Recipie>();

    private recipies:Recipie[]=[  
   new Recipie("A Test",
   "a test Recipie",
   "https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540"),
  new Recipie("Pizza",
   "flour delicious lizza-pizza",
   "https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540")];

   getRecipies(){
       return this.recipies.slice();
   }

}