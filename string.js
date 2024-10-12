let str1 = "Hello \t world!!!",
    str2 = 'This is JS',
    str3 = `This is JS too`;

let summ = 45.78;

let out = "<div>";
    out += "<h2> Summa za kurs : " + summ + "!</h2>" ;
    out += "</div>";

    let out2 = `
    <div>
    <h2>Summa za kurs :  ${summ} ! </h2>
    </div>
    `

document.write(out);
document.write(out2);

document.body.innerHTML = str2;
console.log(str1);
console.log(str1.charAt(2));
console.log(str1[2]);
console.log(str1.length);
document.write(str1.toUpperCase());
document.write("<br>");

document.write(str1.substring(0,7));
document.write(str1.split(""));
console.log(str1.split(""));
console.log(str1.split(","));

let newString = str1.replace("World", "Dmitry");
document.write(newString);

let Concatenated = str1.concat("::",str2);