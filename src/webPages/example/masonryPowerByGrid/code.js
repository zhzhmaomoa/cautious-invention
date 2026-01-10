const html = `
<div class="x" id="imgX">

</div>
`;
const css = `
基于grid做的瀑布流效果（masonry）
.x{
    overflow-x: scroll;
    display: grid;
    /* 四行 */
    grid-template-rows: repeat(4,1fr);
    /* 子元素从上到下从左到右排列 */
    grid-auto-flow: column;
    /* 每个网格宽度占2px */
    grid-auto-columns: 2px;
    padding: 10px 0;
    row-gap: 10px;
    justify-items: end;
    height: 450px;
}
.img{
    /* 每个图片高度固定100px,容器总高度450px,减去padding和子网格间的row-gap后共有400px,然后均分给四行图片每个100px高 */
    height: calc( 400px / 4 );
    position: relative;
}
`;
const js = `
const imgs = [
    "https://images.pexels.com/photos/30387214/pexels-photo-30387214.jpeg",
    "https://images.pexels.com/photos/31036180/pexels-photo-31036180.jpeg",
    "https://images.pexels.com/photos/35461869/pexels-photo-35461869.jpeg",
    "https://images.pexels.com/photos/35523642/pexels-photo-35523642.jpeg",
    "https://images.pexels.com/photos/35324745/pexels-photo-35324745.jpeg",
    "https://images.pexels.com/photos/35425670/pexels-photo-35425670.jpeg",
    "https://images.pexels.com/photos/35184929/pexels-photo-35184929.jpeg",
    "https://images.pexels.com/photos/22807062/pexels-photo-22807062.jpeg",
    "https://images.pexels.com/photos/35293768/pexels-photo-35293768.jpeg",
    "https://images.pexels.com/photos/35117667/pexels-photo-35117667.jpeg",
    "https://images.pexels.com/photos/35505742/pexels-photo-35505742.jpeg",
    "https://images.pexels.com/photos/31023834/pexels-photo-31023834.jpeg",
    "https://images.pexels.com/photos/14634791/pexels-photo-14634791.jpeg",
    "https://images.pexels.com/photos/22270201/pexels-photo-22270201.jpeg",
    "https://images.pexels.com/photos/13008735/pexels-photo-13008735.jpeg",
    "https://images.pexels.com/photos/28732704/pexels-photo-28732704.jpeg"
]
const imgX = document.querySelector("#imgX")
/** 获取img元素以及它的框高比*/
function getImageRatio(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve({ratio:img.width / img.height,el:img});
        };
        img.onerror = reject;
        img.src = url;
    });
}
imgs.forEach(async (url)=>{
    try {
        const {ratio,el} = await getImageRatio(url);
        /**计算每个图片要跨多少个网格，一个网格目前占2px，图片高度固定100 ratio*100得到图片的宽度，然后除以2得到图片占多少个网格*/
        const spanNum = Math.floor(ratio * 100 / 2);
        /** +5是用来作为图片之间的横向间隔*/
        el.style['grid-column-end'] = \`span \${spanNum+5}\`
        /** *2获得图片真实宽度 */
        el.style['width'] = \`\${spanNum * 2}px\`
        el.classList.add("img")
        imgX.append(el)
    } catch (error) {
        console.error(error)
    }
})
`;

export default {
    '':{js,css,html}
};
