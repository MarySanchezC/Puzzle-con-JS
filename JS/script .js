
const  letters = document.getElementById("lettersText");
const  numeros = document.getElementById("numerosText");
// Const botones
const  btn1 = document.getElementById("btn1");
const  btn2 = document.getElementById("btn2");
const  btn3 = document.getElementById("btn3");
const  btn4 = document.getElementById("btn4");
const  btn5 = document.getElementById("btn5");
const  btn6 = document.getElementById("btn6");
const  btn7 = document.getElementById("btn7");
const  btn8 = document.getElementById("btn8");
const  btn9 = document.getElementById("btn9");
const  btn0 = document.getElementById("btn0");

function Texto(num, anteNum, letra, antLetra) {
    if(letters.innerHTML == "ABCDEFGHIJ") {
        if (numeros.innerHTML == "1234567890") {
            alert("Ya completaste todo");
        }
        else {
            if(numeros.innerHTML == anteNum) {
                numeros.innerHTML += num;
            }
            else {
                numeros.innerHTML >=  alert("Te falta un número");
            }
        } 
    } 
    else {
        if(letters.innerHTML == antLetra) {
            letters.innerHTML += letra;
        }
        else {
            letters.innerHTML >=  alert("Te falta una letra");
        }
    }
}

btn1.onclick = () => {
    const  num = "1";
    const  anteNum = ""; 
    const  letra = "A";
    const  antLetra = "";

    Texto(num, anteNum, letra, antLetra);
}
btn2.onclick = () => {
    const  num = "2";
    const  anteNum = "1"; 
    const  letra = "B";
    const  antLetra = "A";

    Texto(num, anteNum, letra, antLetra);
}
btn3.onclick = () => {
    const  num = "3";
    const  anteNum = "12"; 
    const  letra = "C";
    const  antLetra = "AB";

    Texto(num, anteNum, letra, antLetra);
}
btn4.onclick = () => {
    const  num = "4";
    const  anteNum = "123"; 
    const  letra = "D";
    const  antLetra = "ABC";

    Texto(num, anteNum, letra, antLetra);
}
btn5.onclick = () => {
    const  num = "5";
    const  anteNum = "1234"; 
    const  letra = "E";
    const  antLetra = "ABCD";

    Texto(num, anteNum, letra, antLetra);
}
btn6.onclick = () => {
    const  num = "6";
    const  anteNum = "12345"; 
    const  letra = "F";
    const  antLetra = "ABCDE";

    Texto(num, anteNum, letra, antLetra);
}
btn7.onclick = () => {
    const  num = "7";
    const  anteNum = "123456"; 
    const  letra = "G";
    const  antLetra = "ABCDEF";

    Texto(num, anteNum, letra, antLetra);
}
btn8.onclick = () => {
    const  num = "8";
    const  anteNum = "1234567"; 
    const  letra = "H";
    const  antLetra = "ABCDEFG";

    Texto(num, anteNum, letra, antLetra);
}
btn9.onclick = () => {
    const  num = "9";
    const  anteNum = "12345678"; 
    const  letra = "I";
    const  antLetra = "ABCDEFGH";

    Texto(num, anteNum, letra, antLetra);
}
btn0.onclick = () => {
    const  num = "0";
    const  anteNum = "123456789"; 
    const  letra = "J";
    const  antLetra = "ABCDEFGHI";

    Texto(num, anteNum, letra, antLetra);
}