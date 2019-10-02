import { AppComponent } from "./app-component.js";
import { ProductCardComponent } from "./product-card-component.js";

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
        document.addEventListener('product-submit', (e) => {
            console.log('Product added to the list', e.detail);
            let card = new ProductCardComponent(e.detail);
            this.productContainer.appendChild(card);
        });
    }

}