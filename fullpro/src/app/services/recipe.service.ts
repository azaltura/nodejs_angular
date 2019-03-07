import { Injectable } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipe: BehaviorSubject<RecipeModel[]>;
  private curretSubscription: Subscription;
 

  constructor(private httpClient: HttpClient) { 
    this.recipe = new BehaviorSubject<RecipeModel[]>([]);

    setInterval(() => {
      if (this.curretSubscription && !this.curretSubscription.closed) {
        this.curretSubscription.unsubscribe();
      }

      this.curretSubscription = this.httpClient.get<RecipeModel[]>(environment.serverUrl + 'recipe').subscribe(a => {
        this.recipe.next(a);
      })

    }, 1 * 1000)
  }

  get(): Observable<RecipeModel[]> {

 
      return this.recipe;
    
  }

  post(recipe: RecipeModel): Observable<any> {
 
    return this.httpClient.post(environment.serverUrl + 'recipe', recipe);
  
    
  
  }

}
