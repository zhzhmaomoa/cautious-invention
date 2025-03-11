import { html } from '/utils/html.js';
const template = document.createElement("template");
template.innerHTML = html`
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
          justify-content: center;
          align-items: center;
          padding-top:1.875rem;
          height: 5rem;
          font-size:.75rem;
      }
	.icon{
		width:1rem;
		height:1rem;
		margin-left:5rem;
	}
    </style>
    <header class="header">
        <nav class="menu">
          <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2024083611号</a>
	  <img class="icon" src="/filingIcon.png" />
	  <a href="https://beian.mps.gov.cn/#/query/webSearch?code=37010102006812" rel="noreferrer" target="_blank">鲁公网安备37010102006812</a>
        </nav>
    </header>
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
