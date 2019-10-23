import { ProductFormComponent } from "./components/product-form-component.js";
import { ProductListComponent } from "./components/product-list-component.js";
import { ProductCardComponent } from "./components/product-card-component.js";

class App {
    constructor() {
        this.init();
    }

    init() {
        console.log('App initialization');
        customElements.define('product-form', ProductFormComponent);
        customElements.define('product-list', ProductListComponent);
        customElements.define('product-card', ProductCardComponent);
    }
}

new App();
