import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Services} from '../services/services';

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
  public movies: Movie[];
  constructor(
    private serviceLogic: Services, private router: Router
  ) {}
  ngOnInit(): void {
    this.serviceLogic.getData()
      .subscribe(movies => {
        this.movies = movies.results;
        this.serviceLogic.$allMoviesId.next(this.movies);
      });
  }
  openMovie(e: any): void {
    this.router.navigate([`movie-description/${e.id}`]);
    this.serviceLogic.$oneMovieById.next(e);
  }
}
