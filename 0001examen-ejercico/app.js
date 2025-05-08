var btndelete=document.getElementById("delete")
var btnevaluar=document.getElementById("valor")


btndelete.onclick=()=>{
document.getElementById("1").selectedIndex=5
document.getElementById("2").selectedIndex=5
document.getElementById("3").selectedIndex=5
document.getElementById("4").selectedIndex=5

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
if(una===3){
    puntos++
}else if(dos==="bu"){
    puntos++
}else if(tres==="bue"){
    puntos++
}else if(cuatro==="si"){
    puntos++
}else if(cinco==="sis"){
    puntos++
}else if(seis==="ok"){
    puntos++
}else if(siete==="oko"){
    puntos++
}else if(ocho==="s"){
    puntos++
}else if(nueve==="okis"){
    puntos++
}else if(dies==="22"){
    puntos++
}
Swal.fire({icon: "success",
    title: "Puntuacion final",
    text: "Tu puntuaje es "+puntos+" de 10"});
return;  
}
// document.getElementById("grupo").selectedIndex=0
// document.getElementById("carrera").selectedIndex=0