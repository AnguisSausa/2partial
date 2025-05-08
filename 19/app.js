var btnadd=document.getElementById("btnadd");
// var btndelete=document.getElementById("delete");
var arrayA=[];
 
 btnadd.onclick=()=>{
    let nombre=document.getElementById("nombre").value
    let ap=document.getElementById("ap").value
    let am=document.getElementById("am").value
    let grupo=document.getElementById("grupo").value
    let carrera=document.getElementById("carrera").value

     if(nombre.trim()==='' || ap.trim()==='' || am.trim()===''){
        Swal.fire({icon: "error",
            title: "Oops!...",
            text: "Campos vacios"});
        return;
     }
     let alumno={nombre,ap,am,grupo,carrera}
     localStorage.setItem("alumno",JSON.stringify(alumno))
  arrayA.push(alumno);
     actualizar()
     limpiar()

 }


const actualizar=()=>{
   let tabla=document.getElementById("tablaA")
   let tablaHTML=``
   let index=0
   arrayA.map(a=>{
    tablaHTML+=`
       <tr>
      <td>${a.nombre.toUpperCase()}</td>
      <td>${a.ap.toUpperCase()}</td>
      <td>${a.am.toUpperCase()}</td>
      <td>${a.grupo.toUpperCase()}</td>
      <td>${a.carrera.toUpperCase()}</td>
      <td><button class="btn btn-danger bi bi-trash3-fill" onclick="eliminarA('${index}')"></button></td>
      <td><button class="btn btn-warning bi bi-pencil-fill" onclick="editar('${index}')" data-bs-toggle="modal" data-bs-target="#modaledit"></button></td>
      </tr>
      `

      index++
    
   });
   tablaA.innerHTML=tablaHTML;
}

const editar=(index)=>{
   let alumno=arrayA[index];
   document.getElementById("enombre").value=alumno.nombre
   document.getElementById("eap").value=alumno.ap
   document.getElementById("eam").value=alumno.am
   document.getElementById("egrupo").value=alumno.grupo
   document.getElementById("ecarrera").value=alumno.carrera
   document.getElementById("index").value=index
}


const guardar=()=>{
   
   let nombre=document.getElementById("enombre").value
   let ap=document.getElementById("eap").value
   let am=document.getElementById("eam").value
   let grupo=document.getElementById("egrupo").value
   let carrera=document.getElementById("ecarrera").value
   let index=document.getElementById("index").value

   if(nombre.trim()==='' || ap.trim()==='' || am.trim()===''){
      Swal.fire({icon: "error",
          title: "Oops!...",
          text: "Campos vacios"});
      return;
   }
   let alumno={nombre,ap,am,grupo,carrera}
   arrayA[index]=alumno
   actualizar()
   limpiar()
}

const eliminarA=(index)=>{
   Swal.fire({
      title: "Estas seguro de Eliminar el Alumno ?",
      showDenyButton: true,
      confirmButtonText: "si",
      denyButtonText: "no"
   }).then((result) => {
      if(result.isConfirmed){
         arrayA.splice(index,1)
         actualizar()
         Swal.fire(
            "Eliminado con exito!!", "","succes");
         }
      
   });
}

const limpiar=()=>{
   document.getElementById("nombre").value=""
   document.getElementById("ap").value=""
   document.getElementById("am").value=""
   document.getElementById("grupo").selectedIndex=0
   document.getElementById("carrera").selectedIndex=0

}
var btnrecu=document.getElementById("recuperar")
btnrecu.onclick=()=>{
   var alumno=JSON.parse(localStorage.getItem("alumno"))
   document.getElementById("nombre").value=alumno.nombre
   document.getElementById("ap").value=alumno.ap
   document.getElementById("am").value=alumno.am
   document.getElementById("grupo").value=alumno.grupo
   document.getElementById("carrera").value=alumno.carrera
}
var borrarls=document.getElementById("borrarls")
borrarls.onclick=()=>{
   localStorage.clear()
   limpiar()
}