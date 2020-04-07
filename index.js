/*
TAREA: empezar preguntando cuanta gente hay en el grupo familiar.
Crear tantos inputs y labels como para completar la edad de cada integrante.
Al hacer click en 'calcular' mostrar en un elemento pre-existente la mayor edad,
la menor edad y la edad promedio.

punto bonus: crear un boton para empezar de nuevo , que empiece de nuevo el
proceso , borrando los inputs

*/

document.querySelector('#siguiente-paso').onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);
  
    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
  
    event.preventDefault();
  };
  
  document.querySelector('#calcular').onclick = function(event) {
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('mayor', obtenerMayorNumero(numeros));
    mostrarEdad('menor', obtenerMenorNumero(numeros));
    mostrarEdad('promedio', obtenerPromedio(numeros));
    mostrarResultados();
  
    event.preventDefault();
  };
  
  document.querySelector('#resetear').onclick = resetear;
  
  function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
      $integrantes[i].remove();
    }
  }
  
  function crearIntegrantes(cantidadIntegrantes) {
  
    if (cantidadIntegrantes > 0) {
      mostrarBotonCalculo();
    } else {
      resetear();
    }
  
    for (let i = 0; i < cantidadIntegrantes; i++) {
      crearIntegrante(i);
    }
  }
  
  function crearIntegrante(indice) {
    const $div = document.createElement('div');
    $div.className = 'integrante';
  
    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante # ' + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';
  
    $div.appendChild($label);
    $div.appendChild($input);
  
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
  }
  
  function resetear() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
  }
  
  function ocultarBotonCalculo() {
    document.querySelector('#calcular').className = 'oculto';
  }
  
  function mostrarBotonCalculo() {
    document.querySelector('#calcular').className = 'button';
  }
  
  function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto';
  }
  
  function mostrarResultados() {
    document.querySelector('#analisis').className = '';
  }
  
  function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
  }
  
  function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
      edades.push(Number($integrantes[i].value));
    }
    return edades;
  }

function obtenerMayorNumero(numeros){
    let mayorNumero = numeros [0];
    for (let i =0;i<numeros.length; i++){
        if (numeros [i]>mayorNumero){
            mayorNumero=numeros[i];
        }
    }
    return mayorNumero;
}

function obtenerMenorNumero(numeros){
    let menorNumero = numeros[0];
    for ( let i=0;i<numeros.length;i++){
        if (numeros[i]<menorNumero){
            menorNumero=numeros[i];
        }
    }
    return menorNumero;
}

function obtenerPromedio(numeros){
    let acumulador = 0;
    for (let i=0;i<numeros.length; i++){
        acumulador += numeros[i];
    }
    return Math.floor(acumulador/numeros.length);
}