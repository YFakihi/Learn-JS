function findmax(arr1, arr2){
    var max1 = 0
    var max2 = 0
    for(let i = 0; i < arr1.length;i++){
        if(arr1[i] > max1){
            max1 = arr1[i]
        }
    }

    for(let i = 0; i < arr2.length;i++){
        if(arr2[i] > max2){
            max2 = arr2[i]
        }
    }
    return max1 + max2;

}


let array = findmax([1,2,3,33,3,3,3],[1,6,7,84,6,]);

console.log(array);