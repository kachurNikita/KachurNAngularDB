import { Component, OnInit } from '@angular/core';
import {Services} from '../services/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorite-description',
  templateUrl: './favorite-description.component.html',
  styleUrls: ['./favorite-description.component.scss']
})
export class FavoriteDescriptionComponent implements OnInit {
  public currentFavMov: any;
  private newArrFav: any;
  constructor(private service: Services) { }

  ngOnInit(): void {
    this.generateFavDesc();
  }
generateFavDesc(): void {
  const {value} = this.service.$oneMovieFav;
  const lSArr = JSON.parse(localStorage.getItem('movie'));
  this.currentFavMov = lSArr.find(item => item.id === value);
}
}
