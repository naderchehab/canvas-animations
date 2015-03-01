/**
 * Created by Nader on 2/28/2015.
 */

function Canvas() {
    this.c = document.getElementById("myCanvas");
    this.ctx = this.c.getContext("2d");
    this.c.width = window.innerWidth - 25;
    this.c.height = window.innerHeight - 25;
    this.width = this.c.width;
    this.height = this.c.height;
}

Canvas.prototype.createLine = function(startX, startY, endX, endY, speed) {
    return new Line(this, startX, startY, endX, endY, speed);
};

Canvas.prototype.createArc = function(x,  y, radius, startAngle, endAngle, speed) {
    return new Arc(this, x,  y, radius, startAngle, endAngle, speed);
};

Canvas.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
};

Canvas.prototype.animateSequential = function(objects) {
    this.clear();
    objects[0].animate();
    for (var i = 1; i < objects.length; i++) {
        if (objects[i-1].isAnimating === false) {
            objects[i].animate();
        }
    }

    if (this.isAnimating) {
        window.requestAnimationFrame(this.animateSequential.bind(this, objects));
    }
    else {
        console.log("done animating!");
    }
};