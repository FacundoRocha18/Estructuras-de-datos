const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const busquedaLineal = (orderedArray, value) => {
  orderedArray.forEach(element => {
    if (element === value) {
      return value;
    } else if (element > value) {
      return;
    }
  });
  return null;
}

const busquedaBinaria = (array, value) => {
  let lim_inf = 0;
  let lim_sup = array.length - 1;

  while (lim_inf <= lim_sup) {
    const punto_medio = parseInt((lim_inf + lim_sup) / 2);
    const valor_medio = array[punto_medio];

    if (value < valor_medio) {
      lim_sup = punto_medio - 1;
    } else if (value > valor_medio) {
      lim_inf = punto_medio + 1;
    } else if (value == valor_medio) {
      return punto_medio;
    }
  }
}

//console.log(busquedaBinaria(orderedArray, 4));

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
      if (array[i] < array[i + 1]) {
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

const array_con_duplicados = [1, 2, 3, 4, 4, 5, 5, 10, 11, 10];
const array_sin_duplicados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const duplicados_original = (array) => {
  let comparaciones = 0;
  let duplicados = 0;
  let valores_duplicados = [];


  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      comparaciones++;
      if (i !== j && array[i] === array[j]) {
        duplicados++;
        valores_duplicados.push(array[i]);
      }
      console.log('Indice i: ' + i, 'Indice j: ' + j)
    }
  }
  console.log("Comparaciones: " + comparaciones);
  console.log("Duplicados: " + duplicados);
  console.log("Valores duplicados: " + valores_duplicados);
  return false;
};

duplicados_original(array_con_duplicados)

const duplicados_modificado = (array) => {

  let comparaciones = 0;
  let duplicados = 0;
  const arreglo_ordenado = bubbleSort(array);
  let valores_duplicados = [];

  for (let i = 0; i < arreglo_ordenado.length; i++) {
    let j = i - 1;
    comparaciones++;
    if (i !== j && arreglo_ordenado[i] === arreglo_ordenado[j]) {
      j++;
      duplicados++;
      valores_duplicados.push(array[i]);

    }
    console.log('Indice i: ' + i, 'Indice j: ' + j);
  }
  console.log("Comparaciones: " + comparaciones);
  console.log("Duplicados: " + duplicados);
  console.log("Valores duplicados: " + valores_duplicados);

  return false;
};

duplicados_modificado(array_con_duplicados);

const array = [3, 5, 2, 9, 6];

const SelectionSort = (array) => {
  for (let i = 0; i < array.lenght; i++) {
    let indiceMenor = i;
    for (let j = i + 1; j < array.lenght; j++) {
      if (array[j] < array[indiceMenor]) {
        indiceMenor = j;
      }
    }
    if (indiceMenor !== i) {
      let temp = array[i];
      array[i] = array[indiceMenor];
      array[indiceMenor] = temp;
    }
  }
  return array;
};

//console.log(SelectionSort(array));

// Complejidad y eficiencia (pasos a seguir) para Array de 9 elementos:
// Complejidad con LinearSearch: 9
// Complejidad con BinarySearch: 4
// Complejidad con BubbleSort: 20
// Complejidad con duplicados_original: N^2
// Complejidad con duplicados_modificado: N




