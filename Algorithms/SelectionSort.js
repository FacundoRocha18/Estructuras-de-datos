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

console.log(SelectionSort(array));