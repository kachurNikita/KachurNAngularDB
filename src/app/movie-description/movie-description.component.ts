import {Component,  OnInit} from '@angular/core';
import {Services} from '../services/services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})
export class MovieDescriptionComponent implements OnInit {
  public arr: any = [];
  public movieData: any;
  fullD: any = [];
  oneMovieIndex: any = [];
  num = 1;
  constructor(
    private serviceLogic: Services, private route: ActivatedRoute, private rout: Router) { }
  ngOnInit(): void {
    this.loadDataIn();
    this.allData();
  }
  loadDataIn(): void {
    this.serviceLogic.$oneMovieById.subscribe((data) => {
      this.movieData = data;
    });
  }
  allData(): void {
  this.serviceLogic.$allMoviesId.subscribe((fullData) => {
    this.fullD = fullData;
  });
  }
  nextMovie(): void {
    // const arr: any = [];
    // this.oneMovieIndex = this.fullD.indexOf(this.movieData);
    // this.arr.push(this.oneMovieIndex);
    this.rout.navigate([`movie-description/${this.arr}`]);
  }
}
