/** Primero validamos el usuario */
document.addEventListener("DOMContentLoaded", () =>{ /** Todo el codigo se ejecutara si primero todo el DOM esta cargado */
if (!sessionStorage.getItem("usuario")){ /** Si el usuario no existe, no iniciará sesion y nos pedira que nos loguemos */
        alert("Debes logearte")
        window.location.href = "/js/login.html";
        return
}

const salir = document.getElementById("logout"); /** Se asigna el boton a la const Salir, y en caso de existir esperará el evento Click y cerrara cesion con Clear redirigiendo a logn.html  */
if (salir){
    salir.addEventListener("click", () =>{
    sessionStorage.clear();
    window.location.href = "/js/login.html";
    });
}

/** Ponemos al usuario a escuchar cuando  exista el elemento Submit, se genere la funcion siguiente*/
const form = document.getElementById("formSalon");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const descripcion = document.getElementById("descripcion").value;

/** Creamos un objeto Salon con las variables que tomaron los valores ingresados*/
    const salon = {nombre, direccion, descripcion};
    
/** Preguntamos si existe el objeto salones  y si no creamos un objeto vacio */
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    salones.push(salon);
    localStorage.setItem("salones", JSON.stringify(salones));


/** Generamos un alert solo para reemplazar el envio de datos al localstorage. Tema aun no visto*/
    alert(`El nuevo salón tiene los siguientes atributos: nombre: ${nombre} - dirección: ${direccion} - descripción: ${descripcion}`);
    
    this.reset(); /**Esta sentencia reseteará los valores de las constantes del fomrulario, this es para referirse al elemento form */
    mostrarSalones ();
    });
});

function mostrarSalones (){
    const tablaBody = document.querySelector("#tablaSalones tbody");

    tablaBody.innerHTML = "";
    
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    salones.forEach((salon) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${salon.nombre}</td>
            <td>${salon.direccion}</td>
            <td>${salon.descripcion}</td>
        `;

        tablaBody.appendChild(fila);
        })
    }