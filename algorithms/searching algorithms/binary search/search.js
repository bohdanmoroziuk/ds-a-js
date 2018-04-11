
function binarySearch(collection, key) {
    let lower = 0;
    let upper = collection.length - 1;

    while (lower <= upper) {
        let middle = Math.floor((upper + lower) / 2);

        if (collection[middle] < key) {
            lower = middle + 1;
        } 
        else if (collection[middle] > key) {
            upper = middle - 1;
        } 
        else {
            return middle;
        }
    }
    return -1;
};