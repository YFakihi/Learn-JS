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