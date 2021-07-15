import {Component, Input, OnInit} from '@angular/core';
import {Services} from '../services/services';
import {ActivatedRoute, Router} from '@angular/router';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})

export class MovieDescriptionComponent implements OnInit {
  // @Input() movieData
  public doStep: any;
  public storageDataArr: any = [];
  public arr: any = [];
  public movieData: any;
  public  emptyStorage: string;
  public btnDisplay = 'btnDisplay';
  public ifMovie: any;
  public newId: any;
  fullD: any = [];
  oneMovieIndex: any = [];
  constructor(
    private serviceLogic: Services, private route: ActivatedRoute, private rout: Router) { }
  ngOnInit(): void {
    this.loadDataIn();
    this.allData();
  }
  loadDataIn(): void {
    this.serviceLogic.$oneMovieById.subscribe((data) => {
      this.movieData = data;
      this.route.params.subscribe((params) => {
        this.checkFavoriteId(+params.id);
      });
      // one movie id from movies - list
    });
  }
  allData(): void {
  this.serviceLogic.$allMoviesId.subscribe((fullData) => {
    this.fullD = fullData; // movies array (full)
  });
  }
  nextMovie(): void {
    this.oneMovieIndex = this.fullD.indexOf(this.movieData);
    this.fullD.forEach((item, index, arr) => {
      if (arr[index] === arr[this.oneMovieIndex]) {
        ++index;
        this.serviceLogic.$oneMovie.next(arr[index]);
        const {value} = this.serviceLogic.$oneMovie;
        if (value === undefined) {
          return;
        }
        this.movieData = value;
        this.rout.navigate([`movie-description/${value.id}`]);
      }
    });
  }
  addToFavorites(data: any): void {
    if (localStorage.getItem('movie')) {
      this.storageDataArr = JSON.parse(localStorage.getItem('movie'));
    }
    this.storageDataArr.push(data);
    localStorage.setItem('movie', JSON.stringify(this.storageDataArr));
    this.btnDisplay = 'btnDisplayNone';
  }
  checkFavoriteId(id: number): void {
    if (localStorage.getItem('movie')){
      this.ifMovie = JSON.parse(localStorage.getItem('movie'));
      const test: any =  this.ifMovie.find(item => item.id === id);
      if (test) {
        this.btnDisplay = 'btnDisplayNone';
      }else {
        this.btnDisplay = 'btnDisplay';
      }
    }
  }
}
