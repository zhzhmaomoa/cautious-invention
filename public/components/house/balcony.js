import { html } from '/utils/html.js';
const template = document.createElement("template");
template.innerHTML = html`
	<style>
		.code{
			position:sticky;
			top:0;
		}
	</style>
	<div class="code"><slot></slot></div>
`;
class Balcony extends HTMLElement{
	constructor(){
		super();
		this._shadowRoot = this.attachShadow( {mode:'open'} );
		this._shadowRoot.appendChild( template.content.cloneNode( true ) );
	}
}
customElements.define( "balcony-area", Balcony);
