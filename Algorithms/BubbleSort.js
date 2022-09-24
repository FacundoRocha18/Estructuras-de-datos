const array_con_duplicados = [1, 2, 3, 4, 4, 5, 5, 10, 11, 10];

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
    console.log('Comparaciones realizadas: ' + comparaciones);
    console.log('Intercambios realizados: ' + intercambios);
    return array;
}

// Complejidad con BubbleSort para array de 10 elementos: 90
