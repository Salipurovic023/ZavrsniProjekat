import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories: string[];
  selectedProducts: Product[] = []

  constructor(
    private _productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categories = this._productService.allCategories;
  }

  load() {
    this.router.navigate(['category'], { relativeTo: this.activeRoute });
  }
}
