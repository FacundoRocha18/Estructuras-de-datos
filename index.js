const array_con_duplicados = [1, 2, 3, 4, 4, 5, 5, 10, 11, 10, 15, 12, 15, 45, 32, 12];
const array_sin_duplicados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const bubbleSort = (array) => {
  let comparaciones = 0;
  let intercambios = 0;
  let desordenados = array.length - 1;
  let ordenado = false;
  let temp = 0;

  while (!ordenado) {
    ordenado = true;
    for (let i = 0; i < desordenados; i++) {
      comparaciones++;
      if (array[i] > array[i + 1]) {
        intercambios++;
        ordenado = false;
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    desordenados--;
  }
  //console.log('Comparaciones realizadas: ' + comparaciones);
  //console.log('Intercambios realizados: ' + intercambios);
  return array;
}

const duplicados_original = (array) => {
  let comparaciones = 0;
  let duplicados = 0;
  const valores_duplicados = [];
  bubbleSort(array)


  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      comparaciones++;
      if (i !== j && array[i] === array[j]) {
        duplicados++;
        valores_duplicados.push(array[i]);
      }
    }
  }
  console.log("Comparaciones: " + comparaciones);
  console.log("Duplicados: " + duplicados);
  console.log("Valores duplicados: " + valores_duplicados);

  return false;
};

console.log(duplicados_original(array_con_duplicados));

const duplicados_modificado = (array) => {

  let comparaciones = 0;
  let duplicados = 0;
  const valores_duplicados = [];
  bubbleSort(array)

  for (let i = 0; i < array.length; i++) {
    const j = i + 1;
    comparaciones++;
    if (i !== j && array[i] === array[j]) {
      duplicados++;
      valores_duplicados.push(array[i], array[j]);
    }
  }

  console.log("Comparaciones: " + comparaciones);
  console.log("Cantidad de duplicados: " + duplicados);
  console.log("Valores duplicados: " + valores_duplicados);
  return false;
};

console.log(duplicados_modificado(array_con_duplicados));

// Complejidad y eficiencia (pasos a seguir) para Array de 9 elementos:
// Complejidad con duplicados_original: N^2
// Complejidad con duplicados_modificado: N




