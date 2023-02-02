
const test = "jan"
// test = "fdfdf" this is gonna break

const a = [2, 3, 4, 5, 6, 7]
let b = { name: "jan" }
let c = [{ name: "jan" }, [1, 2, 3, 4], () => { }]

let e = 2
let d = 3

console.log(d + 5)

if(test==='jan'){
    console.log('geiler Typ')
}

let drei = 3
if(!true||!false){
    console.log('2==verstanden') 
    console.log(++drei) 
    console.log(++drei)
    console.log(--drei)   
    console.log(--drei)
} 

function add(a,b)
{
    
    return a+b
}
let x = 'Das Ergebnis der Addition ist ' +  add(e,d)

function minus(a,b)
{
    return a-b
}

let y = 'Das Ergebnis der Substraktion ist ' +  minus(add(e,d),drei)

console.log(x)
console.log(y)
console.log ('Nun multiplizieren wir die Ergebnisse')

function multiply(a,b)
{
    return a*b
}

let m1 = 'Und wir haben dann ' + multiply(add(e,d),minus(add(e,d),drei))
console.log(m1)

