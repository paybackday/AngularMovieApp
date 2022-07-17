import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/categoryRepository';
import { CategoryService } from '../services/categoryService';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[];
  selectedCategory:Category=null;

  constructor(private categoryService:CategoryService) { 
  }
  
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{this.categories=data;})
    console.log(this.categories);
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
