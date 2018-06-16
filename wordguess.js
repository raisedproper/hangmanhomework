
    var words = ["atlanta", "aspin", "brooklyn", "beirut", "bronx", "catching", "camera", "charter", "classes", "construct", "collar", "danny", "destiny", "donuts", "do", "double", "eggs", "extra", "element", "father", "false", "friends", "fear", "God", "fly", "simultaneously", "time", "guessing", "import", "in", "money", "int", "rely", "let", "long", "attempt", "new", "nine", "package", "pine", "private", "pissed", "public", "return", "short", "super", "static", "switch", "game", "thrones", "donald", "hitormiss", "true", "anger", "try", "off", "no", "var", "yes", "time", "while", "with", "yield"];
    
    
    var word = words[Math.floor(Math.random() * words.length)];
    
    
    var answer = [];
        for (var i = 0; i < word.length; i++) {
            answer[i] = "_";
        }
    
    var remainingLetters = word.length;
        
        
        while (remainingLetters > 0) {
            
            alert("This is the number of remaining letters:\n" + answer.join(" "));
            
            
            var guess = prompt("Guess a letter or click 'Cancel' to stop the game.");
            if (prompt === null) {
                
                break;
            } else if (guess.length !== 1) {
                alert("Please enter one single letter.");
            } else {
                
                for (var j = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        answer[j] = guess;
                        remainingLetters--;
                    }
                }
            }
            
        }
        
        
        alert(answer.join(" "));
        alert("Good work! The right answer is " + word);