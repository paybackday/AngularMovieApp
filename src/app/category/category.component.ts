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
  selectedCategory:Category=null;

  constructor() { 
    this.categoryRepository=new CategoryRepository();
    this.categories=this.categoryRepository.getCategories();
  }
  
  ngOnInit(): void {
  }

  displayAll:boolean=true;

  selectCategory(category?:Category){
    if (category) {
      this.selectedCategory=category;
      this.displayAll=false;
    }
    else{
      this.selectedCategory=null;
      this.displayAll=true;
    }
  }
}
