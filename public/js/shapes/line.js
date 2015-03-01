/**
 * Created by Nader on 2/28/2015.
 */

function Line(canvas, startX, startY, endX, endY, speed) {
    this.counter = 0;
    this.canvas = canvas;
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.speed = speed;
    this.isAnimating = true;
}

Line.prototype.draw = function(startX, startY, endX, endY) {
    this.canvas.ctx.beginPath();
    this.canvas.ctx.moveTo(startX, startY);
    this.canvas.ctx.lineTo(endX, endY);
    this.canvas.ctx.stroke();
};

Line.prototype.animate = function() {
    var a, b, x, y;

    if (this.isAnimating === false) {
        this.draw(this.startX, this.startY, this.endX, this.endY);
        return false;
    }

    this.isAnimating = true;

    if (this.startX === this.endX) {
        x = this.startX;
        y = this.endY > this.startY ? Math.min(this.endY, this.startY + this.counter) : Math.max(this.endY, this.startY - this.counter);
    }
    else {
        a = (this.endY - this.startY)/(this.endX - this.startX);
        b = this.startY - a * this.startX;
        x = this.endX > this.startX ?  Math.min(this.endX, this.startX + this.counter) : Math.max(this.endX, this.startX - this.counter);
        y = a*x + b;
    }

    this.draw(this.startX, this.startY, x, y);
    if (this.startX !== this.endX && this.startY != this.endY) {
        this.counter += this.speed * 0.3;
    }else {
        this.counter += this.speed;
    }

    this.isAnimating = this.canvas.isAnimating =
        (this.endX > this.startX ? x < this.endX : x > this.endX)
        || (this.endY > this.startY ? y < this.endY : y > this.endY);

    return this.isAnimating;
};