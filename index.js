const array1 = [3, 6, 2, 1, 4, 2, 6, 1, 3, 4];
const array2 = [3, 6, 2, 1, 4];


const SelectionSort_original = (arreglo) => {
  let comparaciones = 0;
  let intercambios = 0;

  for (let i = 0; i < arreglo.length; i++) {

    let min = i;
    for (let j = i + 1; j <= arreglo.length; j++) {
      comparaciones++;

      if (arreglo[j] < arreglo[min]) {
        min = j;
      }
    }
    if (min != i) {

      let temp = arreglo[i];
      arreglo[i] = arreglo[min];
      arreglo[min] = temp;
      intercambios++;
    }
  }
  console.log('Comparaciones realizadas: ' + comparaciones);
  console.log('Intercambios realizados: ' + intercambios);
  return arreglo;
};

SelectionSort_original(array1)
console.log(array1);
console.log('----------------------------')

const SelectionSort_modificado = (arreglo) => {
  let comparaciones = 0;
  let intercambios = 0;

  console.log(arreglo)
  console.log('----------------------------')
  for (let i = 0; i < arreglo.length; i++) {

    let min = i;

    let j = i + 1
    console.log(arreglo[j], arreglo[min])
    console.log('----------------------------')
    console.log(arreglo[j] < arreglo[min])
    console.log('----------------------------')

    if (arreglo[j] < arreglo[min]) {
      min = j;
    }
    comparaciones++;
    /* for (; j < arreglo.length; j++) {
    } */

    if (min != i) {

      let temp = arreglo[i];
      arreglo[i] = arreglo[min];
      arreglo[min] = temp;
      console.log(arreglo)
      console.log('----------------------------')
      intercambios++;
    }
  }

  console.log('Comparaciones realizadas: ' + comparaciones);
  console.log('----------------------------')
  console.log('Intercambios realizados: ' + intercambios);
  console.log('----------------------------')
  return arreglo;
};

SelectionSort_modificado(array2)
console.log(array2);
console.log('----------------------------')


