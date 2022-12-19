import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  selectedProducts: Cart[] = [];
  subtotal: number = 0;
  shipping: string = '';
  total: number = 0;

  constructor(
    private shoppingService: ShoppingService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.selectedProducts = this.shoppingService.cart;
    this.subtotalCalc();

  }

  subtotalCalc() {
    this.subtotal = 0;
    this.selectedProducts.forEach(cart => {
      this.subtotal += cart.product.price * cart.quantity;
    })
    if (this.subtotal > 100) {
      this.shipping = 'FREE';
      this.total = this.subtotal;
    }
    else {
      this.shipping = '100$';
      this.total = this.subtotal + 100;
    }
  }

  quantityChange(id: any, quantity: any) {
    this.shoppingService.changeQuantityOfProduct(id, +quantity);
    this.subtotalCalc();
  }

  checkout() {
    this.router.navigate(['/product-order']);
  }

  removeProduct(productId: number) {
    const index = this.selectedProducts.findIndex(function (p) {
      return p.product.id = productId;
    });

    if(index !== -1){
      this.selectedProducts.splice(index, 1);
    }
  }

}


