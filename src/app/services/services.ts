import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Services {
  public $allMoviesId: any = new BehaviorSubject(null);
  public $oneMovieById: any = new BehaviorSubject(null);
  public $oneMovie: any = new  BehaviorSubject(null);
  constructor(
    private http: HttpClient
  ) {}
  getData(): Observable<any> {
    return  this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=');
  }
}


