import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'',redirectTo:'movies',pathMatch:'full'}, //If user don't enter anything, It'll be redirect to movies component.
  {path:'movies/category/:categoryId',component:MoviesComponent}, // We are adding new path when we add parameter to router. Next, we should define variable.
  {path:'movies/create',component:MovieCreateComponent}, // Constant paths must be written before the paths which are included variable. 
  {path:'movies/:movieId',component:MovieDetailsComponent} //We have add a new path to here. When we want to reach /movies with movieId parameter, It'll be came movieDetailsComponent.
]
@NgModule({
  imports:[RouterModule.forRoot(routes)], //We wrote forRoot to be available at the whole app
  exports:[RouterModule]
})
export class AppRoutingModule { }
