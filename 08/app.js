var ancho=document.getElementById("ancho");
var alto=document.getElementById("alto");
var radius=document.getElementById("radius");
var color=document.getElementById("colorfondo");
var color2=document.getElementById("colorfondo2");
var borde=document.getElementById("borde");
var colorBorde=document.getElementById("colorBorde");
var figura=document.getElementById("figura");

ancho.oninput=()=>{crearFigura()}
alto.oninput=()=>{crearFigura()}
color.onchange=()=>{crearFigura()}
color2.onchange=()=>{crearFigura()}
radius.oninput=()=>{crearFigura()}
borde.oninput=()=>{crearFigura()}
colorBorde.oninput=()=>{crearFigura()}

const crearFigura=()=>{
    let anchoFigura=parseInt(ancho.value);
    let altoFigura=parseInt(alto.value);
    let rad=parseInt(radius.value);
    let b=parseInt(borde.value);
    let colorFondo=color.value;
    let colorFondo2=color2.value;
    let colorB=colorBorde.value;
    document.getElementById("vancho").innerHTML=anchoFigura
    document.getElementById("valto").innerHTML=altoFigura
    document.getElementById("vradius").innerHTML=rad
    document.getElementById("vborde").innerHTML=b
    figura.style.width=anchoFigura+"px";
    figura.style.height=altoFigura+"px";
    figura.style.background="radial-gradient(circle,"+colorFondo+" 0%,"+colorFondo2+" 100%)";
    figura.style.borderRadius=rad+"%"  ;
    figura.style.borderWidth=b+"px";
    figura.style.borderStyle="solid";
    figura.style.borderColor=colorB;


}