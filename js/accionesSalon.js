/** LA FUNCION EDITAR SALONES LO HIZO LA PROFESORA EN CLASE */
function editarSalon(index){
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    const salon = salones[index];

    document.getElementById("nombre").value = salon.nombre;
    document.getElementById("direccion").value = salon.direccion;
    document.getElementById("descripcion").value = salon.descripcion;

    /** El splice procesa el array */
    salones.splice(index,1,salon);
    localStorage.setItem("salones", JSON.stringify(salones));
    mostrarSalones();
}


function eliminarSalon(index) {
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    if (confirm("¿Seguro que queres eliminar el salon?")) {
        salones.splice(index, 1);
        localStorage.setItem("salones", JSON.stringify(salones));
        mostrarSalones();
    }
}
