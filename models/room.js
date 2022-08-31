const Room = function(area, canBePainted = true, hasPaintedStartedYet = false){
    this.area = area
    this.canBePainted = canBePainted
    this.hasPaintedStartedYet = hasPaintedStartedYet
}

module.exports = Room;
