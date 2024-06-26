// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 40;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// // if (false) // fake it!
// // if (isJohnOlder) // Verweis auf ein Testergebnis
// // if(ageJohn > ageMark) // Test

// { // codeblock
    // console.log("John ist älter!");
// }

/************ IF - ELSE ************/
// mit Alternative
// entweder ja oder nein

// if (ageJohn > ageMark) 
// { // ja-zweig
//     console.log("John ist älter!");
// } 
// else 
// { // nein-zweig alternative-zweig
//     console.log("John ist jünger!");
// }



/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

if (isJohnOlder) 
    { // ja-zweig
        console.log("John ist älter!");
    } 
    else if (isJohnEqual)
    { // nein-zweig alternative-zweig
        console.log("John ist gleich alter!");
    }
else 
    { // nein-zweig alternative-zweig
        console.log("John ist jünger!");
    }

    

