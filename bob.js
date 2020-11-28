class Bob{
    constructor(x, y){
        var options = {
            isStatic: true,
            resitution: 0.4,
            friction: 0,
            density: 1.8,
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.radius= 20;
        

        World.add(world, this.body); 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255, 0, 255);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}