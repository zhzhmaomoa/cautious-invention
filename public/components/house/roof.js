const template = document.createElement("template");
template.innerHTML = `
	<header>屋顶</header>
`
class Roof extends HTMLElement{
	constructor(){
		super();
		this._shadowRoot = this.attachShadow( {mode:"open"} );
		this._shadowRoot.appendChild( template.content.cloneNode( true ) );
	}
}
customElements.define( "roof-area", Roof );
