const {Map} = require('immutable')
let a = Map({
    name:'li',
    car:Map({name:'qq'})
})
let b = a.set('name','lkis')
// 每一次修改都会返回一个新的对象，因此a不等于b
console.log(a===b)
// immutable只会copy修改的节点，因此a.car等于b.car
console.log(a.car===b.car)
