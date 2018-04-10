
function selectionSort(array) {
    let length = array.length;
    let temp, min;

    for (let i = 0; i <= length - 2; ++i) {
        min = i;

        for (let j = i + 1; j <= length - 1; ++j) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
};