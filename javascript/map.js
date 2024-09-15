function twice(ele){
    return 2*ele
}

let arr = [1,23,3]
console.log(arr)
let br = arr.map(twice)
console.log(br)


//new
arr = arr.map(ele => ele*10)
console.log(arr)
//for (const ele of arr) {
  //  br.push(ele*2)
//}
//console.log(br)
