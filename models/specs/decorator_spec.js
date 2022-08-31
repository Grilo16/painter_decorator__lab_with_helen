const assert = require("assert")
const Decorator = require("../decorator.js")
const Paint = require("../paint.js")

describe("This will check the decorator model", function(){
    let decorator;
    beforeEach(function(){
        decorator = new Decorator()
    });
    it("Should check decorator starts with empty stock", function(){
        const actual = decorator.stock
        assert.deepStrictEqual(actual, [])
    });
    describe("This will test decorator methods", function(){
        let paint;
        let otherPaint;
        beforeEach(function(){
            paint = new Paint(420, 69)
            otherPaint = new Paint(96, 69)
        });

        it("Should be able to add paint to stock", function(){
            decorator.addPaint(paint)
            const actual = decorator.stock.length
            assert.strictEqual(actual, 1)
        });
        it("Should return the total paint level of stock", function(){
            decorator.addPaint(paint)
            decorator.addPaint(otherPaint)
            const actual = decorator.totalPaintLevels()
            assert.strictEqual(actual, 138)
        });
    });
});