const array1 = [3, 6, 2, 1, 4, 2, 6, 1, 3, 4];
const array2 = [3, 6, 2, 1, 4, 2, 6, 1, 3, 4];


const InsertionSort_original = (arreglo) => {

  const size = arreglo.length;
  let comparaciones = 0;
  let intercambios = 0;

  for (let i = 1; i < size; i++) {
    const key = arreglo[i];
    let j = i - 1;

    // Compare key with each element on the left of it until an element smaller than
    // it is found.
    // For descending order, change key < array[j] to key > array[j].
    while (j >= 0 && key < arreglo[j]) {
      arreglo[j + 1] = arreglo[j];
      comparaciones++;
      j--;
    }

    // Place key at after the element just smaller than it.
    arreglo[j + 1] = key;
    intercambios++;
  }
  console.log('Comparaciones realizadas: ' + comparaciones);
  console.log('Intercambios realizados: ' + intercambios);
}
console.log(array1)
InsertionSort_original(array1)
console.log(array1)