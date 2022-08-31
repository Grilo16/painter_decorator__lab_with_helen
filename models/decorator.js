const Paint = require("./paint.js")

const Decorator = function(){
    this.stock = []
};


Decorator.prototype.addPaint = function(paint){
    this.stock.push(paint)
}

Decorator.prototype.totalPaintLevels = function(){
    let output = 0;
    console.log(this.stock)
    for (const paint of this.stock){
        console.log("this is paint", paint)
        output += paint.currentPaintLevel
    }
    return output
    
};

let paint = new Paint(420, 69)
let otherPaint = new Paint(96, 69)
let decorator = new Decorator()

decorator.addPaint(paint)
decorator.addPaint(otherPaint)
console.log(decorator.stock)
console.log(decorator.totalPaintLevels())

module.exports = Decorator