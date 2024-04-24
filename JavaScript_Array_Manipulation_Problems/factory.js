function factor(nbr){
    if(nbr === 0 || nbr === 1){
        return 1;
    }
    else 
    return nbr * factor(nbr - 1);
}



nbrr =factor( 0);
console.log(nbrr);