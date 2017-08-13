import { Component, OnInit } from '@angular/core';
import {PokemonesService} from '../services/pokemones.service';
import {Pokemon} from '../model/pokemon';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

  private pokemones: Pokemon[];

  constructor(private _pokemonService : PokemonesService) { }

  ngOnInit() {
    this._pokemonService.getFist20Pokemons().subscribe(
      response =>{
        this.asignarPokemones(response.results)
      },
      erro =>{

      }
    )
  }

  private asignarPokemones(pokemones){
    this.pokemones = pokemones;
    for( let i=0; i<this.pokemones.length; i++){
      this.pokemones[i]._id = i+1;
    }
    console.log(this.pokemones);
  }

}
