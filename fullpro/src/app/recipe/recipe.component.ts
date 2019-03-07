import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: RecipeModel[];


  constructor(private recipeService: RecipeService) { 
    console.log('RecipeComponent instantiated');
  } 

  ngOnInit() {

    console.log('RecipeComponent ngOnInit')

    this.recipeService.get().subscribe(recipeData => {
      this.recipes = <RecipeModel[]>recipeData;

    });
  }

}
