import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'',redirectTo:'movies',pathMatch:'full'}, //If user don't enter anything, It'll be redirect to movies component.
  {path:'movies/category/:categoryId',component:MoviesComponent} // We are adding new path when we add parameter to router. Next, we should define variable.
]
@NgModule({
  imports:[RouterModule.forRoot(routes)], //We wrote forRoot to be available at the whole app
  exports:[RouterModule]
})
export class AppRoutingModule { }
