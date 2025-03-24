import { html } from '/utils/html.js';
const template = document.createElement("template");
template.innerHTML = html`
	<style>
		.x{
			text-align:center;
			--width:100vw;
			height:calc( var(--width) / 10 * 2 );
		}
		.foundation{
			width:var(--width);
			height:100%;
		}
		.stair-case{
			fill:rgb( 196,203,207 );
			stroke:rgb( 73,92,105 );
			stroke-width:0.01rem;
		}
	</style>
	<header class="x">
		<svg class="foundation" viewBox="0 0 1000 200">
			<rect x="100" y="0" width="800" height="50" class="stair-case"/>
			<rect x="75" y="50" width="850" height="50" class="stair-case"/>
			<rect x="50" y="100" width="900" height="50" class="stair-case"/>
			<rect x="25" y="150" width="950" height="50" class="stair-case"/>
		</svg>
	</header>
`
class Foundation extends HTMLElement{
	constructor(){
		super();
		this._shadowRoot = this.attachShadow( {mode:"open"} );
		this._shadowRoot.appendChild( template.content.cloneNode( true ) );
	}
}
customElements.define( "foundation-area", Foundation );
