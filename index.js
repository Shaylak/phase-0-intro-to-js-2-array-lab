const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(name){
    return cats.push(name);
};
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name){
    return cats.unshift(name);
};
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(){
    return cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    return cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name){
    const copyofCats = cats.slice();
    copyofCats.push(name);
    return copyofCats;
}
appendCat("Broom");

function prependCat(name){
    const copyofCats = cats.slice();
    copyofCats.unshift(name);

    return copyofCats;
}
prependCat("Arnold")

function removeLastCat(){
    const copyofCats = cats.slice();
    copyofCats.pop();
    return copyofCats;

}
removeLastCat();

function removeFirstCat(){
    const copyofCats = cats.slice();
    copyofCats.shift();
    return copyofCats;
}

removeFirstCat();
