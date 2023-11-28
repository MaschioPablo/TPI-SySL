const productos = {
  A: [],
  B: [],
  C: [],
  D: [],
};

function mostrarProductos() {
  document.getElementById("productosA").innerHTML = productos["A"]
    .map((producto) => `<div>${producto}</div>`)
    .join("");
  document.getElementById("productosB").innerHTML = productos["B"]
    .map((producto) => `<div>${producto}</div>`)
    .join("");
  document.getElementById("productosC").innerHTML = productos["C"]
    .map((producto) => `<div>${producto}</div>`)
    .join("");
  document.getElementById("productosD").innerHTML = productos["D"]
    .map((producto) => `<div>${producto}</div>`)
    .join("");
}

document.getElementById(`botonAccion`).addEventListener("click", () => {
  let codigo = document.getElementById("codigo").value;
  if (codigo.match(/^(new|del|mov)\.\d{4}[A-D]$/)) {
    const almacenProducto = codigo.charAt(codigo.length - 1);
    if (codigo.match(/^new\.\d{4}[A-D]$/)) {
      const numeros = codigo.match(/\d+/g);
      if (
        productos["A"].includes(numeros[0]) ||
        productos["B"].includes(numeros[0]) ||
        productos["C"].includes(numeros[0]) ||
        productos["D"].includes(numeros[0])
      ) {
        mensajeGenerico(
          "Código repetido",
          "El producto ya se encuentra en un depósito",
          "error"
        );
        let snd = new Audio("./snd/no agregado.mp3");
        snd.play();
      } else {
        const numeros = codigo.match(/\d+/);
        if (numeros && numeros.length > 0) {
          productos[almacenProducto].push(numeros[0].toString());
          mensajeProductoAgregado(almacenProducto);
        }
        mostrarProductos();
      }
    } else if (codigo.match(/^del\.\d{4}[A-D]$/)) {
      if (productos.almacenProducto.includes(codigo)) {
        productos.almacenProducto = productos.almacenProducto.filter(
          (producto) => producto !== codigo
        );
        mostrarProductos();
      } else {
        mensajeGenerico(
          "Código erroneo",
          "El producto no se encuentra en el depósito",
          "info"
        );
      }
    } else if (codigo.match(/^mov\.\d{4}[A-D]$/)) {
      alert("mov");
      if (productos["A"].includes(numeros[0])) {

      } else if (productos["B"].includes(numeros[0])) {
          
      } else if(productos["C"].includes(numeros[0])){
          
      } else {

      }
    }else if (codigo == "") {
    mensajeProductoVacio();
  } else {
    mensajeProductoErroneo();
  }
}});

//----------------------Funciones para mensajes----------------------//

function mensajeGenerico(mensaje, mensajeDeposito, tipo) {
  Swal.fire(mensaje, mensajeDeposito, tipo);
}

function mensajeProductoErroneo() {
  Swal.fire("Código Erroneo", "", "info");
  let snd = new Audio("./snd/no agregado.mp3");
  snd.play();
}

function mensajeProductoAgregado(deposito) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Producto agregado al deposito  " + deposito,
  });
  let snd = new Audio("./snd/agregar producto.mp3");
  snd.play();
}

function mensajeProductoVacio() {
  Swal.fire("Campo vacío", "", "info");
  let snd = new Audio("./snd/no agregado.mp3");
  snd.play();
}

mostrarProductos();
