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