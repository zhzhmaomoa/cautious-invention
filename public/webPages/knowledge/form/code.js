const js = `
form2.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name2")
    fetch("http://127.0.0.1:80?name="+name.value)
})
form4.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name4")
    fetch("http://127.0.0.1:80",{
        method:"post",
        body:"name="+name.value+"&age=11",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
})
form5.addEventListener("submit",(e)=>{
    e.preventDefault();
    fetch("http://127.0.0.1:80",{
        method:"post",
        body:new FormData(form5),
    })
})  
`;
const css = ``;
const html = `
<ol>
    <li>
        <h3>发送get请求的表单</h3>//会将查询参数挂在url后面以&分隔
        <form id="form1" action="http://127.0.0.1:80" method="get" target="_blank">
            label:<input type="text" name="name" value="form1">
            <button type="submit">发送</button>
        </form>
        <form id="form2">
            label:<input type="text" id="name2" name="name" value="form2">
            <button type="submit">发送(通过fetch)</button>
        </form>
    </li>
    <li>
        <h3>发送post请求的表单</h3>
        <h4>使用application/x-www-form-urlencoded方式</h4>  
        <form id="form3" action="http://127.0.0.1:80" method="post" target="_blank">
            label:<input type="text" name="name" value="form3">
            <button type="submit">发送</button>
        </form>
        <form id="form4">
            label:<input id="name4" type="text" name="name" value="form4">
            <button type="submit">发送(通过fetch)</button>
        </form>
        <h4>最好的方法:使用multipart/form-data,节约代码的同时还能传文件</h4>
        <form id="form5">
            label:<input type="text" name="name" value="form5">
            <button type="submit">发送</button>
        </form>
    </li>
</ol>
`;
const code =JSON.stringify({
    '':{js,css,html}
}) 
export default code