function array2d(nrows, ncols) {
    let data = new Array(nrows);
    for (let i = 0; i < nrows; ++i) {
        data[i] = new Array(ncols);
    }
    return data;
}

function array3d(nrows, ncols, nz) {
    let data = new Array(nrows);
    for (let i = 0; i < nrows; ++i) {
        data[i] = new Array(ncols);
        for (let j = 0; j < ncols; ++j) {
            data[i][j] = new Array(nz);
        }
    }
    return data;
}


function fill1d(a, v) {
    for (let i = 0; i < a.length; ++i) {
        a[i] = v;
    }
}



function fill2d(a, v) {
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a[i].length; ++j) {
            a[i][j] = v;
        }
    }
}

function imap_fill1d(a, f) {
    for (let i = 0; i < a.length; ++i) {
      a[i]= f(i);
    }
}

function imap_fill2d(a, f) {
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a[i].length; ++j) {
            a[i][j] = f(i, j);
        }
    }
}

function fill3d(a, v) {
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a[i].length; ++j) {
            for (let k = 0; k < a[i][j].length; ++k)
                a[i][j][k] = v;
        }
    }
}
function imap_fill3d(a, v) {
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a[i].length; ++j) {
            for (let k = 0; k < a[i][j].length; ++k)
                a[i][j][k] = f(i, j, k);
        }
    }
}

function arange(n, step=1) {
    // generate an array with entries 0 .. n-1
    length = Math.floor(n / step)
    a = new Array(length)
    for (let i = 0; i * step < n; ++i) {
        a[i] = i * step;
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
