class Ball{
    constructor(x,y){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:1.2,
            density:0.5
        }
        this.body=Bodies.circle(x,y,50,option);
        this.radius=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}