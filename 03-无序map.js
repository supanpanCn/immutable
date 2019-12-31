
const {
    Map
} = require('immutable')
// 有序Map，开销比较大，不推荐使用
const {OrderedMap} = require('immutable')
/* 
    set    设置
        --key和value可以是任意类型
    get    以键名取值
    delete/deleteAll  删除
    clear  清空
    update 更新
        --key
        --callback
    merge 合并,同名覆盖
    mergeWith 指定合并规则
        --function(old,new)  当值重复时的处理规则
        --Map
    setIn/getIn/updateIn/mergeIn  设置/获取嵌套结构的值
    toJS/toJSON  无视层级将immutable转为js/只转换一层
    toArray   浅转换
    toObject   同toJSON
    equals   判断相等
    find/findLast   找到就返回/找到最后一个返回
        --(v,i)=>{}
    flatten  降维
    has  键判断
    includes 值判断
    forEach 循环

*/
const m1 = Map({
    x: 1,
    y: 2
})
console.log('m1:',m1)
console.log('-------------------------------------------------')
let m2 = m1.set(1,999)
console.log('m2:',m2)
console.log(m2.get(1))
let m3 = m2.delete(1)
console.log(m3,m3.get(1))
console.log('-------------------------------------------------')
let m4 = m2.deleteAll(['x','y'])
console.log(m4)
console.log('-------------------------------------------------')
let m5 = m2.clear()
console.log(m5)
console.log('-------------------------------------------------')
let m6 = m1.update('x',(x)=>x*1000)
console.log(m6.get('x'))
console.log('-------------------------------------------------')
let m7 = m6.merge(m1,m2,m3,m4)
console.log(m7.get('x'))
console.log('-------------------------------------------------')
let m8 = m6.mergeWith((old,newO)=>newO+'new',m1,m2,m3)
console.log(m8.get('x'))
console.log('-------------------------------------------------')
const deepMap = Map({
    lev1:Map({
        lev2:Map({
            lev3:Map({
                x:100
            })
        })
    }),
    lev2:9000
})
let dep = deepMap.set('lev2','hello')
let dep1 = deepMap.setIn(['lev1','lev2','lev3','x'],'word')
console.log(dep.get('lev2'),dep1.getIn(['lev1','lev2','lev3','x']))
console.log('-------------------------------------------------')
let tojs = deepMap.toJS()
console.log(tojs,deepMap.toJSON())
console.log('-------------------------------------------------')
let arr = m1.toArray()
console.log(arr)
console.log('-------------------------------------------------')
console.log(m1.equals(m2))
console.log('-------------------------------------------------')
console.log(m1.find((v,i)=>v==1))
