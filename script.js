const productos = {
    A: [],
    B: [],
    C: [],
    D: [],
  };
  
  function mostrarProductos() {
    document.getElementById('productosA').innerHTML = productos['A'].map(producto => `<div>${producto}</div>`).join('');
    document.getElementById('productosB').innerHTML = productos['B'].map(producto => `<div>${producto}</div>`).join('');
    document.getElementById('productosC').innerHTML = productos['C'].map(producto => `<div>${producto}</div>`).join('');
    document.getElementById('productosD').innerHTML = productos['D'].map(producto => `<div>${producto}</div>`).join('');
  }
  
  function realizarAccion() {
    //agregar si ya existe en un almacen no hacer un new
    const codigo = document.getElementById('codigo').value;
    if (codigo.match(/^new\.\d{4}[A-D]$/))

    if (codigo.match(/^new\.\d{4}[A-D]$/)) {
      const almacenProducto = codigo.charAt(codigo.length - 1);
      productos[almacenProducto].push(codigo);
      mostrarProductos();
    } 
    else if (codigo.match(/^del\.\d{4}[A-D]$/)) {
      const codigo = document.getElementById('codigo').value;
      const almacenActual = codigo.charAt(codigo.length - 1);
      productos[almacenActual].pop(codigo);
      mostrarProductos();
    }
    //agregar mov
    //el mov elimina el producto del almacen donde se encuentra
    //y lo coloca en el almacen del code
    //ej mov.0000B
    //elimina de 0000N y coloca en 0000B
    else {
          alert('Producto no encontrado en este almacén.');
        }
      else {
        alert('Formato de código incorrecto. Debe ser "new.0000A" o "mov.0000B" o "del.0000C"');
      }
    }

  // Mostrar productos al cargar la página
  mostrarProductos();
  