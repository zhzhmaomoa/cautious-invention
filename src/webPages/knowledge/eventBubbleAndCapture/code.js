const code1 ={
	'':{
		js:`
function test(e) {
    div4.insertAdjacentHTML('beforeend',\`<div>\${e.target.id}, \${e.currentTarget.id}, \${e.eventPhase}</div>\`)
    //event对象中target指触发事件的源头元素，currentTarget指当前触发事件的元素，
    //eventPhase代表事件类型 1代表事件是捕获触发的 2代表当前对象是源头元素 3代表事件是冒泡触发的
}
const bubbleEv = new Event("bubbleEv",{bubbles:true})//这个事件是可冒泡到祖先元素使它们触发同一类型事件
div1.addEventListener("bubbleEv", test)
div2.addEventListener("bubbleEv", test,{capture: true})//bubbleEv事件触发时，绑定capture为true的事件的祖先按树的顺序先触发
div3.addEventListener("bubbleEv", test)//bubbleEv事件触发时，绑定capture为false的事件的祖先按树的倒序后触发
div4.addEventListener("bubbleEv", test,{capture: true})
div4.dispatchEvent(bubbleEv)
`,
		css:'',
		html:`
<div id="div1">
    <div id="div2">
        <div id="div3">
            <div id="div4">
            </div>
        </div>
    </div>
</div>
`
	}
}
const code2 ={
	'':{
		html:`
<div id="div5">
    <div id="div6">
        <div id="div7">
            <div id="div8">

            </div>
        </div>
    </div>
</div>
`,
		css:'',
		js:`
function test(e) {
    div8.insertAdjacentHTML('beforeend',\`<div>\${e.target.id}, \${e.currentTarget.id}, \${e.eventPhase}</div>\`)
}
const ev =new Event("ev")//如果是不冒泡的事件，则不会倒序触发祖先事件
div5.addEventListener("ev", test)
div6.addEventListener("ev", test,{capture: true})
div7.addEventListener("ev", test)
div8.addEventListener("ev", test)
div8.dispatchEvent(ev)
`
	}
}
export default {
	code1,code2
}
