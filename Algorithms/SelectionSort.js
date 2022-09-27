const array = [3, 5, 2, 9, 6];

const generador_arreglo = (largo) => {
    let arreglo = [];

    for (let i = 0; i < largo; i++) {
        arreglo.push(Math.floor(Math.random() * 100));
    }
    console.log('Arreglo sin ordenar: ' + arreglo)
    return arreglo;
}

const SelectionSort = (array) => {

    let comparaciones = 0;
    let intercambios = 0;

    for (let i = 0; i < array.length; i++) {
        let indiceMenor = i;
        for (let j = i + 1; j < array.length; j++) {
            
            if (array[j] < array[indiceMenor]) {
                indiceMenor = j;
            }
            comparaciones++;
        }
        if (indiceMenor != i) {
            let temp = array[i];
            array[i] = array[indiceMenor];
            array[indiceMenor] = temp;
            intercambios++;
        }
    }

    console.log('/----------------------/')
    console.log('Arreglo ordenado con SelectionSort: ' + array)
    console.log('/----------------------/')
    console.log('Comparaciones realizadas: ' + comparaciones);
    console.log('Intercambios realizados: ' + intercambios);
    console.log('Total: ' + parseInt(comparaciones + intercambios));
    console.log('/----------------------/')
};

SelectionSort(generador_arreglo(5));