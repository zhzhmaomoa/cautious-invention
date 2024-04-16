const template = document.createElement("template");
template.innerHTML = /*html*/`
    <style>
      .header{
          background:
          linear-gradient(transparent 50%,#ffffff 0) 0 0,
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
          padding-top:1.875rem;
          height: 5rem;
          font-size:.75rem;
      }
    </style>
    <header class="header">
        <nav class="menu">
          <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2024083611号</a>
        </nav>
    </header>
`
class Footer extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({mode:'closed'})
      this._shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
customElements.define('footer-area', Footer);
