class Box{
  constructor(x, y, width, height) {
      var options = {
           'isStatic': false,
          'restitution':0.8,
          'friction':0.6,
          'density':0.05
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      this.image = loadImage("BOX.png")
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      if(this.body){
      if(this.body.speed<2){
      
      image(this.image,this.body.position.x,this.body.position.y,30,40);
      }
      else{
        World.remove(world,this.body);
       // rect(this.body.position.x,this.body.position.y,this.width,this.height);
         push();
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,30,40);
        pop();
        this.visibility = this.visibility - 15;

      }
    }
    }

    score(){

     if(this.visibility < 0 && this.visibility >-50){
       score = score +1
     }

    }
}