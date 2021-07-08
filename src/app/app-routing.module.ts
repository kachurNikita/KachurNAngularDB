import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {FavoritesPageComponent} from './favorites-page/favorites-page.component';
import {MovieDescriptionComponent} from './movie-description/movie-description.component';

const routs: Routes = [
  {path: '', component: MoviesListComponent},
  {path: 'favorite-page', component: FavoritesPageComponent},
  {path: 'movie-description', component: MovieDescriptionComponent},
  {path: 'movie-description/:id', component: MovieDescriptionComponent},
  {path: 'movie-description/:value.id', component: MovieDescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
