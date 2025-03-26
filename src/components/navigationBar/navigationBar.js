import { html } from '/utils/html.js';
const template = document.createElement("template");
template.innerHTML = html`
    <style>
      .header{
          background:
            linear-gradient(#ffffff 50%, transparent 0) 0 0,
            radial-gradient(circle closest-side, #FFFFFF 53%, transparent 0) 0 0,
            radial-gradient(circle closest-side, #FFFFFF 50%, transparent 0) 3.5rem 0;
          background-size: 7rem 7rem;
      }
    </style>
    <nav class="header bg-repeat-x flex justify-around items-center h-28 pb-8">
        <a href="/index.html">web</a>
        <a href="/svgPages/index.html">svg</a>
        <a href="/linuxPages/index.html">linux</a>
    </nav>
`
class NavigationBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('navigation-bar', NavigationBar);