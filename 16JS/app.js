var cantidad=document.querySelector("#cantidad")
var resultado=document.querySelector("#resultado")


cantidad.oninput=()=>{conversion()}
de.oninput=()=>{conversion()}
a.oninput=()=>{conversion()}
const conversion=()=>{
    var cuantos=parseFloat(document.querySelector('#cantidad').value);
    vcantidad.innerHTML=cuantos;
    var de=document.getElementById("de").value;
    var a=document.getElementById("a").value;
let ig="";
    document.querySelector('#resultado').innerHTML="<img src='load.gif' width='30px' height='30px' class='m-auto'>";
    setTimeout(() => {
    rs=0;
    //celsius
    if(de==1 && a==2){
        ig="kelvin.png"
        rs=cuantos+273.15;
    }else if(de==1 && a==3){
        ig="farengeith.jpeg"
        rs=(cuantos*9/5)+32;
    }
    //kelvin
    if(de==2 && a==1){
        ig="celcius.jpeg"
        rs=cuantos-273.15;
    }else if(de==2 && a==3){
        ig="farengeith.jpeg"
        rs=(cuantos-273.15)*9/5+32;
    }
     //farenheint
     if(de==3 && a==1){
        ig="celcius.jpeg"
        rs=(cuantos-32)*5/9;
    }else if(de==3 && a==2){
        ig="kelvin.png"
        rs=(cuantos-32)*5/9+273.15;
    }else if (de==a){
        rs=cuantos;
        ig="tem.jpg"
    }
    
resultado.innerHTML=""+cuantos+" SON: "+rs+" º"
img.src=ig;
},1000);
}