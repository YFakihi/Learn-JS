function removeNumber(nbr){

   var newarray  = [];
   var res = 0;

   for(let i = 0; i<nbr.length; i++){
    if(nbr[i] !== 3 ){
     newarray.push(nbr[i]);
    }
   }
   for(let i = 0; i < newarray.length; i++){
    newarray[i]  =  newarray[i] * newarray[i];
   } 
   for(let i = 0; i < newarray.length; i++){
    res +=newarray[i]

   } 

   return res;
}


var a = removeNumber([1,3,4])
console.log(a);