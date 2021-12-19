let seed = 6;

function setSeed(x) {
    seed = x;
}

function randFloat(min, max) {
    max = max || 1;
    min = min || 0;

    seed = (seed * 9301 + 49297) % 233280;
    let rnd = seed / 233280;
    return min + rnd * (max - min);
}
function random() {
    return randFloat(0.0, 1.0);
}

function randInt(min, max) {
    let range = max - min;
    return min + Math.floor(random() * range);
}


function randBool(p=0.5) {
    return randFloat() > p
}
/*
function randFloat(min, max) {
    let range = max - min;
    return min + (Math.random() * range);
}
 */

function randRound(x) {
    let min = Math.floor(x)
    let max = Math.ceil(x)
    let p = x - min
    if (randBool(p)) {
        return max;
    } else {
        return min;
    }

}

function choose(choices) {
    return choices[Math.min(choices.length - 1, randInt(0, choices.length))];
}

function inplace_shuffle(a) {
    let i = a.length;
    let r;
    while (i != 0) {
        // Pick a remaining element...
        r = Math.floor(randInt(0, i));
        i--;
        [a[i], a[r]] = [a[r], a[i]];
    }
    return a;
}

function shuffle(a) {
    new_a = new Array(a.length)
    for (let i = 0; i < a.length; ++i) {
        new_a[i] = a[i];
    }
    return inplace_shuffle(new_a);
}

function split(a) {
    let n = a.length;
    let lower_half = Math.floor(n / 2);
    let upper_half = n - lower_half;
    let new_a1 = new Array(lower_half);
    for (let i = 0; i < lower_half; ++i) {
        new_a1[i] = a[i];
    }
    let new_a2 = new Array(upper_half);
    for (let i = 0; i < upper_half; ++i) {
        new_a2[i] = a[lower_half + i];
    }
    return [new_a1, new_a2];
}

function every_other_element(a) {
    let n = a.length;
    let lower_half = Math.floor(n / 2);
    let upper_half = n - lower_half;
    let new_a1 = new Array(lower_half);
    let new_a2 = new Array(upper_half);
    for (let i = 0; i < a.length; ++i) {
        if (i % 2 == 0) {
            new_a1[Math.floor(i / 2)] = a[i];
        } else {
            new_a2[Math.floor(i / 2)] = a[i];
        }
    }
    return [new_a1, new_a2];
}

function subsample(a) {
    [new_a1, new_a2] = every_other_element(a);
    return new_a1;
}
