import { ProductFormComponent } from "./components/product-form-component.js";

class App {
    constructor() {
        this.init();
    }

    init() {
        console.log('App initialization');
        customElements.define('product-form', ProductFormComponent);
    }
}

new App();
