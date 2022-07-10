import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/categoryRepository';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryRepository:CategoryRepository;
  categories:Category[];
  constructor() { 
    this.categoryRepository=new CategoryRepository();
    this.categories=this.categoryRepository.getCategories();
  }
  
  ngOnInit(): void {
  }
}
