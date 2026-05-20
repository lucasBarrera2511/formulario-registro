let aficiones = [];

document.addEventListener('DOMContentLoaded', function() {
    
    const btnGato = document.getElementById('btnVerGato');
    const ventanaGato = document.getElementById('ventanaGato');
    const cerrarGato = document.getElementById('cerrarGato');

    btnGato.addEventListener('click', function() {
        ventanaGato.classList.add('mostrar');
    });
    
    cerrarGato.addEventListener('click', function() {
        ventanaGato.classList.remove('mostrar');
    });
    
    ventanaGato.addEventListener('click', function(e) {
        if (e.target === ventanaGato) {
            ventanaGato.classList.remove('mostrar');
        }
    });
    
    document.getElementById('agregarAficion').addEventListener('click', function() {
        const input = document.getElementById('aficionInput');
        const aficion = input.value.trim();
        
        if (aficion) {
            aficiones.push(aficion);
            actualizarLista();
            input.value = '';
            input.focus();
        }
    });
    
    document.getElementById('aficionInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('agregarAficion').click();
        }
    });
    
    document.getElementById('limpiarBtn').addEventListener('click', function() {
        document.getElementById('registroForm').reset();
        aficiones = [];
        actualizarLista();
        
        document.querySelectorAll('.error-message').forEach(function(span) {
            span.textContent = '';
        });
        
        document.querySelectorAll('input, select').forEach(function(input) {
            input.classList.remove('error', 'success');
        });
    });
    
});

function actualizarLista() {
    const lista = document.getElementById('listaAficiones');
    lista.innerHTML = '';
    
    aficiones.forEach(function(aficion, index) {
        const li = document.createElement('li');
        li.innerHTML = aficion + ' <button class="eliminar-aficion" onclick="eliminarAficion(' + index + ')" type="button">Eliminar</button>';
        lista.appendChild(li);
    });
}

function eliminarAficion(index) {
    aficiones.splice(index, 1);
    actualizarLista();
}