import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import {AppRoutingModule} from './app-routing.module';
import { FavoriteDescriptionComponent } from './favorite-description/favorite-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieDescriptionComponent,
    FavoritesPageComponent,
    FavoriteDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
