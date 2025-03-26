import { html } from '/utils/html.js';
const template = document.createElement("template");
template.innerHTML = html`
    <style>
        .header{
            background:
            linear-gradient(transparent 50%,#ffffff 0) 0 0,
            radial-gradient(circle closest-side, #FFFFFF 53%, transparent 0) 0 0,
            radial-gradient(circle closest-side, #FFFFFF 50%, transparent 0) 3.5rem 0;
            background-size: 7rem 7rem;
        }
    </style>
    <nav class="header bg-repeat-x flex justify-center items-center h-28 pt-8">
        <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2024083611号</a>
        <img class="w-4 h-4 ml-20" src="/filingIcon.png" />
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=37010102006812" rel="noreferrer" target="_blank">鲁公网安备37010102006812</a>
    </nav>
    </header>
`
class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
customElements.define('footer-area', Footer);
