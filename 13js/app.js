var dia=document.querySelector("#dia");
var mes=document.querySelector("#mes")

dia.oninput=()=>{calcularsigno();}
mes.oninput=()=>{calcularsigno();}

const calcularsigno=()=>{
    meses=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"]
document.querySelector("#vdia").textContent=dia.value
document.querySelector("#fecha").textContent=dia.value+" DE "+meses[mes.value-1];
let s="";
switch(parseInt(mes.value)){
        case 1:s=(dia.value<=19)?"capri.jpg":"aquario.jpg"; break;
        case 2:s=(dia.value<=18)?"aquario.jpg":"pisis.jpg"; break;
        case 3: s=(dia.value<=20)?"pisis.jpg":"aries.jpg";break;
        case 4:s=(dia.value<=19)?"aries.jpg":"tauro.jpg"; break;
        case 5:s=(dia.value<=20)?"tauro.jpg":"geminis.jpg"; break;
        case 6:
            s=(dia.value<=18)?"geminis.jpg":"cancer.jpg";
        break;
        case 7:
            s=(dia.value<=22)?"cancer.jpg":"leo.jpg";
        break;
        case 8:
            s=(dia.value<=22)?"leo.jpg":"virgo.jpg";
        break;
        case 9:
            s=(dia.value<=22)?"virgo.jpg":"libra.jpg";
        break;
        case 10:
            s=(dia.value<=22)?"libra.jpg":"scorpio.jpg";
        break;
        case 11:
            s=(dia.value<=21)?"scorpio.jpg":"sagitario.jpg";
        break;
        case 12:
            s=(dia.value<=21)?"sagitario.jpg":"capri.jpg";
        break;
}
signo.style.animation="none";
    signo.offsetHeight; 
    signo.style.animation="cambioImagen 2s ease-in-out forwards";
    signo.src="imgs/" + s;
}