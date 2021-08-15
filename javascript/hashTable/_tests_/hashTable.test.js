const HashTable = require('../hashTable').HashTable;
const Node = require('../hashTable').Node;
const LinkedList = require('../hashTable').LinkedList;
const repeatedWord = require('../hashTable').repeatedWord;

describe('HashTable primary Test',()=>{
    let hashy = new HashTable(4000);
    test('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
    hashy.add('saeed',100);
    expect(hashy.contains('saeed')).toBe(true); 
    });
    test('Retrieving based on a key returns the value stored',()=>{
        expect(hashy.get('saeed')[0]).toBe(100);
    });
    test('Successfully returns null for a key that does not exist in the hashtable',()=>{
        expect(hashy.get('weird')).toBe(null);
    });
    test('Successfully handle a collision within the hashtable',()=>{
        expect(hashy.add('aseed',200)).toBe(200);
    });
    test('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
        hashy.add('sedae',500);
        expect(hashy.get('saeed')).toEqual([100]);
        expect(hashy.get('sedae')).toEqual([500]);
    });
    test('can hash stuff',()=>{
        expect(hashy.hash('stuff')).toBe(2488);
    })
})
describe('test repeated word',()=>{
    test('test for repeated word 1',()=>{
        let test = '';
        expect(repeatedWord(test)).toBe('cannot find words in an empty string');
    })
    test('test for repeated word 2',()=>{
        let test = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
        expect(repeatedWord(test)).toBe('it');
    })
    test('test for repeated word 3',()=>{
        let test = 'some string with no repeated words';
        expect(repeatedWord(test)).toBe('no repeated words appeard');
    })
})