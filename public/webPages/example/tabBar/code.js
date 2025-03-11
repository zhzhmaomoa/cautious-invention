const css  =`
.nav{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 200px;
    width: 300px;
    div{
        position: relative;
    }
    div::before{
        content: "";
        position: absolute;
        top: 2em;
        left:100%;
        width: 0;
        height: 100%;
        border-bottom: 2px solid #000;
        transition: all  linear .2s;
    }
    div:hover::before{
        transition: all  linear .2s;
        width: 100%;
        left: 0;
    }
    div:hover ~ div::before{
        left: 0;
    }
}
`
const html = `
<nav class="nav">
    <div>
        全部
    </div>
    <div>
        预约中
    </div>
    <div>
        进行中
    </div>
    <div>
        已完成
    </div>
</nav>
`
const js = `空`;
export default {
    '':{js,css,html}
};