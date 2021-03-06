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
const firstLancerChance  = require("./main");
const firstLancerYahtzee = require("./main");

// Simple
// Une
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

  describe.each(dataOne)(`Nombre de un `, (one) => {
    it(`le résultat ${one.rolls} correspond à ${one.result}`, () => {
      const result = firstLancerOne.One(one.rolls);
      expect(result).toBe(one.result);
    });
  });

// Deux
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

  describe.each(dataTwo)(`Nombre de deux `, (two) => {
    it(`le résultat ${two.rolls} correspond à ${two.result}`, () => {
      const result = firstLancerTwo.Two(two.rolls);
      expect(result).toBe(two.result);
    });
  });

  // Trois
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

  describe.each(dataThree)(`Nombre de trois `, (three) => {
    it(`le résultat ${three.rolls} correspond à ${three.result}`, () => {
      const result = firstLancerThree.Three(three.rolls);
      expect(result).toBe(three.result);
    });
  });

// Quatre
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

  describe.each(dataFour)(`Nombre de quatre `, (four) => {
    it(`le résultat ${four.rolls} correspond à ${four.result}`, () => {
      const result = firstLancerFour.Four(four.rolls);
      expect(result).toBe(four.result);
    });
  });

// Cinq
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

  describe.each(dataFive)(`Nombre de cinq `, (five) => {
    it(`le résultat ${five.rolls} correspond à ${five.result}`, () => {
      const result = firstLancerFive.Five(five.rolls);
      expect(result).toBe(five.result);
    });
  });

  // Six
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

  describe.each(dataSix)(`Nombre de six `, (six) => {
    it(`le résultat ${six.rolls} correspond à ${six.result}`, () => {
      const result = firstLancerSix.Six(six.rolls);
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
 describe.each(dataBrellan)('Brellan', ({rolls, result}) => {
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
 describe.each(dataCarre)('Carré', ({rolls, result}) => {
     it(`Score ${rolls} le resultat est ${result}`, () => {
         const result = firstLancerCarre.Carre('carré', rolls)
         expect(result).toBe(result);
     });
 });

 //  Full
 const dataFull = [
  {
    rolls: [1, 2, 3, 4, 5],
     result: 0
    },
  {
    rolls: [3, 2, 3, 2, 2],
    result: 25
  },
  {
    rolls: [3, 6, 6, 3, 3],
    result: 25
  },
  {
    rolls: [3, 3, 6, 1, 6],
     result: 0
    }
]

describe.each(dataFull)('Full ', ({rolls, result}) => {
  it(`Score ${rolls} le resultat est ${result}`, () => {
      const result = firstLancerFull.Full('full', rolls)
      expect(result).toBe(result);
     });
 });

// Petite suite
 const dataPeteiteSuite = [
  {
    rolls: [1, 2, 3, 4, 6], 
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

// Chance
const dataChance = [
  {
    rolls: [1, 2, 3, 4, 5], 
    result: 15
  },
  {
    rolls: [2, 4, 3, 6, 5], 
    result: 20
  },
  {
    rolls: [1, 2, 6, 5, 5], 
    result: 19
  },
  {
    rolls: [2, 3, 5, 6, 6], 
    result: 22
  }
]
describe.each(dataChance)('Chance', ({rolls, result}) => {
  it(`Score ${rolls} le resultat est ${result}`, () => {
    const result = firstLancerChance.Chance('Chance', rolls)
    expect(result).toBe(result);
  });
});

// Yahtzee
const dataYahtzee = [
  {
    rolls: [1, 1, 1, 1, 1], 
    result: 50
  },
  {
    rolls: [2, 5, 5, 5, 5], 
    result: 0
  },
  {
    rolls: [2, 2, 2, 2, 2], 
    result: 50
  },
  {
    rolls: [1, 2, 6, 5, 5], 
    result: 0
  }
]
describe.each(dataYahtzee)('Yahtzee', ({rolls, result}) => {
  it(`Score ${rolls} le resultat est ${result}`, () => {
      const result = firstLancerYahtzee.Yahtzee('Yahtzee', rolls)
      expect(result).toBe(result);
  });
});