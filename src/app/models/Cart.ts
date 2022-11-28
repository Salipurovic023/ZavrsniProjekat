import { Product } from "./Product";


export class Cart{
    constructor(
        public product: Product,
        public quantity: number
    ){}
}