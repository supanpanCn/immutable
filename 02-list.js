const {List} = require('immutable')
// 生成list类型
const list = List([1,2,3,4])
const arr = List.of(1,2,3,4)
// api：
//          isList  判断是否是list类型
//          of      创建list
//          size    获取长度
//          set     设置
//          delete  删除
//          insert  插入
//          update  更新指定下标,参数2接收一个函数
//          clear   清空
//          pop/push/shift/unshift/map/filter/keys/values/entries
//          setSize 小于截取，大于不动
//          setIn/deleteIn/insertIn/updateIn  操作多维数组
//                  --（[层级，下标],值）
//          concat/merge  合并
//          flatten    降维
//              true降维1次
//              false全部降维
//              num指定降维层级
//          find   查找,找到就返回
//          findLast  查找，以最后一个作为返回结果
//          groupBy  分组
let arr1 = arr.set(1,'567')  //immutable是不可变的，它每次都会返回一个新的对象
console.log(List.isList(list),arr.size,arr,arr1)
console.log('------------------------------------------------------')
// 如果操作的位置超过了本身，那么其他位补undefined
let arr2 = arr.set(10,999)
console.log(arr2)
console.log('------------------------------------------------------')
// 如果给与的是负值则从相反方向开始查找
let arr3 = arr.set(-1,666)
console.log(arr3)
console.log('------------------------------------------------------')
let arr4 = arr.delete(0)
console.log(arr4,arr4.size)
console.log('------------------------------------------------------')
let arr5 = arr.insert(2,'insert')
console.log(arr5)
console.log('------------------------------------------------------')
let arr6 = arr.update(1,(x)=>x*150)
console.log(arr6)
console.log('------------------------------------------------------')
let arr7 = arr.clear()
console.log(arr7)
console.log('------------------------------------------------------')
let arr8 = arr.setSize(1)
console.log(arr8)
console.log('------------------------------------------------------')
let list1 = List([
    List([1,2,3]),
    List([4,5,6])
])
let list2 = list1.setIn([1,2],999)
console.log(list2)
console.log('------------------------------------------------------')
let conca = arr3.concat(arr1,arr2)
console.log(conca)
console.log('------------------------------------------------------')
let arr9 = arr.find((v,i,arr)=>v==1)
console.log(arr9)
console.log('------------------------------------------------------')
let people = List([{
    sex:'male',
    name:'zs'
},{
    sex:'male',
    name:'ls'
},{
    sex:'female',
    name:'ww'
}])
let res = people.groupBy(x=>x.sex)
console.log(res)

console.log(list)