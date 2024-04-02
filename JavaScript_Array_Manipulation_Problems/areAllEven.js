function even(arr){
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i] % 2 !== 0)
        {
            return false
        }
    }
    return true;
}

const a = even([10, 30, 40, 50])
console.log(a)