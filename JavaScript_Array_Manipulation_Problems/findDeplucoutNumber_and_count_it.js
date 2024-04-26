
function count(arr){
    var c = 0;
    for(let i = 0; i<arr.length;i++){
        if(arr[i] === 4 ){
            c++;
        }
    }
    return c;
}

var a = count([1,5,4,6,4,4,4,4]);

console.log(a);