function distributeGifts(packOfGifts, reindeers) {
    let weightGifts = 0;
    let maxWeightReindeers = 0;

    packOfGifts.forEach((gift) => {
        weightGifts += gift.length;
    });

reindeers.forEach( (reindeers) => {
    maxWeightReindeers += (reindeers.length * 2);
});
return Math.floor(maxWeightReindeers / weightGifts);
}

/*const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

const result = distributeGifts(packOfGifts, reindeers)
console.log(result);

*/