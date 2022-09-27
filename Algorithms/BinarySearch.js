const arreglo_ordenado = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

console.log(busquedaBinaria(arreglo_ordenado, 4, 0, 9));

// Complejidad y eficiencia (pasos a seguir) para Array de 9 elementos:
// Complejidad con BinarySearch: 4
