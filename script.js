
const form = document.getElementById('registroForm');
const tabla = document.querySelector('#tablaUsuarios tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = document.getElementById('usuario').value.trim();
    const correo = document.getElementById('correo').value.trim();

    if (usuario === "" || correo === "") {
        alert("Por favor, rellena todos los campos.");
        return;
    }

    const nuevoUsuario = { usuario, correo };
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    limpiarFormulario();
    renderTabla();
});

function renderTabla() {
    tabla.innerHTML = '';
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.forEach(u => {
        const fila = `<tr><td>${u.usuario}</td><td>${u.correo}</td></tr>`;
        tabla.innerHTML += fila;
    });
}

function cambiarTitulo() {
    const nuevo = prompt("Introduce el nuevo título:");
    if (nuevo) document.getElementById('tituloEncabezado').innerText = nuevo;
}

function limpiarFormulario() {
    form.reset();
}

renderTabla();