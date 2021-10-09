const firstLancerOne = require("./main");
const firstLancerTwo = require("./main");
const firstLancerThree = require("./main");
const firstLancerFour = require("./main");
const firstLancerFive = require("./main");
const firstLancerSix = require("./main");
const firstLancerBrellan =  require("./main");
const firstLancerCarre =  require("./main");
const firstLancerFull = require("./main");
const firstLancerPetiteSuite = require("./main");
const firstLancerGrandeSuite = require("./main");
const firstLancerYahtzee = require("./main");

// Simple
const dataOne = [
    {
        rolls: [1, 2, 3, 4, 5],
        result : 1,
    },
    {
        rolls: [2, 2, 3, 4, 5],
        result: 0,
    },
    {
        rolls: [1, 2, 1, 4, 5],
        result: 2,
    }
  ];

  describe.each(dataOne)(`nombre de un `, (one) => {
    it(`le résultat ${one.rolls} correspond à ${one.result}`, () => {
      const result = firstLancerOne.One(one.rolls);
      // const result = firstLancerOne([1,2,3,4,5]);

      expect(result).toBe(one.result);
    });
  });


  const dataTwo = [
    {
        rolls: [1, 2, 3, 4, 5],
        result : 2,
    },
    {
        rolls: [1, 1, 3, 4, 5],
        result: 0,
    },
    {
        rolls: [1, 2, 2, 4, 5],
        result: 4,
    }
  ];

  describe.each(dataTwo)(`nombre de deux `, (two) => {
    it(`le résultat ${two.rolls} correspond à ${two.result}`, () => {
      const result = firstLancerTwo.Two(two.rolls);
      // const result = firstLancertwo([1,2,3,4,5]);

      expect(result).toBe(two.result);
    });
  });

  const dataThree = [
    {
        rolls: [1, 2, 3, 4, 5],
        result : 3,
    },
    {
        rolls: [1, 1, 2, 4, 5],
        result: 0,
    },
    {
        rolls: [1, 3, 3, 2, 4],
        result: 6,
    }
  ];

  describe.each(dataThree)(`nombre de trois `, (three) => {
    it(`le résultat ${three.rolls} correspond à ${three.result}`, () => {
      const result = firstLancerThree.Three(three.rolls);
      // const result = firstLancertwo([1,2,3,4,5]);

      expect(result).toBe(three.result);
    });
  });


  const dataFour = [
    {
        rolls: [1, 2, 3, 4, 5],
        result : 4,
    },
    {
        rolls: [1, 1, 2, 6, 5],
        result: 0,
    },
    {
        rolls: [1, 3, 4, 2, 4],
        result: 8,
    }
  ];

  describe.each(dataFour)(`nombre de quatre `, (four) => {
    it(`le résultat ${four.rolls} correspond à ${four.result}`, () => {
      const result = firstLancerFour.Four(four.rolls);
      // const result = firstLancertwo([1,2,3,4,5]);

      expect(result).toBe(four.result);
    });
  });


  const dataFive = [
    {
        rolls: [1, 2, 3, 4, 5],
        result : 5,
    },
    {
        rolls: [1, 1, 2, 6, 4],
        result: 0,
    },
    {
        rolls: [1, 3, 5, 2, 5],
        result: 10,
    }
  ];

  describe.each(dataFive)(`nombre de cinq `, (five) => {
    it(`le résultat ${five.rolls} correspond à ${five.result}`, () => {
      const result = firstLancerFive.Five(five.rolls);
      // const result = firstLancertwo([1,2,3,4,5]);

      expect(result).toBe(five.result);
    });
  });
  
  const dataSix = [
    {
        rolls: [1, 2, 3, 4, 6],
        result : 6,
    },
    {
        rolls: [1, 1, 2, 5, 4],
        result: 0,
    },
    {
        rolls: [1, 3, 6, 2, 6],
        result: 12,
    }
  ];

  describe.each(dataSix)(`nombre de six `, (six) => {
    it(`le résultat ${six.rolls} correspond à ${six.result}`, () => {
      const result = firstLancerSix.Six(six.rolls);
      // const result = firstLancertwo([1,2,3,4,5]);

      expect(result).toBe(six.result);
    });
  });

  // brellan

  const dataBrellan = [
    {
      rolls: [1,2,3,4,5], 
      result: 0
    },
    {
      rolls: [1,2,3,2,2], 
      result: 10
    },
    {
      rolls: [1,1,1,4,5], 
      result: 12
    },
    {
      rolls: [6,2,6,3,6], 
      result: 23
    }
 ]
 describe.each(dataBrellan)('Brellan,', ({rolls, result}) => {
     it(`Score ${rolls} le resulat est ${result}`, () => {
         const result = firstLancerBrellan.Brellan('brellan', rolls)
         expect(result).toBe(result);
     });
 });
 
 
 // carré
 
 const dataCarre = [
     {
       rolls: [1,2,3,4,5], 
       result: 0
      },
     {
       rolls: [1,2,2,2,2], 
       result: 9
      },
     {
       rolls: [1,1,1,1,1], 
       result: 5
      },
     {
       rolls: [3,3,6,3,6], 
       result: 0
      }
 ]
 describe.each(dataCarre)('carré', ({rolls, result}) => {
     it(`Score ${rolls} le resultat est ${result}`, () => {
         const result = firstLancerCarre.Carre('carré', rolls)
         expect(result).toBe(result);
     });
 });


// Petite suite
 const dataPeteiteSuite = [
  {
    rolls: [1, 2, 3, 4, 5], 
    result: 30
  },
  {
    rolls: [2, 3, 4, 5, 5], 
    result: 30
  },
  {
    rolls: [3, 2, 3, 2, 2], 
    result: 0
  },
  {
    rolls: [1, 2, 6, 5, 5], 
    result: 0
  }
]

describe.each(dataPeteiteSuite)('Petite suite', ({rolls, result}) => {
  it(`Score ${rolls} le resultat est ${result}`, () => {
      const result = firstLancerPetiteSuite.PetiteSuite('Petite suite', rolls)
      expect(result).toBe(result);
  });
});

// Grande suite
const dataGrandeSuite = [
  {
    rolls: [1, 2, 3, 4, 5], 
    result: 40
  },
  {
    rolls: [2, 4, 3, 6, 5], 
    result: 40
  },
  {
    rolls: [1, 2, 6, 5, 5], 
    result: 0
  },
  {
    rolls: [2, 3, 4, 5, 5], 
    result: 0
  }
]
describe.each(dataGrandeSuite)('Grande suite', ({rolls, result}) => {
  it(`Score ${rolls} le resultat est ${result}`, () => {
      const result = firstLancerGrandeSuite.GrandeSuite('Grande suite', rolls)
      expect(result).toBe(result);
  });
});
