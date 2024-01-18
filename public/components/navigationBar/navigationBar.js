const template = document.createElement("template");
template.innerHTML = /*html*/`
    <style>
      .header{
          background:
          linear-gradient(#ffffff 50%, transparent 0) 0 0,
          radial-gradient(circle closest-side, #FFFFFF 53%, transparent 0) 0 0,
          radial-gradient(circle closest-side, #FFFFFF 50%, transparent 0) 55px 0;
          background-size: 110px 200px;
          background-repeat: repeat-x;
          height: 200px;
      }
      .menu{
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 100px;
      }
    </style>
    <header class="header">
        <nav class="menu">
            <a href="/index.html">web</a>
            <a>flutter</a>
        </nav>
    </header>
`
export default class NavigationBar extends HTMLElement {
    constructor() {
      super();
    //   this.appendChild(template.content.cloneNode(true));
      this._shadowRoot = this.attachShadow({mode:'closed'})
      this._shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
