var btnsuma=document.querySelector('#btnsuma');
var btnresta=document.querySelector('#btnresta');
var btnmul=document.querySelector('#btnmul');
var btndiv=document.querySelector('#btndiv');
btnsuma.onclick=()=>{
    var num1=parseInt(document.querySelector('#num1').value);
    var num2=parseInt(document.querySelector('#num2').value);
    var resultado=num1+num2;
    document.querySelector('#resultado').innerHTML=resultado;
}
btnresta.onclick=()=>{
    var num1=parseInt(document.querySelector('#num1').value);
    var num2=parseInt(document.querySelector('#num2').value);
    var resultado=num1-num2;
    document.querySelector('#resultado').innerHTML=resultado;
}
btnmul.onclick=()=>{
    var num1=parseInt(document.querySelector('#num1').value);
    var num2=parseInt(document.querySelector('#num2').value);
    var resultado=num1*num2;
    document.querySelector('#resultado').innerHTML=resultado;  
}
btndiv.onclick=()=>{
    var num1=parseInt(document.querySelector('#num1').value);
    var num2=parseInt(document.querySelector('#num2').value);
    if(num2!=0){
        var resultado=num1/num2;
        document.querySelector('#resultado').innerHTML=resultado;
    }else{
        alert('No se puede dividir entre 0');
    }
}