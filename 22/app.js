var arraycategorias=JSON.parse(localStorage.getItem("categorias"))||[]  
var arrayProductos=JSON.parse(localStorage.getItem("productos"))||[] 
var categoriasHTMl=``
var btnCategorias=``
const filtarProductos=(categoria="Todos", texto="")=>{
  let listaProductos = document.getElementById("listaProductos");
  let listaHTML = ``;
  let arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
  //filtrar por categoria
  let productosFiltrados = arrayProductos.filter(p => {
    return (p.categoria == categoria || categoria == "Todos");
  });
  
  //filtrar por campo busquedad
  if (texto) {
    productosFiltrados = productosFiltrados.filter(p => {
      const nombreMatch = p.nombre.toLowerCase().includes(texto.toLowerCase());
     // const categoriaMatch = arraycategorias[parseInt(p.categoria)-1].categoria.toLowerCase().includes(texto.toLowerCase());
      return nombreMatch;
    });
  }
  //imprime lista de resultado
  productosFiltrados.forEach(p => {
    listaHTML += `
    <li class="list-group-item list-group-item-action d-flex justify-content-end align-items-start shadow my-1 rounded-2">
      <div class="ms-2 me-auto text-start">
        <div class="fw-bold">${p.nombre}</div>${arraycategorias[parseInt(p.categoria)-1].categoria}
      </div>
      <span class="btn  btn-dark py-2 rounded-pill mx-3 fw-bold "><i class="bi bi-cash mx-2"></i>$ ${parseFloat(p.precio).toFixed(2)}</span>
      <span class="btn  rounded-pill fw-bold px-2 ${parseInt(p.stock) >= parseInt(p.stockmin) ? 'btn-success' : 'btn-danger'}"> 
      ${parseInt(p.stock) >= parseInt(p.stockmin) ? '<i class="bi bi-arrow-up mr-2"></i>' : '<i class="bi bi-arrow-down ml-5"></i>'}${p.stock}</span>
    </li>
    `;
  });
  
  listaProductos.innerHTML = listaHTML;

}



 const agregarCategoria=()=>{
    let cat=document.getElementById("categoria").value
 
    if(cat.trim()===''){
        Swal.fire({icon: "success",title: "Oops...",text: "Campos vacios!!"});
        return;
    }
    let categoria={categoria:cat}
    arraycategorias.push(categoria);
    localStorage.setItem("categorias",JSON.stringify(arraycategorias))
    actualizarTablaCategoria()
    limpiarCamposCategoria()  
    cerrarModal("exampleModal")
  }

const actualizarTablaCategoria=()=>{
  let tablacategorias=document.getElementById("tablaCategorias")
  let tablaHTML=``
  let index=0
  
  arraycategorias=JSON.parse(localStorage.getItem("categorias"))||[]
  categoriasHTML=`<option value="0">Elige Categoria</option>`
  btnCategorias=`<div class="col"><button class="btn btn-outline-secondary m-auto " onclick="filtarProductos('Todos')">Todos</button></div>`
  arraycategorias.map(p=>{
    tablaHTML+=`
        <tr>
          <td>${p.categoria}</td>
          <td><button class="btn btn-danger btn-lg m-auto " onclick="eliminarCategoria(${index})"><i class="bi bi-trash"></i></button></td>
          <td><button class="btn btn-warning btn-lg m-auto " onclick="editarCategoria(${index})" data-bs-toggle="modal" data-bs-target="#editCategoriaModal"><i class="bi bi-pencil"></i></button></td>
        </tr>
    `
    index++
    categoriasHTML+=`<option value="${index}">${p.categoria}</option>`
    btnCategorias+=`<div class="col"><button class="btn btn btn-outline-secondary" onclick="filtarProductos('${index}')">${p.categoria}</button></div>` 
  });   
  
  
  tablacategorias.innerHTML=tablaHTML 
  document.getElementById("pcategoria").innerHTML=categoriasHTML
  document.getElementById("epcategoria").innerHTML=categoriasHTML
  document.getElementById("btnCategorias").innerHTML=btnCategorias
  filtarProductos()
}

const editarCategoria=(index)=>{
  arraycategorias=JSON.parse(localStorage.getItem("categorias"))||[]
  let categoria=arraycategorias[index];
  document.getElementById("ecategoria").value=categoria.categoria
  document.getElementById("index").value=index
}

const guardarCategoria=()=>{   
  let cat=document.getElementById("ecategoria").value
  let index=document.getElementById("index").value
 

  if(cat.trim()===''){
    Swal.fire({icon: "success",title: "Oops...",text: "Campos vacios!!"});
    return;
    }


  let categoria={categoria:cat}
  arraycategorias[index]=categoria
  localStorage.setItem("categorias",JSON.stringify(arraycategorias))
  actualizarTablaCategoria()
  limpiarCamposCategoria() 
  cerrarModal("editCategoriaModal")
}


const eliminarCategoria=(index)=>{
  const missweet = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success mx-3",
      denyButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  missweet.fire({
    title: "Estas seguro de Eliminar este categoria??",
    showDenyButton: true,
    confirmButtonText: "Si",
    denyButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      arraycategorias.splice(index,1);
      localStorage.setItem("categorias",JSON.stringify(arraycategorias))
      actualizarTablaCategoria()
      Swal.fire("Producto eliminado exitosamente!", "", "success");
    } 
  });
}

const limpiarCamposCategoria=()=>{
  document.getElementById("categoria").value=""
}
actualizarTablaCategoria()


const cerrarModal=(modal)=>{
    const myModal =bootstrap.Modal.getInstance(document.getElementById(modal));
    myModal.hide(); 
      const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
}
const agregarProducto=()=>{
    let nombre=document.getElementById("nombre").value
    let categoria=document.getElementById("pcategoria").value
    let stock=document.getElementById("stock").value
    let precio=document.getElementById("precio").value
    let stockmin=document.getElementById("stockmin").value
    if(categoria.trim()==="0" ||nombre.trim()==='' || stock.trim()==='' || precio.trim()==='' || stockmin.trim()===''){
        Swal.fire({icon: "success",title: "Oops...",text: "Campos vacios!!"});
        return;
    }
    let producto={nombre,categoria,stock,precio,stockmin}
    arrayProductos.push(producto)
    localStorage.setItem("productos",JSON.stringify(arrayProductos))
    actualizarTablaProducto()
    limpiarP()
    cerrarModal("addProductoModal")
}


const actualizarTablaProducto=()=>{
    let tablaProductos=document.getElementById("tablaProductos")
  let tablaHTML=``
  let index=0
  arrayProductos=JSON.parse(localStorage.getItem("productos"))||[]
  arrayProductos.map(p=>{
    tablaHTML+=`
        <tr>
          <td>${p.nombre}</td>
          <td>${arraycategorias[parseInt(p.categoria)-1].categoria}</td>
          <td>${p.stock}</td>
          <td>${p.precio}</td>
          <td>${p.stockmin}</td>
          <td>
          <button class="btn btn-danger" onclick="eliminarProducto(${index})">
          <i class="bi bi-trash"></i>
          </button>
          <button class="btn btn-warning" onclick="editarProducto(${index})" data-bs-toggle="modal" data-bs-target="#editProductoModal">
          <i class="bi bi-pencil"></i></button>
          </td>
        </tr>
    `


    index++
     
  });    
  tablaProductos.innerHTML=tablaHTML 
  
}
actualizarTablaProducto()
const limpiarP=()=>{
   document.getElementById("nombre").value=""
    document.getElementById("pcategoria").value="0"
    document.getElementById("stock").value=""
    document.getElementById("precio").value=""
    document.getElementById("stockmin").value=""
}

const eliminarProducto=(index)=>{
const missweet = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success mx-3",
      denyButton: "btn btn-danger"
    },
    buttonsStyling: false
  });


  missweet.fire({
    title: "Estas seguro de Eliminar este Producto??",
    showDenyButton: true,
    confirmButtonText: "Si",
    denyButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      arrayProductos.splice(index,1);
      localStorage.setItem("productos",JSON.stringify(arrayProductos))
      actualizarTablaCategoria()
      Swal.fire("Productos eliminado exitosamente!", "", "success");
actualizarTablaProducto()

    } 
  });

}
const editarProducto=(index)=>{
arrayProductos=JSON.parse(localStorage.getItem("productos"))||[]
  let producto=arrayProductos[index];
    document.getElementById("enombre").value=producto.nombre
    document.getElementById("epcategoria").value=producto.categoria
    document.getElementById("estock").value=producto.stock
    document.getElementById("eprecio").value=producto.precio
    document.getElementById("estockmin").value=producto.stockmin
    document.getElementById("pindex").value=index
}
const guardarProducto=()=>{
    let nombre=document.getElementById("enombre").value
    let categoria=document.getElementById("epcategoria").value
    let stock=document.getElementById("estock").value
    let precio=document.getElementById("eprecio").value
    let stockmin=document.getElementById("estockmin").value
    let index=document.getElementById("pindex").value
    if(categoria.trim()==="0" ||nombre.trim()==='' || stock.trim()==='' || precio.trim()==='' || stockmin.trim()===''){
        Swal.fire({icon: "success",title: "Oops...",text: "Campos vacios!!"});
        return;
    }
  let producto={nombre,categoria,stock,precio,stockmin}
  arrayProductos[index]=producto
  localStorage.setItem("productos",JSON.stringify(arrayProductos))
  actualizarTablaProducto()
  limpiarP() 
  cerrarModal("editProductoModal")
  
}

filtarProductos();
