var btndelete=document.getElementById("delete")
var btnevaluar=document.getElementById("valor")


btndelete.onclick=()=>{
let una = document.getElementById("una").selectedIndex=0
    let dos = document.getElementById("dos").selectedIndex=0
    let tres = document.getElementById("tres").selectedIndex=0
    let cuatro = document.getElementById("cuatro").selectedIndex=0
    let cinco = document.getElementById("cinco").selectedIndex=0
    let seis = document.getElementById("seis").selectedIndex=0
    let siete = document.getElementById("siete").selectedIndex=0
    let ocho = document.getElementById("ocho").selectedIndex=0
    let nueve = document.getElementById("nueve").selectedIndex=0
    let dies = document.getElementById("dies").selectedIndex=0

}
btnevaluar.onclick=()=>{
    let una = document.getElementById("una").value;
    let dos = document.getElementById("dos").value;
    let tres = document.getElementById("tres").value;
    let cuatro = document.getElementById("cuatro").value;
    let cinco = document.getElementById("cinco").value;
    let seis = document.getElementById("seis").value;
    let siete = document.getElementById("siete").value;
    let ocho = document.getElementById("ocho").value;
    let nueve = document.getElementById("nueve").value;
    let dies = document.getElementById("dies").value;


    if(una==="5" || dos==="55" || tres==="56" || cuatro==="57" || cinco==="58" || 
        seis==="59" || siete==="51" || ocho==="52" || nueve==="53" || dies==="54"){
            Swal.fire({icon: "error",
                title: "Oops!...",
                text: "Campos vacios"});
            return;  
        }
let puntos=0;
let resultado = "";
if(una==="b"){
    puntos++;
    resultado += " ✔️ Bien\n";
}else{
    resultado += " ❌ Mal\n"
}
if(dos==="bu"){
    puntos++;
    resultado += " ✔️ Bien\n";
}else {
    resultado += " ❌ Mal\n"
}

if(tres==="bueno"){
    puntos++;
    resultado +=" ✔️ Bien\n";
}else {
    resultado += " ❌ Mal\n"
}

if(cuatro==="si"){
    puntos++;
resultado += "✔️ Bien\n";
}else {
    resultado +=" ❌ Mal\n"
}

if(cinco==="sis"){
    puntos++;
    resultado += " ✔️ Bien\n";
}else {
    resultado +=" ❌ Mal\n"
}

 if(seis==="ok"){
    puntos++;
    resultado += "✔️ Bien\n";
}else {
    resultado += "❌ Mal\n"
}

 if(siete==="oko"){
    puntos++;
    resultado += " ✔️ Bien\n";
}else {
    resultado += " ❌ Mal\n"
}

 if(ocho==="s"){
    puntos++;
resultado += " ✔️ Bien\n";
}else {
    resultado += " ❌ Mal\n"
}

 if(nueve==="okis"){
    puntos++;
resultado += " ✔️ Bien\n";
}else {
    resultado += " ❌ Mal\n"
}

 if(dies==="22"){
    puntos++;
resultado += " ✔️ Bien\n";
}else {
    resultado += " ❌ Mal\n"
}


Swal.fire({icon: "success",
    title: "Puntuacion final",
    html: "Tu puentuacion es de "+puntos+" de 10\n"+resultado});
return;
}