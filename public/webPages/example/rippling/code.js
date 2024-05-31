const html = `
<div class="button" >
点我
</div>
`;
const css = `
.button{
    border-radius:10px;
    background-color: #252329;
    width: 160px;
    height: 90px;
    margin-left:20px;
    color:#9689b7;
    text-align: center;
    line-height: 90px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    user-select: none;
}
.button:hover{
    background-color: #37333F;
}
.rippling{
    position: absolute;
    background-color: #494650;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: blink 1s linear;
    pointer-events: none;

}
@keyframes blink {
    0% {
        width: 0px;
        height: 0px;
        opacity: 0.5;
    }

    100% {
        width: 400px;
        height: 400px;
        opacity: 0;
    }
}
`;
const js = `
const button = document.querySelector(".button");
button.addEventListener("click",(e)=>{
    console.log(e)
    console.log(button)
    const rippling = document.createElement("span");
    rippling.className = "rippling";
    rippling.style.left =e.pageX-button.offsetLeft+"px";
    rippling.style.top =e.pageY-button.offsetTop+"px";
    button.append(rippling);
    setTimeout(()=>{
        rippling.remove()
    },3000)
})
`;

const code = JSON.stringify({
    '':{js,css,html}
}) 
export default code;
