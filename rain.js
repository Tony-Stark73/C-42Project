class Rain{
constructor(x,y){
    var options={
        restitution:0.05,
        friction:0.001
    }

this.radius=5
this.rain=Bodies.circle(x,y,5,options)
World.add(world,this.rain)
}

update(){   
if(this.rain.position.y>height)
{

Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})

}
}
display(){

fill("blue")
ellipseMode(CENTER)
ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
}

}
