'use strict';
const Psudoqueue = require('../index').PsudoQueue;
describe('Queue', () => {
  let psudoQueue;
  beforeEach(() => {
    psudoQueue = new Psudoqueue();
  });
  describe('Can enqueue into a psudo queue', () => {
    it('enqueue into a psudo queue', () => {
      psudoQueue.enqueue(1);
      psudoQueue.enqueue(2);
      psudoQueue.enqueue(3);
      expect(psudoQueue.stack1.top.value).toEqual(1);
    });
  });
  describe('Can dequeue out of a psude queue instance', () => {
    it('add items to the top of the psudo queue and then pop until empty', () => {
      psudoQueue.enqueue(1);
      psudoQueue.enqueue(2);
      psudoQueue.enqueue(3);
      expect(psudoQueue.dequeue()).toEqual(1);
      expect(psudoQueue.dequeue()).toEqual(2);
      expect(psudoQueue.dequeue()).toEqual(3);
      expect(psudoQueue.dequeue()).toBe('psudo queue is empty and cant be dequeued');
    });
  });
});