/* DATENSTRUKTUREN */

/* Primitives */

// let a; // Definition oder Deklaration

// // // Wertzuweisung / Assignment 
// a = 2; // number 
// a = true; // boolean (true, false)
// a = "Hallo"; // string 

//   console.log(typeof a);
//   console.log(a);

/* Arrays */
// Navigation über INDEX

//  let arr;
// // // // // // arr = new Array();  // Möglichkeit
//  arr = [false,true,true,false];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);
//  console.log(arr[5]);

//---------------Saba ----------------//
// let testArr;
// testArr = ["Saba", "Sara", "Sorayya", "Jana"];
// console.log(testArr[testArr.length-1]);

// var struc =
// {
//   level1:
//   {
//     level2:
//     {
//       param1: 3.14,
//       param2: 10.01
//     }
//   }
// };
// console.log(struc.level1.level2.param1);


    //  let a= 231;
    //  let b = 18;
    // // let operation = "summe";

    
    //  //  Summe
    // function summe(a, b) {
    //     return a + b;
        
    // }
    // s = summe(a, b);

    // //  Differenz
    // function differenz(a, b) {
    //     return a - b;
    // }
    // d= differenz(a, b);
    // // rechner
    // function rechner(a, b ,operation) {
    //     //let ergebnis;

    //     switch (true) {
    //         case operation == "summe":
    //             return s;

    //         case operation == "differenz" :
    //             return d;
        
    //         default: 
    //             return "Exception!";
                 
    //     }
    
    // }
    // // r = rechner(a, b ,"summe");
    // // r = rechner(a , b  ,"differenz");
    // // r = rechner(a, b ,"Hallo");
    //  console.log("Das Ergebnis lautet: X: " + r);

    

    let a = 20 ;
    let b = 12;
    
      //Funktion Summe 
       function summe(a, b) {
            return a + b;
        }
        s= summe (a ,b)
        
        // Produkt Muliplikation
        function produkt(a, b) {
            return a * b;
        }
        p = produkt (a, b)
        
        // rechner
        function rechner(a, b ,operation) {
    
            switch (true) {
                case operation == "summe":
                    return s;
    
                case operation == "produkt" :
                    return p;
            
                default: 
                    return "Exception!";
                     
            }
        
        }
        //  s = rechner(a, b ,"summe");
        // s = rechner(a, b ,"produkt");
        s = rechner(a, b ,"Hallo");
         console.log("Das Ergebnis lautet: X: " + s);

af
//---------------Saba ----------------//

/* Daten-Objekte */
// Navigation über Bezeichner (keys)

// let obj = {x:"Hi", y:20};
// console.log(obj);
// console.log(obj.x);
// console.log(obj.y);

// let obj = {
//         val0: 10,
//         sub1:{
//             val1: "hi",
//             val2: 2
//             }
//     };

// console.log(obj);
// console.log(obj.val0);
// console.log(obj.sub1.val2);
// console.log(obj.sub1.val1);
// console.log(obj.sub1);
// {{{{}}}} nested object

/*DOM*/
// DOM  --> Modell der HTMl-Struktur
// DOM --> Document Object Model
// DOM --> nach dem Parsen / Laden der HTML-Seite  
// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerText = "Hi";
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!"

/* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/

 // https://github.com/01-PP-ComCaveDD/Themen_01/blob/main/src/06_controlflow.js

/* FUNKTIONEN */

// 
// https://github.com/01-PP-ComCaveDD/Themen_01/blob/main/src/08_funktionen_I.js
// https://github.com/01-PP-ComCaveDD/Themen_01/blob/main/src/09_funktionen_II.js



// rechner();



