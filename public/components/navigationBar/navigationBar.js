const template = document.createElement("template");
template.innerHTML = /*html*/`
    <style>
      .header{
          background:
          linear-gradient(#ffffff 50%, transparent 0) 0 0,
          radial-gradient(circle closest-side, #FFFFFF 53%, transparent 0) 0 0,
          radial-gradient(circle closest-side, #FFFFFF 50%, transparent 0) 3.437rem 0;
          background-size: 6.875rem 6.875rem;
          background-repeat: repeat-x;
          height: 6.875rem;
      }
      .menu{
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 5rem;
      }
    </style>
    <header class="header">
        <nav class="menu">
            <a href="/index.html">web</a>
            <a>flutter</a>
        </nav>
    </header>
`
class NavigationBar extends HTMLElement {
    constructor() {
      super();
    //   this.appendChild(template.content.cloneNode(true));
      this._shadowRoot = this.attachShadow({mode:'closed'})
      this._shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
customElements.define('navigation-bar', NavigationBar);
