class Triangle{


    constructor(x,y,width,height){
    
    var options={

        
        isStatic:true
       
    }
    
    
    
    this.body=Bodies.triangle(x,y,width,height,options);
    
    World.add(world,this.body);
    this.height=height;
    this.width=width;
    
}
    
    display(){
    
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    fill("yellow");
    pop();
    
    
    }
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}