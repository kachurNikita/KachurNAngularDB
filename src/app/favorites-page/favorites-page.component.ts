import { Component, OnInit } from '@angular/core';
import {Services} from '../services/services';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
public favoriteMovies: any = [];
  constructor(private services: Services) { }
  ngOnInit(): void {
    this.addToFavoriteFavorite();
  }
  addToFavoriteFavorite = () => {
    this.favoriteMovies = JSON.parse(localStorage.getItem('movie'));
  }
  deleteFromFavorites(id: number): void {
    const deleteItem = this.favoriteMovies.find(item => item.id === id);
    const deleteByIndex = this.favoriteMovies.indexOf(deleteItem);
    console.log(deleteByIndex);
    console.log(deleteItem);
    this.favoriteMovies.splice(deleteByIndex, 1);
    localStorage.setItem('movie', JSON.stringify(this.favoriteMovies));
  }

  showId(id: number): void {
    this.services.$oneMovieFav.next(id);
  }
}
