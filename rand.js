const rand = Math.random

function randInt(min, max) {
    let range = max - min;
    return min + Math.floor(Math.random() * range);
}


function randBool(p=0.5) {
    return rand() > p
}

function randFloat(min, max) {
    let range = max - min;
    return min + (Math.random() * range);
}
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


function random(choices) {
    return choices[Math.min(choices.length - 1, randInt(0, choices.length))];
}
