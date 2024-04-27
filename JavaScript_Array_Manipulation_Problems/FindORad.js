function find(arr , res ){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == res){
              
             return res + ":" + (i+1);
            
        } 
 
    }
    
        arr.push(res)
      
      return res + ": " +( arr.length )
    

   
}

let b = ["b","c","d","f"]
console.log(find(b,'z'))