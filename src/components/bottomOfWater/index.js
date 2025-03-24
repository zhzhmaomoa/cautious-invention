import { html } from '/utils/html.js';
const template = document.createElement("template");
template.innerHTML = html`
    <style>
      
    </style>
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <radialGradient id="bubbleGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
        <stop offset="0%" style="stop-color:white;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:lightblue;stop-opacity:0.3" />
        </radialGradient>
    </defs>
    <circle cx="50" cy="200" r="20" fill="url(#bubbleGradient)" stroke="lightblue" stroke-width="2">
        <animate attributeName="cy" from="200" to="0" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="1" to="0" dur="4s" repeatCount="indefinite" />
    </circle>

    <circle cx="120" cy="200" r="15" fill="url(#bubbleGradient)" stroke="lightblue" stroke-width="2">
        <animate attributeName="cy" from="200" to="0" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="1" to="0" dur="3s" repeatCount="indefinite" />
    </circle>

    <circle cx="180" cy="200" r="25" fill="url(#bubbleGradient)" stroke="lightblue" stroke-width="2">
        <animate attributeName="cy" from="200" to="0" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="1" to="0" dur="5s" repeatCount="indefinite" />
    </circle>
    </svg>
`
class BottomOfWater extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({mode:'closed'})
      this._shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
customElements.define('bottom-of-water', BottomOfWater);
