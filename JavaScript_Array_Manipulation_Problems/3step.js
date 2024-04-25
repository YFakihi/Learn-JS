function findeplucate(arr){
    var test = Array.from(new Set(arr));
    // var sorted = test.sort((a,b )=> b-a)

    return test;

}
const arra = findeplucate([2,8,17,2,-2,-3]);

 console.log(arra);