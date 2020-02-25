import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Product} from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) { }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    this.categoryService.getProduct(id).
    subscribe(product => this.product = product);
  }


  share(link) {
    window.alert('The product has been shared!');
    window.location.href = 'https://wa.me/?text=Посмотри%20на этот товар!%20Круто,%20правда? \n %20' + link;
  }
  
  goBack(): void {
    this.location.back();
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
    this.getProduct();
  }

}
