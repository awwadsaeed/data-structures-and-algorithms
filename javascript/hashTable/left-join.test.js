const Hashmap =require('./left-join.js').Hashmap;
const repeatedWord =require('./left-join.js').repeatedWord;
const hash = require('./left-join.js');
const leftJoin = require('./left-join.js').leftJoin;  

let hashOne = new hash.Hashmap(50);
let hashTwo = new hash.Hashmap(50);
let hashThree = new hash.Hashmap(50);

hashOne.add('fond', 'enamored');
hashOne.add('wrath', 'anger');
hashOne.add('diligent', 'employed');
hashOne.add('outfit', 'garb');
hashOne.add('guide', 'usher');

hashTwo.add('fond', 'averse');
hashTwo.add('wrath', 'delight');
hashTwo.add('diligent', 'idle');
hashTwo.add('guide', 'follow');
hashTwo.add('flow', 'jam');

hashThree.add('amro', 'averse');
hashThree.add('daeed', 'delight');
hashThree.add('barah', 'idle');
hashThree.add('batool', 'follow');
hashThree.add('yazan', 'jam');

describe('testing the leftJoin function', () => {

  it('should successfully join two hashmaps into a single data structure', () => {

    expect(leftJoin(hashOne, hashTwo)).toEqual([
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
      ['fond', 'enamored', 'averse'],
      ['outfit', 'garb', null],
    ]);
  });

  it('should successfully return data structure with two values for each key if the same table is passed twice', () => {

    expect(leftJoin(hashOne, hashOne)).toEqual([
      ['wrath', 'anger', 'anger'],
      ['diligent', 'employed', 'employed'],
      ['guide', 'usher', 'usher'],
      ['fond', 'enamored', 'enamored'],
      ['outfit', 'garb', 'garb'],
    ]);
  });

  it('should successfully return data structure with null as third element in every array for two tables with no matching keys', () => {
      
    expect(leftJoin(hashOne, hashThree)).toEqual([
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['guide', 'usher', null],
      ['fond', 'enamored', null],
      ['outfit', 'garb', null],
    ]);
  });
});