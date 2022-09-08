class Ball{
    constructor(x,y,r){
        this.body = Bodies.rectangle(x,y,r,);
        this.y = y;
        this.x = x;
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos= this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(0);
        stroke("black");
        fill("white");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}