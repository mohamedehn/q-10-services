import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})

export class CocktailListComponent implements OnInit{

  cocktails : Cocktail[] = [];

  // injection du service dans le constructeur
  constructor(private cocktailService: CocktailService){}

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
    this.cocktails = cocktailsFromJsonFile;
    })
  }
}
