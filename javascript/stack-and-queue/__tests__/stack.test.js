'use strict';
const LinkedList = require('../../linked-list/index').LinkedList;
const Stack = require('../index').Stack;

describe('Stack', () => {
    let stack;
    beforeEach(() => {
      stack = new Stack( new LinkedList());
    });
    
    describe('push', () => {
        it('Can successfully push one or multiple onto a stack', () => {
            stack.push(1);
            expect(stack.peek()).toEqual(1);
            stack.push(2);
            stack.push(3);
            expect(stack.peek()).toEqual(3);
        });
        
    });
    describe('pop', () => {
        it('Can successfully pop off the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toEqual(3);
        expect(stack.peek()).toBe(2);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
        // Can successfully empty a stack after multiple pops
        expect(stack.peek()).toBe("cant find the peek of an empty stack");
    });
    });
    describe('peek', () => {
        it('Can successfully peek the next item on the stack', () => {
            stack.push(1);
            expect(stack.peek()).toEqual(1);
            stack.push(2);
            expect(stack.peek()).toEqual(2);
        });
    });
    it('Can successfully instantiate an empty stack', () => {
      expect(stack instanceof Stack).toBeTruthy();
    });
    it('Calling pop or peek on empty stack raises exception',()=>{
      expect(stack.pop()).toBe('cant pop off an empty stack');
      expect(stack.peek()).toBe("cant find the peek of an empty stack");
    })
});