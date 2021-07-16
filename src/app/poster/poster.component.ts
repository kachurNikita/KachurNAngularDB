import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Services} from '../services/services';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  @Input() movie;
  constructor(private router: Router, private serviceLogic: Services) { }

  ngOnInit(): void {
  }
  openMovie(e: any): void {
    this.router.navigate([`movie-description/${e.id}`]);
    this.serviceLogic.$oneMovieById.next(e);
  }
}
