
function bubbleSort(array) {
    let length = array.length;

    for (let i = length; i >= 2; --i) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};