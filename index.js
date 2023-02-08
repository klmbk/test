const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 29, 30];

function fn(arr) {
    const res = [];

    for (let i = 0; i < arr[arr.length - 1]; i++) {
        let first = arr[i] + 1;
        let second = arr[i + 1];

        if (!first && !second) continue;

        if (first && second && first === second) continue;

        if (first && second && first !== second) {
            res.push(first);
        } else { break }
    }

    return res;
}


console.log(fn(arr));
