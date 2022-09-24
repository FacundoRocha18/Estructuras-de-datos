const arreglo_ordenado = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const busquedaBinaria = (arreglo_ordenado, valor) => {
    let limite_inferior = 0;
    let limite_superior = arreglo_ordenado.length - 1;
    let comparaciones = 0;
    let coincidencias = 0;

    while (limite_inferior <= limite_superior) {
        comparaciones++;
        const punto_medio = parseInt((limite_inferior + limite_superior) / 2);
        const valor_medio = arreglo_ordenado[punto_medio];

        if (valor < valor_medio) {
            limite_superior = punto_medio - 1;
        } else if (valor > valor_medio) {
            limite_inferior = punto_medio + 1;
        } else if (valor == valor_medio) {
            return punto_medio;
        }
    }
}

console.log(busquedaBinaria(arreglo_ordenado, 4));

// Complejidad y eficiencia (pasos a seguir) para Array de 9 elementos:
// Complejidad con BinarySearch: 4
