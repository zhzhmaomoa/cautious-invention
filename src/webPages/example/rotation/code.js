const js = `
const container = document.querySelector(".container");
const imgList = ["./1.jpg","./2.jpg","./3.jpg","./4.jpg","./5.jpg"];
const indicator = {centerImageIndex:2,leftImageIndex:1,rightImageIndex:3};
for(let i = 0; i < imgList.length; i++){
    const img = document.createElement("img");
    img.className = 'image';
    img.src = imgList[i];
    container.append(img);
}
function handleToggleImg(i){
    initScroll({centerImageIndex:i,leftImageIndex:i-1,rightImageIndex:i+1});
}
function initScroll(indicator){
    const imgs = container.children;
    for(let i = 0; i < imgs.length; i++){
        imgs[i].className = 'image';
        if(i === indicator.centerImageIndex){
            imgs[i].classList.add('centerImage');
        }else if(i=== indicator.leftImageIndex){
            imgs[i].classList.add('leftImage');
            imgs[i].addEventListener("click",function(){handleToggleImg(i)},{once:true});
        }else if(i<indicator.leftImageIndex){
            imgs[i].classList.add('leftOtherImage');
        }else if(i===indicator.rightImageIndex){
            imgs[i].classList.add('rightImage')
            imgs[i].addEventListener("click",function(){handleToggleImg(i)},{once:true})
        }else if(i > indicator.rightImageIndex){
            imgs[i].classList.add('rightOtherImage')
        }
    }
}
initScroll(indicator);
`
const html = `
<div class="container">
</div>
`;
const css = `
.image{
    width: 200px;
    height:150px;
    position: absolute;
}
.centerImage{
    top:50%;
    left:50%;
    translate: -50% -50%;
    z-index: 2;
    transition-property:left right scale;
    transition-duration: 1s;
    transition-timing-function: linear;
}
.leftImage{
    top:50%;
    left:25%;
    translate: -50% -50%;
    scale:75%;
    opacity: 1;
    z-index: 1;
    transition-property:left right scale opacity;
    transition-duration: 1s;
    transition-timing-function: linear;
}
.rightImage{
    top:50%;
    left:75%;
    translate: -50% -50%;
    scale:75%; 
    opacity: 1;
    z-index: 1;
    transition-property:left right scale opacity;
    transition-duration: 1s;
    transition-timing-function: linear;
}
.leftOtherImage{
    top:50%;
    left:25%;
    translate: -50% -50%;
    scale:75%;
    z-index: 0;
    opacity: 0;
    transition-property:opacity;
    transition-duration: 2s;
    transition-timing-function: linear;
}
.rightOtherImage{
    top:50%;
    left:75%;
    translate: -50% -50%;
    scale:75%; 
    z-index: 0;
    opacity: 0;
    transition-property:opacity;
    transition-duration: 2s;
    transition-timing-function: linear;
}
.container{
    width: 300px;
    height: 200px;
    margin-left: 10px;
    background-color: black;
    position: relative;
}   `
export default {
    '':{js,css,html}
};
