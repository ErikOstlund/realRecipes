import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

import { Recipe } from '../recipes/recipe.model';

// {providedIn: 'root'} is the new shortcut so this doesn't have to be registered in app.module
@Injectable({ providedIn: 'root' })
export class DataStorageService {
	constructor(
		private http: HttpClient,
		private recipeService: RecipeService
	) {}

	storeRecipes() {
		const recipes = this.recipeService.getRecipes();

		this.http
			.put('https://real-recipes.firebaseio.com/recipes.json', recipes)
			.subscribe(response => {
				console.log('Response: ', response);
			});
	}

	fetchRecipes() {
		this.http
			.get<Recipe[]>('https://real-recipes.firebaseio.com/recipes.json')
			.subscribe(recipes => {
				this.recipeService.setRecipes(recipes);
			});
	}
}
