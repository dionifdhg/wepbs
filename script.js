let usuarios = [];

function registrarUsuario() {
  const nombre = document.getElementById("nombre").value.trim();
  const ciudad = document.getElementById("ciudad").value.trim();
  const interes = document.getElementById("interes").value.trim();

  if (!nombre || !ciudad || !interes) {
    alert("Por favor completa todos los campos.");
    return;
  }

  usuarios.push({ nombre, ciudad, interes });
  alert("¡Perfil creado!");
  mostrarPerfiles(usuarios);
}

function buscar() {
  const filtro = document.getElementById("filtroCiudad").value.trim().toLowerCase();
  const resultados = usuarios.filter(u => u.ciudad.toLowerCase().includes(filtro));
  mostrarPerfiles(resultados);
}

function mostrarPerfiles(lista) {
  const contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron perfiles.</p>";
    return;
  }

  lista.forEach(usuario => {
    const div = document.createElement("div");
    div.className = "tarjeta";
    div.innerHTML = `
      <h3>${usuario.nombre}</h3>
      <p>Ciudad: ${usuario.ciudad}</p>
      <p>Intereses: ${usuario.interes}</p>
    `;
    contenedor.appendChild(div);
  });
}
