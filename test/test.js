var main = require('../index'); 
var assert = require('assert'); 

describe('Regular factorial value', function() {
    it('should return 1 for factorial(0)', function() {
        assert.strictEqual(main.factorial(0), 1); 
    });

    it('should return 1 for factorial(1)', function() {
        assert.strictEqual(main.factorial(1), 1); 
    });
});
