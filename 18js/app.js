var cantidad=document.getElementById("cantidad")
var producto=document.getElementById("producto")
var enganche=document.getElementById("enganche")

var meses=6;
var btn=document.getElementById("btnreset");
producto.onchange=()=>{credito();}
cantidad.oninput=()=>{credito();}
btn.onclick=()=>{btnreset();}
document.getElementById('p1').onchange=()=>{ meses=6; credito();}
document.getElementById('p2').onchange=()=>{ meses=12; credito();}
document.getElementById('p3').onchange=()=>{meses=18; credito(); }
document.getElementById('p4').onchange=()=>{meses=24; credito(); }
enganche.onkeyup=()=>{credito();}

var productos=[6000,11000,12000,23000,5000,8000,6500,11000,4000,13000]//precios
var imgproductos=["smarttv.jpeg","oppo.jpeg","lenovo.jpeg","iphone.jpg","tv.jpg","refri.jpg","estufa.jpg","hp.jpg","horno.jpg","lavadora.jpg"]

const amoneda=(valor)=>{
    valor=parseFloat(valor)
    return "$"+new Intl.NumberFormat('en-MX').format(valor.toFixed(2))
}
const credito=()=>{
    let porcentaje=0;
    let c=parseFloat(cantidad.value)
    let abono=parseFloat(enganche.value)
    document.getElementById("vcantidad").textContent=c;
    let pos=document.getElementById("producto").selectedIndex
    document.getElementById("precio").textContent=` ${amoneda(c*productos[pos])}`
    document.getElementById('imgs').src=`${imgproductos[pos]}`
    let plazo=document.getElementsByName("plazo")
    plazo.forEach((p)=>{
        if(p.checked){
            porcentaje=parseFloat(p.value)
        }
    })


    document.getElementById('desglose').innerHTML=`
    <h1>PRECIO DE CONTADO ${amoneda(c*productos[pos])}</h1>
    <h1>PRECIO A CREDITO ${amoneda((c*productos[pos]*porcentaje)-abono)}</h1>
    <h4>ABONO MENSUAL ${amoneda(((c*productos[pos]-abono*porcentaje)/meses).toFixed(2))}</h4>
    `
}
credito();
var ig="super.jpeg"


const btnreset=()=>{
document.getElementById("precio").innerHTML="0.00"
document.getElementById('enganche').value = "";
imgs.src=ig;
document.getElementById('desglose').innerHTML=`
<h1>PRECIO DE CONTADO $0.0</h1>
 <h1>PRECIO A CREDITO $0.0</h1>
 <h4>ABONO MENSUAL    $0.0</h4>
`

}

