console.log("");



{


}

document.write("OK")

//Console.log("");

// typescript
// типы данных

// int , float, bigInt

let int1 = 12345;
let int2 = 6768.6768;

let int4 = 3, int5 = 5;

let text1 = "Hello World!",
    text2 = "<h1 class=\"main_text\"> Hello! This is JS!!! </h>",
    text3 = "#787878";

let boolean1 = true;
let boolean2 = false;    

console.log(int1, int2, int4, int5);
document.write("OK");
document.write(text2);

document.body.style.background = text3;
document.write(boolean1==true?text1:text2);

// Array = массивы

let array1 = [
               12, 34.56, 
               "txt5",false, 
               ["red" , "green" , "blue"] 
             ];

document.write(array1);
document.write(array1[4][1]);

console.log(array1);
console.log(array1[4][1]);

// object 
let object1 = {
    morka: "BMW",
    model: "320d",
    colors: ["red" , "green" , "blue"] ,
    year: 2020,
    price: {
         latvia: 12500,
         estonia: 11500,
         lithuania: 13500
    }

}

document.write(object1);
console.log(object1);
