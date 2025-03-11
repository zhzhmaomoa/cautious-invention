import { html } from '/utils/html.js';
const template = document.createElement("template");
template.innerHTML = html`
	<style>
		.header{
			--width:calc( 65ch + 10rem );
			text-align:center;
			height:calc( var( --width ) / 8 * 2 );
		}
		.x{
			width:var( --width );
			height:100%;
		}
		.wall{
			fill:rgb( 229,221,170 );
		}
		.roof{
			stroke:rgb( 225,103,35 );
			stroke-width:1rem;
			stroke-linecap:round;
			fill:none;
		}
		.window{
			fill:rgb( 225,103,35 );
			stroke-width:.05rem;
			stroke:white;
		}
		.window-line{
			stroke-width:.05rem;
			stroke:rgb( 229,221,170 );
		}
	</style>
	<header class="header">
		<svg class="x" viewBox="0 0 800 200">
			<polygon class="wall" points="82.5,200 717,200 717,150 400,50 82.5,150 "/>
			<polyline class="roof" points="15,170 400,36 785,170"/> 

			<rect class="window" x="300" y="125" width="200" height="50" rx="5"/>
			<line class="window-line" x1="300" y1="150" x2="500" y2="150"/>
			<line class="window-line" x1="400" y1="125" x2="400" y2="175"/>
		</svg>
	</header>
`
class Roof extends HTMLElement{
	constructor(){
		super();
		this._shadowRoot = this.attachShadow( {mode:"open"} );
		this._shadowRoot.appendChild( template.content.cloneNode( true ) );
	}
}
customElements.define( "roof-area", Roof );
