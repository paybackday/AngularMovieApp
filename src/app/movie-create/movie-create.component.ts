import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { Movie } from '../models/movie';
import { CategoryService } from '../services/categoryService';
import { MovieService } from '../services/movieService';
import{AlertifyService} from '../services/alertifyService';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  categories:Category[];
  bindMovie:Movie;

  constructor(
    private categoryService:CategoryService, 
    private movieService:MovieService,
    private router:Router,
    private alertifyService:AlertifyService) 
    { 
      this.bindMovie=new Movie();
    }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>
      {
        this.categories=data;
      });
  }

  createMovie(){
    
    ////We're binding to bindModel object like this way. We can send ngForm from html side. Purpose of we do this is we can provide more complex validations on '.ts' side.
    
    

    if (this.bindMovie.title==="" || this.bindMovie.description=="" ||  this.bindMovie.imageUrl=="") {
      this.alertifyService.error("Please fill the blanks before create a movie.");
      return;
    }

    if (this.bindMovie.title.length<5) {
      this.alertifyService.warning("You should enter at least 5 character for title.");
      return;
    }
    this.movieService.createMovie(this.bindMovie).subscribe(data=>{console.log(data);});
    this.router.navigate(['/movies']);

  }

}
