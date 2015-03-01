/**
 * Created by Nader on 2/28/2015.
 */

function init() {
    var canvas = new Canvas();
    var width = canvas.width;
    var height = canvas.height;
    var speed = 10;
    var w = width/3.3 + (height/2-height/8)/2.5;

    var objects = [

        // N
        canvas.createLine(width/20, height/2, width/20, height/4, speed),
        canvas.createLine(width/20, height/4, width/6, height/2, speed),
        canvas.createLine(width/6, height/2, width/6, height/4, speed),

        // A
        canvas.createLine(width/5.5, height/2, width/4.5, height/4, speed),
        canvas.createLine(width/4.5, height/4, width/3.5, height/2, speed),

        // D
        canvas.createLine(width/3.3, height/2, width/3.3, height/4, speed),
        canvas.createArc(width/3.3, height/2-height/8, height/8, Math.PI*1.5, Math.PI*2.5, speed),

        // E
        canvas.createLine(w, height/2, w, height/4, speed),
        canvas.createLine(w, height/4, w+width/20, height/4, speed),
        canvas.createLine(w, height/3, w+width/20, height/3, speed),
        canvas.createLine(w, height/2, w+width/20, height/2, speed),

        // R
        canvas.createLine(w+width/15, height/2, w+width/15, height/4, speed),
        canvas.createArc(w+width/15, height/2-height/5, height/20, Math.PI*1.5, Math.PI*2.5, speed),
        canvas.createLine(w+width/15, height/2.9, w+width/9, height/2, speed)
    ];

    canvas.animateSequential(objects);
}

window.addEventListener('load', init);
window.onresize = init;