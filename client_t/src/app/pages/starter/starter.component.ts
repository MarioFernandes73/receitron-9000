import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	templateUrl: './starter.component.html',
	styleUrls: ['./starter.component.css']
})
export class StarterComponent implements AfterViewInit {
	ingredients = [];
	restrictions = [];
	ingredient = "";
	restriction = "";
	recipes = [{ name: "recipe 1" }, { name: "recipe 2" }, { name: "recipe 2" }, { name: "recipe 1" }, { name: "recipe 2" }, { name: "recipe 2" }];

	constructor(public router: Router) {
	}

	goToDesc() {
		//vai receber um id
		this.router.navigate(['/description']);
	}

	addIngredient() {
		console.log(this.ingredient);
		if (this.notIn(this.ingredient, this.ingredients) && this.ingredient != "" &&
			this.notIn(this.ingredient, this.restrictions)) {
			console.log("ingredient added: " + this.ingredient);
			this.ingredients.push(this.ingredient);
			this.ingredient = "";
		}
	}

	removeIngredient(ingredient) {
		for (var i = 0; i < this.ingredients.length; i++) {
			if (this.ingredients[i] == ingredient)
				this.ingredients.splice(i, 1);
		}
		console.log("Removed ingredient: " + ingredient);
	}

	addRestriction() {
		console.log(this.restriction);
		if (this.notIn(this.restriction, this.ingredients) && this.restriction != "" &&
			this.notIn(this.restriction, this.restrictions)) {
			console.log("restriction added: " + this.restriction);
			this.restrictions.push(this.restriction);
			this.restriction = "";
		}
	}

	removeRestriction(restriction) {
		for (var i = 0; i < this.restrictions.length; i++) {
			if (this.restrictions[i] == restriction)
				this.restrictions.splice(i, 1);
		}
		console.log("Removed restriction: " + restriction);
	}

	mouseEnterIngredient(ingredient) {
		console.log("ENTER ELEMENT");
		//(<HTMLInputElement>document.getElementById(ingredient)).value = "Apagar";
	}

	mouseLeftIngredient(ingredient) {
		console.log("LEFT ELEMENT");
		//TODO
	}

	notIn(element, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == element)
				return false;
		}
		return true;
	}

	ngAfterViewInit() { }
}