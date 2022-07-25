import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { Movie } from '../models/movie';
import { CategoryService } from '../services/categoryService';
import { MovieService } from '../services/movieService';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  categories:Category[];
  bindMovie:Movie;

  constructor(private categoryService:CategoryService, private movieService:MovieService,private router:Router) { this.bindMovie=new Movie();}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>
      {
        this.categories=data;
      });
  }

  createMovie(){
    console.log(this.bindMovie.title);
    console.log(this.bindMovie.description);
    console.log(this.bindMovie.imageUrl);
    console.log(this.bindMovie.categoryId);
    console.log(this.bindMovie.isPopular);
    
    this.movieService.createMovie(this.bindMovie).subscribe(data=>{console.log(data);});
    this.router.navigate(['/movies']);
  }

}
