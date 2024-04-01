function retrive(arr){
    let res = [];
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i]  === "number" &&  isNaN(arr[i]) === false){
            res.push(arr[i])
            // console.log("check")
        }
    }
    return res;
}
let arr = [1,2,4,"f",5, undefined, NaN, null]
let a = retrive(arr)
// console.log(typeof arr[2] === "number");
console.log(a)