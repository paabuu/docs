# 如何使用canvas画出重力效果

重力效果即竖直方向的加速效果，在实现加速之前，先实现匀速运动

## 1. 创建一个球体

```js
class Circle {
    constructor(x, y, r, dx, dy, gravity, friction) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.gravity = gravity;
        this.friction = friction;
    }

    create() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fillStyle = 'orange';
        c.fill();
        c.closePath();
    }
}
```

## 2. 添加update方法

```js
update() {
    if (this.y + this.r + this.dy > h) { // 触底反弹
        this.dy = -this.dy;
    }

    this.y += this.dy;
    this.create();
}
```

`dy`：每次刷新时小球圆心的y坐标变化的值，即速度

## 3. 加速度

```js

    update() {
        if (this.y + this.r + this.dy > h) {
            this.dy = -this.dy;
        } else {
            this.dy += this.gravity;
        }

        this.y += this.dy;
        this.create();
    }

    加速度即要改变每次刷新时的速度，即`dy`, 当向下运动时，`this.dy += this.gravity`, `dy`越来越大, 速度越来越快，向上运动时则相反。

```

## 4. 摩擦力

如果要模拟能量损耗的情况，反弹时的初速度越来越小，需要添加一个新的参数`friction`。

```js
    update() {
        if (this.y + this.r + this.dy > h) {
            this.dy = -this.dy * (1 - this.friction); 
        } else {
            this.dy += this.gravity;
        }

        this.y += this.dy;
        this.create();
    }
```

[完整代码](./gravity.html)