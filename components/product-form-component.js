import { AppComponent } from "./app-component.js";

const TEMPLATE = `<form id="product-form">
<div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" required id="product-name">
    <label class="mdl-textfield__label" for="product-name">Name...</label>
</div>
<div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="number" id="product-price">
    <label class="mdl-textfield__label" for="product-price">Price...</label>
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

}