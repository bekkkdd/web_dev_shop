import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {CATEGORIES, Category} from './categories';
import {Product, PRODUCTS} from './products';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
  getCategory(id: number): Observable<Category> {
    return of(CATEGORIES.find(category => category.id === id));
  }

  getCategoryProducts(id: number): Observable<Product[]> {
    return of(PRODUCTS.filter(product => product.category === (CATEGORIES.find(category => category.id === id).id)));
  }

  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }

  constructor() { }
}
