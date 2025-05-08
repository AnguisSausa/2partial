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

    document.querySelector('#resultado').innerHTML="<img src='load.gif' width='100px' height='100px' class='m-auto'>";
    setTimeout(() => {
    rs=0;
    //dolar
    if(de==1 && a==2){
        rs=cuantos*20.52;
    }else if(de==1 && a==3){
        rs=cuantos*4391.84;
    }else if(de==1 && a==4){
        rs=cuantos*0.92;
    }
    //peso
    if(de==2 && a==1){
        rs=cuantos*0.049;
    }else if(de==2 && a==3){
        rs=cuantos*212.39;
    }else if(de==2 && a==4){
        rs=cuantos*0.045;
    }
     //copa
     if(de==3 && a==1){
        rs=cuantos*0.00023;
    }else if(de==3 && a==2){
        rs=cuantos*0.0047;
    }else if(de==3 && a==4){
        rs=cuantos*0.00021;
    }
    //euro
    if(de==4 && a==1){
        rs=cuantos*1.09;
    }else if(de==4 && a==2){
        rs=cuantos*22.41;
    }else if(de==4 && a==3){
        rs=cuantos*4791.80;
    }else if (de==a){
        rs=cuantos;
    }
    
resultado.innerHTML="$"+cuantos+" SON: "+rs
},1000);
}