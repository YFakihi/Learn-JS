

// function find_index(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return i;
//         }
//     }
// }


function find_index(arr,element){
    let r ;
    
        r = arr.indexOf(element)
    return r
    
}
const a = find_index([1,2,3,4,5],5)
console.log(a)