import { html } from '/utils/html.js';
const template = document.createElement("template");
template.innerHTML = html`
	<style>
		.header{
			--width:100vw;
			height:calc( var( --width ) / 8 * 2 );
		}
		.x{
			width:var( --width );
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
	<header class="header text-center">
		<svg id="x" class="x h-full" viewBox="0 0 800 200">
			<polygon id="wall" class="wall"/>
			<polyline class="roof" points="50,180 400,40 750,180"/> 

			<rect class="window" x="300" y="125" width="200" height="50" rx="5"/>
			<line class="window-line" x1="300" y1="150" x2="500" y2="150"/>
			<line class="window-line" x1="400" y1="125" x2="400" y2="175"/>
		</svg>
	</header>
`
class Roof extends HTMLElement{
	constructor(){
		super();
		this.attachShadow( {mode:"open"} );
		this.shadowRoot.appendChild( template.content.cloneNode( true ) );
		this.$wall = this.shadowRoot.querySelector("#wall");
		this.$x= this.shadowRoot.querySelector("#x");
	}
	connectedCallback(){
		const xWidth = this.$x.clientWidth;
		const wallWidth = xWidth * 0.62
		const leftX = (xWidth - wallWidth)/2 * 800 / xWidth,
			rightX = 800 - leftX;
		this.$wall.setAttribute("points",`${leftX},200 ${rightX},200 ${rightX},150 400,50 ${leftX},150`)
	}
}
customElements.define( "roof-area", Roof );
