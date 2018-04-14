import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class DescService {

  api_endpoint: string = environment.API_URL;

  constructor(private http: Http) { 
    
  }

  getRecipe(id:string){
    var url = this.api_endpoint + 'api/receita/id/'+id;
    return this.http.get(url).map(res => res.json());
  }
}
