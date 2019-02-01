class Ball {
    constructor({
        x = 0, y = 0, scaleX=1, scaleY=1, rotation=0,
        radius=40, color="#ff0000", lineWidth=1
    }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rotation = rotation;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.color = color;
        this.lineWidth = lineWidth;
    }

    draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.scale(this.scaleX, this.scaleY);
        context.lineWidth = this.lineWidth;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
        if (this.lineWidth > 1) {
            context.stroke();
        }
        context.restore();
    }
}

window.Ball = Ball;