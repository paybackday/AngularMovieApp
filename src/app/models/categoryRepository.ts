import { Category } from "./category";

export class CategoryRepository{
private categories : Category[];


constructor() {
    this.categories=[
        {id:1,name:"Adventure"},
        {id:2,name:"Romantic"},
        {id:3,name:"Science-Fiction"},
        {id:4,name:"Dram"}
      ]
}

getCategories():Category[]{
    return this.categories;
}


}