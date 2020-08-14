class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 0.4,
            'length': 25
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB
        this.bodyA = bodyA;
        World.add(world,this.sling);

    }


    display(){
            if(this.sling.bodyA){
              // var startPoint = this.sling.bodyA.position;
             //  var endPoint = this.sling.pointB;
               strokeWeight(6);
               stroke(213,255,246); 
               line (this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
               //line(startPoint.x,startPoint.y,endPoint.x,endPoint.y)
          }
            
    
}


fly(){
    this.sling.bodyA = null;
}

attach(body){
    this.sling.bodyA = body
 }

    }


  /*class Slingshot{

        constructor(bodyA,pointB){
    
            var options = {
                'bodyA': bodyA,
                'pointB': pointB,
                'length': 10,
                'stiffness': 0.2
            }
           this.sling = Constraint.create(options) 
           this.bodyA = bodyA;
           this.pointB = pointB;
           World.add(world,this.sling);
        }
    
        display(){
            if(this.sling.bodyA){
            strokeWeight(8);
            line (this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
        }
    
        fly(){
            
        this.sling.bodyA = null;
    
       }
    
    }*/
