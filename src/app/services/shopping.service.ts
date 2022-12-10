import { HttpClient, HttpHeaders } from "@angular/common/http";
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
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(
        private httpClient:HttpClient
    ){}

    addProductToCart(product:Product, quantity:number){
        this.cart.push(new Cart(product,quantity));
        this.numberOfProducts += quantity;
        this.cartChange.emit(this.numberOfProducts);
    }
    
    getAllProducts(){
        return this.cart;
    }

    changeQuantityOfProduct(productId:number,newQuantity:number){
        let index = this.cart.findIndex(function(c){
            return c.product.id == productId;
        });
        if(index != -1){
            let currentQuantity = this.cart[index].quantity;
            this.cart[index].quantity = newQuantity;

            if(currentQuantity > newQuantity){
                this.numberOfProducts -= currentQuantity - newQuantity;
                this.cartChange.emit(this.numberOfProducts);
            }
            else if(newQuantity > currentQuantity){
                this.numberOfProducts += newQuantity - currentQuantity;
                this.cartChange.emit(this.numberOfProducts);
            }
        }
    }
    addProductToDatabase(){
        return this.httpClient.get('api/product',{
            headers: this.headers
        });
    }

}