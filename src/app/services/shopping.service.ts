import { EventEmitter, Injectable } from "@angular/core";
import { Cart } from "../models/Cart";
import { Product } from "../models/Product";

@Injectable({
    providedIn:'root'
})
export class ShoppingService{
    
    cart:Cart[] = [];
    numberOfProducts:number = 0;
    cartChange: EventEmitter<any> = new EventEmitter();

    constructor(){}

    addProductToCart(product:Product, quantity:number){
        this.cart.push(new Cart(product,quantity));
        this.numberOfProducts += quantity;
        this.cartChange.emit(this.numberOfProducts);
    }

}