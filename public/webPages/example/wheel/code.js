const js = `
    class Wheel{
      constructor(stage,container){
        this.rotateFriction = 0;
        this.isDragging =false;
        this.lastYPosition = 0;
        this.stage = stage;
        this.container = container;
        this.initStage();
        this.initContainer();
      }
      initStage(){
        this.stage.addEventListener("mousedown",(e)=>{
          this.isDragging = true;
          this.lastYPosition = e.screenY;
        })
        this.stage.addEventListener("mousemove",(e)=>{
          if(!this.isDragging)return;
          if(e.screenY-this.lastYPosition>100){
            this.rollDown()
            this.lastYPosition=e.screenY;
          }else if(e.screenY-this.lastYPosition< -100){
            this.rollUp()
            this.lastYPosition=e.screenY;
          }
        })
        this.stage.addEventListener("mouseup",(e)=>{
          this.isDragging = false;
          this.lastYPosition=0;
        })
        this.stage.addEventListener("mouseleave",(e)=>{
          this.isDragging = false;
          this.lastYPosition=0;
        })
      }
      initContainer(){
        for(let item of this.container.children){
          item.addEventListener("click",()=>{
            if(item.getAttribute('status')==='current'){
              item.classList.toggle("active")
            }
          })
        }
      }
      findCurrent(){
        for(let ele of this.container.children){ 
          if(ele.getAttribute("status")==='current'){
            return ele;
          }
        }
      }
      setCurrent(that){
        const prev = that.previousElementSibling?that.previousElementSibling:that.parentElement.lastElementChild;
        const next = that.nextElementSibling?that.nextElementSibling:that.parentElement.firstElementChild;
        prev.setAttribute("status","prev")
        next.setAttribute("status","next")
        that.setAttribute("status","current")
      }
      rollDown(){
        const currentEle = this.findCurrent();
        this.rotateFriction--;
        this.container.style = \`transform:rotateX(\${this.rotateFriction * 60}deg)\`;
        this.setCurrent(currentEle.nextElementSibling?currentEle.nextElementSibling:currentEle.parentElement.firstElementChild);
      }
      rollUp(){
        const currentEle = this.findCurrent();
        this.rotateFriction++;
        this.container.style = \`transform:rotateX(\${this.rotateFriction * 60}deg)\`;
        this.setCurrent(currentEle.previousElementSibling?currentEle.previousElementSibling:currentEle.parentElement.lastElementChild);
      }
    }
    new Wheel(stage,main)
`;
const css = `
.stage{
    perspective: 800px;
  }
  .main{
    transform-style:preserve-3d;
    padding: 200px 10px;
    width: 200px;
    height: 300px;
    transition: transform 1s;
    position: relative;
    margin:auto;
  }
  .piece{
    transform-style:preserve-3d;
    width: inherit;
    height: inherit;
    color:white;
    position: absolute;
    --pieceTransform:rotateX( calc(var(--index) * 60deg)) translateZ(259.8px);
    transform: var(--pieceTransform);
    transition: transform 1s;
    cursor: pointer;
    user-select: none;
  }
  .piece.active{
    transform: var(--pieceTransform) rotateY(180deg);
  }
  .piece:nth-child(2n){
    background-color: #302f4b;
  }
  .piece:nth-child(2n+1){
    background-color: #5dbe8a;
  }
  .face,.back{
    width: inherit;
    height: inherit;
    position: absolute;
    backface-visibility: hidden;
    transform: rotateX(0deg);
  }
  .back{
    transform: rotateY(180deg);
  }
`;
const html = `
<div class="stage" id="stage">
    <main id="main" class="main">
        <section class="piece" style="--index:0" status="current" >
            <div class="face">1</div>
            <div class="back">背面1</div>
        </section>
        <section class="piece" style="--index:1" status="next">
            <div class="face">2</div>
            <div class="back">背面2</div>
        </section>
        <section class="piece" style="--index:2">
            <div class="face">3</div>
            <div class="back">背面3</div>
        </section>
        <section class="piece" style="--index:3">
            <div class="face">4</div>
            <div class="back">背面4</div>
        </section>
        <section class="piece" style="--index:4">
            <div class="face">5</div>
            <div class="back">背面5</div>
        </section>
        <section class="piece" style="--index:5" status="prev">
            <div class="face">6</div>
            <div class="back">背面6</div>
        </section>
    </main>
</div>
`;
const appletJs = `
Component({
  properties: {
  },
  data: {
    rotateFriction:0,
    isDragging:false,
    lastYPosition:0,
    items:[
      {
        status:'current',
        clicked:false,
        faceInfo:'1',
        backInfo:'back1'
      },
      {
        status:'next',
        clicked:false,
        faceInfo:'2',
        backInfo:'back2'
      },
      {
        status:'',
        clicked:false,
        faceInfo:'3',
        backInfo:'back3'
      },{
        status:'',
        clicked:false,
        faceInfo:'4',
        backInfo:'back4'
      },{
        status:'',
        clicked:false,
        faceInfo:'5',
        backInfo:'back5'
      },{
        status:'next',
        clicked:false,
        faceInfo:'6',
        backInfo:'back6'
      }
    ],
    containerStyle:''
  },
  methods: {
    handleStageTouchStart(e){
      this.setData({
        isDragging:true,
        lastYPosition:e.touches[0].clientY
      })
    },
    handleStageTouchMove(e){
      if(!this.data.isDragging)return;
      const screenY = e.touches[0].clientY;
      const lastYPosition = this.data.lastYPosition;
      if(screenY-lastYPosition>100){
        this.rollDown()
        this.setData({
          lastYPosition:screenY
        })
      }else if(screenY-lastYPosition< -100){
        this.rollUp()
        this.setData({
          lastYPosition:screenY
        })
      }
    },
    handleStageTouchEnd(){
      this.setData({
        isDragging:false,
        lastYPosition:0
      })
    },
    handleItemClicked(e){
      const {index} = e.currentTarget.dataset;
      if(this.data.items[index].status === 'current'){
        const item = this.data.items[index];
        item.clicked = !item.clicked;
        this.setData({
          items:this.data.items
        })
      }
    },
    rollDown(){
      const currentEleIndex = this.findCurrent();
      this.setData({
        rotateFriction:--this.data.rotateFriction,
        containerStyle: \`transform:rotateX(\${this.data.rotateFriction * 60}deg)\`
      })
      this.setCurrent(currentEleIndex+1>=this.data.items.length?0:currentEleIndex+1);
    },
    rollUp(){
      const currentEleIndex = this.findCurrent();
      this.setData({
        rotateFriction:++this.data.rotateFriction,
        containerStyle: \`transform:rotateX(\${this.data.rotateFriction * 60}deg)\`
      })
      this.setCurrent(currentEleIndex-1>=0?currentEleIndex-1:this.data.items.length-1);
    },
    findCurrent(){
      const index = this.data.items.findIndex((item)=>{return item.status==='current'})
      return index
    },
    setCurrent(currentEleIndex){
      const prevIndex = currentEleIndex-1>=0?currentEleIndex-1:this.data.items.length-1;
      const nextIndex = currentEleIndex+1>=this.data.items.length?0:currentEleIndex+1;
      this.data.items[prevIndex].status = "prev"
      this.data.items[nextIndex].status = "next"
      this.data.items[currentEleIndex].status = "current"
      this.setData({
        items:this.data.items
      })
    }
  }
})`
const appletHtml =`
<view 
  class="stage" 
  bind:touchstart="handleStageTouchStart"
  bind:touchmove="handleStageTouchMove"
  bind:touchend="handleStageTouchEnd"
  bind:touchcancel="handleStageTouchEnd">
  <view  class="main" style="{{containerStyle}}">
    <view 
      wx:for="{{items}}"
      wx:key="index"
      class="piece {{item.clicked?'active':''}}" 
      style="--index:{{index}}" 
      data-index="{{index}}" 
      bind:tap="handleItemClicked">
      <view class="face">{{item.faceInfo}}</view>
      <view class="back">{{item.backInfo}}</view>
    </view>
  </view>
</view>
`
const appletCss = 'css与web版一致';
export default {
  'web版':{js,css,html},
  '小程序版':{js:appletJs,css:appletCss,html:appletHtml}
}
