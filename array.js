function mod(n, m) {
  return ((n % m) + m) % m;
}


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

function zeros1d(n) {
    let result = new Array(n);
    fill1d(result, 0);
    return result;
}

function fill2d(a, v) {
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a[i].length; ++j) {
            a[i][j] = v;
        }
    }
}

function zeros2d(nrows, ncols) {
    let result = array2d(nrows, ncols);
    fill2d(result, 0);
    return result;
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
        let j = i + mod(n, a.length);
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

function interleave(a, b) {
    let [m, n] = [a.length, b.length];
    let minval = Math.min(m, n);
    let new_length = 2 * minval;
    let result = new Array(new_length);
    for (let i = 0; i < new_length; ++i) {
        if (mod(i, 2) == 0) {
            result[i] = a[i / 2];
        } else {
            result[i] = b[(i - 1) / 2];
        }
    }
    return result;
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


function size(A) {
    let nrows = A.length;
    let ncols = A[0].length;
    return [nrows, ncols];
}

function matmult(A, B) {
    let [ar, ac] = size(A);
    let [br, bc] = size(B);
    if (ac != br) {
        window.alert(
            `Invalid dimensions ${ar} x ${ac}, ${br} x ${bc}: expected ${ac} == ${br}`);
        return;
    }
    let result = array2d(ar, bc)
    for (let i = 0; i < ar; ++i) {
        for (let j = 0; j < bc; ++j) {
            result[i][j] = 0;
            for (let k = 0; k < ac; ++k) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}

function binary_matmult(A, B) {
    let [ar, ac] = size(A);
    let [br, bc] = size(B);
    if (ac != br) {
        window.alert(
            `Invalid dimensions ${ar} x ${ac}, ${br} x ${bc}: expected ${ac} == ${br}`);
        return;
    }
    let result = array2d(ar, bc)
    for (let i = 0; i < ar; ++i) {
        for (let j = 0; j < bc; ++j) {
            result[i][j] = false;
            for (let k = 0; k < ac; ++k) {
                result[i][j] |= A[i][k] & B[k][j];
            }
        }
    }
    return result;
}


function transpose(A) {
    let [ar, ac] = size(A);
    let result = array2d(ac, ar);
    for (let i = 0; i < ar; ++i) {
        for (let j = 0; j < ac; ++j) {
            result[j][i] = A[i][j];
        }
    }
    return result;
}

function colsum(A) {
    let [nrows, ncols] = size(A);
    let result = zeros1d(ncols);
    for (let row = 0; row < nrows; ++row) {
        for (let col = 0; col < ncols; ++col) {
            result[col] += A[row][col];
        }
    }
    return result;
}