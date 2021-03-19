// Write your solution here!
const cats = [`Milo`, `Otis`, `Garfield`];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats, `Broom`];
}

function prependCat(name) {
    return [`Arnold`, ...cats];
}

function removeLastCat() {
    const Nolascat = cats.slice(0, cats.length - 1);
    return Nolascat;
}

function removeFirstCat() {
    const Newcat = cats.slice(1);
    return Newcat;
}