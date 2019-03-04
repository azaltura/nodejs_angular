import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: RecipeModel[];
 
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
  }
}
  

