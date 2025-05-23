var cantidad=document.querySelector("#cantidad")
var jumbo=document.querySelector("#jumbo")
var familiar=document.querySelector("#familiar")
var grande=document.querySelector("#grande")
var individual=document.querySelector("#individual")
var especialidad=document.querySelector("#especialidad")
var alitas=document.querySelector("#alitas")
var refresco=document.querySelector("#refresco")
var nuggets=document.querySelector("#nuggets")
var totalp=0;
var btnpagar=document.querySelector("#btnpagar");


cantidad.oninput=()=>{pizza();}
jumbo.oninput=()=>{pizza();}
familiar.oninput=()=>{pizza();}
grande.oninput=()=>{pizza();}
individual.oninput=()=>{pizza();}
especialidad.onchange=()=>{pizza();}
alitas.oninput=()=>{pizza();}
refresco.oninput=()=>{pizza();}
nuggets.oninput=()=>{pizza();}

const pizza=()=>{
    document.querySelector("#vcantidad").textContent=cantidad.value;
    let c=parseFloat(cantidad.value);
    let costoxtamanio=0;

    if(jumbo.checked){
        costoxtamanio=300;
    }
    if(familiar.checked){
        costoxtamanio=250;
    }
    if(grande.checked){
        costoxtamanio=200;
    }
    if(individual.checked){
        costoxtamanio=170;
    }



    let porcentaje=0;
    //evalua los ingredientes y asigna un precio
    switch(parseInt(especialidad.value)){
        case 1:porcentaje=1;break;
        case 2:porcentaje=1.1;break;
        case 3:porcentaje=1.15;break;
        case 4:porcentaje=1.20;break;

    }

    //evalua los complementos 
    let comple=0;
    comple+=(alitas.checked)?150:0;
    comple+=(refresco.checked)?50:0;
    comple+=(nuggets.checked)?100:0;
    
    totalp=(c*costoxtamanio*porcentaje)+comple;
    total.innerHTML="TOTAL $"+totalp.toFixed(2);
}
btnpagar.onclick=()=>{
    let pago=0
    let cambio=0
    do{
        pago=parseFloat(prompt("INTRODUCE MONTO: "));
        if(pago<totalp){
            alert("MONTO INSUFICIENTE")
        }

    }while(pago<totalp);
    cambio=pago-totalp;
    alert("TU CAMBIO ES "+cambio)
}
