const assert = require("assert")
const Room = require("../room.js")


describe("This tests the room object prototype", function(){
    let room;
    beforeEach(function(){
        room = new Room(420)
    })
    it("It should have an a rea", function(){
        const actual = room.area
        assert.strictEqual(actual, 420)
    });
    it("Room should be able to be painted", function(){
        const actual = room.canBePainted
        assert.equal(actual, true)
    });
    it("The room should not have been painted yet", function(){
        const actual = room.hasPaintedStartedYet
        assert.equal(actual, false)
    });
});

