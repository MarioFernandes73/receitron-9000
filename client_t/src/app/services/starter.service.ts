import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class StarterService {

  api_endpoint: string = environment.API_URL;

  constructor(private http: Http) { }

  //Get todas as receitas
  getRecipes() {
    var url = this.api_endpoint + 'api/receita/page/1';
    return this.http.get(url).map(res => res.json());
  }

  //get com filtros --> compor
  postFilteredRecipes(data) {
    var url = this.api_endpoint + 'api/receita/filtered/all';
    return this.http.post(url, data).map(res => res.json());
  }

  getRestrictions() {
    var url = this.api_endpoint + 'api/receita/restrictions';
    return this.http.get(url).map(res => res.json())
  }

}
