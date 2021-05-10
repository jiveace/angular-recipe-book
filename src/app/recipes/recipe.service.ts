import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Sweet Tatty Dahl', 'Description!',
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Fny5rE6k6gi-1IdXOLr5e-wihnve7WKMdw&usqp=CAU")
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}