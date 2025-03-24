const Suma=()=>{
    try {
        let num1=parseInt(prompt("numero 1:"));
        let num2=parseInt(prompt("numero 2:"));
        let suma=num1+num2;
        alert("La suma es: "+suma);
    } catch (e) {
        alert("DEbes introducir dos numeros");
    }
}
const resta=()=>{
    try {
        let num1=parseInt(prompt("numero 1:"));
        let num2=parseInt(prompt("numero 2:"));
        let resta=num1-num2;
        alert("La resta es: "+resta);
    } catch (e) {
        alert("Debes introducir dos numeros");
    }
}
const divi=()=>{
    try {
        let num1=parseInt(prompt("numero 1:"));
        let num2=parseInt(prompt("numero 2:"));
        let div=num1/num2;
        alert("La divicion es: "+div);
    } catch (e) {
        alert("DEbes introducir dos numeros");
    }
}
const multi=()=>{
    try {
        let num1=parseInt(prompt("numero 1:"));
        let num2=parseInt(prompt("numero 2:"));
        let mul=num1*num2;
        alert("La Multiplicacion es: "+mul);
    } catch (e) {
        alert("DEbes introducir dos numeros");
    }
}