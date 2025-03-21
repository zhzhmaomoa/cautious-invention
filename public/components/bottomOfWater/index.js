import { html } from '/utils/html.js';
const template = document.createElement("template");
template.innerHTML = html`
    <style>
      
    </style>
    <main>
        
    </main>
`
class BottomOfWater extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({mode:'closed'})
      this._shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
customElements.define('bottom-of-water', BottomOfWater);
