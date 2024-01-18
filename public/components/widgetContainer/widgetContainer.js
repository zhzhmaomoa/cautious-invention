const template = document.createElement("template");
template.innerHTML = /*html*/`
    <link rel="stylesheet" href="/components/css/theme/srcery.css">
    <style>
        .widget-main{
            padding:25px;
            display: flex;
            justify-content: center;
            align-items:flex-start;
            flex-wrap:wrap;
            column-gap: 25px;
        }
        .widget-aside{
            flex-basis: 400px;
            position: relative;
            padding: 25px;
        }
        .widget-article{
            flex:1 1 auto;
            background-color:#eee;
            padding: 10px 20px;
            border-radius: 10px;
        }
        .pre{
            margin:0;
        }
        .widget-content{
            white-space: pre-wrap;
            word-break:break-all;
        }
        @media (min-width:1000px) {
            .widget-aside{
                position: sticky;
                top:25px;
            }
        }
    </style>
    <main class="widget-main">
        <aside class="widget-aside">
            <slot name="aside"></slot>
        </aside>
        <article class="widget-article">
            <select name="themes" id="themes-select">
                <option value="srcery">srcery</option>
                <option value="rainbow">rainbow</option>
                <option value="panda-syntax-light">panda-syntax-light</option>
                <option value="lioshi">lioshi</option>
                <option value="color-brewer">color-brewer</option>
            </select>
            <pre class="pre">
                <code class="widget-content">
                </code>
            </pre>
        </article>
    </main>
`
import hljs from "/utils/highlight/core.js";
import css from "/utils/highlight/languages/css.js"
import javascript from "/utils/highlight/languages/javascript.js"
import xml from "/utils/highlight/languages/xml.js"

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage("xml",xml)
export default class WidgetContainer extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:'closed'});
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$article = this._shadowRoot.querySelector(".widget-content");
        this.$linkElement = this._shadowRoot.querySelector("link")
        this.$theme = this._shadowRoot.querySelector("#themes-select")
    }
    connectedCallback(){
        this.$theme.addEventListener("change",()=>{
            selectTheme.apply(this);
        })
    }
    static get observedAttributes() {
        return ['article'];
    }
    attributeChangedCallback(attrName, oldVal, newVal){
        const {css,html,js} = JSON.parse(newVal);
        const cssBeautify = hljs.highlight(css, {language: 'css'}).value;
        const htmlBeautify = hljs.highlight(html, {language: 'xml'}).value;
        const jsBeautify = hljs.highlight(js, {language: 'javascript'}).value;
        this.$article.innerHTML = 
            "<h3 class='hljs-title'>css</h3>"+cssBeautify +"<h3 class='hljs-title'>html</h3>"+ htmlBeautify + "<h3 class='hljs-title'>javascript</h3>"+jsBeautify
    }
}

function selectTheme(){
    switch(this.$theme.value){
        case 'srcery':
            this.$linkElement.href = "/components/css/theme/srcery.css"
            break;
        case 'rainbow':
            this.$linkElement.href = "/components/css/theme/rainbow.css"
            break;
        case 'panda-syntax-light':
            this.$linkElement.href = "/components/css/theme/panda-syntax-light.css"
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