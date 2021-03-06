import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movieRepository';
import { AlertifyService } from '../services/alertifyService';
import { MovieService } from '../services/movieService';

// declare let alertify:any; Now, we're using alertifyService, here you can see definitions on constructor.

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title:string="Movie List";
  movies:Movie[]=[];
  popularMovies:Movie[]=[];
  favoriteList:Movie[]=[];
  error:any;

  filterText:string="";

  movieRepository:MovieRepository;

  constructor(private alertify:AlertifyService, private movieService:MovieService,private activatedRoute:ActivatedRoute) { // To use HttpClient we injected in here.
    //For old versions...
    // this.movieRepository=new MovieRepository();
    // this.movies= this.movieRepository.getMovies();
    // this.popularMovies=this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {

    //We have subscribed router parameters...
    this.activatedRoute.params.subscribe(params=>{

      //Now we can use categoryId that we take from url.
      //Just we need to write params["<definedParameterNameOnRouterModule>"]
      this.movieService.getMovies(params["categoryId"]).subscribe(data=>{this.movies=data;}//,
      ,error=>this.error=error
    );


    });




    
  }

  addToList($event:any,movie:Movie){
    // console.log(movie.title);
    //console.log($event.target.classList); // When we send to event as a parameter to method, we can use some beneficial things from html page. For Example; we can reach class list,other attrinutes of the html tag.
    // console.log(event.target);

    if ($event.target.classList.contains("btn-primary")) {
      $event.target.classList.remove("btn-primary");
      $event.target.classList.add("btn-danger");
      $event.target.innerText="Remove from Favorite List";
      this.alertify.success(movie.title+' added to list successfully');
    }

    else if ($event.target.classList.contains("btn-danger")) {
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-primary");
      $event.target.innerText="Add to Favorite List";
      this.alertify.error(movie.title+' removed from list successfully');
      
    }
  }
  


}
