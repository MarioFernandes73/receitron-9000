import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DescService {

  api_endpoint: string = 'http://132631a9.ngrok.io/';

  constructor(private http: Http) { 
    
  }

  getRecipe(id:string){
    var url = this.api_endpoint + 'api/receita/id/'+id;
    return this.http.get(url).map(res => res.json());
  }
}
