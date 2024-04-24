function Maximum (arr){
    let max = 0
    for(var i = 0 ; i<arr.length;i++ ){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

let array = Maximum([1,2,3,33,3,3,3]);
console.log(array);


// function calculate(arr){
//     var res = 0;
//     for(let i = 0 ; i<arr.length;i++){
//         if(arr[i] % 2 != 0){
//                 res+= arr[i];
//         }
//     }
//     return res;
// }

// let array = calculate( [1, 2, 3, 4, 5, 6, 7, 8, 9]);

// console.log((array));