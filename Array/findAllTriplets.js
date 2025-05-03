function findTriplets(arr) {
    const res = [];
    const n = arr.length;

    // Generating all triplets
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
            
                // If the sum of triplet equals to zero
                // then add it's indexes to the result
                if (arr[i] + arr[j] + arr[k] === 0) {
                    res.push([i, j, k]);
                }
            }
        }
    }
    return res;
}


const arr = [0, -1, 2, -3, 1];
const res = findTriplets(arr);
res.forEach(triplet => {
    console.log(triplet[0] + " " + triplet[1] + " " + triplet[2]);
});