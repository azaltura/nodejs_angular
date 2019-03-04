import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipe: RecipeModel[];
 

  constructor(private httpClient: HttpClient) { }

  get(): Observable<RecipeModel[]> {
 
      return this.httpClient.get<RecipeModel[]>(environment.serverUrl + 'recipe');
    
  }

  post(recipe: RecipeModel): Observable<any> {
 
    return this.httpClient.post(environment.serverUrl + 'recipe', recipe);
  

  
  }

}
