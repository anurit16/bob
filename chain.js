class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY

        var option={
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX,y:this.offsetY}
            
            
        }
        this.chain=Constraint.create(option);
       World.add(world,this.chain);
        console.log(this.chain);
        

    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(3);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
       
      
    }
}
    fly(){
        this.chain.bodyA=null;
    }
}
