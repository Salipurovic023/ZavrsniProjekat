import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class OrderService{

    constructor(
        private httpClient: HttpClient
    ){}
    
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    sendProductToDatabase(product:any){
        return this.httpClient.post('api/products', product,  {
            headers:this.headers
        })
    }
}