class Ball {
    constructor(x,y,width,height) {
      var options = {
          'density': 0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.polygon_img = loadImage("BALL IMAGE.jpg");
      World.add(world,this.body);
    }
    display(){
      push();
     imageMode(CENTER);
     image(this.polygon_img,this.body.position.x,this.body.position.y,this.width,this.height);
     pop();
     //fill(55,140,152)
     //ellipseMode(RADIUS);
     //ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
  };
