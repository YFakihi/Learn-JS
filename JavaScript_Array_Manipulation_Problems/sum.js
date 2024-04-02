function sum (arr){
    let res = 0;
    for(let i = 0; i<arr.length; i++){
        res += arr[i];
    }
    return res;
}

let a = sum([1,3,4,5,7])
console.log(a)

