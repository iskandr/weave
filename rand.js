var seed = 6;

function setSeed(x) {
    seed = x;
}

function randFloat(min, max) {
    max = max || 1;
    min = min || 0;

    seed = (seed * 9301 + 49297) % 233280;
    var rnd = seed / 233280;
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
