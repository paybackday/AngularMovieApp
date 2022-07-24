import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movieService';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie:Movie; //This is the data that is shown to users.

  constructor(private movieService:MovieService, private activatedRoute:ActivatedRoute) //Due to we're gonna send request to service, we have to inject movieService in here. By the way, we need to take movieId parameter from routing. That's why we should inject ActivatedRoute in here.
  { 

  } 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.movieService.getMovieById(params["movieId"]).subscribe(data=>
        {
          this.movie=data;
        })
    })
  }

}
