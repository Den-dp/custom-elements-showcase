class HelloCustomElementsElement extends HTMLElement {

    /**
     * This gets called when the HTML parser sees your tag
     * Or more specifically when an instance of the element is created or upgraded
     */
    constructor(){
        super();
        this.message = 'Hello, Custom Elements!';
        this.counter = 0;
        this.render = this.render.bind(this);
        this.render();
    }

    /**
     * Called every time the element is inserted into the DOM
     */
    connectedCallback(){
        this.innerHTML = `<p>${this.message}</p>`;
        setInterval(()=>{
            this.render();
        }, 1000);
    }

    render() {
        this.innerHTML = `<p>${this.counter++}</p>`;
    }

    /**
     * Called when an attribute was added, removed, or updated
     * @param attrName
     * @param oldVal
     * @param newVal
     */
    attributeChangedCallback(attrName, oldVal, newVal){
    }

    /**
     * Called if the element has been moved into a new document
     */
    adoptedCallback(){
    }
}

// Check that the element hasn't already been registered
if (!window.customElements.get('hello-custom-elements-element')) {
    // This registers your new tag and associates it with your class
    window.customElements.define('hello-custom-elements-element', HelloCustomElementsElement);
}