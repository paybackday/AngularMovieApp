import { Movie } from "./movie";

export class MovieRepository{
    private movies: Movie[];

    constructor(){
        // this.movies=[
        //     {id:1,title:"Movie 1",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam iure reiciendis ab at repudiandae blanditiis quasi, earum similique sunt?",imageUrl:"1.jpeg",isPopular:true},
        //     {id:2,title:"Movie 2",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam iure reiciendis ab at repudiandae blanditiis quasi, earum similique sunt?",imageUrl:"2.jpeg",isPopular:false},
        //     {id:3,title:"Movie 3",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam iure reiciendis ab at repudiandae blanditiis quasi, earum similique sunt?",imageUrl:"3.jpeg",isPopular:true},
        //     {id:4,title:"Movie 4",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam iure reiciendis ab at repudiandae blanditiis quasi, earum similique sunt?",imageUrl:"4.jpeg",isPopular:false},
        // ]
    }

    getMovies():Movie[]{
        return this.movies;
    }

    getMovieById(id:number):Movie{ //We can define "| undefined" to solve this problem or we can go tsconfig.ts file after that we can add strictNullChecks:false paramater.
        return this.movies.find(x=>x.id==id); 
    }

    getPopularMovies(){
        return this.movies.filter(x=>x.isPopular);
    }
}