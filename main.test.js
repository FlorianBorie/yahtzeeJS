const firstLancerOne = require("./main")

// let rool = new Array ()

// test('Si le lancer est égal à deux', () => {
//     expect(firstLancer()).toEqual(2);
// })


const data = [
    {
        sides: [1, 2, 3, 4, 5],
        result : 1,
    },
    {
        sides: [2, 2, 3, 4, 5],
        result: 0,
    },
    // {
    //   type: 'result2',
    //   sides: [1, 2, 1, 4, 5],
    // },
  ];

  describe.each(data)(`nombre de un `, (one) => {
    it(`le résultat ${one.sides} correspond à ${one.result}`, () => {
      const result = firstLancerOne(...one.sides);

      expect(result).toBe(one.result);
    });
  });



  
// export const getTriangleType = (side1, side2, side3) => {
//     return (
//       (side1 === side2 && side2 === side3 && 'equilateral') ||
//       ((side1 === side2 || side1 === side3 || side2 === side3) && 'isosceles') ||
//       'scalene'
//     );
//   };