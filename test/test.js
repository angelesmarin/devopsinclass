var main = require('../index'); 
var assert = require('assert'); 

describe('Regular factorial value', function() {
    it('should return 1 for factorial(0)', function() {
        assert.strictEqual(main.factorial(0), 1); 
    });

    it('should return 1 for factorial(1)', function() {
        assert.strictEqual(main.factorial(1), 1); 
    });
    it('should return 120 for factorial of 5', function() {
        assert.strictEqual(main.factorial(5), 120);
    });

    it('should return 3628800 for factorial of 10', function() {
        assert.strictEqual(main.factorial(7), 3628800);
    });
});
describe('negative factorial value', function() {
    it('should return undefined for factorial(-1)', function() {
        assert.strictEqual(main.factorial(-1), undefined); 
    });
});
