/**
 * Created by Nader on 2/28/2015.
 */

function Arc(canvas, x, y, radius, startAngle, endAngle, speed) {
    this.counter = 0;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.speed = speed;
    this.isAnimating = true;
}

Arc.prototype.draw = function(x, y, radius, startAngle, endAngle, counterClockwise) {
    this.canvas.ctx.beginPath();
    this.canvas.ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    this.canvas.ctx.stroke();
};

Arc.prototype.animate = function() {
    var x = this.x;
    var y = this.y;
    var radius = this.radius;
    var startAngle = this.startAngle;
    var endAngle = this.endAngle;
    var speed = this.speed;

    if (this.isAnimating === false) {
        this.draw(x, y, radius, startAngle, endAngle);
        return false;
    }

    this.isAnimating = true;
    var angle = startAngle + this.counter / radius;
    this.draw(x, y, radius, startAngle, angle);
    this.counter += speed;
    this.isAnimating = this.canvas.isAnimating = angle < endAngle;
    return this.isAnimating;
};