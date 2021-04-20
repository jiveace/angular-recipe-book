import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Sweet Tatty Dahl', 'Awesome Dahl!',
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Fny5rE6k6gi-1IdXOLr5e-wihnve7WKMdw&usqp=CAU")
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
