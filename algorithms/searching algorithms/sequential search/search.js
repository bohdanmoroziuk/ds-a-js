
function contains(array, key) {
    for (let element of array) {
        if (element === key) {
            return true;
        }
    }
    return false;
};

function indexOf(array, key) {
    let length = array.length;

    for (let i = 0; i < length; i++) {
        if (array[i] == key) {
            return i;
        }
    }
    return -1;
};

function lastIndexOf(array, key) {
    let index = -1;

    array.forEach((element, i) => {
        if (element == key) {
            index = i;
        }
    });
    return index;
};