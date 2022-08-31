class Ground 
{
  constructor(x, y, w, h,color) 
  {
    let options = {
      isStatic:true
    };
    this.w = w;
    this.h = h;
    this.color=color
    this.body = Bodies.rectangle(x, y, this.w,this.h, options);
    
    World.add(world, this.body);

  }
  display(){
    fill (this.color)
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.w,this.h);
  }
  

 
   
}
