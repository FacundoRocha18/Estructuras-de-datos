const array = [2, 5, 87, 100, 7, 3, 10, 9, 4, 8]

const busquedaBinaria = (a, item, low, high) => {

  if (high <= low)
    return (item > a[low]) ?
      (low + 1) : low;

  mid = Math.floor((low + high) / 2);

  if (item == a[mid])
    return mid + 1;

  if (item > a[mid])
    return busquedaBinaria(a, item,
      mid + 1, high);

  return busquedaBinaria(a, item, low,
    mid - 1);
}

const generador_arreglo = (largo) => {
  let arreglo = [];

  for (let i = 0; i < largo; i++) {
    arreglo.push(Math.floor(Math.random() * 100));
  }
  console.log('Arreglo sin ordenar: ' + arreglo)
  return arreglo;
}

const BinaryInsertionSort = (arreglo) => {

    const size = arreglo.length;
    let comparaciones = 0;
    let intercambios = 0;
    let selected, location = 0;
  
    for (let i = 1; i < size; i++) {
      let j = i - 1;
      selected = arreglo[i];
      location = busquedaBinaria(arreglo, selected, 0, j);
  
      while (j >= location) {
        arreglo[j + 1] = arreglo[j];
        comparaciones++;
        j--;
      }
  
      arreglo[j + 1] = selected;
      intercambios++;
    }
    console.log('/----------------------/')
    console.log('Arreglo ordenado con BinaryInsertionSort: ' + arreglo)
    console.log('/----------------------/')
    console.log('Comparaciones realizadas: ' + comparaciones);
    console.log('Intercambios realizados: ' + intercambios);
    console.log('Total: ' + parseInt(comparaciones + intercambios));
    console.log('/----------------------/')
  }
  
  BinaryInsertionSort(generador_arreglo(5))