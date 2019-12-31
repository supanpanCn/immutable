const immutable = require('immutable')
let map = immutable.fromJS({
    x:1,
    y:2,
    z:3,
    arr:[1,2,3]
})
console.log(map.get('arr').toJS())
