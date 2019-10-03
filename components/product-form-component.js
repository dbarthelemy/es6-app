import { AppComponent } from "./app-component.js";

const TEMPLATE = `<form id="product-form">
<div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" required id="product-name" placeholder="Name...">
    <!-- <label class="mdl-textfield__label" for="product-name">Name...</label> -->
</div>
<div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="number" id="product-price" placeholder="Price...">
    <!-- <label class="mdl-textfield__label" for="product-price">Price...</label> -->
</div>
<!-- Colored raised button -->
<button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
    Add
</button>
</form>
`;

export class ProductFormComponent extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
        componentHandler.upgradeElements(this);
    }

    bindElements() {
        this.submitBtn = this.querySelector('button');
        this.nameInput = this.querySelector('#product-name');
        this.priceInput = this.querySelector('#product-price');
    }

    bindEvents() {
        this.submit();
    }

    submit() {
        this.submitBtn.addEventListener('click', () => {
            const product = {
                name: this.nameInput.value,
                price: this.priceInput.value
            }
            console.log('Form submit', product);

            let myEvent = new CustomEvent('product-submit', { detail: product });
            document.dispatchEvent(myEvent);

            this.refresh();
        })
    }

    refresh() {
        this.nameInput.value = null;
        this.priceInput.value = null;
    }

}