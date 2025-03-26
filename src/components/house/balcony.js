import { html } from '/utils/html.js';
const template = document.createElement("template");
template.innerHTML = html`
	<style>
		.code{
			width:calc((100vw - 2rem - 62vw) / 2)
		}
	</style>
	<div class="sticky top-0 overflow-x-auto code"><slot></slot></div>
`;
class Balcony extends HTMLElement{
	constructor(){
		super();
		this.attachShadow( {mode:'open'} );
		this.shadowRoot.appendChild( template.content.cloneNode( true ) );
	}
}
customElements.define( "balcony-area", Balcony);
