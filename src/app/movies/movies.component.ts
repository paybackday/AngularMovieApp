import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies = [
    {id:1,title:"Movie 1",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam iure reiciendis ab at repudiandae blanditiis quasi, earum similique sunt?",imageUrl:"1.jpeg"},
    {id:2,title:"Movie 2",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam iure reiciendis ab at repudiandae blanditiis quasi, earum similique sunt?",imageUrl:"2.jpeg"},
    {id:3,title:"Movie 3",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam iure reiciendis ab at repudiandae blanditiis quasi, earum similique sunt?",imageUrl:"3.jpeg"},
    {id:4,title:"Movie 4",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam iure reiciendis ab at repudiandae blanditiis quasi, earum similique sunt?",imageUrl:"4.jpeg"},
]

}
