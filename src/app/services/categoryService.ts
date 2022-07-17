import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable()
export class CategoryService{
private categoryGetUrl="http://localhost:3000/categories";

constructor(private http:HttpClient) {}

getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryGetUrl);
}
}