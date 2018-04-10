
function insertionSort(array) {
    let length = array.length;
    let temp, j;

    for (let i = 1; i <= length - 1; ++i) {
        temp = array[i];
        j = i;

        while (j > 0 && array[j - 1] >= temp) {
            array[j] = array[j - 1];
            --j;
        }
        array[j] = temp;
    }
    return array;
};