const code1 ={
	'':{
		js:`
function test(e) {
    div4.innerHTML = \`\${e.target.id}, \${e.currentTarget.id}, \${e.eventPhase}\`
}
const bubbleEv = new Event("bubbleEv",{bubbles:true})
div1.addEventListener("bubbleEv", test)
div2.addEventListener("bubbleEv", test,{capture: true})
div3.addEventListener("bubbleEv", test)
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
    div8.innerHTML = \`\${e.target.id}, \${e.currentTarget.id}, \${e.eventPhase}\`
}
const ev =new Event("ev")
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
