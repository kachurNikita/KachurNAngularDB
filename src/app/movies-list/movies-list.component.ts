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
  public privatePoster = './assets/img/stranger.png';
  public movies: Movie[];
  public bigObj: any;
  public btns: any = [];
  public btnsArray: any = [];
  constructor(
    private serviceLogic: Services, private router: Router
  ) {}
  ngOnInit(): void {
    this.getFullData(this.serviceLogic.page);
    this.createdButtons();
  }
  getFullData(page: any): void {
    this.createdButtons();
    this.serviceLogic.getData()
      .subscribe(movies => {
        this.bigObj = movies;
        this.movies = movies.results;
        this.serviceLogic.$allMoviesId.next(this.movies);
      });
  }
  toNext(): void {
    const {total_pages} = this.bigObj;
    if (this.serviceLogic.page >= total_pages) {
      return;
    } else {
      this.serviceLogic.page++;
      this.getFullData(this.serviceLogic.page);
    }
  }
  firstPage(): void {
    this.getFullData(this.serviceLogic.page = 1);
  }
  prevPage(): void {
    this.createdButtons();
    if (this.serviceLogic.page <= 1) {
      return;
    } else {
      this.getFullData(this.serviceLogic.page--);
    }
  }
  lastPage(): void {
    const {total_pages} = this.bigObj;
    if (this.serviceLogic.page <= total_pages) {
      this.getFullData(this.serviceLogic.page = total_pages - 4);
    }
  }
  createdButtons(): void {
    this.serviceLogic.getData().subscribe(movie => {
      this.btns = movie.total_pages;
      if (this.serviceLogic.page > this.btns - 4) {
        return;
      }
      this.btnsArray = [];
      if (this.serviceLogic.page <= this.btns) {
        for (let i = this.serviceLogic.page; i <= this.serviceLogic.page + 4; i++) {
          this.btnsArray.push(i);
        }
      }
      });
  }
  renderBtns(e: any): void {
    this.serviceLogic.page = +e.target.innerHTML;
    this.getFullData(this.serviceLogic.page);
    this.createdButtons();
  }
}
