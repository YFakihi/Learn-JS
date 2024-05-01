

// function find_index(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return i;
//         }
//     }
// }


// function find_index(arr,element){
//     let r ;
    
//         r = arr.indexOf(element)
//     return r
    
// }
// const a = find_index([1,2,3,4,5],5)
// console.log(a)


function rverce(arr){
    let res=[];
    for(let i = arr.length-1 ; i >= 0  ;i--){
        res.push(arr[i])
    }
    return res;
}

let a = rverce([1,2,3,4,5,6])
console.log(a)