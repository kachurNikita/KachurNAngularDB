import {Component,  OnInit} from '@angular/core';
import {Services} from '../services/services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})

export class MovieDescriptionComponent implements OnInit {
  public doStep: any;
  public test: any = [];
  public arr: any = [];
  public movieData: any;
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
      this.movieData = data; // one movie id from movies - list
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
        this.movieData = value;
        this.rout.navigate([`movie-description/${value.id}`]);
      }
    });
  }
}







// // this.doStep = this.fullD.find((item, index) => {
// //   if (index === this.oneMovieIndex) {
// //     this.serviceLogic.$oneMovie.next(item);
// //     const {value} = this.serviceLogic.$oneMovie;
// //     console.log(value.id);
// //     this.rout.navigate([`movie-description/${value.id}`]);
// //   }
// });
