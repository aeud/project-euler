//var array = []
//for (var i = 1; i < 1000; i++) {
//    if (i % 3 == 0 || i % 5 == 0) array.push(i)
//}
//console.log(array.reduce((a, b) => a + b, 0))

//var fiboArray = []
//var fiboRec = n => n <= 1 ? n : fiboRec(n - 1) + fiboRec(n - 2)
//var fiboCursor = 2
//var fiboCursorValue = fiboRec(fiboCursor)
//while (fiboCursorValue < 4000000) {
//    fiboArray.push(fiboCursorValue)
//    fiboCursorValue = fiboRec(++fiboCursor)
//}
//console.log(fiboArray.filter(a => a % 2 == 0).reduce((a, b) => a + b, 0))

//var i = 0
//while (i < 6857) {
//    if (6857 % i == 0) console.log(i)
//    i++
//}

//var readPal = x => {
//    var a = String(x)
//    var halfLength = parseInt(a.length / 2)
//    var head = a.slice(0, halfLength)
//    var queue = a.split('').reverse().join('').slice(0, halfLength)
//    return queue == head
//}
//for (var i = 1000; i >= 100; i--) {
//    for (var j = 1000; j >= i; j--) {
//        if (readPal(i*j)) { console.log(i, j, i*j) }
//    }
//}

//var v = 20 * 19 * 18 * 17 * 14 * 13 * 11
//var a = Array.apply(null, Array(20)).map((_, i) =>  i + 1)
//var testV = v => a.map(i => v % i == 0).reduce((a, b) => a && b, true) 
//while (1) {
//    if (testV(v)) console.log(v, true)
//    v++
//}

var v1 = 50 * 50 * 101 * 101
var v2 = 0
for (var i = 1; i <= 100; i++) {
    v2 += i * i
}
console.log(v1 - v2)