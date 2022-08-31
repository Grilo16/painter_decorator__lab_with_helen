const assert = require("assert")
const Paint = require("../paint.js")

describe("This tests the paint object prototype", function(){
    let paint;
    let emptyPaint;
    beforeEach(function(){
        paint = new Paint(420, 69)
        emptyPaint = new Paint(69, 0)
    });
    it("Should have a capacity", function(){
        const actual = paint.capacity
        assert.strictEqual(actual, 420)
    });
    describe("This will check methods in paint", function(){
        it("Should check if paint is empty or not", function(){
            const actuallyNice = paint.isEmpty()
            const actuallyEmpty = emptyPaint.isEmpty()
            assert.equal(actuallyEmpty, true)
            assert.equal(actuallyNice, false)
        });
        it("it should empty the can YEAH", function(){
            paint.emptyCan()
            const actual = paint.currentPaintLevel
            assert.deepEqual(actual, 0)
        });
    });

});