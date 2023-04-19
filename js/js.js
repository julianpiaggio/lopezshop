const API_REST = "https://jsonplaceholder.typicode.com"
const mostrarDatos = document.querySelector('#mostrar-datos');
const listaObtenida = document.querySelector('#listaObtenida');
const listaEmpleados = document.createElement('ul');


mostrarDatos.addEventListener('click', () => {

    const listaEmpleados = document.createElement('ul');
    listaObtenida.appendChild(listaEmpleados);
    listaEmpleados.style.margin = '0';

    fetch(`${API_REST}/users`)
        .then(response => response.json())
        .then(users => {
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = (`${user.name} ${user.username} - Email: ${user.email} - Phone: ${user.phone}`);
            listaEmpleados.appendChild(li);
        });
        })
        .catch(error => console.error(error));
        listaObtenida.style.display = 'contents';
});

function enviarConsulta(event) {
    event.preventDefault(); 
    const destinatario = 'info@veterinarialopez.com.ar';
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const consulta = document.getElementById("consulta").value;

    let errores = "";

    let esValido = true;

    if (nombre === "") {
        errores = errores + "Debe ingresar su nombre.\n" ;
        esValido = false;
    }  else if (nombre.length <=4) {
        errores = errores + "Su Nombre: Debe contener al menos 4 letras .\n";
        esValido = false;
    }

    if (apellido === "") {
        errores = errores + "Debe ingresar su apellido.\n";
        esValido = false;
    } else if (apellido.length <=4) {
        errores = errores + "Su Apellido: Debe contener al menos 4 letras .\n";
        esValido = false;
    }


    if (email === "") {
        errores = errores + "Debe ingresar su dirección de correo electrónico.\n";
        esValido = false;
    } else if (!/\S+@\S+.\S+/.test(email)) {
        errores = errores + "Ingrese una dirección de correo electrónico válida.\n";
        esValido = false;
    }
if (telefono === "") {
        errores = errores + "Debe ingresar su número de teléfono.\n";
        esValido = false;
    } else if (!/[0-9]{10}/.test(telefono)) {
        errores = errores + "Debe contener 10 dígitos.\n";
        esValido = false;
    }

    if (consulta === "") {
        errores = errores + "Debe ingresar su consulta.\n";
        esValido = false;
    } else if (!(consulta.length >=10 && consulta.length <=150)) {
        errores = errores + "Su mensaje: Debe contener entre 10 y 150 caracteres.\n";
        esValido = false;
    }

    if (esValido) {
        let enviar = alert("Su consulta es:\n \n" + consulta + "\n \n¿Desea enviar el mensaje?");
        enviar=true;
        if (enviar === true) {
            document.getElementById("consultaForm").submit();
            PDFconsulta();
        }
    } else {
        alert (errores);
    }
}

function PDFconsulta() {
    var doc = new jsPDF();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let consulta = document.getElementById("consulta").value;

    doc.text("Nombre: " + nombre, 10, 20);
    doc.text("Apellido: " + apellido, 10, 30);
    doc.text("Email: " + email, 10, 40);
    doc.text("Teléfono: " + telefono, 10, 50);
    doc.text("Mensaje o Consulta: " + consulta, 10, 60);
    doc.save("Mi consulta.PDF")
}