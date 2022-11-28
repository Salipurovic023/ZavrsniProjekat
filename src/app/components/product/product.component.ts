import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  currentProduct:Product
  constructor(
    private _productService:ProductsService,
    private shoppingService:ShoppingService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.params['id'];
    this.currentProduct = this._productService.getProductsById(productId)[0];
  }

  addToCart(quantity:number){
    this.shoppingService.addProductToCart(this.currentProduct, +quantity)
  }

}
