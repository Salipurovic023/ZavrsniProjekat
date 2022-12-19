import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  currentProduct: Product
  constructor(
    private _productService: ProductsService,
    private shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.params['id'];
    this.currentProduct = this._productService.getProductsById(productId)[0];
  }

  addToCart(quantity: string) {
    if (this.authService.isLoggedIn) {
      this.shoppingService.addProductToCart(this.currentProduct, +quantity);
      this.orderService.sendProductToDatabase(this.currentProduct).subscribe({
        next: (response) => { console.log(response) },
        error: (err) => { console.log(err) }
      })
    }
    else{
      window.alert("Please Login to shop")
      this.router.navigate(['/login'])
    }
  }

  // nextProduct(){
  //   let productId = this.route.snapshot.params['id'];
  //   this.currentProduct = this._productService.getNextProduct(productId)[0];
  //   this.route.params.subscribe((params:Params)=>{
  //     productId = (params['id']);
  //     this.currentProduct = this._productService.getNextProduct(productId)[0];
  //   })
  //}

  // prevProduct(){
  //   let productId = this.route.snapshot.params['id'];
  //   this.route.params.subscribe((params:Params)=>{
  //     productId = (params['id']);
  //     this.currentProduct = this._productService.getPrevProduct(productId)[0];
  //   })
  // }
}
