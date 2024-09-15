//function hello(){
  //  console.log("hello")

//}function mello(){
  //  console.log("mello")

//}
//setTimeout(hello,2*1000)
for(let i =1; i<=10; i++){
    setTimeout(function(){

        console.log(i)
    }
      ,i*1000 )
}
