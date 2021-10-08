Array.prototype.count = function(predicate = obj => true) {
    return this.filter(predicate).length;
  };

function firstLancerOne(rolls){
    // if(rolls == 1){
    //     return 1
    // }
    // return 0
    return calculateNumber(rolls, 1)
}


function calculateNumber(rolls, value){
    console.log(rolls)
    let test = rolls.count(dice => dice == value);
    return value * test;
}


module.exports = firstLancerOne;

// function firstLancerTwo(rolls){
//     if(rolls == 2){
//         return 2
//     }
//     return 0
//     return calculateNumber(rolls, 2)
// }

// module.exports = firstLancerTwo;