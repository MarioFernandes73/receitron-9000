import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StarterService {

  api_endpoint: string = 'http://132631a9.ngrok.io/';

  constructor(private http: Http) { }

  //Get todas as receitas
  getRecipes(){
    var url = this.api_endpoint + 'api/receita/page/1';
    return this.http.get(url).map(res => res.json());
  }

  //get com filtros --> compor
  postFilteredRecipes(data){
    var url = this.api_endpoint + 'api/receita/filtered/all';
    return this.http.post(url,data).map(res => res.json());
  }

}
