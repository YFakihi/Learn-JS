// function filternameByLenght(arr = [],nbr){
//     let res = [];

//     for(let i = 0; i< arr.length;i++){
//         if(arr[i].length === nbr){
//             res.push(arr[i])
//         }
//     }
//     return res;
// }


// let filternameByLenght = (arr, len) => arr.filter(name => name.length === len)



let removearr = (arr,ele) => arr.filter(element=> element !== ele)


let a = removearr([1,3,4,5,7,],5)
console.log(a);

