class DustBin {
    constructor(x,y){
        this.width=200;
        this.height=100;
        this.thikness=20;
        this.angle=0;

        var option = {
            'isStatic' : true
        }

     this.bottomBody=Bodies.rectangle(x,y,this.width,this.thikness,option);
     
     this.leftBody=Bodies.rectangle(x-this.width/2,y-this.height/2,this.thikness,this.height,option);
     Matter.Body.setAngle(this.leftBody,this.angle);
     
     this.rightBody=Bodies.rectangle(x+this.width/2,y-this.height/2,this.thikness,this.height,option);
     Matter.Body.setAngle(this.rightBody,-1*this.angle);
     
     World.add(world,this.bottomBody);
     World.add(world,this.leftBody);
     World.add(world,this.rightBody);
    }
    display(){
        var posBottom=this.bottomBody.position;
        var posLeft=this.leftBody.position;
        var posRight=this.rightBody.position;

        push();
        translate(posLeft.x,posLeft.y);
        angleMode(RADIANS);
        rotate(this.angle);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.thikness,this.height);
        pop();

        push();
        translate(posRight.x,posRight.y);
        angleMode(RADIANS);
        rotate(-1*this.angle);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.thikness,this.height);
        pop();

        push();
        translate(posBottom.x,posBottom.y);
            
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.thikness);
        pop();
    }
}