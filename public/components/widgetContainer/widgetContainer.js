const template = document.createElement("template");
template.innerHTML = /*html*/`
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
            flex:1 0 600px;
            border-radius: 10px;
            background-color: #eee;
            background-image: 
            linear-gradient(rgba(255,255,255,0) calc(75% - 1px),#ccc calc(75% - 1px),#ccc, transparent calc(75% + 1px));
            background-size:auto 50px;
            line-height: 50px;
        }
        .widget-content{
            white-space: pre-wrap;
            vertical-align: bottom;
        }
        @media (min-width:1100px) {
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
            <code class="widget-content">
            </code>
        </article>
    </main>
`
export default class WidgetContainer extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$content = this._shadowRoot.querySelector(".widget-content")
    }
    static get observedAttributes() {
        return ['code'];
    }
    attributeChangedCallback(attrName, oldVal, newVal){
        this.$content.innerHTML = newVal;
    }

}
