class Box{
    constructor(x,y,width,height){
   var options= {
       restitution:0.8
   }
    this.width= width
    this.height=height




    this.body= Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
        } 
    display(){
        var pos = this.body.position;
        var angle= this.body.position;
        push ()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height)
        pop ()
    }}

