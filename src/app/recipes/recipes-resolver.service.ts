import { Injectable } from '@angular/core';
import {
	Resolve,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
} from '@angular/router';

// Services
import { DataStorageService } from '../shared/data-storage.service';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
	constructor(
		private dataStorageService: DataStorageService,
		private recipesService: RecipeService
	) {}

	// resolve will subscribe for us
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		// for now 'getRecipes' is getting them locally--not from server!
		const recipes = this.recipesService.getRecipes();

		// if no local recipes, fetch from server
		if (recipes.length === 0) {
			return this.dataStorageService.fetchRecipes();
		} else {
			return recipes;
		}
	}
}
