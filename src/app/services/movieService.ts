import { HttpClient, HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService{
private getMoviesUrl="http://localhost:3000/movies";

constructor(private http:HttpClient) {}

getMovies(categoryId:number):Observable<Movie[]>{

    //We can take a specified movie list when we send request to movies endpoint with category parameter at the JsonServer. 
    let newUrl=this.getMoviesUrl;

    if (categoryId) {
        newUrl+='?categoryId='+categoryId;
    }
    console.log(newUrl);
    return this.http.get<Movie[]>(newUrl)
    .pipe(
        tap(x=>console.log(x)),
        catchError(this.handleError)
    );
}

getMovieById(movieId:number):Observable<Movie>{

    let newUrl=this.getMoviesUrl;

    if (movieId) {
        newUrl+="/"+movieId;
    }

    return this.http.get<Movie>(newUrl).pipe(
        tap(x=>console.log(x)),
        catchError(this.handleError)
    );
}


private handleError(incomingError:HttpErrorResponse){
    if (incomingError.error instanceof ErrorEvent) {
        console.log("Error:"+ incomingError.message);
        //If error source is client or network, this if block will run.
    }
    else{
        //If error source is server , this personalized switch case block will run.
        switch (incomingError.status) {
            case 404:
                console.log("Endpoint Not Found")
                break;
            case 403:
                console.log("Access Denied");
                break;
                case 500:
                    console.log("Interval Server Error");
                    break;
            default:
                console.log("Unexpected Error");
                break;
        }
    }
    return throwError("We interved when the error occured.")
}

// private handleError(incomingError : HttpErrorResponse);
// {
//     if (incomingError.error instanceof ErrorEvent) {
//         //error of client or network
//         console.log("error"+ incomingError.message);
        
//     }
//     else{
//         switch (incomingError.status) {
//             case 404:
//                 console.log("Not Found");
//                 break;
//             case 403:
//                 console.log("Access Denied");
//                 break;
//             case 500:
//                 console.log("Interval Server");
//                 break;
//             default:
//                 console.log("Unexpected error");
//                 break;
//         }
//     }
//     return throwError("Unexpected");
    




// }

}