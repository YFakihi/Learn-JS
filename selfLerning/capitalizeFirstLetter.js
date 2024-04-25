
        function capitalizeFirstLetter(sentence) {
            // Split the sentence into an array of words
            var splitWords = sentence.split(' ');
            
            // Iterate through each word in the array
            for (var i = 0; i < splitWords.length; i++) {
                // Capitalize the first letter of each word
                splitWords[i] = splitWords[i].charAt(0).toUpperCase() + splitWords[i].slice(1);
            }
            
            // Join the capitalized words back into a sentence
            return splitWords.join(' ');
        }
    
        var input2 = "JavaScript is awesome";
        console.log("Capitalized sentence:", capitalizeFirstLetter(input2)); 

    

