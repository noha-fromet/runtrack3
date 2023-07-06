function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a;
        });
    }
    return numbers;
}

console.log(tri([3, 1, 4, 2], "asc")); // [1, 2, 3, 4]
console.log(tri([3, 1, 4, 2], "desc")); // [4, 3, 2, 1]
