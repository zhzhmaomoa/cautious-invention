const code ={
	'':{
		js:`
<script type="module">
    import { createApp, ref, reactive } from 'vue'
    createApp({
        setup() {
            //vue中有两种情况会自动解包
            //第一种是ref作为reactive的属性时
            const str = ref('abc'),
                nestedObj = ref({
                    name: ref('张三'),
                }),
                btn1 = ref();
            const obj1 =reactive({//reactive能使用三种数据类型：对象、数组和map，此处使用对象。
                str,
                nestedObj
            })
            function handlePrintObj1(){//无需额外使用.value就能拿到值，且是递归解包。
                btn1.value.insertAdjacentHTML('afterend', \`
                    <ul>
                        <li>obj1.str:\${obj1.str}</li>
                        <li>obj1.nestedObj.name:\${obj1.nestedObj.name}</li>
                    </ul>
                \`)//abc、张三
            }
            //第二种是ref在模板中渲染时能解包.
            //首先分析{{}}中有哪些是顶级ref然后会将它们递归解包，最后判断{{}}的计算结果如果是一个ref也会解包
            const a =  ref("123"),
                b = {c:ref("456")},
                d = ref({e:ref("789")})
            return {
                handlePrintObj1,
                str,
                nestedObj,
                btn1,
                a,b,d,
            }
        }
    }).mount('#app')
</script>
`,
		css:'',
		html:`
<script type="importmap">
    {
        "imports": {
            "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
        }
    }
</script>
<div id="app">
    <h2 class="text-lg my-2">自动解包第一种情况</h2>
    <button ref='btn1' @click="handlePrintObj1">打印obj1</button>
    <h2 class="text-lg my-2">自动解包第二种情况</h2>
    <h3>
        {{a}}//a是顶级ref会解包
    </h3>
    <h3>
        {{b.c}}//b.c的计算结果是ref会解包
    </h3>
    <h3>
        {{b.c+"123"}}//b.c+"123"的计算结果不是ref不会解包
    </h3>
    <h3>
        {{b.c.value+"123"}}//b.c.value+"123"
    </h3>
    <h3>
        {{d.e}}//d.e d是顶级ref会递归解包
    </h3>
    <h3>
        {{d.e+"123"}}//d.e+"123" d是顶级ref会递归解包
    </h3>
</div>
`
	}
}
export default code
