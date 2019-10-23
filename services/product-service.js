import { Http } from "../utils/http.js";

export class ProductService {
    static listProducts() {
        return Http.get('http://localhost:3004/products');
    }
}