
const guardar=()=>{
    let msj=document.getElementById("mensaje").value
    localStorage.setItem("mensaje",msj)
}
const borrar=()=>{
document.getElementById("mensaje").value=""
}
const recuperar=()=>{
    let mensaje=localStorage.getItem("mensaje")
    document.getElementById("mensaje").value=mensaje
    
}
//  funciones ejemplo2
const guardar2=()=>{
    let key=document.getElementById("key").value
    let value=document.getElementById("value").value
    localStorage.setItem(key,value)
}
const borrar2=()=>{
document.getElementById("key").value=""
document.getElementById("value").value=""
}
const borrarls=()=>{
    localStorage.clear()
}
 
// funciones ejemplo 3
const borrar3ls=()=>{
    localStorage.clear()
}
const guardar3=()=>{
    let nombre=document.getElementById("nombre").value
    let ap=document.getElementById("ap").value
    let am=document.getElementById("am").value
    let grupo=document.getElementById("grupo").value
    let carrera=document.getElementById("carrera").value
    let key3=document.getElementById("key3").value
    localStorage.setItem(key,value)
}
const recuperar3=()=>{
    let mensaje=localStorage.getItem("key3")
    let mensaje2=localStorage.getItem("value")
    let mensaje=localStorage.getItem("key3")
    let mensaje2=localStorage.getItem("value") 
    let mensaje=localStorage.getItem("key3")
    let mensaje2=localStorage.getItem("value")

    document.getElementById("key3").value=mensaje
    document.getElementById("value").value=mensaje2

    // if(){

    // }
}
const borrar3=()=>{
    document.getElementById("key3").value=""
document.getElementById("value").value=""
}