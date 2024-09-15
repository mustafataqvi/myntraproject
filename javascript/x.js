let x = {
    name: "dsd",
    age: "ssfz",
    scs : "scs",
    income : 23,
    "nicj gyt": 87
}
x.age = 40
console.log(x)
console.log(x.age,x["nicj gyt"])
for (const key in x) {
    if (Object.hasOwnProperty.call(x, key)) {
        console.log(key,x[key])
        
    }
}
    
