import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  favoritesHidden = false;
  plannedHidden = true;
  shoppingListHidden = true;

  displayedColumns = ['receipt', 'meals', 'dificulty', 'remove'];
  shoppingColumns = ['ingredient', 'quantity', 'measure', 'remove'];
  dataSource: MatTableDataSource<UserData>;

  favorites = [];
  planned = [];
  shopping_list = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public router: Router) {
    //ALTERAR DEPOIS
    // Create 100 users
     const users: UserData[] = [];
     for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  goToDesc() {
    //TODO
    //vai receber um id
    this.router.navigate(['/description']);
  }

  //TAB SELECTION
  showFavorites() {
    console.log("Show Favorites");
    this.favoritesHidden = false;
    this.plannedHidden = true;
    this.shoppingListHidden = true;

    //TODO
    //Fetch recipes
  }

  showPlanned() {
    console.log("Show Planned");
    this.favoritesHidden = true;
    this.plannedHidden = false;
    this.shoppingListHidden = true;

    //TODO
    //Fetch Planned
  }

  showShoppingList() {
    console.log("Show Shopping List");
    this.favoritesHidden = true;
    this.plannedHidden = true;
    this.shoppingListHidden = false;

    //TODO
    //Fetch Shopping list
  }


}
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
