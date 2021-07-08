'use strict';

const alternative = require('../index').alternative;
// Require our linked list implementation
const LinkedList = require('../index').LinkedList;

describe('checks if it includes a value',()=>{
  test('insert',()=>{
    let ll = new LinkedList();
    expect(ll.head).toBe(null);
    ll.insert('a');
    expect(ll.head.value).toBe('a');
    ll.insert('d');
    expect(ll.head.value).toBe('d');
  })
  test('includes',()=>{
    let ll = new LinkedList();
    ll.insert('a');
    ll.insert('d');
    ll.insert('');
    expect(ll.includes('d')).toBe(true);
    expect(ll.includes('a')).toBe(true);
    expect(ll.includes('h')).toBe(false);
    expect(ll.includes('')).toBe(true);
  })
  test('read all node values',()=>{
    let ll = new LinkedList();
    ll.insert('a');
    ll.insert(false);
    ll.insert('c');
    ll.insert('d');
    expect(ll.rear.value).toBe('a');
    expect(ll.toString()).toBe('{d} -> {c} -> {false} -> {a}');
  })
  test(' add a node to the end ',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    expect(ll.head.next.value).toBe('sec');
  });
  test(' add multiple nodes ',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    expect(ll.head.next.next.next.value).toBe('fourth');
  });
  test('insert in the middle',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertBefore('stuff','thir');
    expect(ll.head.next.next.value).toBe('stuff');

  })
  test('insert before first',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertBefore('stuff','first');
    expect(ll.head.value).toBe('stuff');

  })
  test('insert after a value',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertAfter('stuff','thir');
    expect(ll.head.next.next.next.value).toBe('stuff');

  })
  test('insert after last',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertAfter('stuff','fourth');
    expect(ll.head.next.next.next.next.value).toBe('stuff');

  })

    it('k is greater than the length ',()=>{
      const ll = new LinkedList();
      ll.append('first');
      ll.append('sec');
      ll.append('thir');
      ll.append('fourth');
      expect(ll.kthFromEnd(15)).toBe('Exception');
    });
    it('k and the length of the list are the same',()=>{
      const ll = new LinkedList();
      ll.append('first');
      ll.append('sec');
      ll.append('thir');
      ll.append('fourth');
      expect(ll.kthFromEnd(4)).toBe('Exception');
    });
    it('k is not a positive integer',()=>{
      const ll = new LinkedList();
      ll.append('first');
      ll.append('sec');
      ll.append('thir');
      ll.append('fourth');
      expect(ll.kthFromEnd(-4)).toBe('Exception');
    });
    it('linked list of size one',()=>{
      const ll = new LinkedList();
      ll.append('first');
      expect(ll.kthFromEnd(0)).toBe('first');
    });
    it('happy path',()=>{
      const ll = new LinkedList();
      ll.append('first');
      ll.append('sec');
      ll.append('thir');
      ll.append('fourth');
      expect(ll.rear.value).toBe('fourth');
      expect(ll.kthFromEnd(2)).toBe('sec');
    });

})
describe('linked list zip',()=>{
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  for(let i=0;i<5;i++){
    list1.append(i);
  }
  for(let i=0;i<5;i++){
    list1.append(i+10);
  }
  expect(alternative(list1,list2)).toBe('{0} -> {1} -> {2} -> {3} -> {4} -> {10} -> {11} -> {12} -> {13} -> {14}');
})