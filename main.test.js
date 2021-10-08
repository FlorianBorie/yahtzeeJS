const firstLancerOne = require("./main");
const firstLancerTwo = require("./main");
const firstLancerThree = require("./main");
const firstLancerFour = require("./main");

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