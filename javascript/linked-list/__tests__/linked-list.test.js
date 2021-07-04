'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');

describe('checks if it includes a value',()=>{
  test('insert',()=>{
    let ll = new LinkedLilst();
    expect(ll.head).toBe(null);
    ll.insert('a');
    expect(ll.head.value).toBe('a');
    ll.insert('d');
    expect(ll.head.value).toBe('d');
  })
  test('includes',()=>{
    let ll = new LinkedLilst();
    ll.insert('a');
    ll.insert('d');
    ll.insert('');
    expect(ll.includes('d')).toBe(true);
    expect(ll.includes('a')).toBe(true);
    expect(ll.includes('h')).toBe(false);
    expect(ll.includes('')).toBe(true);
  })
  test('read all node values',()=>{
    let ll = new LinkedLilst();
    ll.insert('a');
    ll.insert(false);
    ll.insert('c');
    ll.insert('d');
    expect(ll.toString()).toBe('{d} -> {c} -> {false} -> {a}');
  })
  test(' add a node to the end ',()=>{
    const ll = new LinkedLilst();
    ll.append('first');
    ll.append('sec');
    expect(ll.head.next.value).toBe('sec');
  });
  test(' add multiple nodes ',()=>{
    const ll = new LinkedLilst();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    expect(ll.head.next.next.next.value).toBe('fourth');
  });
  test('insert in the middle',()=>{
    const ll = new LinkedLilst();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertBefore('stuff','thir');
    expect(ll.head.next.next.value).toBe('stuff');

  })
  test('insert before first',()=>{
    const ll = new LinkedLilst();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertBefore('stuff','first');
    expect(ll.head.value).toBe('stuff');

  })
  test('insert after a value',()=>{
    const ll = new LinkedLilst();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertAfter('stuff','thir');
    expect(ll.head.next.next.next.value).toBe('stuff');

  })
  test('insert after last',()=>{
    const ll = new LinkedLilst();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertAfter('stuff','fourth');
    expect(ll.head.next.next.next.next.value).toBe('stuff');

  })

})