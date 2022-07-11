import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './pipes/summaryPipe';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipePipe } from './pipes/movie-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule //We have to add FormsModule to can use ngModel two-way binding parameter.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
