export class AppComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log('Component added to page');
        this.display();
        this.bindElement();
        this.bindEvent();
        this.ready();
    }

    display() { }
    bindElement() { }
    bindEvent() { }
    ready() { }
}