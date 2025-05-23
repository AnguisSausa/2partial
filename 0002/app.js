 var btnadd=document.getElementById("btnadd");
var arrayA=JSON.parse(localStorage.getItem("productos"))||[];
 
 btnadd.onclick=()=>{
    let codigo=document.getElementById("codigo").value
    let nombre=document.getElementById("nombre").value
    let precio=document.getElementById("precio").value
    let stock=document.getElementById("stock").value
    let provedor=document.getElementById("provedor").value

     if(codigo.trim()==='' || nombre.trim()==='' || precio.trim()==='' || stock.trim()==='' || provedor.trim()===''){
        Swal.fire({icon: "error",title: "Oops!...",text: "Campos vacios"});
        return;
     }
     let producto={codigo,nombre,precio,stock,provedor}
     arrayA.push(producto);
     localStorage.setItem("productos",JSON.stringify(arrayA))
     actualizar()
     limpiar()

 }


const actualizar=()=>{
   let tabla=document.getElementById("tablaA")
   arrayA=JSON.parse(localStorage.getItem("productos"))||[];
   let tablaHTML=``
   let index=0
   let tinventario=0
   let totaltotal=0
   let preciomin=0 
   let pmax=0, pmin=1000, smax=0, smin=100
   arrayA.map(a=>{
    tablaHTML+=`
       <tr>
      <td>${a.codigo.toUpperCase()}</td>
      <td>${a.nombre.toUpperCase()}</td>
      <td>${a.precio.toUpperCase()}</td>
      <td>${a.stock.toUpperCase()}</td>
      <td>${a.provedor.toUpperCase()}</td>
      <td><button class="btn btn-danger bi bi-trash3-fill" onclick="eliminarA('${index}')"></button></td>
      <td><button class="btn btn-warning bi bi-pencil-fill" onclick="editar('${index}')" data-bs-toggle="modal" data-bs-target="#modaledit"></button></td>
      </tr>
      `
      index++
      tinventario += parseInt(a.stock); 
      totaltotal +=parseFloat(a.precio)*parseFloat(a.stock)
      if(parseFloat(a.precio)>pmax){pmax=parseFloat(a.precio);pm=a.nombre}
      if(parseFloat(a.precio)<pmin){pmin=parseFloat(a.precio);pmi=a.nombre}
      if(parseFloat(a.stock)>smax){smax=parseFloat(a.stock)}
      if(parseFloat(a.stock)<smin){smin=parseFloat(a.stock)}




   });
   tablaA.innerHTML=tablaHTML;

rtotal.innerHTML=tinventario;
let canproductos = arrayA.length; rproductos.innerHTML=canproductos
totalin.innerHTML=totaltotal
rcaro.innerHTML=pmax
rbarato.innerHTML=pmin
rmax.innerHTML=smax
rmin.innerHTML=smin




}

const editar=(index)=>{
   arrayA=JSON.parse(localStorage.getItem("productos"))||[];
   let producto=arrayA[index];
   document.getElementById("ecodigo").value=producto.codigo
   document.getElementById("enombre").value=producto.nombre
   document.getElementById("eprecio").value=producto.precio
   document.getElementById("estock").value=producto.stock
   document.getElementById("eprovedor").value=producto.provedor
   document.getElementById("index").value=index
}


const guardar=()=>{
   let codigo=document.getElementById("ecodigo").value
   let nombre=document.getElementById("enombre").value
   let precio=document.getElementById("eprecio").value
   let stock=document.getElementById("estock").value
   let provedor=document.getElementById("eprovedor").value
   let index=document.getElementById("index").value

   if(codigo.trim()==='' || nombre.trim()==='' || precio.trim()==='' || stock.trim()==='' || provedor.trim()===''){
      Swal.fire({icon: "error",
          title: "Oops!...",
          text: "Campos vacios"});
      return;
   }
   let producto={codigo,nombre,precio,stock,provedor}
   arrayA[index]=producto
   localStorage.setItem("productos",JSON.stringify(arrayA))
   actualizar()
   limpiar()
}

const eliminarA=(index)=>{
   Swal.fire({
      title: "Estas seguro de Eliminar el Producto ?",
      showDenyButton: true,
      confirmButtonText: "si",
      denyButtonText: "no"
   }).then((result) => {
      if(result.isConfirmed){
         arrayA.splice(index,1)
         localStorage.setItem("productos",JSON.stringify(arrayA))
         actualizar()
         Swal.fire(
            "Eliminado con exito!!", "","succes");
         }
      
   });
}

const limpiar=()=>{
   document.getElementById("codigo").value=""
   document.getElementById("nombre").value=""
   document.getElementById("precio").value=""
   document.getElementById("stock").value=""
   document.getElementById("provedor").value=""

}
actualizar();

var btnrecu=document.getElementById("recuperar")
btnrecu.onclick=()=>{
   let producto=JSON.parse(localStorage.getItem("producto"))
   document.getElementById("codigo").value=producto.codigo
   document.getElementById("nombre").value=producto.nombre
   document.getElementById("precio").value=producto.precio
   document.getElementById("stock").value=producto.stock
   document.getElementById("provedor").value=producto.provedor
}
var borrarls=document.getElementById("borrarls")
borrarls.onclick=()=>{
   localStorage.clear()
   limpiar()
}
