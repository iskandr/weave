function arange(n, step=1) {
    // generate an array with entries 0 .. n-1
    length = Math.floor(n / step)
    a = new Array(length)
    for (let i = 0; i < n; i+= step) {
        a[i] = i;
    }
    return a;
}


function rotate(a, n) {
    // rotate array contents by n positions
    new_a = new Array(a.length)
    for (let i = 0; i < a.length; ++i) {
        let j = i + n % a.length
        new_a[j] = a[i];
    }
    return new_a;
}

function reverse(a) {
    let new_a = new Array(a.length)
    for (let i = 0; i < a.length; ++i) {
        new_a[i] = a[a.length - (i  + 1)];
    }
    return new_a
}

function concat(a, b) {
    //concatenate two arrays
    let n = a.length + b.length;
    let new_a = new Array(n)
    for (let i = 0; i < a.length; ++i) {
        new_a[i] = a[i];
    }
    for (let i = 0; i < b.length; ++i) {
        new_a[i + a.length] = b[i];
    }
    return new_a;
}

function symmetrize(a) {
    // make series symmetric by concatenating it with its inverse
    return concat(a, reverse(a));
}