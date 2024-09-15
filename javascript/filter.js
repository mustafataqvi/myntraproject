
let arr = [1,23,2,3]
arr =arr.filter((ele) =>{
    if(ele%2 ==0) return true;
    else return false;
}
)
console.log(arr)
arr = arr.filter(ele => (ele<4));
console.log(arr)