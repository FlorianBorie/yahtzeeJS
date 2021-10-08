module.exports ={
    Count: Array.prototype.count = function(predicate = obj => true) {
        return this.filter(predicate).length;
    },
    
    One: function firstLancerOne(rolls){
        return this.FinalCount(rolls, 1)
    },
    
    Two: function firstLancerTwo(rolls) {
        return this.FinalCount(rolls, 2)
    },

    Three: function firstLancerThree(rolls) {
        return this.FinalCount(rolls, 3)
    },

    Four: function firstLancerFour(rolls) {
        return this.FinalCount(rolls, 4)
    },

    Five: function firstLancerFive(rolls) {
        return this.FinalCount(rolls, 5)
    },

    Six: function firstLancerSix(rolls) {
        return this.FinalCount(rolls, 6)
    },

    Brellan: function firstLancerBrellan(rolls) {
        return (data) => FinalSomme(rolls)(data) ? somme(data) : 0
    },

    Carre: function firstLancerCarre(rolls) {
        return (data) => FinalSomme(rolls)(data) ? somme(data) : 0
    },
    
    FinalCount: function calculateNumber(rolls, value){
        let test = rolls.count(dice => dice == value);
        return value * test;
    },

    FinalSomme: function CalculName(rolls) {
        return (data) => countIterations(data).some(x => x.count >= rolls);
    }
}


// Array.prototype.count = function(predicate = obj => true) {
//     return this.filter(predicate).length;
// };

// function firstLancerOne(rolls){
//     return calculateNumber(rolls, 1)
// }

// function firstLancerTwo(rolls) {
//     return calculateNumber(rolls, 2)
// }

// function calculateNumber(rolls, value){
//     let test = rolls.count(dice => dice == value);
//     return value * test;
// }

// module.exports = firstLancerOne, firstLancerTwo
// module.exports = firstLancerTwo;