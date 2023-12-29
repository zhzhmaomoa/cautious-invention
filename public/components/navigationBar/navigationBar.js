const template = document.createElement("template");
template.innerHTML = /*html*/`
    <style>
      body{
          background:
          linear-gradient(#ffffff 50%, transparent 0) 0 0,
          radial-gradient(circle closest-side, #FFFFFF 53%, transparent 0) 0 0,
          radial-gradient(circle closest-side, #FFFFFF 50%, transparent 0) 55px 0 #48B;
          background-size: 110px 200px;
          background-repeat: repeat-x;
      }
      .menu{
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 100px;
          margin-bottom: 50px;
      }
    </style>
    <nav class="menu">
        <a href="/index.html">web</a>
        <a>flutter</a>
    </nav>
`
class NavigationBar extends HTMLElement {
    constructor() {
      super();
      this.appendChild(template.content.cloneNode(true));
      // const shadowRoot = this.attachShadow({mode:'open'})
      // shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
customElements.define('navigation-bar', NavigationBar);
