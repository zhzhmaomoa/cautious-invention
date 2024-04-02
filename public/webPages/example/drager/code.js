const js = `
const selectedItem  = document.querySelector("#selectedItem");
selectedItem.firstChild.nodeValue = 2023;
const yearArr = [2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028];
const yearPositionArr = [-5,-4,-3,-2,-1,0,1,2,3,4,5]
const positionMapFontSize ={
'-5':'12px',
'5':'12px',
'4':'16px',
'-4':'16px',
'3':'20px',
'-3':'20px',
'2':'24px',
'-2':'24px',
'1':'28px',
'-1':'28px',
'0':'32px'
}
const border =  document.querySelector(".c-border");
for(let i =0; i<yearArr.length;i++){
    const year = document.createElement('div');
    year.style.fontSize = positionMapFontSize[yearPositionArr[i]+''];
    year.className = 'c-item';
    year.style.transform = \`translate(0,\${yearPositionArr[i]}00%)\`;
    year.style.visibility = ( yearPositionArr[i]< -2 || yearPositionArr[i]>2)?'hidden':'visible';
    const yearText = document.createTextNode(yearArr[i]);
    year.appendChild(yearText);
    border.appendChild(year);
}
let isDraging = false;
let y = 0;
border.addEventListener("mousedown",(e)=>{
    isDraging = true;
    y = e.screenY;
})

border.addEventListener("mouseover",(e)=>{
    if(isDraging){
        if(e.screenY - y > 5 && yearPositionArr[0]!==0){
            yearPositionArr.forEach((item,index)=>{
                yearPositionArr[index] = item+1;
                border.children[index].style.transform = 
                \`translate(0,\${yearPositionArr[index]}00%)\`;
                border.children[index].style.fontSize = 
                positionMapFontSize[yearPositionArr[index]+''];
                border.children[index].style.visibility = 
                ( yearPositionArr[index]< -2 || yearPositionArr[index]>2)?'hidden':'visible';
                if(yearPositionArr[index] === 0){
                    selectedItem.firstChild.nodeValue = 
                    border.children[index].firstChild.nodeValue;
                }
            });
            y = e.screenY;
        }else if(e.screenY-y< -5 && yearPositionArr[yearPositionArr.length-1]!==0){
            yearPositionArr.forEach((item,index)=>{
                yearPositionArr[index] = item-1;
                border.children[index].style.transform = 
                \`translate(0,\${yearPositionArr[index]}00%)\`;
                border.children[index].style.fontSize = 
                positionMapFontSize[yearPositionArr[index]+''];
                border.children[index].style.visibility = 
                ( yearPositionArr[index]< -2 || yearPositionArr[index]>2)?'hidden':'visible';
                if(yearPositionArr[index] === 0){
                    selectedItem.firstChild.nodeValue = 
                    border.children[index].firstChild.nodeValue;
                }
            });
            y = e.screenY;
        }
    }

})
border.addEventListener("mouseup",(e)=>{
    isDraging = false;
    y = 0;
})
border.addEventListener("mouseleave",(e)=>{
    isDraging = false;
    y = 0;
})
`;
const css = `
.c-body{
    width: 300px;
    height: 300px;
    background-color: black;
    color:white;
    position: relative;
}
.c-border{
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    border:1px solid orange;
    padding: 10px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.c-item{
    position: absolute;
    cursor: pointer;
    user-select: none;
}
`;
const html = `
<div class="c-body">
    <div class="c-border">
    </div>
    </div>
    <div>
    当前选中项:<div id="selectedItem"> </div>
</div>
`;
const code =JSON.stringify({
    '':{js,css,html}
}) 
export default code