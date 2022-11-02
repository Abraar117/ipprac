//default
function add(a, b = 3) {
    return a + b
}
console.log(add(5, 2))
console.log(add(5))

//rest
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six");