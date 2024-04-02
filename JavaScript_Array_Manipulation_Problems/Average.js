function Average(arr){
    let Average = 0;
    let sum = 0;
    for(var i = 0; i <arr.length;i++){
        sum += arr[i];
        Average= sum / arr.length
    }
    return Average
}

const a = Average([10, 20, 30, 40, 50])
console.log(a)