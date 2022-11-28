import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { Params } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  selectedProducts:Product[] = []
  currentProduct:Product
  constructor(
    private productService :ProductsService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
     let category = this.route.snapshot.params['category'];
      this.selectedProducts = this.productService.getProductsByCategory(category);
  }

}
