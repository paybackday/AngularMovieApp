import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movieRepository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title:string="Movie List";
  movies:Movie[];
  popularMovies:Movie[];

  movieRepository:MovieRepository;

  constructor() { 

    this.movieRepository=new MovieRepository();
    this.movies= this.movieRepository.getMovies();
    this.popularMovies=this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {
  }

  


}
