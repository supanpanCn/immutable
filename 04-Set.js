// value唯一的数组，会自动去重,无下标的概念
// OrderedSet是有序的，api是一样的
const {Set,OrderedSet} = require('immutable')
/* 
    add 添加值
    delete 删除
    union 合并(取交集)
    interset 交集
    subtract 删除一部分
    forEach 循环
        只要value
    has/includes 值判断
    get 取值
    rest 取非第一个元素
    butLast 取非最后一个元素
    skip 省略前n个取剩余
    skipLast 从后向前省略取余
    skipWhile 从左向右遍历，为false时返回当前及后
    skipUntil 与skipWhile相反，以true为暂停条件
    take 取前n个值
    takeLast 取后n个值
    takeWhile 从前向后取，以false为断点，取前，与skip取的部分相反
    takeUntil 与takeWhile相反，以true为暂停条件
*/
const set = Set([1,1,2,3,4,1])
console.log(set)
let set1 = set.add(6)
console.log(set1)
let set2 = set.delete(6)
console.log(set2)
let set3 = set.clear()
console.log(set3)
console.log('------------------------------------------------------')
let union = Set(['hello','word'])
let set4 = set.union(union)
console.log(set4)
console.log('------------------------------------------------------')
let set5 = union.intersect(set4)
console.log(set5)
console.log('------------------------------------------------------')
let delSome = Set([1,2,3,4,5,6,7,8,9])
let set6 = delSome.subtract([1,9])
console.log(set6)
console.log('------------------------------------------------------')
let set7 = set6.rest()
console.log(set7.get(1))
let set8 = set6.butLast()
console.log(set8.get(-1))
console.log('------------------------------------------------------')
let skipWhile = Set(['hello','word','jack','banana','vue','react'])
let skw1 = skipWhile.skipWhile(v=>v.indexOf('o')!==-1)
console.log(skw1)
console.log('------------------------------------------------------')
let takeWhile = skipWhile.takeWhile(v=>v.indexOf('o')!==-1)
console.log(takeWhile)