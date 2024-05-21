const template = document.createElement("template");
template.innerHTML = `
	<header>地基</header>
`
class Foundation extends HTMLElement{
	constructor(){
		super();
		this._shadowRoot = this.attachShadow( {mode:"open"} );
		this._shadowRoot.appendChild( template.content.cloneNode( true ) );
	}
}
customElements.define( "foundation-area", Foundation );
