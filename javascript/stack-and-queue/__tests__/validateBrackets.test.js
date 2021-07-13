const Stack = require('../index').Stack;
const validateBrackets = require('../index').validateBrackets;
describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  describe('valeidate brackets test', () => {
    it('true if balanced', () => {
      expect(validateBrackets('<>(){}[]')).toEqual(true);
    });
    it('false if not balanced', () => {
      expect(validateBrackets('({{})([]})')).toEqual(false);
    });
  });
});