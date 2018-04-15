import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ProfileService {

  api_endpoint: string = environment.API_URL;

  constructor(private http: Http) { }

  getFav() {
    let data = {
      "username": "Apu"
    }
    var url = this.api_endpoint + 'api/user/receitas';
    return this.http.post(url, data).map(res => res.json());
  }

  getList() {
    let data = {
      "username": "Apu"
    }
    var url = this.api_endpoint + 'api/user/ingredientes';
    return this.http.post(url, data).map(res => res.json());
  }

  //TODO
  /*
  getPlan() {
    let data = {
      "username": "Apu"
    }
    var url = this.api_endpoint + 'api/user/receitas';
    return this.http.post(url, data).map(res => res.json());
  }*/

}
