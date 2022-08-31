const Paint = function(capacity, currentPaintLevel){
    this.capacity = capacity
    this.currentPaintLevel = currentPaintLevel
};

Paint.prototype.isEmpty = function(){
    if (this.currentPaintLevel === 0){
        return true
    }
    else{
        return false
    }
};

Paint.prototype.emptyCan = function(){
    this.currentPaintLevel = 0
};

module.exports = Paint