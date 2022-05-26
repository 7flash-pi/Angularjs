import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipie } from "./recipies.model";

@Injectable()
export class RecipieService{

    recipieSelected=new EventEmitter<Recipie>();

    private recipies:Recipie[]=[  
   new Recipie("A Test",
   "a test Recipie",
   "https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540"
   ,[
       new Ingredient('Meat',1),
       new Ingredient('potato',4)
   ]),
  new Recipie("Pizza",
   "flour delicious lizza-pizza",
   "https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540"
   ,[
       new Ingredient('flour',1),
       new Ingredient('capcicum',2),
       new Ingredient('garlic',1),
       new Ingredient('mushroom',4),
       new Ingredient('Meat',1),
       new Ingredient('cheese',4)
   ])];

   constructor(private slService:ShoppingListService){}

   getRecipies(){
       return this.recipies.slice();
   }    

   addIngredientsToShoppingList(ingredients:Ingredient[]){
       this.slService.addIngredients(ingredients);

   }
}