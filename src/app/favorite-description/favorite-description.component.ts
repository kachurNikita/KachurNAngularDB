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
  public favIndex: any;
  public favObj: any;
  public lSArr: any = [];
  constructor(private service: Services) { }
  ngOnInit(): void {
    this.generateFavDesc();
  }
generateFavDesc(): void {
  const {value} = this.service.$oneMovieFav;
  this.lSArr = JSON.parse(localStorage.getItem('movie'));
  this.currentFavMov = this.lSArr.find(item => item.id === value);
}

nextFavMovie(): void {
  this.favIndex = this.lSArr.indexOf(this.currentFavMov);
  this.favObj = this.lSArr.forEach((item, index, arr) => {
    if (arr[index] === arr[this.favIndex]) {
      if (index >= arr.length - 1) {
        return;
      }
      index++;
      this.currentFavMov = arr[index];
    }
  });
}
}
