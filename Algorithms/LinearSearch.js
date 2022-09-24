const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const busquedaLineal = (arreglo, valor) => {
  arreglo.forEach(elemento => {
    if (elemento === valor) {
      return valor;
    } else if (elemento > valor) {
      return;
    }
  });
  return null;
}

console.log(busquedaLineal(arreglo_ordenado, 4));

// Complejidad y eficiencia (pasos a seguir) para Array de 9 elementos:
// Complejidad con LinearSearch: 9
