import { html } from '/utils/html.js';
const template = document.createElement("template");
template.innerHTML = html`
    <link id="highLightLink" rel="stylesheet" href="/components/css/theme/pandaSyntaxLight.css">
    <style>
    	.x{
            background-color:rgb( 229,221,170 );
	    }
    </style>
    <main class=" x  px-4">
            <select name="themes" id="themes-select">
                <option value="srcery">srcery</option>
                <option value="rainbow">rainbow</option>
                <option value="panda-syntax-light" selected>panda-syntax-light</option>
                <option value="lioshi">lioshi</option>
                <option value="color-brewer">color-brewer</option>
            </select>
            <pre class="m-0">
                <code class="whitespace-pre-wrap break-all" id="article">
                </code>
            </pre>
    </main>
`
import hljs from "/utils/highlight/core.js";
import css from "/utils/highlight/languages/css.js"
import javascript from "/utils/highlight/languages/javascript.js"
import xml from "/utils/highlight/languages/xml.js"

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage("xml",xml)
class Wall extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.$article = this.shadowRoot.querySelector("#article");
        this.$linkElement = this.shadowRoot.querySelector("#highLightLink")
        this.$theme = this.shadowRoot.querySelector("#themes-select");
    }
    connectedCallback(){
        this.$theme.addEventListener("change",()=>{
            this.selectTheme();
        })
    }
    set content(val){
        for(let key in val){
            const {css,html,js} = val[key];
            const cssBeautify = hljs.highlight(css, {language: 'css'}).value;
            const htmlBeautify = hljs.highlight(html, {language: 'xml'}).value;
            const jsBeautify = hljs.highlight(js, {language: 'javascript'}).value;
            this.$article.innerHTML += key+'\n' + cssBeautify + htmlBeautify + jsBeautify
        }
    }
    selectTheme(){
        switch(this.$theme.value){
            case 'srcery':
                this.$linkElement.href = "/components/css/theme/srcery.css"
                break;
            case 'rainbow':
                this.$linkElement.href = "/components/css/theme/rainbow.css"
                break;
            case 'panda-syntax-light':
                this.$linkElement.href = "/components/css/theme/pandaSyntaxLight.css"
                break;      
            case 'lioshi':
                this.$linkElement.href = "/components/css/theme/lioshi.css"
                break; 
            case 'color-brewer':
                this.$linkElement.href = "/components/css/theme/color-brewer.css"
                break;
            default:
                break;             
        }
    }
}
customElements.define('wall-area', Wall );
