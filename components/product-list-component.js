import { AppComponent } from "./app-component.js";
import { ProductCardComponent } from "./product-card-component.js";
import { ProductService } from "../services/product-service.js";

const TEMPLATE = `<div id="product-list">
</div>
`;

export class ProductListComponent extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
        componentHandler.upgradeElements(this);
    }

    bindElements() {
        this.productContainer = this.querySelector('#product-list');
    }

    bindEvents() {
        this.handleSubmit();
    }

    ready() {
        this.loadProducts();
    }

    handleSubmit() {
        document.addEventListener('product-submit', (e) => {
            console.log('Product added to the list', e.detail);
            this.addProduct(e.detail);
        });
    }

    addProduct(product) {
        let card = new ProductCardComponent(product);
        this.productContainer.appendChild(card);
    }

    loadProducts() {
        ProductService.listProducts()
            .then(data => this.displayProducts(data))
            .catch(err => console.log(err));
    }

    displayProducts(data) {
        console.log(data);
        for (let product of data) {
            this.addProduct(product);
        }
    }
}