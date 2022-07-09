import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories=[
    {id:1,categoryName:"Adventure"},
    {id:2,categoryName:"Romantic"},
    {id:3,categoryName:"Science-Fiction"},
    {id:4,categoryName:"Dram"}
  ]
}
