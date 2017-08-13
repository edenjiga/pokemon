import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PokemonesService {

  constructor(private _http: Http) { }


  getFist20Pokemons(){
    return this._http.get('http://pokeapi.co/api/v2/pokemon/').map(res => res.json());  
  }

}
