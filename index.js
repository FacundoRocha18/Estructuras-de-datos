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

const busquedaBinaria = (orderedArray, value) => {
  lim_inf = 0;
  lim_sup = orderedArray.length - 1;

  while (lim_inf <= lim_sup) {
    punto_medio = (lim_inf + lim_sup) / 2;
    valor_medio = orderedArray[punto_medio];

    if (valor < valor_medio) {
      lim_sup = punto_medio - 1;
    } else if (valor > valor_medio) {
      lim_inf = punto_medio + 1;
    } else if (valor == valor_medio) {
      return punto_medio;
    }
  }
}

const bubbleSort = () => {
  const array = [50, 40, 30, 20, 10];
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
  console.log('Comparaciones realizadas: ' + comparaciones);
  console.log('Intercambios realizados: ' + intercambios);
}

const array_con_duplicados = [1, 2, 3, 4, 4, 5, 5, 10, 11, 21, 45, 45];
const array_sin_duplicados = [1, 2, 3, 4, 5, 10];

const duplicates = (array) => {
  let comparaciones = 0;
  let duplicados = 0;

  for (let i = 0; i < array.length; i++) {
    comparaciones++;
    for (let j = 0; j < array.length; j++) {
      if (i != j && array[i] == array[j]) {
        duplicados++;
        console.log("Comparaciones: " + comparaciones);
        console.log("Duplicados: " + duplicados);
      }
    }
  }
  console.log("Comparaciones: " + comparaciones);
  console.log("Duplicados: " + duplicados);
};

//duplicates(array_con_duplicados);

const duplicates2 = (array) => {
  let comparaciones = 0;
  let duplicados = 0;

  for (let i = 0; i < array.length; i++) {
    comparaciones++;
    if (i !== i - 1 && array[i] === array[i - 1]) {
      duplicados++;
      console.log("Comparaciones: " + comparaciones);
      console.log("Duplicados: " + duplicados);
    }
    console.log("Comparaciones: " + comparaciones);
    console.log("Duplicados: " + duplicados);
  }
};

duplicates2(array_con_duplicados);

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

/* console.log(SelectionSort(array));
 */

// Complejidad y eficiencia (pasos a seguir) para Array de 9 elementos:
// Complejidad con LinearSearch: 9
// Complejidad con BinarySearch: 4
// Complejidad con BubbleSort: 20

