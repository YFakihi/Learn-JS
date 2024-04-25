function findeplucate(arr){
    var test = Array.from(new Set(arr));
    // var sorted = test.sort((a,b )=> b-a)

    return test;

}
const arra = findeplucate([2,8,17,2,-2,-3]);

 console.log(arra);



//  function test(a){
//     a=   a.filter(s=> s!=3)
   
//   a=  a.map(s => s*=s  )
    
//     let b= a.reduce((a,s)=> a+=s)
    
//     return b
// }

// const tr = [3,3,2,9]

// console.log(test(tr))