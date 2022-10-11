import { Injectable } from '@angular/core';
import { Cocktail } from './model/cocktail'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
private cocktails: Cocktail[] = [
  {
    name: 'BananaMoon',
    prix: 6,
    image: 'https://assets.afcdn.com/recipe/20180705/80351_w1024h768c1cx1968cy3284.jpg'
  },
  {
    name: 'BananaLagoon',
    prix: 6,
    image: 'https://assets.afcdn.com/recipe/20180705/80351_w1024h768c1cx1968cy3284.jpg'
  },
  {
    name: 'BananaBeach',
    prix: 6,
    image: 'https://assets.afcdn.com/recipe/20180705/80351_w1024h768c1cx1968cy3284.jpg'
  },
];

getCocktails(){
  return this.cocktails;
}
}
