import {Component, OnInit} from '@angular/core';
import {MovieslistService} from './movieslist.service';

export interface Movie {
  backdrop_path: string;
  id: number;
  original_language?: string;
  title: string;
  poster_path: string;
}

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})

export class MoviesListComponent implements OnInit {
  public movie: Movie;
  constructor(
    private serviceLogic: MovieslistService
  ) {}
  ngOnInit(): void {
    this.serviceLogic.getData()
      .subscribe(response => {
        this.movie = response.results;
        console.log(this.movie);
      });
  }
}
