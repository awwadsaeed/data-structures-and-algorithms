const HashTable = require('../hashTable').HashTable;
const Node = require('../hashTable').Node;
const LinkedList = require('../hashTable').LinkedList;


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