var btnadd = document.getElementById("btnadd");
var tablaA = document.getElementById("tablaA");

// Recuperar datos de localStorage
var imagenes = JSON.parse(localStorage.getItem("imagenes")) || [];

const cerrarModal = (modal) => {
    const myModal = bootstrap.Modal.getInstance(document.getElementById(modal));
    myModal.hide();
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
};

// Función para actualizar la tabla
const actualizar = () => {
    tablaA.innerHTML = "";
    imagenes.forEach((imgSrc, index) => {
        let fila = `
            <tr>
                <td><img src="${imgSrc}" width="100"></td>
                <td><button class="btn btn-danger" onclick="eliminar(${index})">Eliminar</button>
                <button class="btn btn-warning" onclick="editar(${index})" data-bs-toggle="modal" data-bs-target="#modalEditar">Editar</button>
                </td>
            </tr>
        `;
        tablaA.innerHTML += fila;
    });
};

// Agregar imagen
btnadd.onclick = () => {
    let imgInput = document.getElementById("img").files[0];
    if (imgInput) {
        let reader = new FileReader();
        reader.onload = (event) => {
            imagenes.push(event.target.result);
            localStorage.setItem("imagenes", JSON.stringify(imagenes));
            actualizar();
        };
        reader.readAsDataURL(imgInput);
    }
    cerrarModal("modalAgregar");
};

// Eliminar imagen
const eliminar = (index) => {
    Swal.fire({
        title: "¿Estás seguro de que quieres eliminar esta imagen?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6"
    }).then((result) => {
        if (result.isConfirmed) {
            imagenes.splice(index, 1);
            localStorage.setItem("imagenes", JSON.stringify(imagenes));
            actualizar();
            Swal.fire("", "La imagen se eliminó.", "success");
        }
    });
};

// Editar imagen
const editar = (index) => {
    let imgEditarInput = document.getElementById("imgEditar");
    let btnGuardarEditar = document.getElementById("btnGuardarEditar");

    btnGuardarEditar.onclick = () => {
        let file = imgEditarInput.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = (event) => {
                imagenes[index] = event.target.result;
                localStorage.setItem("imagenes", JSON.stringify(imagenes));
                actualizar();
                cerrarModal("modalEditar");
            };
            reader.readAsDataURL(file);
        }
    };
};

// Cargar imágenes al abrir la página
actualizar();