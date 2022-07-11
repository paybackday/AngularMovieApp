import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Movie } from '../models/movie';

@Pipe({
  name: 'movieFilterPipe'
})
export class MovieFilterPipePipe implements PipeTransform {

  transform(movies: Movie[], filterText:string): Movie[] {
    filterText=filterText.toLowerCase();

    console.log(filterText);
    console.log(movies);

    return filterText ? movies.filter(x=>x.title.toLowerCase().indexOf(filterText)!=-1) : movies ;

    //At the same time we can check description title on our movies list. For we can do this process we need to add or symbol into ternery if. Here you can see an example;

    // return filterText ? movies.filter(x=>x.title.toLowerCase().indexOf(filterText)!=-1 || movies.filter(x=>x.description.toLowerCase().indexOf(filterText)!=-1)) : movies ;
  }

}
