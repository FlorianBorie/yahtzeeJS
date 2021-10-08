Array.prototype.count = function(predicate = obj => true) {
    return this.filter(predicate).length;
};

function firstLancerOne(rolls){
    return calculateNumber(rolls, 1)
}

function firstLancerTwo(rolls) {
    return calculateNumber(rolls, 2)
}

function calculateNumber(rolls, value){
    let test = rolls.count(dice => dice == value);
    return value * test;
}

module.exports = firstLancerOne, firstLancerTwo
// module.exports = firstLancerTwo;