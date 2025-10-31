const code ={
	'':{
		js:`
<script type="importmap">
    {
        "imports": {
            "react": "https://esm.sh/react@19.2.0",
            "react-dom": "https://esm.sh/react-dom@19.2.0/",
            "useCarousel":"/vueReactPages/carousel/useCarousel.js"
        }
    }    
</script>
<script type="module" src="https://esm.sh/tsx"></script>
    import {useState} from "react";
    import { createRoot } from "react-dom/client";
    import useCarousel,{Direction}from "useCarousel"
    const imgArr = [
        "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg",
        "https://images.pexels.com/photos/365810/pexels-photo-365810.jpeg",
        "https://images.pexels.com/photos/6631952/pexels-photo-6631952.jpeg",
        "https://images.pexels.com/photos/2280620/pexels-photo-2280620.jpeg",
        "https://images.pexels.com/photos/2095571/pexels-photo-2095571.jpeg"
    ]
    function CarouselExample(){
        const [{bottomElIndex,topElIndex,currentElIndex,carousalDirection},{handleCarousel,setPageNum,resetCarousel}] = useCarousel({defaultIndex:0,arrLength:imgArr.length})
        return (<>
            <div className="carousel-x">
                <span class="material-symbols-outlined" onClick={() => { handleCarousel(-1); }} >arrow_back_ios</span>
                <div className="carousel-main">
                    {
                        bottomElIndex>=0&&<div className="carousel-main-top"><img className="img" src={imgArr[bottomElIndex]}  alt=""/></div>
                    }
                    {
                        topElIndex>=0&&
                        <div key={\`\${topElIndex}-\${carousalDirection}\`} className={\`carousel-main-bottom \${carousalDirection===Direction.Right?'left-appearing':'left-disappearing'}\`}>
                            <img src={imgArr[topElIndex]}  className="img"  alt=""/>
                        </div>
                    }
                </div>
                <span class="material-symbols-outlined" onClick={() => { handleCarousel(1); }} >arrow_forward_ios</span>
                </div>
                <div className="carousel-num-x">
                {<>
                    {imgArr.map((item,index)=>{
                        return <div className={\`\${(index === currentElIndex)&&'carousel-num-active'}\`} onClick={()=>setPageNum(index)}>{index+1}</div>
                    })}
                </>}
            </div>
        </>)
    }
    createRoot(app).render(<CarouselExample/>)
</script>
useCarousel.js:
import { useState } from "react";
export const Direction = {
    Left:'left',
    Right:'right',
    Undo:'undo'
}
//轮播hook
export default function useCarousel({defaultIndex,arrLength}){//defaultIndex:默认从数组的第几项轮播,arrLength:轮播数组长度
    //每次轮播，都使用上下堆叠的两层元素，上层元素用于轮播移动动画，下层元素用于展示信息
    const [bottomElIndex,setBottomElIndex] = useState(defaultIndex),
        [topElIndex,setTopElIndex] = useState(-1),//初始化时没有轮播移动效果所以不展示上层元素
        [currentElIndex,setCurrentElIndex] = useState(defaultIndex),//表示当前轮播到数组第几项了
        [carousalDirection,setCarousalDirection] = useState(Direction.Undo);//本次轮播方向
    function handleCarousel(step){//-1 向左轮播， 1向右轮播
        const nextIndex = (currentElIndex+step+arrLength) % arrLength;
        if(step<0){
            setCarousalDirection(Direction.Left);
            setTopElIndex(currentElIndex);
            setBottomElIndex(nextIndex)
        }else{
            setCarousalDirection(Direction.Right);
            setBottomElIndex(currentElIndex);
            setTopElIndex(nextIndex);
        }
        setCurrentElIndex(nextIndex)
    }
    function setPageNum(index){
        setBottomElIndex(index);
        setTopElIndex(-1);
        setCurrentElIndex(index);
    }
    function resetCarousel(){
        setBottomElIndex(defaultIndex);
        setTopElIndex(-1);
        setCurrentElIndex(defaultIndex);
        setCarousalDirection(Direction.Undo)
    }
    return [{bottomElIndex,topElIndex,currentElIndex,carousalDirection},{handleCarousel,setPageNum,resetCarousel}]
}
`,
	    css:`
.carousel-x{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.carousel-main{
    position: relative;
    overflow: hidden;
    width: 100px;
    height:100px;
}
.carousel-main-top,.carousel-main-bottom{
    position: absolute;
    left:0;right: 0;top:0;bottom:0;
    width: 100%;
    height: 100%;
    background-color: white;
}
.img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@keyframes disappearing {
    0%{
        left: 0;
    }
    100%{
        left: 100%;
    }
}
.left-disappearing{
    animation:disappearing .8s linear both;
}
.left-appearing{
    animation:disappearing .8s linear reverse both;
}
.carousel-num-x{
    display: flex;
    justify-content: center;
    column-gap: 10px;
    margin:10px 0;
    cursor: pointer;
}
.carousel-num-active{
    color:red;
}`,
	    html:`
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_back_ios,arrow_forward_ios" />
<div id="app"></div>
`
	}
}
export default code