import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  recipe: RecipeModel;
  myform;

  constructor(private recipeService: RecipeService) { 
    this.recipe = <RecipeModel>{}
  }

  ngOnInit() {
  }

  addRecipe() {
    this.recipeService.post(this.recipe).subscribe(recipeRes => {
      console.log(recipeRes);
    });

  }
}
