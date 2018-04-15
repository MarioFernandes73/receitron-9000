import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarterService } from '../../services/starter.service';

@Component({
	templateUrl: './starter.component.html',
	styleUrls: ['./starter.component.css']
})
export class StarterComponent implements AfterViewInit {
	ingredients = [];
	restrictions = [];
	ingredient = "";
	restriction = "";
	recipes = [{ name: "recipe 1" }, { name: "recipe 2" }, { name: "recipe 2" }, { name: "recipe 1" }, { name: "recipe 2" }, { name: "recipe 2" }]; //examples
	number_meals = 1;
	dificulty = [0,0,0];

	constructor(public router: Router, private starterService: StarterService) {
		this.getRecipes();
	}

	//GETS
	getRecipes() {
		this.starterService.getRecipes().subscribe(
			data => {
				this.recipes = data.docs;
				console.log(data.docs)
			},
			err => {
				console.log(err);
			});
	}

	postFilteredRecipes() {
		let jsondata: any;

		console.log("------")
		console.log(this.ingredients)
		console.log(this.restrictions)
		console.log(this.dificulty)
		console.log("------")

		var dif_tmp = "qualquer";

		if(this.dificulty == [1,0,0]) dif_tmp = "fácil";
		else if(this.dificulty == [1,1,0]) dif_tmp = "média";
		else if(this.dificulty == [1,1,1]) dif_tmp = "difícil";

		if (dif_tmp === "qualquer") {
			jsondata = {
				"ingredientes": this.ingredients,
				"restricoes": this.restrictions,
			}
		}
		else {
			jsondata = {
				"ingredientes": this.ingredients,
				"restricoes": this.restrictions,
				"dificuldade": dif_tmp
				//outros?
			}
		}

		this.starterService.postFilteredRecipes(jsondata).subscribe(
			data => {
				this.recipes = data;
				//this.navCtrl.pop();
				//this.notification("Success creating Appointment!");
			},
			err => {
				console.log(err);
				//this.notification("Error creating Appointment!");
			});

	}

	//BUTTONS
	goToDesc(id: string) {
		//vai receber um id
		let search: string = '/description/' + id;
		this.router.navigate([search]);
	}

	//OUTROS
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