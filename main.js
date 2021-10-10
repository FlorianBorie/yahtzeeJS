module.exports ={
    Count: Array.prototype.count = function(predicate = obj => true) {
        return this.filter(predicate).length;
    },
    // Première partie

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

    // Deuxième partie

    Brellan: function firstLancerBrellan(rolls) {
        return (data) => FinalSomme(rolls)(data) ? somme(data) : 0
    },

    Carre: function firstLancerCarre(rolls) {
        return (data) => FinalSomme(rolls)(data) ? somme(data) : 0
    },
    
    Full: function firstLancerFull(){
        return (this.FinalSomme(d => d.count === 3) && (this.FinalSomme(d => d.count === 2)) ? 25 : 0 ) 
    },  
    
    PetiteSuite: function firstLancerPetiteSuite() {
        return (data) => ([1,2,3,4].every(i => data.includes(i))) ? 
                                30 : 
                                ([2,3,4,5].every(i => data.includes(i))) ? 
                                    30 : 
                                    ([3,4,5,6].every(i => data.includes(i))) ? 
                                        30 : 0;
    }, 
        
    GrandeSuite: function firstLancerGrandeSuite() {
        return (data) => ([1,2,3,4,5].every(i => data.includes(i))) ? 
                                40 : 
                                ([2,3,4,5,6].every(i => data.includes(i))) ? 
                                    40 : 0;
    },  

    Chance: function firstLancerChance() {
        return this.FinalSomme((current, previous) => previous+current,0)
    },

    Yahtzee: function firstLancerYahtzee() {
        return this.FinalSomme(d => d.count === 5) ? 50 : 0
    },

    FinalCount: function calculateNumber(rolls, value){
        let test = rolls.count(dice => dice == value);
        return value * test;
    },

    FinalSomme: function CalculName(rolls) {
        return (data) => FinalCalcul(data).somme(x => x.count >= rolls);
    },

    FinalCalcul :function countIteration(data) {
        const array = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
        data.forEach(indexDice => array[indexDice]++)
        return Object.keys(array).map(val => { return {value: val, count: array[val]}})
    }
   
}