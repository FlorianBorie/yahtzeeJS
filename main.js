module.exports ={
    Count: Array.prototype.count = function(predicate = obj => true) {
        return this.filter(predicate).length;
    },
    
    One: function firstLancerOne(rolls){
        return this.Final(rolls, 1)
    },
    
    Two: function firstLancerTwo(rolls) {
        return this.Final(rolls, 2)
    },

    Three: function firstLancerThree(rolls) {
        return this.Final(rolls, 3)
    },

    Four: function firstLancerFour(rolls) {
        return this.Final(rolls, 4)
    },

    Five: function firstLancerFive(rolls) {
        return this.Final(rolls, 5)
    },

    Six: function firstLancerSix(rolls) {
        return this.Final(rolls, 6)
    },
    
    Final: function calculateNumber(rolls, value){
        let test = rolls.count(dice => dice == value);
        return value * test;
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