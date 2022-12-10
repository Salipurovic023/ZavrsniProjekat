import { InMemoryDbService } from "angular-in-memory-web-api";
import { Product } from "../models/Product";

export class InMemoryOrder implements InMemoryDbService{
    createDb(){
        const order: Product[]=[

        ];
        return {order};
    }
}