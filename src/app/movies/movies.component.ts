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
  favoriteList:Movie[]=[];

  filterText:string="";

  movieRepository:MovieRepository;

  constructor() { 

    this.movieRepository=new MovieRepository();
    this.movies= this.movieRepository.getMovies();
    this.popularMovies=this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {
  }

  addToList($event:any,movie:Movie){
    // console.log(movie.title);
    //console.log($event.target.classList); // When we send to event as a parameter to method, we can use some beneficial things from html page. For Example; we can reach class list,other attrinutes of the html tag.
    // console.log(event.target);

    if ($event.target.classList.contains("btn-primary")) {
      $event.target.classList.remove("btn-primary");
      $event.target.classList.add("btn-danger");
      $event.target.innerText="Remove from Favorite List";
    }

    else if ($event.target.classList.contains("btn-danger")) {
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-primary");
      $event.target.innerText="Add to Favorite List";
    }
  }
  


}
