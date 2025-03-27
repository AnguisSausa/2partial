var divCuadro=document.querySelector('#cuadro');
var divRectangulo=document.querySelector('#rectangulo');
var divTriangulo=document.querySelector('#triangulo');
var divCirculo=document.querySelector('#circulo');
var divRombo=document.querySelector('#rombo');
var divPele=document.querySelector('#palelogramo');
divRectangulo.style.display="none";
divTriangulo.style.display="none";
divCirculo.style.display="none";
divRombo.style.display="none";
divPele.style.display="none";


var btnCuadro = document.querySelector('#btnCuadro');
var btnRectangulo = document.querySelector('#btnRec');
var btnTri = document.querySelector('#btnTri');
var btnCirculo = document.querySelector('#btnCirculo');
var btnRombo = document.querySelector('#btnRombo');
var btnPale = document.querySelector('#btnPale');


btnCuadro.onclick=()=>{
    divCuadro.style.display="block";
    divRectangulo.style.display="none";
    divTriangulo.style.display="none";
    divCirculo.style.display="none";
divRombo.style.display="none";
divPele.style.display="none";

}
btnRectangulo.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="block";
    divTriangulo.style.display="none";
    divCirculo.style.display="none";
divRombo.style.display="none";
divPele.style.display="none";

}
btnTri.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="none";
    divTriangulo.style.display="block";
    divCirculo.style.display="none";
divRombo.style.display="none";
divPele.style.display="none";

}
btnCirculo.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="none";
    divTriangulo.style.display="none";
    divCirculo.style.display="block";
divRombo.style.display="none";
divPele.style.display="none";

}
btnRombo.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="none";
    divTriangulo.style.display="none";
    divCirculo.style.display="none";
    divRombo.style.display="block";
    divPele.style.display="none";

}
btnPale.onclick=()=>{
    divCuadro.style.display="none";
    divRectangulo.style.display="none";
    divTriangulo.style.display="none";
    divCirculo.style.display="none";
    divRombo.style.display="none";
    divPele.style.display="block";

}

//CALCULO DE AREA DE CUADRO
document.querySelector('#lado').oninput=()=>{
    let lado=parseInt(document.querySelector('#lado').value);
    document.querySelector('#vlado').innerHTML=lado;
    document.querySelector('#areacuadro').innerHTML=""+(lado*lado)+" m<sup>2</sup>";
}


//CALCULO DE AREA DEL RECTANGULO
var baseRec=document.querySelector('#baserec');
var alturaRec=document.querySelector('#alturarec');

baseRec.oninput=()=>{areaRectangulo()}
alturaRec.oninput=()=>{areaRectangulo()}

const areaRectangulo=()=>{
    let base=parseInt(document.querySelector('#baserec').value);
    let altura=parseInt(document.querySelector('#alturarec').value);
    document.querySelector('#vbaserec').innerHTML=base
    document.querySelector('#valturarec').innerHTML=altura;
    document.querySelector('#arearec').innerHTML=""+(base*altura)+" m<sup>2</sup>";
}

//CALCULO DE AREA DEL TRIANGULO
var baseTri=document.querySelector('#basetri');
var alturaTri=document.querySelector('#alturatri');

baseTri.oninput=()=>{areaTriangulo()}
alturaTri.oninput=()=>{areaTriangulo()}

const areaTriangulo=()=>{
    let base=parseInt(document.querySelector('#basetri').value);
    let altura=parseInt(document.querySelector('#alturatri').value);
    document.querySelector('#vbasetri').innerHTML=base
    document.querySelector('#valturatri').innerHTML=altura;
    document.querySelector('#areatri').innerHTML=""+((base*altura)/2).toFixed(2)+" m<sup>2</sup>";
}

//CALCULO DE AREA DE CIRCULO
document.querySelector('#radio').oninput=()=>{
    let radio=parseInt(document.querySelector('#radio').value);
    document.querySelector('#vradio').innerHTML=radio;
    document.querySelector('#areacirculo').innerHTML=""+(radio*radio*Math.PI).toFixed(2)+" m<sup>2</sup>";
}

var dimayor=document.querySelector('#dimy');
var dimenor=document.querySelector('#dimn');

dimayor.oninput=()=>{arearombo()}
dimenor.oninput=()=>{arearombo()}
const arearombo=()=>{
    let dmy=parseInt(document.querySelector('#dimy').value);
    let dmn=parseInt(document.querySelector('#dimn').value);
    document.querySelector('#vdimy').innerHTML=dmy
    document.querySelector('#vdimn').innerHTML=dmn;
    document.querySelector('#arearombo').innerHTML=""+(dmy*dmn)/2+" m<sup>2</sup>";
}
var bs=document.querySelector('#bs');
var h=document.querySelector('#h');

bs.oninput=()=>{areapele()}
h.oninput=()=>{areapele()}

const areapele=()=>{
    let base=parseInt(document.querySelector('#bs').value);
    let altura=parseInt(document.querySelector('#h').value);
    document.querySelector('#vbs').innerHTML=base
    document.querySelector('#vh').innerHTML=altura;
    document.querySelector('#areapele').innerHTML=""+(base*altura)+" m<sup>2</sup>";
}
