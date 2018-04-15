import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { DescService } from '../../services/desc.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  favoritesHidden = false;
  //plannedHidden = true;
  shoppingListHidden = true;

  displayedColumns = ['receipt', 'meals', 'dificulty', 'remove'];
  shoppingColumns = ['ingredient', 'remove'];
  dataSource: Array<any>;

  recipes;
  ingredients: Array<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private pservice: ProfileService, private dservice: DescService) {

  }

  ngOnInit() {
    this.favoritesHidden = false;
    //this.plannedHidden = true;
    this.shoppingListHidden = true;
    this.getFavorites();
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    //this.dataSource.filter = filterValue;
  }

  goToDesc(id: string) {
    let search = '/description/' + id;
    this.router.navigate([search]);
  }

  //TAB SELECTION
  showFavorites() {
    console.log("Show Favorites");
    this.favoritesHidden = false;
    //this.plannedHidden = true;
    this.shoppingListHidden = true;

    //Fetch recipes
    this.getFavorites();
  }

  showShoppingList() {
    console.log("Show Shopping List");
    this.favoritesHidden = true;
    //this.plannedHidden = true;
    this.shoppingListHidden = false;

    //Fetch Shopping list
    this.getShoppingList();
  }

  //GETS
  getShoppingList() {
    this.pservice.getList().subscribe(
      data => {
        this.ingredients = data;
        //console.log(this.ingredients);
      },
      err => {
        console.log(err);
      });
  }

  addQuantity(n, i) {
    //TODO
    //Update
    if (+n + i > 0)
      return +n + i;
    else
      return n;
  }

  remove(){
    //TODO
  }

  
  getDificulty(d) {
    if (d == '') return [0, 0, 0];
    else if (d == 'Fácil') return [1, 0, 0];
    else if (d == 'Média') return [1, 1, 0];
    else if (d == 'Difícil') return [1, 1, 1];
  }

  getFavorites() {
    this.pservice.getFav().subscribe(
      data => {
        this.recipes = data;
        console.log(this.recipes);
        console.log("-")
      },
      err => {
        console.log(err);
      });
  }

  /*
  //TODO
  showPlanned() {
    console.log("Show Planned");
    this.favoritesHidden = true;
    this.plannedHidden = false;
    this.shoppingListHidden = true;

    //TODO
    //Fetch Planned
  }*/
}
