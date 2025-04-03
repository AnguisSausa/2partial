var cargo=document.querySelector("#cargo")
var hora=document.querySelector("#hora")
var antiguedad=document.querySelector("#antiguedad")
var sb=document.querySelector("#sb")
var cb=document.querySelector("#cb")
var e=document.querySelector("#e")
var an=document.querySelector("#an")
var isr=document.querySelector("#isr")
var ss=document.querySelector("#ss")
var af=document.querySelector("#af")
var s=document.querySelector("#s")
var tp=document.querySelector("#tp")
var td=document.querySelector("#td")
var sn=document.querySelector("#sn")
var sueldoxhora=0;
var anios=0;
cargo.onchange=()=>{calcular();}
hora.oninput=()=>{calcular();}
antiguedad.oninput=()=>{calcular();}
const calcular=()=>{
    let h=parseFloat(hora.value);
    document.querySelector('#vhoras').innerHTML=h
    let van=parseFloat(antiguedad.value);
    document.querySelector('#vantiguedad').innerHTML=van;

    switch(cargo.value){
        case "GERENTE": 
        sueldoxhora=300;
         var vapy=300;
         break;
        case "EJECUTIVO": 
        sueldoxhora=200;
        vapy=200;
        break;
        case "AYUDANTE": 
        sueldoxhora=100; 
        vapy=200;
        break;
        case "INGENIERO": 
        sueldoxhora=250;
        vapy=150
        break;

 }
 let vsb=0;
 if(h>40){
    vsb=(40*sueldoxhora)+((h-40)*sueldoxhora);
 }else{
    vsb=h*sueldoxhora
 }
 

    let vcb=vsb*.1;
    let ce=vsb*.005;
    let ant=van*150;
    let totalp=vsb+vcb+ant+ce+vapy;
    sb.innerHTML="$"+vsb.toFixed(2);
    cb.innerHTML="$"+vcb.toFixed(2);
    e.innerHTML="$"+ce.toFixed(2)
    an.innerHTML="$"+ant.toFixed(2);
    tp.innerHTML="$"+totalp.toFixed(2);
   apt.innerHTML="$"+vapy;

    let visr=vsb*.16;
    let vs=vsb*.01;
    let vaf=vsb*.061;
    let vss=vsb*.04625;
    let vpt=vsb*.05;
    let totald=visr+vs+vaf+vss+vpt;
    isr.innerHTML="$"+visr.toFixed(2);
    ss.innerHTML="$"+vss.toFixed(2);
    s.innerHTML="$"+vs.toFixed(2)
    af.innerHTML="$"+vaf.toFixed(2);
    td.innerHTML="$"+totald.toFixed(2);
    pres.innerHTML="$"+vpt
let vsn=totalp-totald;
sn.innerHTML="$"+vsn.toFixed(2)
}
