import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails(): Cocktail[]{
    return [
      {
      name: "Margarita", price: 10, image: "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_488,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/209773/margarita-cocktail-AdobeStock_204560742.jpg"
    },
    {
      name: "Cosmopolitan", price: 12, image: "https://www.finedininglovers.fr/sites/g/files/xknfdk1291/files/2021-10/iStock-890771104.jpg"
    },
    {
      name: "Daiquiri", price: 15, image: "https://www.papillesetpupilles.fr/wp-content/uploads/2021/07/Daiquiri-%C2%A9e-Shyripa-Alexandr-shutterstock.jpg"
    },
    {
      name: "Manhattan", price: 9, image: "https://www.foodandwine.com/thmb/cOQktLcqXd_pgef_tcS8jkNjV1E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Manhattan-Cocktail-FT-BLOG0522-dee9bf6e992f425eb496657aa2f14d47.jpg"
    }
  ]
  }
}
