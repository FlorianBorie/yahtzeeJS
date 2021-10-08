const firstLancerOne = require("./main");

const firstLancerTwo = require("./main");

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
      const result = firstLancerOne(one.rolls);
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
      const result = firstLancerTwo(two.rolls);
      // const result = firstLancertwo([1,2,3,4,5]);

      expect(result).toBe(two.result);
    });
  });