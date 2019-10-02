export class AppComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log('Component added to page');
        this.display();
        this.bindElements();
        this.bindEvents();
        this.ready();
    }

    display() { }
    bindElements() { }
    bindEvents() { }
    ready() { }
}