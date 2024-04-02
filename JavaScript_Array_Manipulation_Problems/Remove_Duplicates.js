function remove(arr){
   
    var res = new Set(arr);
    return Array.from(res);

}
let array = [1,2,3,33,3,3,3];
console.log(remove(array));