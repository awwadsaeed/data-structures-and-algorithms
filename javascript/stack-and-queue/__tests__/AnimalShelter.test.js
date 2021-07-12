const LinkedList = require('../../linked-list/index').LinkedList;
const AnimalShelter = require('../index').AnimalShelter;
describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new AnimalShelter();
  });
  describe('Can only enqueue into a dog or a cat', () => {
    it('enqueue anything other than a dog or a cat gives an error', () => {
      expect(queue.enqueue(3)).toEqual("can only accept cat or dog");
    });
    it('can enqueue a cat or a dog succesfully', () => {
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.enqueue('dog');
      expect(queue.dequeue()).toEqual("dog");
      expect(queue.dequeue()).toEqual("cat");
      expect(queue.dequeue()).toEqual("dog");
      expect(queue.last.value).toEqual("dog");
    });
  });

});