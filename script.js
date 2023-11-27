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
    const codigo = document.getElementById('codigo').value;
    if (codigo.match(/^new\.\d{4}[A-D]$/)) {
      const almacenProducto = codigo.charAt(codigo.length - 1);
      productos[almacenProducto].push(codigo);
      mostrarProductos();
    } else if (codigo.match(/^mov\.\d{4}[A-D]$/)) {
        const nuevoAlmacen = codigo.charAt(codigo.length - 1);
        const producto = "new." + codigo.substring(4);
        const indice = productos[almacenActual].indexOf(producto);
        if (indice !== -1) {
          // Eliminar el producto del almacén actual
          productos[almacenActual].splice(indice, 1);
          // Agregar el producto al nuevo almacén
          productos[nuevoAlmacen].push(producto);
          mostrarProductos();
        } else {
          alert('Producto no encontrado en este almacén.');
        }
      } else {
        alert('Formato de código incorrecto. Debe ser "new.0000A" o "mov.0000B".');
      }
      
      
  }
  
  function eliminarProducto() {
    const codigo = document.getElementById('codigo').value;
    const indice = productos[almacenProducto].indexOf(codigo);
    if (indice !== -1) {
      productos[almacenProducto].splice(indice, 1);
      mostrarProductos();
    } else {
      alert('Producto no encontrado en este almacén.');
    }
  }
  
  // Mostrar productos al cargar la página
  mostrarProductos();
  