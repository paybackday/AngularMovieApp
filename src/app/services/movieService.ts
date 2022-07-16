import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService{
private getMoviesUrl="http://localhost:3000/movies";

constructor(private http:HttpClient) {
}

getMovies():Observable<Movie[]>{

    return this.http.get<Movie[]>(this.getMoviesUrl);
}
}